export function modoOscuro(btn, classDark) {
  const $boton = document.querySelector(btn);
  const $selectors = document.querySelectorAll("[data-dark]");

  const lightMode = () => {
    $boton.classList.remove(classDark);
    $boton.textContent = "DARK";
    $selectors.forEach((x) => {
      x.classList.remove(classDark);
    });
  };
  const darkMode = () => {
    $boton.classList.add(classDark);
    $boton.textContent = "LIGHT";
    $selectors.forEach((x) => {
      x.classList.add(classDark);
    });
  };
  document.addEventListener("click", (e) => {
    if (e.target.id === "boton3") {
      if ($boton.classList.contains(classDark)) {
        lightMode();
        localStorage.setItem("modo", "light");
      } else {
        darkMode();
        localStorage.setItem("modo", "dark");
      }
    }
  });
  document.addEventListener("DOMContentLoaded", () => {
   ;
    if (localStorage.getItem("modo") === null) {
     
      localStorage.setItem("modo", "light");
      lightMode();
    }
    if (localStorage.getItem("modo") === "light") {
      lightMode();

   
    }
    if (localStorage.getItem("modo") === "dark") {
      darkMode();
      
    }
  });
}
