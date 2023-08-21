<!-- BEGIN OLAPIC CODE -->

<style>
#olapic_mobile_container { display: block; margin-bottom: 20px; margin-top: 20px; padding: 20px; text-align: center; width: 90%; }
#olapic_mobile_widget {}
p.olapic_mobile_container_copy { font-size: 2em; margin: 5% 0; font-family: "EB+Garamond",serif; }
.o-mobile-ugc-img-url-test { width: 80%; max-width: 80%; }
.o-mobile-ugc-uploader-info, .o-mobile-ugc-shop-this-look-img, .o-mobile-upload-photos-btn, .o-mobile-ugc-tagged-products, .o-mobile-ugc-product-name, .o-mobile-ugc-image-test { text-align: center; }
.o-mobile-ugc-shop-this-look-img { width: 100%; margin: 10% 0; }
.o-mobile-ugc-shop-this-look-img { width: 100%; margin: 5% 0; }
.o-mobile-ugc-uploader-info { margin: 2% 0; }
.o-mobile-ugc-taggedProduct { margin: 10% 0; }
.o-mobile-ugc-uploader-icon-url { margin-bottom: -1%; }
.o-mobile-ugc-uploader-username-url { text-decoration: none; font-weight: bold; }
.o-mobile-ugc-product-name { font-size: 1.75em; margin-top: 3%; font-family: "EB+Garamond",serif; }
.o-mobile-footer-br-copy-02 { font-family: "EB+Garamond",serif; font-size: 1.85em; color: #333; padding-top: 3%; padding-bottom: 2%; text-align: center; position: relative; }
.o-mobile-footer-br-copy-02 img { width: 80%; max-width: 80%; }
.o-mobile-ugc-header img { width: 80%; max-width: 80%; }
.o-mobile-upload-photos-btn img, .o-mobile-ugc-shop-this-look-img img { width: 80%; }
#olapic-media-box { max-width: 90%; margin:10px; border: 1px solid #999; display:none; }
.mobile-fb-icon, .mobile-twit-icon, .mobile-pin-icon { display: block; float: left; max-width: 30%; position: relative; width: 30%; }
.mobile-twit-icon { margin: 0 5%; }
.mobile-twit-icon img { margin-top: 10%; margin-left: 10%; }
.o-mobile-cts-icons { display: block; float: left; left: 36%; position: absolute; top: 33%; width: 30%;  }
</style>

<script type="text/javascript" data="olapic-mobile-product">
  //Olapic UCG Import - Product Page
  var Olapic_Mobile = {
    API_KEY: "07f21340a05c2e695799e6da23151ac0304314b2e23f620490d9a5cdd4d80f4b", //API Key for BR
    API_BASE_URL: "http://photorankapi-a.akamaihd.net",
    AUTH_TOKEN: "?auth_token=07f21340a05c2e695799e6da23151ac0304314b2e23f620490d9a5cdd4d80f4b", //API Key for BR
    API_VER: "&version=v2.2",
    CALLBACK: "&callback=?",
    TRACK_BASE_URL: "http://data.photorank.me/track/widget/",
    RSTRING: "", // Olapic Analytics cookie value in the __olapicU key
    TRACK_SFDP_ID: "f66b1485fe02f7e22c55f08fb00bc3aa", // Olapic instance id
    TRACK_PDP_ID: "be67d34cd118f6594175f6a207d37fea", // Olapic instance id
    getStreamsByTag: function(objectId) {
      return jQuery.getJSON(Olapic_Mobile.API_BASE_URL + '/customers/217166/streams/bytag/' + objectId + Olapic_Mobile.AUTH_TOKEN + Olapic_Mobile.API_VER);
    },
    getMediaStreams: function(objectId) {
      return jQuery.getJSON(Olapic_Mobile.API_BASE_URL + '/media/' + objectId + '/streams/' + Olapic_Mobile.AUTH_TOKEN + Olapic_Mobile.API_VER);
    },
    getStreamMediaPhotorank: function(objectId) {
      return jQuery.getJSON(Olapic_Mobile.API_BASE_URL + '/streams/' + objectId + '/media/photorank' + Olapic_Mobile.AUTH_TOKEN + Olapic_Mobile.API_VER);
    }
  };
  var addOlapicMobileUCG = {
    init : function(pid) {
      function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
      }
      
      var pid = "";
      pid = getParameterByName('dn');
      pid = pid.substr(2);

        Olapic_Mobile.getStreamsByTag(pid).done(function(response) {
          var streamId = "";
          streamId = response.data.id;
                  
          Olapic_Mobile.getStreamMediaPhotorank(streamId).done(function(response) {
            var opi = response.data._embedded.media[0].id;
                    
            jQuery("#olapic_mobile_container").append("<div class='o-mobile-ugc-header'><img src='/Asset_Archive/BRWeb/content/0010/006/162/assets/Mobile-ItsBanana.jpg'><br /><p class='olapic_mobile_container_copy'>Tag your photos to be featured on our site.</p></div>");
            jQuery(".o-mobile-ugc-header").after("<div class='o-mobile-ugc-image-test'></div>");
            jQuery(".o-mobile-ugc-image-test").append("<img class='o-mobile-ugc-img-url-test' />");
            jQuery(".o-mobile-ugc-img-url-test").attr( "src", response.data._embedded.media[0].images.original );
            jQuery(".o-mobile-ugc-image-test").after("<div class='o-mobile-ugc-uploader-info'></div>");
            jQuery(".o-mobile-ugc-uploader-info").append("<img class='o-mobile-ugc-uploader-icon-url' />");
            jQuery(".o-mobile-ugc-uploader-icon-url").after(" Shot by <a target='_blank' class='o-mobile-ugc-uploader-username-url'>"+response.data._embedded.media[0]._embedded.uploader.username+"</a>");
            if (response.data._embedded.media[0].source == 'instagram') {
              jQuery(".o-mobile-ugc-uploader-icon-url").attr( "src", "/Asset_Archive/BRWeb/content/0010/006/162/assets/Mobile-Instagram-Icon.png" );
              jQuery(".o-mobile-ugc-uploader-username-url").attr("href", "http://instagram.com/" + response.data._embedded.media[0]._embedded.uploader.username);
            } else if (response.data._embedded.media[0].source == 'twitter') {
              jQuery(".o-mobile-ugc-uploader-icon-url").attr( "src", "/Asset_Archive/BRWeb/content/0010/006/162/assets/Mobile-Twitter-Icon.png" );
              jQuery(".o-mobile-ugc-uploader-username-url").attr("href", "http://twitter.com/" + response.data._embedded.media[0]._embedded.uploader.username);
            } else if (response.data._embedded.media[0].source == 'facebook') {
              jQuery(".o-mobile-ugc-uploader-icon-url").attr( "src", "/Asset_Archive/BRWeb/content/0010/006/162/assets/Mobile-Facebook-Icon.png" );
              jQuery(".o-mobile-ugc-uploader-username-url").attr("href", "http://facebook.com/" + response.data._embedded.media[0]._embedded.uploader.username);
            } else if (response.data._embedded.media[0].source == 'pinterest') {
              jQuery(".o-mobile-ugc-uploader-icon-url").attr( "src", "/Asset_Archive/BRWeb/content/0010/006/162/assets/Mobile-Pinterest-Icon.png" );
              jQuery(".o-mobile-ugc-uploader-username-url").attr("href", "http://pinterest.com/" + response.data._embedded.media[0]._embedded.uploader.username);
            }
            jQuery(".o-mobile-ugc-uploader-info").after("<div class='o-mobile-ugc-shop-this-look-img'><img src='/Asset_Archive/BRWeb/content/0010/006/162/assets/Mobile-ShopThisLook.png'></div>");
            jQuery(".o-mobile-ugc-shop-this-look-img").after("<div class='o-mobile-ugc-tagged-products'></div>");
            jQuery('.o-mobile-ugc-tagged-products').append('<div class="o-mobile-ugc-taggedProduct"><a href="" onclick="" class="o-mobile-product-ugc-url"><img src="/assets/common/clear.gif" /></a><br /><div class="o-mobile-ugc-product-name"></div></div>');
            jQuery(".o-mobile-ugc-tagged-products").after("<div class='o-mobile-footer-br-copy-02'><img src='/Asset_Archive/BRWeb/content/0010/006/162/assets/Mobile-CareToShare-rev.png'></div>");
            jQuery(".o-mobile-footer-br-copy-02").append("<div class='o-mobile-cts-icons'><div class='mobile-fb-icon'><a href='#' target='_blank'><img src='/Asset_Archive/BRWeb/content/0010/006/162/assets/Mobile-Facebook-Icon.png' /></a></div><div class='mobile-twit-icon'><a href='#' target='_blank'><img src='/Asset_Archive/BRWeb/content/0010/006/162/assets/Mobile-Twitter-Icon.png' /></a></div><div class='mobile-pin-icon'><a href='#' target='_blank'><img src='/Asset_Archive/BRWeb/content/0010/006/162/assets/Mobile-Pinterest-Icon.png' /></a></div></div>");
            jQuery(".mobile-fb-icon a").attr("href", "javascript:window.open('https://www.facebook.com/sharer/sharer.php?u=" + location.href + "');");
            jQuery(".mobile-twit-icon a").attr("href", "javascript:window.open('https://twitter.com/home?status=" + location.href + "');");
            jQuery(".mobile-pin-icon a").attr("href", "javascript:window.open('https://pinterest.com/pin/create/button/?url=" + location.href + "&media=" + response.data._embedded.media[0].images.original + "');");
            jQuery(".o-mobile-footer-br-copy-02").after("<div class='o-mobile-upload-photos-btn'><a href='javascript:void(0);' class='o-mobile-upload-photos-btn-url' target='_blank'><img src='/Asset_Archive/BRWeb/content/0010/006/162/assets/Mobile-UploadCTA.png'></a></div>");
            launchUploader();
            showTaggedProducts_Mobile(opi);
          }).fail(function() {
            jQuery("#olapic_mobile_container").append("<div class='o-mobile-ugc-header'><img src='/Asset_Archive/BRWeb/content/0010/006/162/assets/Mobile-ItsBanana.jpg'></div>");
            jQuery(".o-mobile-ugc-header").after("<div class='o-mobile-ugc-image-test'></div>");
            jQuery(".o-mobile-ugc-image-test").append("<img class='o-mobile-ugc-img-url-test' />");
            jQuery(".o-mobile-ugc-img-url-test").attr( "src", "/Asset_Archive/BRWeb/content/0010/006/162/assets/Product-Pg-Default-rev.jpg" );
            jQuery(".o-mobile-ugc-image-test").after("<div class='o-mobile-footer-br-copy-02'><p>Tag your photos to be featured on our site.</p></div>");
            jQuery(".o-mobile-footer-br-copy-02").after("<div class='o-mobile-upload-photos-btn'><a href='javascript:void(0);' target='_blank'><img src='/Asset_Archive/BRWeb/content/0010/006/162/assets/Mobile-UploadCTA.png'></a></div>");
            launchUploader(); 
          });
        }).fail(function() {
            jQuery("#olapic_mobile_container").append("<div class='o-mobile-ugc-header'><img src='/Asset_Archive/BRWeb/content/0010/006/162/assets/Mobile-ItsBanana.jpg'></div>");
            jQuery(".o-mobile-ugc-header").after("<div class='o-mobile-ugc-image-test'></div>");
            jQuery(".o-mobile-ugc-image-test").append("<img class='o-mobile-ugc-img-url-test' />");
            jQuery(".o-mobile-ugc-img-url-test").attr( "src", "/Asset_Archive/BRWeb/content/0010/006/162/assets/Product-Pg-Default-rev.jpg" );
            jQuery(".o-mobile-ugc-image-test").after("<div class='o-mobile-footer-br-copy-02'><p>Tag your photos to be featured on our site.</p></div>");
            jQuery(".o-mobile-footer-br-copy-02").after("<div class='o-mobile-upload-photos-btn'><a href='javascript:void(0);' target='_blank'><img src='/Asset_Archive/BRWeb/content/0010/006/162/assets/Mobile-UploadCTA.png'></a></div>");
            launchUploader();  
        });

        function showTaggedProducts_Mobile(opi) {
          Olapic_Mobile.getMediaStreams(opi).done(function(response) {
            var productImages_mobile = [];
            var productNames_mobile = [];
            var productUrls_mobile = [];
            var indexTaggedProduct_mobile = -1;
            var jsonObjectArray_mobile = [];
            var jsonObjectArray_mobile = response.data._embedded.stream;
            jsonObjectArray_mobile.reverse();
            jQuery.each(jsonObjectArray_mobile, function( index, value ) {
              if (value.tag_based_key) {
                indexTaggedProduct_mobile++;
                // if more than one tagged product, create new elements as needed
                if (indexTaggedProduct_mobile > 0) {
                  jQuery(".o-mobile-ugc-taggedProduct:eq(0)").clone().appendTo(".o-mobile-ugc-tagged-products");
                }
                productImages_mobile[indexTaggedProduct_mobile] = value._embedded.base_image.images.mobile;
                productNames_mobile[indexTaggedProduct_mobile] = value.name;
                var relativeProductUrl = value.product_url;
                relativeProductUrl = relativeProductUrl.replace(/^.*\/\/[^\/]+/, '');       
                productUrls_mobile[indexTaggedProduct_mobile] = relativeProductUrl;
                var olapicTrackUrl = relativeProductUrl;
                jQuery(".o-mobile-product-ugc-url img:eq(" + indexTaggedProduct_mobile + ")").attr("src", productImages_mobile[indexTaggedProduct_mobile]);
                jQuery(".o-mobile-product-ugc-url:eq(" + indexTaggedProduct_mobile + ")").attr("href", "javascript:window.open(\'"+olapicTrackUrl+"\', '_self', false);");
                jQuery(".o-mobile-ugc-product-name:eq(" + indexTaggedProduct_mobile + ")").html(productNames_mobile[indexTaggedProduct_mobile].split('|')[0]);
              }
            });
          }).done(function() {
          }).fail(function() {
          });
        }

        function launchUploader() {
          if(skavaShopping && skavaShopping.iswebapp && skavaShopping.iswebapp == 1) { 
            jQuery(".o-mobile-upload-photos-btn").on("click", function() {
              gapMobile.openInSafari('http://www.photorank.me/uploader/bananarepublic');
            });
          } else { 
            jQuery(".o-mobile-upload-photos-btn").on("click", function() {
              window.open('http://www.photorank.me/uploader/bananarepublic');
            });
          }
        }

    }
  }

  jQuery(document).on("wcdLib:ready", function() {
    if (location.pathname.indexOf('product.html') > -1) {
      addOlapicMobileUCG.init();
    }
  });
</script>
<!-- END OLAPIC CODE -->
