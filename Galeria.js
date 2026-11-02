document.addEventListener("DOMContentLoaded", function () {
    const imagenes = document.querySelectorAll("[data-imagen]");
    const videos = document.querySelectorAll("[data-video]");
    const editor = document.getElementById("editor");
    const imagenGrande = document.getElementById("imagenGrande");
    const videoGrande = document.getElementById("videoGrande");
    const cerrarEditor = document.getElementById("cerrarEditor");
    const botonesFiltro = document.querySelectorAll(".filtro-btn");
    let elementoActivo = null;

    function abrirEditor(elemento, esVideo) {
        videoGrande.pause();
        videoGrande.removeAttribute("src");
        videoGrande.load();
        imagenGrande.removeAttribute("src");
        quitarFiltros();

        imagenGrande.style.display = esVideo ? "none" : "block";
        videoGrande.style.display = esVideo ? "block" : "none";
        elementoActivo = esVideo ? videoGrande : imagenGrande;

        if (esVideo) {
            videoGrande.src = elemento.currentSrc || elemento.src;
            videoGrande.load();
        } else {
            imagenGrande.src = elemento.src;
            imagenGrande.alt = elemento.alt;
            imagenGrande.parentElement.style.setProperty("--imagen-url", `url("${elemento.src}")`);
        }

        editor.classList.add("abierto");
        document.body.style.overflow = "hidden";
    }

    imagenes.forEach(imagen => {
        imagen.addEventListener("click", () => abrirEditor(imagen, false));
    });
    videos.forEach(video => {
        video.addEventListener("click", () => abrirEditor(video, true));
    });

    function quitarFiltros() {
        const filtros = ["normal", "aberracion", "glitch", "neon", "glow", "cyber", "desenfoque", "calido", "frio", "intenso", "oscuro", "retro"];
        [imagenGrande, videoGrande].forEach(elemento => {
            filtros.forEach(filtro => elemento.classList.remove("filtro-" + filtro));
        });
        botonesFiltro.forEach(boton => {
            boton.classList.toggle("activo", boton.dataset.filtro === "normal");
        });
    }

    botonesFiltro.forEach(boton => {
        boton.addEventListener("click", function () {
            if (!elementoActivo) return;
            quitarFiltros();
            elementoActivo.classList.add("filtro-" + boton.dataset.filtro);
            boton.classList.add("activo");
            document.querySelector('[data-filtro="normal"]')?.classList.toggle("activo", boton.dataset.filtro === "normal");
        });
    });

    function cerrarEditorVentana() {
        videoGrande.pause();
        videoGrande.removeAttribute("src");
        videoGrande.load();
        editor.classList.remove("abierto");
        document.body.style.overflow = "";
        quitarFiltros();
        elementoActivo = null;
    }

    cerrarEditor.addEventListener("click", cerrarEditorVentana);
    editor.addEventListener("click", function (event) {
        if (event.target === editor) cerrarEditorVentana();
    });
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && editor.classList.contains("abierto")) cerrarEditorVentana();
    });
});
