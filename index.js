// Contraseña correcta
const passwordCorrecta = "20/09/25";

// Mostrar SweetAlert al cargar
Swal.fire({
  title: '💌 Ingresa la fecha especial',
  input: 'text',
  inputPlaceholder: 'DD/MM/YY',
  confirmButtonText: 'Entrar',
  allowOutsideClick: false,
  allowEscapeKey: false,
  didOpen: () => {
    const input = Swal.getInput();
    input.addEventListener('input', (e) => {
      let v = e.target.value.replace(/\D/g, ""); // solo números

      if (v.length > 2 && v.length <= 4) {
        v = v.slice(0, 2) + "/" + v.slice(2);
      } else if (v.length > 4) {
        v = v.slice(0, 2) + "/" + v.slice(2, 4) + "/" + v.slice(4, 6);
      }
      e.target.value = v.slice(0, 8); // máximo DD/MM/YY
    });
  },
  inputValidator: (value) => {
    if (!/^\d{2}\/\d{2}\/\d{2}$/.test(value)) {
      return 'NOO AMOR, LA FECHA JAJAJAJAJA';
    }
  }
}).then((result) => {
  if (result.value === passwordCorrecta) {
    Swal.fire({
      title: '💖 Correcto 💖',
      text: 'Ola amor, t amo ',
      icon: 'success',
      confirmButtonText: 'Ver sorpresa'
    }).then(() => {
      document.getElementById("secret-section").classList.remove("hidden");
    });
  } else {
    Swal.fire({
      title: '❌ Error ❌',
      text: 'La fecha no es correcta...',
      icon: 'error',
      confirmButtonText: 'Intentar otra vez'
    }).then(() => {
      location.reload();
    });
  }
});

// ---- Carrusel de sorpresas ----
const revealBtn = document.getElementById("revealBtn");
const carousel = document.getElementById("carousel");
const slides = document.querySelectorAll("#carousel .slide");
const nextBtn = document.getElementById("nextBtn");

let current = 0;

// Mostrar la primera sorpresa
if (revealBtn) {
  revealBtn.addEventListener("click", () => {
    carousel.classList.remove("hidden");
    revealBtn.classList.add("hidden");
    slides[0].classList.add("active");
  });
}

// Pasar a la siguiente sorpresa
if (nextBtn) {
  nextBtn.addEventListener("click", () => {
    slides[current].classList.remove("active");
    slides[current].classList.add("hidden");

    current = (current + 1) % slides.length; // bucle infinito

    slides[current].classList.remove("hidden");
    slides[current].classList.add("active");
  });
}
