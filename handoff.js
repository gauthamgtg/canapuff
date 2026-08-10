/*
 * Landing-page handoff: this Vercel deploy is a placeholder mirror. Every link,
 * button and form must send the visitor to the real store, carrying the ad click
 * parameters (gclid / gbraid / wbraid / utm_* / msclkid) through for attribution.
 */
(function () {
  var BASE = 'https://www.canapuff.com';

  // ponytail: the geo country-redirect app can hard-redirect off this page
  // (window.location.replace(rule.url_to)). This is its documented bypass.
  document.cookie = 'sgcr_bypass=1;path=/;max-age=86400';

  var incoming = new URLSearchParams(location.search);

  // Paths that don't map 1:1 onto the live store.
  var SPECIAL = {
    '/index': '/',
    '/null': '/', // broken Judge.me review link in the source mirror
    '/collections/bes': '/collections/bestseller', // truncated announcement-bar link
    '/customer_authentication/redirect': '/account'
  };

  function live(path, extra) {
    var url = new URL(path, BASE);
    incoming.forEach(function (v, k) {
      if (!url.searchParams.has(k)) url.searchParams.set(k, v);
    });
    if (extra) {
      Object.keys(extra).forEach(function (k) {
        if (extra[k] != null && extra[k] !== '') url.searchParams.set(k, extra[k]);
      });
    }
    return url.toString();
  }

  // Returns the live-store URL for an internal link, or null to leave it alone.
  function toLive(href) {
    if (!href) return null;
    var u;
    try {
      u = new URL(href, location.href);
    } catch (e) {
      return null;
    }
    if (u.protocol !== 'http:' && u.protocol !== 'https:') return null;

    // Absolute canapuff links baked into the mirror (Judge.me review cards point at
    // canapuff.co, some blocks at canapuff.com): keep the path, force the live host.
    if (/(^|\.)canapuff\.(com|co)$/.test(u.hostname) && u.pathname.indexOf('/cdn/') !== 0) {
      return live(u.pathname + u.search) + u.hash;
    }
    if (u.origin !== location.origin) return null; // external (social, CDN, …)

    var path = u.pathname.replace(/\.html$/, '');
    if (SPECIAL[path]) path = SPECIAL[path];
    if (path === '' || path === '/index') path = '/';

    return live(path + u.search) + u.hash;
  }

  // data-hf marks an anchor as done, so the MutationObserver can't loop on its own writes.
  function rewriteOne(a) {
    if (!a || a.hasAttribute('data-hf')) return;
    var next = toLive(a.getAttribute('href'));
    if (next) a.setAttribute('href', next);
    a.setAttribute('data-hf', '');
  }

  function rewrite(root) {
    if (!root || !root.querySelectorAll) return;
    var links = root.querySelectorAll('a[href]:not([data-hf])');
    for (var i = 0; i < links.length; i++) rewriteOne(links[i]);
  }

  function go(url) {
    location.href = url;
  }

  // --- capture-phase interception, so we beat UpCart / theme handlers ---

  var CART_TRIGGER = '[aria-controls="cart-drawer"], a[href$="cart.html"], a[href$="/cart"]';
  var ADD_TRIGGER = [
    'button[name="add"]',
    '[data-add-to-cart]',
    '.js-mood-atc', // "Shop by mood" add-to-cart
    '.product-card__quick-buy',
    '.product-card__mobile-quick-buy-button',
    'product-quick-add button'
  ].join(', ');

  // Walk up from an add-to-cart control to the closest ancestor holding a product
  // link — that card's product page is where the visitor should land.
  function productUrlNear(el) {
    var node = el;
    while (node && node !== document.body) {
      var link = node.querySelector && node.querySelector('a[href*="products/"]');
      if (link) return toLive(link.getAttribute('href')) || link.href;
      node = node.parentElement;
    }
    return live('/collections/all');
  }

  function stop(e) {
    e.preventDefault();
    e.stopImmediatePropagation();
  }

  document.addEventListener(
    'click',
    function (e) {
      var el = e.target instanceof Element ? e.target : null;
      if (!el) return;

      if (el.closest(CART_TRIGGER)) {
        stop(e);
        return go(live('/cart'));
      }

      var add = el.closest(ADD_TRIGGER);
      if (add) {
        stop(e);
        return go(productUrlNear(add));
      }

      // Anchors injected after our last rewrite pass (Judge.me, Instafeed, UpCart).
      rewriteOne(el.closest('a[href]'));
    },
    true
  );

  document.addEventListener(
    'submit',
    function (e) {
      var form = e.target;
      if (!form || form.tagName !== 'FORM') return;
      var action = form.getAttribute('action') || '';

      if (action.indexOf('/cart/add') !== -1) {
        stop(e);
        return go(productUrlNear(form));
      }
      if (/search(\.html)?$/.test(action) || form.getAttribute('role') === 'search') {
        stop(e);
        var q = form.querySelector('[name="q"]');
        return go(live('/search', { q: q ? q.value : '' }));
      }
      if (action.indexOf('/localization') !== -1) {
        // Currency / country switching is meaningless on a static placeholder.
        stop(e);
      }
    },
    true
  );

  // --- rewrite existing and future anchors ---

  rewrite(document);
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      rewrite(document);
    });
  }

  new MutationObserver(function (records) {
    for (var i = 0; i < records.length; i++) {
      var added = records[i].addedNodes;
      for (var j = 0; j < added.length; j++) {
        var node = added[j];
        if (node.nodeType !== 1) continue;
        if (node.tagName === 'A' && node.hasAttribute('href')) rewriteOne(node);
        rewrite(node);
      }
    }
  }).observe(document.documentElement, { childList: true, subtree: true });
})();
