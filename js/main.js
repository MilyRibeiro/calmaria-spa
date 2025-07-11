function alternarModal(modalId, abrir) {
  const modal = document.getElementById(`${modalId}`);

  if (abrir) {
    modal.style.display = "block";
  } else {
    modal.style.display = "none";
  }

  document.body.style.overflow = abrir ? "hidden" : "auto";
}

document.addEventListener("keydown", (evento) => {
  if (evento.key === "Escape") {
    // fechar o modal de inscrição com esc:
    alternarModal("ver-modal-inscrito", false);

    // fechar o submenu com esc:
    document.querySelectorAll(".cabecalho__lista-item").forEach((item) => {
      alternarSubmenu(item, false);
    });
  }
});

function alternarSubmenu(item, mostrar) {
  const submenu = item.querySelector(".submenu");

  if (submenu) {
    submenu.style.display = mostrar ? "block" : "none";
    menuItem = item.querySelector(".cabecalho__lista-item a");
    menuItem.setAttribute("aria-expanded", mostrar ? "true" : "false");

    const dropDownExpandedIcon = item.querySelector(
      ".material-symbols-outlined.icone"
    );
    dropDownExpandedIcon.classList.toggle("active", mostrar);
  }
}

document.querySelectorAll(".cabecalho__lista-item").forEach((item) => {
  item.addEventListener("mouseover", () => alternarSubmenu(item, true));
  item.addEventListener("mouseout", () => alternarSubmenu(item, false));

  item.addEventListener("click", () => {
    const submenu = item.querySelector(".submenu");
    const isDisplayed = submenu.style.display === "block";

    alternarSubmenu(item, !isDisplayed);
  });
});
