<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />

    <style>
      .swiper {
        width: 600px;
        height: 300px;
      }
    </style>
  </head>
  <body>
    <!-- Slider main container -->
    <div class="swiper">
      <!-- Additional required wrapper -->
      <div class="swiper-wrapper">
        <!-- Slides -->
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
        <!-- Add more slides here -->
        <div class="swiper-slide">Slide 4</div>
        <div class="swiper-slide">Slide 5</div>
        <div class="swiper-slide">Slide 6</div>
        <!-- Add more slides here -->
      </div>

      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>

    </div>

    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
    <script>
      document.addEventListener('DOMContentLoaded', function() {
        const swiper = new Swiper(".swiper", {
          // Optional parameters
          direction: "horizontal",
          loop: true,
          slidesPerView: 4, // Number of slides per view

          // If we need pagination
          pagination: {
            el: ".swiper-pagination",
          },

          // Navigation arrows
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },

          // And if we need scrollbar
          // scrollbar: {
          //   el: ".swiper-scrollbar",
          // },
        });
      });
    </script>
  </body>
</html>
