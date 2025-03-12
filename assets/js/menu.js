document.addEventListener("DOMContentLoaded", function () {
  let btn = document.getElementById("btnMenu");
  let navbar = document.getElementById("navbar");
  let contador = 1;

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    if (contador == 1) {
      navbar.style.left = "0%";
      contador = 0;
    } else {
      contador = 1;
      navbar.style.left = "-100%";
    }
  });

  const banner = document.querySelector("#banner");
  const rutaBase = window.location.origin + "/assets/img/banner/";
  const imagenes = [
    rutaBase + "banner-1.jpg",
    rutaBase + "banner-2.webp",
    rutaBase + "banner-3.webp",
    rutaBase + "banner-4.webp",
  ];

  let indice = 0;

  const cambiarBanner = () => {
    banner.src = imagenes[indice];
    indice = (indice + 1) % imagenes.length;
  };

  setInterval(cambiarBanner, 3000);

  cambiarBanner();
});
