// Alternar a visibilidade de menus suspensos
function toggleMenu(menuId) {
    const menu = document.getElementById(menuId);
    if (menu) {
        menu.style.display = menu.style.display === "block" ? "none" : "block";
    }
}

// Mostrar conteúdo baseado no ID
function showContent(contentId) {
    // Ocultar todos os conteúdos
    const contents = document.querySelectorAll(".container-box-content");
    contents.forEach(content => {
        content.style.display = "none";
    });

    // Mostrar o conteúdo selecionado
    const selectedContent = document.getElementById(contentId);
    if (selectedContent) {
        selectedContent.style.display = "block";
    }
}

// Fechar menus ao clicar fora
window.onclick = function (event) {
    if (!event.target.closest(".dropdown-content") && !event.target.matches(".container-btn-01")) {
        const menus = document.querySelectorAll(".dropdown-content");
        menus.forEach(menu => {
        menu.style.display = "none";
        });
    }
};
