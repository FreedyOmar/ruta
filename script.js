window.onload = () => {
  document.body.classList.remove("container");

  // Mostrar botón después de 5 segundos
  setTimeout(() => {
    const btn = document.getElementById("verCartaBtn");
    if (btn) btn.style.display = "block";
  }, 10000);
};

// Lógica del popup y botón
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("verCartaBtn");
  const popup = document.getElementById("popupCarta");
  const cerrar = document.getElementById("cerrarPopup");

  if (!btn || !popup || !cerrar) return;

  // ABRIR POPUP + OCULTAR BOTÓN
  btn.onclick = () => {
    popup.style.display = "flex";
    btn.style.display = "none"; // ocultar botón mientras el popup está abierto
  };

  // CERRAR POPUP + MOSTRAR BOTÓN
  cerrar.onclick = () => {
    popup.style.display = "none";
    btn.style.display = "block"; // volver a mostrar el botón
  };

  // CERRAR POPUP AL CLIC FUERA + MOSTRAR BOTÓN
  window.onclick = e => {
    if (e.target === popup) {
      popup.style.display = "none";
      btn.style.display = "block";
    }
  };
});
