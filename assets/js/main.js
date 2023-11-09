/* ==============
 ========= js documentation ==========================

 * theme name: AI Research
 * version: 1.0
 * description: Artificial Neural Network AI HTML Template
 * author: Pixelaxis
 * author-url: https://themeforest.net/user/pixelaxis

    ==================================================

     01. get device width
     -------------------------------------------------
     02. get initial scroll position
     -------------------------------------------------
     03. preloader
     -------------------------------------------------
     04. data background
     -------------------------------------------------
     05. custom cursor
     -------------------------------------------------
     06. footer copyright year
     -------------------------------------------------
     07. scroll to top with progress
     -------------------------------------------------
     08. top navbar effects
     -------------------------------------------------
     09. open search box
     -------------------------------------------------
     10. mobile menu
     -------------------------------------------------
     11. offcanvas cart
     -------------------------------------------------
     12. offcanvas info
     -------------------------------------------------
     13. overview toggle class
     -------------------------------------------------
     14. pricing table tab
     -------------------------------------------------
     15. blog toggle class
     -------------------------------------------------
     16. image move animation
     -------------------------------------------------
     17. empower accordion
     -------------------------------------------------
     18. case study accordion
     -------------------------------------------------
     19. blog details show reply box
     -------------------------------------------------
     20. product price range filter
     -------------------------------------------------
     21. product details tab
     -------------------------------------------------
     22. toggle password
     -------------------------------------------------
     23. measure cart
      

    ==================================================
============== */

(function ($) {
  "use strict";

  jQuery(document).ready(function () {
    /**
     * ======================================
     * 01. get device width
     * ======================================
     */
    let device_width = window.innerWidth;

    /**
     * ======================================
     * 02. get initial scroll position
     * ======================================
     */
    var initialScroll = $(window).scrollTop();

    /**
     * ======================================
     * 03. preloader
     * ======================================
     */
    if ($("#preloader").length > 0) {
      $("#preloader").hide();
    }
    /**
     * ======================================
     * 04. data background
     * ======================================
     */
    $("[data-background]").each(function () {
      var backgroundImages = $(this).attr("data-background").split(",");
      var cssValue = backgroundImages
        .map(function (image) {
          return 'url("' + image.trim() + '")';
        })
        .join(",");

      $(this).css("background-image", cssValue);
    });

    /**
     * ======================================
     * 05. custom cursor
     * ======================================
     */
    if ($(".mouseCursor").length > 0) {
      function itCursor() {
        var myCursor = jQuery(".mouseCursor");
        if (myCursor.length) {
          if ($("body")) {
            const e = document.querySelector(".cursor-inner"),
              t = document.querySelector(".cursor-outer");
            let n,
              i = 0,
              o = !1;
            (window.onmousemove = function (s) {
              o ||
                (t.style.transform =
                  "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                (e.style.transform =
                  "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                (n = s.clientY),
                (i = s.clientX);
            }),
              $("body").on(
                "mouseenter",
                "button, a, .cursor-pointer",
                function () {
                  e.classList.add("cursor-hover"),
                    t.classList.add("cursor-hover");
                }
              ),
              $("body").on(
                "mouseleave",
                "button, a, .cursor-pointer",
                function () {
                  ($(this).is("a", "button") &&
                    $(this).closest(".cursor-pointer").length) ||
                    (e.classList.remove("cursor-hover"),
                    t.classList.remove("cursor-hover"));
                }
              ),
              (e.style.visibility = "visible"),
              (t.style.visibility = "visible");
          }
        }
      }
      itCursor();
    }

    /**
     * ======================================
     * 06. footer copyright year
     * ======================================
     */
    if ($("#copyrightYear").length > 0) {
      $("#copyrightYear").text(new Date().getFullYear());
    }

    /**
     * ======================================
     * 07. scroll to top with progress
     * ======================================
     */
    if ($(".progress-wrap").length > 0) {
      var progressPath = document.querySelector(".progress-wrap path");
      var pathLength = progressPath.getTotalLength();
      progressPath.style.transition = progressPath.style.WebkitTransition =
        "none";
      progressPath.style.strokeDasharray = pathLength + " " + pathLength;
      progressPath.style.strokeDashoffset = pathLength;
      progressPath.getBoundingClientRect();
      progressPath.style.transition = progressPath.style.WebkitTransition =
        "stroke-dashoffset 10ms linear";
      var updateProgress = function () {
        var scroll = $(window).scrollTop();
        var height = $(document).height() - $(window).height();
        var progress = pathLength - (scroll * pathLength) / height;
        progressPath.style.strokeDashoffset = progress;
      };
      updateProgress();
      $(window).scroll(updateProgress);
      var offset = 50;
      var duration = 800;
      $(window).on("scroll", function () {
        if ($(this).scrollTop() > offset) {
          $(".progress-wrap").addClass("active-progress");
        } else {
          $(".progress-wrap").removeClass("active-progress");
        }
      });
      $(".progress-wrap").on("click", function (event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, duration);
        return false;
      });

      var initialScroll = $(window).scrollTop();
      if (initialScroll >= 100) {
        $(".progress-wrap").addClass("active-progress");
      }
    }

    /**
     * ======================================
     * 08. top navbar effects
     * ======================================
     */
    $(window).on("scroll", function () {
      var scroll = $(window).scrollTop();
      if (scroll < 100) {
        $(".primary-navbar").removeClass("navbar-active");
      } else {
        $(".primary-navbar").addClass("navbar-active");
      }
    });

    var initialScroll = $(window).scrollTop();
    if (initialScroll >= 100) {
      $(".primary-navbar").addClass("navbar-active");
    }

    /**
     * ======================================
     * 09. open search box
     * ======================================
     */
    if ($(".search-popup").length > 0) {
      $(".open-search").on("click", function () {
        $("body").addClass("search-active body-active");
      });

      $(".close-search").on("click", function () {
        $("body").removeClass("search-active body-active");
      });
    }

    /**
     * ======================================
     * 10. mobile menu
     * ======================================
     */
    if ($(".mobile-menu").length > 0) {
      var mobileMenuContent = $(".navbar__menu").html();
      $(".mobile-menu__list").append(mobileMenuContent);

      $(".mobile-menu .navbar__dropdown-label").on("click", function () {
        $(this).parent().siblings().find(".navbar__sub-menu").slideUp(300);
        $(this)
          .parent()
          .siblings()
          .find(".navbar__dropdown-label")
          .removeClass("navbar__item-active");
        $(this).siblings(".navbar__sub-menu").slideToggle(300);
        $(this).toggleClass("navbar__item-active");
      });
    }

    $(".open-mobile-menu").on("click", function () {
      $(".mobile-menu__backdrop").addClass("mobile-menu__backdrop-active");
      $(".nav-fade").each(function (i) {
        $(this).css("animation-delay", 0.2 * 1 * i + "s");
      });

      $(".mobile-menu").addClass("show-menu");
      $(".mobile-menu__wrapper").removeClass("nav-fade-active");
      $("body").addClass("body-active");
    });

    $(".close-mobile-menu, .mobile-menu__backdrop").on("click", function () {
      setTimeout(function () {
        $(".mobile-menu").removeClass("show-menu");
      }, 900);
      setTimeout(function () {
        $(".mobile-menu__backdrop").removeClass("mobile-menu__backdrop-active");
      }, 1100);

      $(".mobile-menu__wrapper").addClass("nav-fade-active");
      $("body").removeClass("body-active");
    });

    /**
     * ======================================
     * 11. offcanvas cart
     * ======================================
     */
    $(".open-cart").on("click", function () {
      $(".sidebar-cart").addClass("sidebar-cart-active");
      $(".cart-backdrop").addClass("cart-backdrop-active");
      $("body").addClass("body-active");
    });

    $(".close-cart, .cart-backdrop").on("click", function () {
      $(".sidebar-cart").removeClass("sidebar-cart-active");
      $(".cart-backdrop").removeClass("cart-backdrop-active");
      $("body").removeClass("body-active");
    });

    var countItem = $(".cart-item-single").length;
    $(".count-item").text(countItem);
    $(".empty-cart").hide();

    // calculate total price
    function calculateTotalPrice() {
      var totalPrice = 0;
      $(".cart-item-single").each(function () {
        var quantity = parseInt($(this).find(".item-quantity").text(), 10);
        var price = parseFloat($(this).find(".item-price").text());
        totalPrice += quantity * price;
      });
      $(".total-price").text(totalPrice.toFixed(2));
    }

    $(".cart-item-single").each(function () {
      var quantity = parseInt($(this).find(".item-quantity").text(), 10);
      // increase item
      $(this)
        .find(".quantity-increase")
        .on("click", function () {
          if (quantity < 100) {
            quantity++;
            $(this).siblings(".item-quantity").text(quantity);
            calculateTotalPrice();
          }
        });

      // decrease item
      $(this)
        .find(".quantity-decrease")
        .on("click", function () {
          if (quantity > 0) {
            quantity--;
            $(this).siblings(".item-quantity").text(quantity);
            calculateTotalPrice();
          }
        });

      // delete item
      $(this)
        .find(".delete-item")
        .on("click", function () {
          $(this).closest(".cart-item-single").hide();
          $(this).parent().find(".item-quantity").text(0);
          calculateTotalPrice();
          $(this).parent().removeClass("cart-item-single");
          var countItem = $(".cart-item-single").length;
          $(".count-item").text(countItem);

          if (countItem > 0) {
            $(".empty-cart").hide();
          } else {
            $(".empty-cart").show();
          }
        });
    });

    /**
     * ======================================
     * 12. offcanvas info
     * ======================================
     */
    $(".open-offcanvas").on("click", function () {
      $(".offcanvas-info").addClass("offcanvas-info-active");
      $(".offcanvas-info-backdrop").addClass("offcanvas-info-backdrop-active");
      $("body").addClass("body-active");
    });

    $(".close-offcanvas-info, .offcanvas-info-backdrop").on(
      "click",
      function () {
        $(".offcanvas-info").removeClass("offcanvas-info-active");
        $(".offcanvas-info-backdrop").removeClass(
          "offcanvas-info-backdrop-active"
        );
        $("body").removeClass("body-active");
      }
    );

    /**
     * ======================================
     * 13. overview toggle class
     * ======================================
     */
    $(".overview__single").on("mouseover", function () {
      $(".overview__single").removeClass("overview__single-active");
      $(this).addClass("overview__single-active");
    });

    /**
     * ======================================
     * 14. pricing table tab
     * ======================================
     */
    $(".yearly").hide();
    $(".yearly-price").on("click", function () {
      $(".monthly").hide();
      $(".yearly").show();
      $(".price-btn").removeClass("price-btn-active");
      $(this).addClass("price-btn-active");
    });
    $(".monthly-price").on("click", function () {
      $(".yearly").hide();
      $(".monthly").show();
      $(".price-btn").removeClass("price-btn-active");
      $(this).addClass("price-btn-active");
    });

    /**
     * ======================================
     * 15. blog toggle class
     * ======================================
     */
    $(".blog__single").on("mouseover", function () {
      $(".blog__single").removeClass("blog__single-active");
      $(this).addClass("blog__single-active");
    });

    $(window).on("resize", function () {
      $("body").removeClass("body-active search-active");

      // mobile menu
      $(".mobile-menu").removeClass("show-menu");
      $(".mobile-menu__backdrop").removeClass("mobile-menu__backdrop-active");
      $(".mobile-menu__wrapper").addClass("nav-fade-active");
      $(".mobile-menu .navbar__dropdown-label").removeClass(
        "navbar__item-active"
      );
      $(".mobile-menu .navbar__sub-menu").slideUp(300);

      // sidebar cart
      $(".sidebar-cart").removeClass("sidebar-cart-active");
      $(".cart-backdrop").removeClass("cart-backdrop-active");

      // offcanvas info
      $(".offcanvas-info").removeClass("offcanvas-info-active");
      $(".offcanvas-info-backdrop").removeClass(
        "offcanvas-info-backdrop-active"
      );
    });

    /**
     * ======================================
     * 16. image move animation
     * ======================================
     */
    if (device_width >= 576) {
      const caseStudyItem = document.querySelectorAll(".revolution-f__single");

      function followImageCursor(event, caseStudyItem) {
        const contentBox = caseStudyItem.getBoundingClientRect();
        const dx = event.clientX - contentBox.x;
        const dy = event.clientY - contentBox.y;
        caseStudyItem.children[2].style.transform = `translate(${dx}px, ${dy}px) rotate(10deg)`;
      }
      caseStudyItem.forEach((item, i) => {
        item.addEventListener("mousemove", (event) => {
          setInterval(followImageCursor(event, item), 1000);
        });
      });
    }

    /**
     * ======================================
     * 17. empower accordion
     * ======================================
     */
    $(".h-empower-single:first").addClass("h-empower-single-active");
    $(".h-empower-single:first .sho-item").show();
    $(".o-accordion").on("click", function () {
      var parent = $(this).parent().parent();
      parent.find(".sho-item").slideToggle(600);
      parent.toggleClass("h-empower-single-active");
      parent.siblings().removeClass("h-empower-single-active");
      parent.siblings().find(".sho-item").slideUp(600);
    });

    /**
     * ======================================
     * .18 case study accordion
     * ======================================
     */
    $(".h-s-case-single").on("click", function () {
      $(".h-s-case-single").removeClass("h-s-case-single-active");
      $(this).addClass("h-s-case-single-active");
    });

    /**
     * ======================================
     * 19. blog details show reply box
     * ======================================
     */
    $(".open-reply").each(function () {
      $(this).on("click", function () {
        $(this).parent().next(".reply-box-wrapper").slideToggle();
      });
    });

    /**
     * ======================================
     * 20. product price range filter
     * ======================================
     */
    $("#price-range").slider({
      step: 1,
      range: true,
      min: 0,
      max: 1000,
      values: [0, 1000],
      slide: function (event, ui) {
        $("#priceRange").val(ui.values[0] + " - " + ui.values[1]);
      },
    });
    $("#priceRange").val(
      $("#price-range").slider("values", 0) +
        " - " +
        $("#price-range").slider("values", 1)
    );

    /**
     * ======================================
     * 21. product details tab
     * ======================================
     */
    $(".p-details__tab-single").hide();
    $(".p-details__tab-single:first").show();
    $(".p-d-t-btn").on("click", function () {
      $(".p-d-t-btn").removeClass("p-d-t-btn-active");
      $(this).addClass("p-d-t-btn-active");
      $(".p-details__tab-single").hide();
      var activePlan = $(this).data("target");
      $(activePlan).fadeIn(500);
      return false;
    });

    /**
     * ======================================
     * 22. toggle password
     * ======================================
     */
    $(".show-pass").each(function () {
      $(this).on("click", function () {
        var passwordField = $(this).next("input");
        if (passwordField.attr("type") === "password") {
          passwordField.attr("type", "text");
          $(this).text("visibility");
        } else {
          passwordField.attr("type", "password");
          $(this).text("visibility_off");
        }
      });
    });

    /**
     * ======================================
     * 23. measure cart
     * ======================================
     */
    function cartItemPrice($row) {
      var totalPrice = 0;
      var quantity = parseInt($row.find(".item-quantity").text(), 10);
      var price = parseFloat($row.find(".item-price").text());
      totalPrice = quantity * price;
      $row.find(".total-price").text(totalPrice.toFixed(2));
    }

    $(".cart-item-single-m").each(function () {
      var $thisRow = $(this);
      var quantity = parseInt($thisRow.find(".item-quantity").text(), 10);

      // increase item
      $thisRow.find(".quantity-increase").on("click", function () {
        if (quantity < 50) {
          quantity++;
          $thisRow.find(".item-quantity").text(quantity);
          cartItemPrice($thisRow);
        }
      });

      // decrease item
      $thisRow.find(".quantity-decrease").on("click", function () {
        if (quantity > 0) {
          quantity--;
          $thisRow.find(".item-quantity").text(quantity);
          cartItemPrice($thisRow);
        }
      });

      // delete item
      $thisRow.find(".remove-item").on("click", function () {
        $thisRow.hide();
        $thisRow.find(".item-quantity").text(0);
        cartItemPrice($thisRow);
        $thisRow.removeClass("cart-item-single-m");
        var countItem = $(".cart-item-single-m").length;

        if (countItem > 0) {
          $(".empty-cart-m").hide();
        } else {
          $(".empty-cart-m").show();
        }
      });
    });
  });
})(jQuery);
