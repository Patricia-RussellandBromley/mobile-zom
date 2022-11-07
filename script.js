
////////////////////////////////////////////////////////////////////////////

console.info("Zoom Up Mobile");
//**********************/
(function v2() {
  (function (win) {
    'use strict';

    var listeners = [],
      doc = win.document,
      MutationObserver = win.MutationObserver || win.WebKitMutationObserver,
      observer;

    function ready(selector, fn) {
      // Store the selector and callback to be monitored
      listeners.push({
        selector: selector,
        fn: fn
      });
      if (!observer) {
        // Watch for changes in the document
        observer = new MutationObserver(check);
        observer.observe(doc.documentElement, {
          childList: true,
          subtree: true
        });
      }
      // Check if the element is currently in the DOM
      check();
    }

    function check() {
      // Check the DOM for elements matching a stored selector
      for (var i = 0, len = listeners.length, listener, elements; i < len; i++) {
        listener = listeners[i];
        // Query for elements matching the specified selector
        elements = doc.querySelectorAll(listener.selector);
        for (var j = 0, jLen = elements.length, element; j < jLen; j++) {
          element = elements[j];
          // Make sure the callback isn't invoked with the
          // same element more than once
          if (!element.ready) {
            element.ready = true;
            // Invoke the callback with the element
            listener.fn.call(element, element);
          }
        }
      }
    }

    // Expose 'ready'
    win.optiReady = ready;

  })(this);

  function zoomUpMobile() {
    let products = [{
      id: 105063,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/105063_xlalt3.jpg"
    },
    {
      id: 240367,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/240367_xlalt3.jpg"
    },
    {
      id: 105109,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/105109_xlalt3.jpg"
    },
    {
      id: 431999,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/431999_xlalt3.jpg"
    },
    {
      id: 240330,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/240330_xlalt3.jpg"
    },
    {
      id: 432127,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/432127_xlalt3V2.jpg"
    },
    {
      id: 240165,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/240165_xlalt3V2.jpg"
    },
    {
      id: 105266,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/105266_xlalt3.jpg"
    },
    {
      id: 240021,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/240021_xlalt3.jpg"
    },
    {
      id: 240643,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/240643_xlalt3.jpg"
    },
    {
      id: 105193,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/105193_xlalt3V2.jpg"
    },
    {
      id: 105083,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/105083_xlalt3.jpg"
    },
    {
      id: 240579,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/240579_xlalt3.jpg"
    },
    {
      id: 240149,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/240149_xlalt3.jpg"
    },
    {
      id: 240150,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/240150_xlalt3V2.jpg"
    },
    {
      id: 240176,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/240176_xlalt3V2.jpg"
    },
    {
      id: 124342,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/124342_xlalt3.jpg"
    },
    {
      id: 240428,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/240428_xlalt3V2.jpg"
    },
    {
      id: 567888,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/567888_xlalt3V2.jpg"
    },
    {
      id: 527698,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/527698_xlalt3V2.jpg"
    },
    {
      id: 527874,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/527874_xlalt3.jpg"
    },
    {
      id: 567994,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/567994_xlalt3.jpg"
    },
    {
      id: 527241,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/527241_xlalt3V2.jpg"
    },
    {
      id: 568004,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/568004_xlalt3V2.jpg"
    },
    {
      id: 530850,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/530850_xlalt3.jpg"
    },
    {
      id: 527980,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/527980_xlalt3V2.jpg"
    },
    {
      id: 240254,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/240254_xlalt3.jpg"
    },
    {
      id: 257290,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/257290_xlalt3V2.jpg"
    },
    {
      id: 240605,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/240605_xlalt3.jpg"
    },
    {
      id: 528700,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/528700_xlalt3.jpg"
    },
    {
      id: 527470,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/527470_xlalt3V2.jpg"
    },
    {
      id: 530630,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/530630_xlalt3v2.jpg"
    },
    {
      id: 240203,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/240203_xlalt3V2.jpg"
    },
    {
      id: 527980,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/527980_xlalt3V2.jpg"
    },
    {
      id: 240198,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/240198_xlalt3v2.jpg"
    },
    {
      id: 568099,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/568099_xlalt3.jpg.jpg"
    },
    {
      id: 528725,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/528725_xlalt3.jpg"
    },
    {
      id: 527561,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/527561_xlalt3.jpg"
    },
    {
      id: 240350,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/240350_xlalt3.jpg"
    },
    {
      id: 240627,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/240627_xlalt3.jpg"
    },
    {
      id: 240704,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/240704_xlalt3V2.jpg"
    },
    {
      id: 706237,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/706237_xlalt3V2.jpg"
    },
    {
      id: 240505,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/240505_xlalt3.jpg"
    },
    {
      id: 714118,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/714118_xlalt3V2.jpg"
    },
    {
      id: 706331,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/706331_xlalt3.jpg"
    },
    {
      id: 706481,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/706481_xlalt3.jpg"
    },
    {
      id: 240498,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/240498_xlalt3.jpg"
    },
    {
      id: 706433,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/706433_xlalt3.jpg"
    },
    {
      id: 706333,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/706333_xlalt3V2.jpg"
    },
    {
      id: 705882,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/705882_xlalt3.jpg"
    },
    {
      id: 706327,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/706327_xlalt3V2.jpg"
    },
    {
      id: 713166,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/713166_xlalt3.jpg"
    },
    {
      id: 706332,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/706332_xlalt3.jpg"
    },
    {
      id: 240440,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/240440_xlalt3V2.jpg"
    },
    {
      id: 240347,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/240347_xlalt3.jpg"
    },
    {
      id: 240668,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/240668_xlalt3V2.jpg"
    },
    {
      id: 240336,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/240336_xlalt3.jpg"
    },
    {
      id: 706019,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/706019_xlalt3V2.jpg"
    },
    {
      id: 240578,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/240578_xlalt3V2.jpg"
    },
    {
      id: 123593,
      imgUrl: "https://www.russellandbromley.co.uk/file/general/123593_xlalt3.jpg"
    }
    ];

    console.log(products);

    function valid_url() {
      if (!document.getElementById("Zoom_Up")) {
        let product_page_id = window.location.pathname.split("/")[2];
        products.forEach(product => {
          if (product.id == product_page_id) {
            injetNewImg(product.imgUrl);
            return;
          }
        });
      }
    }
    console.log(products);


    function injetNewImg(imgUrl) {
      let divItem = document.createElement("div");
      let divMobileiWrap = document.createElement("div");
      let divImage = document.createElement("div");
      let img = document.createElement("img");


      divItem.setAttribute("id", "Zoom_Up");
      divItem.setAttribute("class", "item");
      divItem.setAttribute("data-bind", "css: {'active': $index() == 0}");

      divMobileiWrap.setAttribute("class", "mobile-image-wrapper");

      divImage.setAttribute("id", "cc_img__resize_wrapper");
      divImage.setAttribute("style", "max-width: 100%; min-height: 0px; height: 100%;");

      let imgAttribute = `ccResizeImage: {
                        isSrcSetEnabled : false,
                        source:$data + '&amp;height=300&amp;width=300' ,
                        xsmall:'300,300',
                        alt:$parent.displayName,
                        errorSrc:'/img/no-image.jpg',
                        errorAlt:'No Image Found'
                        }`;

      img.setAttribute("align", "middle");

      img.setAttribute("class", "ccLazyLoaded");
      img.setAttribute("style", "width: 300px;"); //it was needed
      img.setAttribute("alt", "product-w-productDetails");
      img.setAttribute("data-bind", imgAttribute);
      img.setAttribute("data-error-src", "/img/no-image.jpg");
      img.setAttribute("data-error-alt", "No Image Found");
      img.setAttribute("data-lazy-loading", "false");
      img.setAttribute("data-lazy-loading-image-class", "ccLazyLoad");
      img.setAttribute("data-lazy-loaded-image-class", "ccLazyLoaded");
      img.setAttribute("data-default-error-src", "/img/no-image.jpg");
      img.setAttribute("data-lazy-loading-parent-class", "ccLazyLoad-background");
      img.setAttribute("data-src", imgUrl);
      img.setAttribute("src", imgUrl);

      divImage.append(img);
      divMobileiWrap.append(divImage);
      divItem.append(divMobileiWrap);

      let caroselContent = document.querySelector("#prodDetails-mobileCarousel");
      let carolselContentImages = caroselContent.firstElementChild;
      let carolselContentBullets = caroselContent.lastElementChild;

      carolselContentImages.append(divItem);

      let newItemBullet = carolselContentBullets.lastElementChild.lastElementChild.cloneNode(true);
      newItemBullet.setAttribute("data-slide-to", 4);
      carolselContentBullets.lastElementChild.append(newItemBullet);
    }

    setTimeout(valid_url, 100);

  }//and function zoomUpMobile

  optiReady('#prodDetails-mobileCarousel', (ele) => {
    console.info('zoomUpMobile calling function');
    zoomUpMobile();
  });

}());

