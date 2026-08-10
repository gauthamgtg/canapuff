
    (function() {
      var preconnectOrigins = ["https://cdn.shopify.com","https://extensions.shopifycdn.com"];
      var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills.C7jITNoQ.js","/cdn/shopifycloud/checkout-web/assets/c1/app.DxqihS_-.js","/cdn/shopifycloud/checkout-web/assets/c1/esnext-vendor.CLrJyXgO.js","/cdn/shopifycloud/checkout-web/assets/c1/context-browser.B2gJAtLU.js","/cdn/shopifycloud/checkout-web/assets/c1/color-contrast-colorContrast.BTxdjQND.js","/cdn/shopifycloud/checkout-web/assets/c1/receipt-mapper-load-recovery.peAC4gnW.js","/cdn/shopifycloud/checkout-web/assets/c1/receipt-eager-mappers.BLq6CYuP.js","/cdn/shopifycloud/checkout-web/assets/c1/NotFound.BYCuWuGY.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useReplaceShopPayInHistory.B4E6dg9o.js","/cdn/shopifycloud/checkout-web/assets/c1/hydrate.D2OfcYbq.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-browser.BfABVXb8.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShopPayExternalAppContext.Cer29lRc.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useSuppressShopPayModalOnLoad.BAsDLs7s.js","/cdn/shopifycloud/checkout-web/assets/c1/shop-pay-normalizeBuyerDetails.CwRO8n0u.js","/cdn/shopifycloud/checkout-web/assets/c1/helpers-derivations.B-I-zmum.js","/cdn/shopifycloud/checkout-web/assets/c1/helpers-paymentMethodFromPaymentLines.DpmC1-BS.js","/cdn/shopifycloud/checkout-web/assets/c1/graphql-UserPrivacySettingsSetMutation.CGwvIGx8.js","/cdn/shopifycloud/checkout-web/assets/c1/helpers-installmentsNotSupportedForAddress.BAUQo_9O.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useUnauthenticatedErrorModal.CnGHihm4.js","/cdn/shopifycloud/checkout-web/assets/c1/extensions-rpc.DAPxjisb.js","/cdn/shopifycloud/checkout-web/assets/c1/graphql-PaymentSessionMutation.Bccc_gsY.js","/cdn/shopifycloud/checkout-web/assets/c1/locale-en.BWTljioB.js","/cdn/shopifycloud/checkout-web/assets/c1/OnePage.1oJMc1yT.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useWalletsTimeout.Bendpo0Y.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-usePostPurchase.BC0vqHJs.js","/cdn/shopifycloud/checkout-web/assets/c1/components-DeliveryTransition.De-YJtSA.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-usePickupPoints.CR8lrPBK.js","/cdn/shopifycloud/checkout-web/assets/c1/ChangeCompanyLocationLink.ZFjW9P8E.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useStableHostMethodsReferences.KYhBFoy8.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useSandboxTelemetry.CkufIae1.js","/cdn/shopifycloud/checkout-web/assets/c1/BillingAddressForm.YTIJj-b5.js","/cdn/shopifycloud/checkout-web/assets/c1/PhoneField.B4Fei_Wg.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useCanChangeCompanyLocation.5pjqTz-C.js","/cdn/shopifycloud/checkout-web/assets/c1/localization-index.CS6CIjm7.js","/cdn/shopifycloud/checkout-web/assets/c1/Choice.DkAqPDBZ.js","/cdn/shopifycloud/checkout-web/assets/c1/Popover.BHFutEQs.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useForceShopPayUrl.tkorEvC9.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShopPayNewSignupLoginExperiment.TS2Pzy9e.js","/cdn/shopifycloud/checkout-web/assets/c1/ShopPayLogo.DSkYbd6x.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useWalletsMonorailTrack.BTmXL0nA.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShopPayCheckoutGqlVersion.u4ZnAQ5f.js","/cdn/shopifycloud/checkout-web/assets/c1/AutocompleteField-hooks.BC0RCwef.js","/cdn/shopifycloud/checkout-web/assets/c1/PendingShipping.CgxA1CTd.js","/cdn/shopifycloud/checkout-web/assets/c1/ImpressionEventCapture.BmZ3DTvj.js","/cdn/shopifycloud/checkout-web/assets/c1/components-useVaultedMsiInstallments.Dp__6J6L.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentIcon.DZFwwzDF.js","/cdn/shopifycloud/checkout-web/assets/c1/shop-cash-context.DqVS7rU9.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useGeneralPaymentErrorMessage.C0EDQX3R.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentLine.DbK0sheV.js","/cdn/shopifycloud/checkout-web/assets/c1/useShopPayButtonClassName.DQbVzdVl.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useFilteredShopPayAvailablePaymentMethods.Bdj9yasc.js","/cdn/shopifycloud/checkout-web/assets/c1/Section.CcIm-qsn.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShowShopPayOptin.z-TXV4y_.js","/cdn/shopifycloud/checkout-web/assets/c1/remember-me-hooks.DmbYJb9J.js","/cdn/shopifycloud/checkout-web/assets/c1/cvv-cvvBridge.Dx9Tr0q_.js","/cdn/shopifycloud/checkout-web/assets/c1/useShopPaySessionTokenStorage.BD_k2jrH.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useOnePageFormSubmit.v0M_qhkn.js","/cdn/shopifycloud/checkout-web/assets/c1/captcha-hooks.mrKH5zZx.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-payment-button.DGOZcMDy.js","/cdn/shopifycloud/checkout-web/assets/c1/shop-cash-monorail.D2iCMpDk.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useAvailableShopPromotionDiscount.DgKHUT5v.js","/cdn/shopifycloud/checkout-web/assets/c1/BillingAddressSelector.HRgOZoh3.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentErrorBanner.DUHlmOvc.js","/cdn/shopifycloud/checkout-web/assets/c1/Switch.BjOkHsII.js","/cdn/shopifycloud/checkout-web/assets/c1/Middot.DUbegJ1o.js","/cdn/shopifycloud/checkout-web/assets/c1/EstimatedDeliveryContent.DBJTAIvU.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingMethodRateLabel.BS5uYz_Z.js","/cdn/shopifycloud/checkout-web/assets/c1/shipping-methods-consolidated-included.BV0fvSXd.js","/cdn/shopifycloud/checkout-web/assets/c1/shipping-rates-progressiveShippingRatesLoading.UZAhD_-M.js","/cdn/shopifycloud/checkout-web/assets/c1/ShipmentBreakdown.6qUIvHHd.js","/cdn/shopifycloud/checkout-web/assets/c1/MerchandiseModal.CBVKXbp_.js","/cdn/shopifycloud/checkout-web/assets/c1/extension-targets-shipping-options.DII60peT.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingMethodSelector.BSBPrV3M.js","/cdn/shopifycloud/checkout-web/assets/c1/TextArea.-xoXxa92.js","/cdn/shopifycloud/checkout-web/assets/c1/SubscriptionPriceBreakdown.DZyUbywf.js","/cdn/shopifycloud/checkout-web/assets/c1/StockProblems-StockProblemsLineItemList.Bnyic2N9.js","/cdn/shopifycloud/checkout-web/assets/c1/component-RuntimeExtension.CXP_LLPF.js","/cdn/shopifycloud/checkout-web/assets/c1/AnnouncementRuntimeExtensions.CaF_BVb3.js","/cdn/shopifycloud/checkout-web/assets/c1/QRCode.Pu39IyEm.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-dates.ChO2GdxN.js","/cdn/shopifycloud/checkout-web/assets/c1/NumberField.i2PlOCdx.js","/cdn/shopifycloud/checkout-web/assets/c1/extensions-remote-dom.ClyAj_JC.js","/cdn/shopifycloud/checkout-web/assets/c1/EmailField.BwMYnkf1.js","/cdn/shopifycloud/checkout-web/assets/c1/Sheet.BX1zXQzi.js","/cdn/shopifycloud/checkout-web/assets/c1/extension-targets-rendering-extension-targets.Tbgo4Xo8.js","/cdn/shopifycloud/checkout-web/assets/c1/ExtensionsInner.Krzk0-Xc.js","/cdn/shopifycloud/checkout-web/assets/c1/adapter-host.B_riw6tu.js","/cdn/shopifycloud/checkout-web/assets/c1/sandbox.C_6lTUEw.worker.js","/cdn/shopifycloud/checkout-web/assets/c1/sandbox-2025-07.BU1xQJiP.worker.js","https://extensions.shopifycdn.com/shopifycloud/checkout-web/assets/c1/polyfills-entry-modern.oWckgtZS.worker.js"];
      var styles = ["/cdn/shopifycloud/checkout-web/assets/c1/assets/app.SJccg0i1.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/colorContrast.DwqzaEQ_.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/useReplaceShopPayInHistory.87JMHPUK.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/stopwatch.BqN9_BJB.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/useSuppressShopPayModalOnLoad.CfwUdlpL.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/OnePage.CEr7nb5K.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/DeliveryTransition.CXbHQpsO.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/useVaultedMsiInstallments.BjkzEj17.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/useShopPaySessionTokenStorage.CqVkJv9Z.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/useOnePageFormSubmit.CS-PIQ3P.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/cvvBridge.CIy8uDiZ.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Choice.jvH8TQL4.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/index.BEvzDDvy.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/ChangeCompanyLocationLink.uqpm88mq.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Section.CU18S7Ap.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PaymentLine.7870thps.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Switch.Dq_6Ius6.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PaymentIcon.CLVwzp6i.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/BillingAddressForm.BdwN7V1K.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PhoneField.uZEuHncj.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Middot.D7Ujmshx.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/progressiveShippingRatesLoading.LcqrKXE1.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/MerchandiseModal.D6OuIVjc.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/EstimatedDeliveryContent.CGkrPwWj.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/hooks.dFPtnh-r.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/RuntimeExtension.DWkDBM73.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/AnnouncementRuntimeExtensions.DWE5rRxz.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/QRCode.BZ_m5G5a.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Popover.C8uylY0y.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/NumberField.CRpcZnVJ.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Sheet.BiQjEGaX.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0929/6560/1602/files/logo_canapuff_black_f93f3dd9-c528-4213-ad70-4ed08ea14ecf_x320.png?v=1773757868"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = preconnectOrigins.concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  