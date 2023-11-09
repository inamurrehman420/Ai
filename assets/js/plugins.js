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
     02. odometer counter
     -------------------------------------------------
     03. banner large image slider
     -------------------------------------------------
     04. banner small image slider
     -------------------------------------------------
     05. text slider
     -------------------------------------------------
     06. large text slider
     -------------------------------------------------
     07. partner slider
     -------------------------------------------------
     08. sponsor slider
     -------------------------------------------------
     09. showcase slider
     -------------------------------------------------
     10. particles background
     -------------------------------------------------
     11. product masonry
     -------------------------------------------------
     12. category masonry
     -------------------------------------------------
     13. case study masonry
     -------------------------------------------------
     14. review slider
     -------------------------------------------------
     15. banner five text slider
     -------------------------------------------------
     16. case slider
     -------------------------------------------------
     17. publisher slider
     -------------------------------------------------
     18. video popup
     -------------------------------------------------
     19. product details slider
     -------------------------------------------------
     20. register gsap plugins
     -------------------------------------------------
     21. gsap null config
     -------------------------------------------------
     22. target section with gsap
     -------------------------------------------------
     23. smooth scroll with gsap
     -------------------------------------------------
     24. section subtitle animation
     -------------------------------------------------
     25. banner animation
     -------------------------------------------------
     26. banner three animation
     -------------------------------------------------
     27. text brief animation
     -------------------------------------------------
     28. cmn banner image animation
     -------------------------------------------------
     29. banner five image animation
     -------------------------------------------------
     30. large text animation
     -------------------------------------------------
     31. cta two animation
     -------------------------------------------------
     32. service details sticky
     -------------------------------------------------
     33. blog details sticky
     -------------------------------------------------
     34. shop sticky
     -------------------------------------------------
     35. case details sticky
     -------------------------------------------------
     36. image reveal animation
     -------------------------------------------------
     37. parallax image effects
     -------------------------------------------------
     38. appear down
     -------------------------------------------------
     39. service horizontal move
     -------------------------------------------------
     40. title animation
     -------------------------------------------------
     41. fade top gsap animation
     -------------------------------------------------
     42. slide top gsap animation
     -------------------------------------------------
     43. footer image animation
     -------------------------------------------------
     44. vanilla tilt animation

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
     * 02. odometer counter
     * ======================================
     */
    $(".odometer").each(function () {
      $(this).isInViewport(function (status) {
        if (status === "entered") {
          for (
            var i = 0;
            i < document.querySelectorAll(".odometer").length;
            i++
          ) {
            var el = document.querySelectorAll(".odometer")[i];
            el.innerHTML = el.getAttribute("data-odometer-final");
          }
        }
      });
    });

    /**
     * ======================================
     * 03.  banner large image slider
     * ======================================
     */
    $(".banner__large-slider").not(".slick-initialized").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 0,
      speed: 10000,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      draggable: false,
      variableWidth: true,
      cssEase: "linear",
    });

    /**
     * ======================================
     * 04.  banner small image slider
     * ======================================
     */
    $(".banner__small-slider").not(".slick-initialized").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 0,
      speed: 10000,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      draggable: false,
      variableWidth: true,
      rtl: true,
      cssEase: "linear",
    });

    /**
     * ======================================
     * 05. text slider
     * ======================================
     */
    $(".text-slider").not(".slick-initialized").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 0,
      speed: 8000,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      draggable: false,
      variableWidth: true,
      cssEase: "linear",
    });

    /**
     * ======================================
     * 06. large text slider
     * ======================================
     */
    $(".text-slider-large").not(".slick-initialized").slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 0,
      speed: 8000,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      draggable: false,
      variableWidth: true,
      cssEase: "linear",
    });

    $(".text-slider-large-rtl").not(".slick-initialized").slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 0,
      speed: 12000,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      draggable: false,
      variableWidth: true,
      cssEase: "linear",
      rtl: true,
    });

    /**
     * ======================================
     * 07. partner slider
     * ======================================
     */
    $(".partner__slider").slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
      speed: 4000,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      centerMode: true,
      centerPadding: "0px",
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },

        {
          breakpoint: 424,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    });

    /**
     * ======================================
     * 08. sposnor slider
     * ======================================
     */
    $(".sponsor__slider")
      .not(".slick-initialized")
      .slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 8000,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        draggable: false,
        variableWidth: false,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },

          {
            breakpoint: 576,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
        ],
      });

    /**
     * ======================================
     * 09. showcase slider
     * ======================================
     */
    $(".showcase__slider")
      .not(".slick-initialized")
      .slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 8000,
        arrows: false,
        dots: false,
        pauseOnHover: true,
        draggable: false,
        variableWidth: false,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 425,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      });

    /**
     * ======================================
     * 10. particles background
     * ======================================
     */
    if ($("#particles-js").length) {
      particlesJS("particles-js", {
        particles: {
          number: {
            value: 180,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#0a1968",
          },
          shape: {
            type: "circle",
            stroke: {
              width: 1,
              color: "#0a1968",
            },
            shadow: {
              enable: true,
              color: "#0B1234",
              blur: 50,
              offset: {
                x: 0,
                y: 0,
              },
            },
            polygon: {
              nb_sides: 5,
            },
            image: {
              src: "img/github.svg",
              width: 300,
              height: 300,
            },
          },
          opacity: {
            value: 1,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.3,
              sync: false,
            },
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.3,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#0a1968",
            opacity: 0.6,
            width: 1,
          },
          move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "grab",
            },
            onclick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 140,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 400,
              size: 80,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      });
    }

    /**
     * ======================================
     * 11.  product masonry
     * ======================================
     */
    function masonryMain() {
      if ($(".masonry-grid").length) {
        var $grid = $(".masonry-grid").isotope({
          layoutMode: "packery",
          itemSelector: ".grid-item-main",
        });

        var filterFns = {
          all: function () {
            return true;
          },
        };

        $(".product-filter__wrapper").on("click", "button", function () {
          var filterValue = $(this).attr("data-filter");
          filterValue = filterFns[filterValue] || filterValue;
          $grid.isotope({ filter: filterValue });
        });

        $(".product-filter__wrapper").each(function (i, buttonGroup) {
          var $buttonGroup = $(buttonGroup);
          $buttonGroup.on("click", "button", function () {
            $buttonGroup.find(".active").removeClass("active");
            $(this).addClass("active");
          });
        });

        $grid.isotope({
          transitionDuration: "1200ms",
        });
      }
    }

    masonryMain();

    /**
     * ======================================
     * 12.  category masonry
     * ======================================
     */
    function masonryCategory() {
      if ($(".category-masonry").length) {
        var $grid = $(".category-masonry").isotope({
          layoutMode: "fitRows",
          itemSelector: ".category-item",
        });

        var filterFns = {
          all: function () {
            return true;
          },
        };

        $(".category-filter").on("click", "button", function () {
          var filterValue = $(this).attr("data-filter");
          filterValue = filterFns[filterValue] || filterValue;
          $grid.isotope({ filter: filterValue });
        });

        $(".category-filter").each(function (i, buttonGroup) {
          var $buttonGroup = $(buttonGroup);
          $buttonGroup.on("click", "button", function () {
            $buttonGroup.find(".active").removeClass("active");
            $(this).addClass("active");
          });
        });

        $grid.isotope({
          transitionDuration: "1200ms",
        });
      }
    }

    masonryCategory();

    /**
     * ======================================
     * 13.  case study masonry
     * ======================================
     */
    function masonryCase() {
      if ($(".case-masonry").length) {
        var $grid = $(".case-masonry").isotope({
          layoutMode: "fitRows",
          itemSelector: ".case-item",
        });

        var filterFns = {
          all: function () {
            return true;
          },
        };

        $(".case-filter__wrapper").on("click", "button", function () {
          var filterValue = $(this).attr("data-filter");
          filterValue = filterFns[filterValue] || filterValue;
          $grid.isotope({ filter: filterValue });
        });

        $(".case-filter__wrapper").each(function (i, buttonGroup) {
          var $buttonGroup = $(buttonGroup);
          $buttonGroup.on("click", "button", function () {
            $buttonGroup.find(".active").removeClass("active");
            $(this).addClass("active");
          });
        });

        $grid.isotope({
          transitionDuration: "1200ms",
        });
      }
    }

    masonryCase();

    /**
     * ======================================
     * 14. review slider
     * ======================================
     */
    $(".review__slider").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 6000,
      speed: 3000,
      arrows: false,
      dots: true,
      appendDots: $(".review-pagination"),
      pauseOnHover: true,
      centerMode: true,
      centerPadding: "0px",
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 424,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });

    /**
     * ======================================
     * 15. banner five text slider
     * ======================================
     */
    $(".b-text-slider").not(".slick-initialized").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 0,
      speed: 19000,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      draggable: false,
      variableWidth: true,
      cssEase: "linear",
    });

    $(".b-text-slider-alt").not(".slick-initialized").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 0,
      speed: 24000,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      draggable: false,
      variableWidth: true,
      cssEase: "linear",
      rtl: true,
    });

    /**
     * ======================================
     * 16. case slider
     * ======================================
     */
    $(".c-slide__wrapper")
      .not(".slick-initialized")
      .slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        speed: 2000,
        arrows: false,
        dots: false,
        pauseOnHover: true,
        draggable: false,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      });

    /**
     * ======================================
     * 17. publisher slider
     * ======================================
     */
    $(".publisher__slider")
      .not(".slick-initialized")
      .slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        speed: 2000,
        arrows: false,
        dots: false,
        pauseOnHover: true,
        draggable: false,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 425,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      });

    /**
     * ======================================
     * 18. video popup
     * ======================================
     */
    if (document.querySelector(".video-btn") !== null) {
      $(".video-btn").magnificPopup({
        disableOn: 768,
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
      });
    }

    /**
     * ======================================
     * 19. product details slider
     * ======================================
     */
    $(".large-product-img").not(".slick-initialized").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 1000,
      arrows: false,
      dots: false,
      asNavFor: ".small-product-img",
    });

    $(".small-product-img")
      .not(".slick-initialized")
      .slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: ".large-product-img",
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        arrows: false,
        dots: false,
        focusOnSelect: true,
        centerMode: true,
        centerPadding: "0px",
        responsive: [
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 2,
            },
          },
        ],
      });

    /**
     * ======================================
     * 20. register gsap plugins
     * ======================================
     */
    gsap.registerPlugin(
      ScrollTrigger,
      ScrollSmoother,
      ScrollToPlugin,
      SplitText
    );

    /**
     * ======================================
     * 21.  gsap null config
     * ======================================
     */
    gsap.config({
      nullTargetWarn: false,
      debug: false,
    });

    /**
     * ======================================
     * 22.  target section with gsap
     * ======================================
     */
    $('a[href^="#"]').on("click", function (event) {
      event.preventDefault();

      var target = $(this).attr("href");

      gsap.to(window, {
        scrollTo: {
          y: target,
          offsetY: 50,
        },
        duration: 0.5,
        ease: "power3.inOut",
      });
    });

    /**
     * ======================================
     * 23. smooth scroll with gsap
     * ======================================
     */
    ScrollSmoother.create({
      smooth: 2.2,
      effects: true,
      smoothTouch: 0.1,
    });

    /**
     * ======================================
     * 24.  section subtitle animation
     * ======================================
     */
    if ($(".sub-title-two").length > 0) {
      gsap.utils.toArray(".sub-title-two").forEach((el) => {
        gsap.to(el, {
          "--width": "40px",
          duration: 1,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            markers: false,
          },
        });
      });
    }

    /**
     * ======================================
     * 25.  banner animation
     * ======================================
     */
    if ($(".banner").length > 0) {
      if (device_width >= 768) {
        var tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".banner",
            start: "center center",
            end: "+=40%",
            scrub: 1,
            pin: false,
          },
        });
        tl.to(".banner-thumb-one img", {
          transform: "rotate(14deg)",
          x: "300px",
          opacity: 1,
          duration: 3,
        });
        tl.to(".banner .banner-anime", {
          "--transformY": "300px",
          opacity: 0,
          duration: 3,
        });
      }
    }

    /**
     * ======================================
     * 26.  banner three animation
     * ======================================
     */
    if ($(".banner-three").length > 0) {
      if (device_width >= 768) {
        var tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".banner-three",
            start: "center center",
            end: "+=40%",
            scrub: 1,
            pin: false,
          },
        });
        tl.to(".banner-t-s-thumb", {
          transform: "scale(1.2)",
          y: "300px",
          opacity: 0.5,
          duration: 3,
        });
      }
    }

    /**
     * ======================================
     * 27.  text brief animation
     * ======================================
     */
    if ($(".text-brief").length > 0) {
      if (device_width >= 768) {
        var tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".text-brief",
            start: "center center",
            end: "+=40%",
            scrub: 1,
            pin: false,
          },
        });
        tl.to(".t-br-one img", {
          transform: "scale(1.2)",
          y: "60px",
          opacity: 0.5,
          duration: 2,
        });
        tl.to(
          ".t-br-two img",
          {
            y: "60px",
            opacity: 0.5,
            duration: 2,
          },
          "<"
        );
      }
    }

    /**
     * ======================================
     * 28.  cmn banner image animation
     * ======================================
     */
    if ($(".cmn-banner").length > 0) {
      if (device_width >= 768) {
        var tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".cmn-banner",
            start: "top top",
            end: "+=20%",
            scrub: 1,
            pin: false,
          },
        });
        tl.to(".cmn-banner .thumb-left img", {
          y: "190px",
          duration: 2,
        });
      }
    }

    /**
     * ======================================
     * 29. banner five image animation
     * ======================================
     */
    if ($(".banner-five").length > 0) {
      if (device_width >= 768) {
        var tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".banner-five",
            start: "top top",
            end: "+=20%",
            scrub: 1,
            pin: false,
          },
        });
        tl.to(".banner__five-content h1", {
          y: "390px",
          scale: 1.5,
          zIndex: -1,
          opacity: "0.2",
          duration: 3,
        });
        tl.to(
          ".banner__five-content img",
          {
            scale: 1.3,
            duration: 2,
          },
          0
        );
        tl.to(
          ".b-f-s-thumb",
          {
            y: "-200px",
            duration: 2,
          },
          0
        );
      }
    }

    /**
     * ======================================
     * 30.  large text animation
     * ======================================
     */
    if ($(".b-g-text-slider").length > 0) {
      if (device_width >= 768) {
        var tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".b-g-text-slider",
            start: "top center",
            end: "+=100%",
            scrub: 1,
            pin: false,
          },
        });
        tl.to(".b-g-text-slider", {
          y: "390px",
          scale: 2,
          zIndex: -1,
          opacity: "0.2",
          duration: 6,
        });
      }
    }

    /**
     * ======================================
     * 31.  cta two animation
     * ======================================
     */
    if ($(".cta-two").length > 0) {
      if (device_width >= 768) {
        var tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".cta-two",
            start: "top center",
            end: "+=100%",
            scrub: 1,
            pin: false,
          },
        });
        tl.to(".cta-two__inner", {
          y: "-190px",
          duration: 1,
        });
      }
    }

    /**
     * ======================================
     * 32.  service details sticky
     * ======================================
     */
    if ($(".s-details").length > 0) {
      if (device_width >= 992) {
        const metaElement = document.querySelector(".s-details__content");
        const sidebarElement = document.querySelector(".s-details__sidebar");
        let nullPadding;

        if (device_width >= 1200) {
          nullPadding = 320;
        } else {
          nullPadding: 320;
        }

        ScrollTrigger.create({
          trigger: ".s-details",
          start: "top top",
          end: "bottom top+=" + (metaElement.clientHeight + nullPadding),
          pin: metaElement,
          pinSpacing: false,
          id: "l",
          markers: false,
        });

        ScrollTrigger.create({
          trigger: ".s-details",
          start: "top top",
          end: "bottom top+=" + (sidebarElement.clientHeight + nullPadding),
          pin: sidebarElement,
          pinSpacing: false,
          id: "r",
          markers: false,
        });
      }
    }

    /**
     * ======================================
     * 33.  blog details sticky
     * ======================================
     */
    if ($(".b-details").length > 0) {
      if (device_width >= 992) {
        const metaElement = document.querySelector(".b-details__content");
        const sidebarElement = document.querySelector(".b-details__sidebar");
        let nullPadding;

        if (device_width >= 1200) {
          nullPadding = 320;
        } else {
          nullPadding: 320;
        }

        ScrollTrigger.create({
          trigger: ".b-details",
          start: "top top",
          end: "bottom top+=" + (metaElement.clientHeight + nullPadding),
          pin: metaElement,
          pinSpacing: false,
          id: "e",
          markers: false,
        });

        ScrollTrigger.create({
          trigger: ".b-details",
          start: "top top",
          end: "bottom top+=" + (sidebarElement.clientHeight + nullPadding),
          pin: sidebarElement,
          pinSpacing: false,
          id: "f",
          markers: false,
        });
      }
    }

    /**
     * ======================================
     * 34.  shop sticky
     * ======================================
     */
    if ($(".shop").length > 0) {
      if (device_width >= 992) {
        const metaElement = document.querySelector(".shop__content");
        const sidebarElement = document.querySelector(".shop__sidebar");
        let nullPadding;

        if (device_width >= 992) {
          nullPadding = 320;
        } else {
          nullPadding: 320;
        }

        ScrollTrigger.create({
          trigger: ".shop",
          start: "top top",
          end: "bottom top+=" + (metaElement.clientHeight + nullPadding),
          pin: metaElement,
          pinSpacing: false,
          id: "e",
          markers: false,
        });

        ScrollTrigger.create({
          trigger: ".shop",
          start: "top top",
          end: "bottom top+=" + (sidebarElement.clientHeight + nullPadding),
          pin: sidebarElement,
          pinSpacing: false,
          id: "f",
          markers: false,
        });
      }
    }

    /**
     * ======================================
     * 35.  case details sticky
     * ======================================
     */
    if ($(".case-details__content").length > 0) {
      if (device_width >= 992) {
        const metaElement = document.querySelector(".case-d-content-left");
        const sidebarElement = document.querySelector(".case-d-content-right");
        let nullPadding;

        if (device_width >= 1200) {
          nullPadding = 0;
        } else {
          nullPadding: 0;
        }

        ScrollTrigger.create({
          trigger: ".case-details__content",
          start: "top top+=180px",
          end: "bottom top+=" + (metaElement.clientHeight + 180),
          pin: metaElement,
          pinSpacing: false,
          id: "e",
          markers: false,
        });

        ScrollTrigger.create({
          trigger: ".case-details__content",
          start: "top top",
          end: "bottom top+=" + (sidebarElement.clientHeight + nullPadding),
          pin: sidebarElement,
          pinSpacing: false,
          id: "f",
          markers: false,
        });
      }
    }

    /**
     * ======================================
     * 36. image reveal animation
     * ======================================
     */
    if ($(".reveal-img").length > 0) {
      gsap.utils.toArray(".reveal-img").forEach((el) => {
        gsap.to(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            markers: false,
            onEnter: () => {
              el.classList.add("reveal-img-active");
            },
          },
        });
      });
    }

    /**
     * ======================================
     * 37. parallax image effects
     * ======================================
     */
    if ($(".parallax-img").length > 0) {
      if (device_width >= 992) {
        gsap.utils.toArray(".parallax-img").forEach((el) => {
          var tl = gsap.timeline({
            scrollTrigger: {
              trigger: el,
              start: "center center",
              end: "+=40%",
              scrub: 1,
              pin: false,
              invalidateOnRefresh: true,
            },
          });
          tl.to(el, {
            y: "120px",
            zIndex: "-1",
            opacity: 0.3,
            duration: 2,
          });
        });
      }
    }

    /**
     * ======================================
     * 38. appear down
     * ======================================
     */
    $(".appear-down").each(function () {
      const section = $(this);
      gsap.fromTo(
        section,
        {
          scale: 0.8,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          scrollTrigger: {
            trigger: section[0],
            scrub: 1,
            start: "top bottom",
            end: "bottom center",
            markers: false,
          },
        }
      );
    });

    /**
     * ======================================
     * 39. service horizontal move
     * ======================================
     */
    if ($(".service-slider").length > 0) {
      if (device_width >= 992) {
        let sections = gsap.utils.toArray(".service-slider__item");
        let xPercentValue, snapValue;

        const updateScrollTriggerOptions = () => {
          if (device_width < 768) {
            xPercentValue = -100 * (sections.length - 2);
            snapValue = 1 / (sections.length - 2);
          } else if (device_width < 1200) {
            xPercentValue = -100 * (sections.length - 3);
            snapValue = 1 / (sections.length - 3);
          } else {
            xPercentValue = -100 * (sections.length - 4);
            snapValue = 1 / (sections.length - 4);
          }

          gsap.to(sections, {
            xPercent: xPercentValue,
            ease: "none",
            scrollTrigger: {
              trigger: ".service-slider",
              pin: true,
              invalidateOnRefresh: true,
              start: "center center",
              scrub: 1,
              snap: snapValue,
              end: () => "+=" + $(".service-slider").innerWidth(),
            },
          });
        };
        updateScrollTriggerOptions();
        $(window).on("resize", updateScrollTriggerOptions);
      }
    }

    /**
     * ======================================
     * 40. title animation
     * ======================================
     */
    if ($(".title-animation").length > 0) {
      let char_come = gsap.utils.toArray(".title-animation");
      char_come.forEach((char_come) => {
        let split_char = new SplitText(char_come, {
          type: "chars, words",
          lineThreshold: 0.5,
        });
        const tl2 = gsap.timeline({
          scrollTrigger: {
            trigger: char_come,
            start: "top 90%",
            end: "bottom 60%",
            scrub: false,
            markers: false,
            toggleActions: "play none none none",
          },
        });
        tl2.from(split_char.chars, {
          duration: 0.8,
          x: 70,
          autoAlpha: 0,
          stagger: 0.03,
        });
      });
    }

    /**
     * ======================================
     * 41. fade top gsap animation
     * ======================================
     */
    if ($(".fade-wrapper").length > 0) {
      $(".fade-wrapper").each(function () {
        var section = $(this);
        var fadeItems = section.find(".fade-top");

        fadeItems.each(function (index, element) {
          var delay = index * 0.15;

          gsap.set(element, {
            opacity: 0,
            y: 100,
          });

          ScrollTrigger.create({
            trigger: element,
            start: "top 100%",
            end: "bottom 20%",
            scrub: 0.5,
            onEnter: function () {
              gsap.to(element, {
                opacity: 1,
                y: 0,
                duration: 1,
                delay: delay,
              });
            },
            once: true,
          });
        });
      });
    }

    /**
     * ======================================
     * 42. slide top gsap animation
     * ======================================
     */
    $(".slide-top").each(function () {
      const section = $(this);
      gsap.fromTo(
        section,
        {
          scale: 0.8,
          opacity: 0,
          y: 140,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          y: 0,
          scrollTrigger: {
            trigger: section[0],
            scrub: false,
            start: "top bottom",
            end: "bottom center",
            markers: false,
          },
        }
      );
    });

    /**
     * ======================================
     * 43. footer image animation
     * ======================================
     */
    if ($(".footer").length > 0) {
      if (device_width >= 768) {
        var tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".footer",
            start: "top center",
            end: "+=40%",
            scrub: 0.5,
            pin: false,
          },
        });
        tl.to(".footer__content .light-title span", {
          "--opacity": 1,
          "--transformY": 0,
          duration: 3,
        });
        tl.to(".footer-thumb-one img", {
          transform: "rotate(-24deg)",
          x: "0px",
          opacity: 1,
          duration: 3,
        });
        tl.to(".footer-thumb-two img", {
          y: "0px",
          opacity: 1,
          duration: 3,
        });
      }
    }

    /**
     * ======================================
     * 44. vanilla tilt animation
     * ======================================
     */
    let topylotilt = document.querySelectorAll(".topy-tilt");

    if (topylotilt) {
      VanillaTilt.init(document.querySelectorAll(".topy-tilt"), {
        max: 5,
        speed: 3000,
      });
    }
  });
})(jQuery);
