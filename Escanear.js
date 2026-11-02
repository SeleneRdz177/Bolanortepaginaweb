document.addEventListener("DOMContentLoaded", function () {
    // ELEMENTOS
    const targetASL = document.getElementById("targetASL");
    const modeloASL = document.getElementById("modeloASL");
    const targetBLC = document.getElementById("targetBLC");
    const modeloBLC = document.getElementById("modeloBLC");
    const targetBNTJ = document.getElementById("targetBNTJ");
    const modeloBNTJ = document.getElementById("modeloBNTJ");
    const targetCTKT = document.getElementById("targetCTKT");
    const modeloCTKT = document.getElementById("modeloCTKT");
    const targetMENS = document.getElementById("targetMENS");
    const modeloMENS = document.getElementById("modeloMENS");
    const targetTPPS = document.getElementById("targetTPPS");
    const modeloTPPS = document.getElementById("modeloTPPS");
    
    const escena = document.getElementById("escenaAR");
    const controlesModelo = document.getElementById("controlesModelo");

    const btnCamara = document.getElementById("btnCamara");
    const btnConfeti = document.getElementById("btnConfeti");
    const btnDestellos = document.getElementById("btnDestellos");
    const btnBeisbol = document.getElementById("btnBeisbol");
    const btnFoto = document.getElementById("btnFoto");
    const btnAnimacion = document.getElementById("btnAnimacion");

    const btnInfo = document.getElementById("btnInfo");
    const panelInfo = document.getElementById("panelInfo");
    const btnCerrarInfo = document.getElementById("btnCerrarInfo");
    const nombreEquipoInfo = document.getElementById("nombreEquipoInfo");
    const descripcionEquipoInfo = document.getElementById("descripcionEquipoInfo");

    const informacionEquipos = {
        Algodoneros: { nombre: "Algodoneros de San Luis", descripcion: "Los Algodoneros de San Luis representan a San Luis Río Colorado, Sonora, y actualmente participan en la Liga Norte de México. Su casa es el Estadio Algodoneros." },
        Bucaneros: { nombre: "Bucaneros de Los Cabos", descripcion: "Los Bucaneros de Los Cabos representan a Los Cabos, Baja California Sur, dentro de la Liga Norte de México." },
        Barbanegras: { nombre: "Barbanegras de Tijuana", descripcion: "Los Barbanegras representan a Tijuana, Baja California, dentro de la Liga Norte de México." },
        Cerveceros: { nombre: "Cerveceros de Tecate", descripcion: "Los Cerveceros de Tecate representan a Tecate, Baja California, dentro de la Liga Norte de México." },
        Marineros: { nombre: "Marineros de Ensenada", descripcion: "Los Marineros de Ensenada representan a Ensenada, Baja California, dentro de la Liga Norte de México." },
        Tiburones: { nombre: "Tiburones de Puerto Peñasco", descripcion: "Los Tiburones de Puerto Peñasco representan a Puerto Peñasco, Sonora, dentro de la Liga Norte de México." }
    };
    
    let sistemaMindAR = null;
    let camaraActiva = false;
    let animacionActiva = true;
    let efectoActivo = false;
    let equipoDetectado = null;
    let modeloDetectado = null;

    controlesModelo.style.display = "none";
    panelInfo.style.display = "none";

    escena.addEventListener("loaded", function () {
        sistemaMindAR = escena.systems["mindar-image-system"];
        activarCamara();
    });

    btnCamara.addEventListener("click", function () {
        if (!camaraActiva) { activarCamara(); } else { desactivarCamara(); }
    });

    function configurarTarget(target, equipo, modelo) {
        target.addEventListener("targetFound", function () {
            equipoDetectado = equipo;
            modeloDetectado = modelo;
            animacionActiva = true;
            btnAnimacion.textContent = "⏸";
            btnCamara.style.display = "none";
            controlesModelo.style.display = "flex";
            panelInfo.style.display = "none";
        });

        target.addEventListener("targetLost", function () {
            if(equipoDetectado === equipo){
                equipoDetectado = null;
                modeloDetectado = null;
            }
            btnCamara.style.display = "block";
            controlesModelo.style.display = "none";
            panelInfo.style.display = "none";
        });
    }

    configurarTarget(targetASL, "Algodoneros", modeloASL);
    configurarTarget(targetBLC, "Bucaneros", modeloBLC);
    configurarTarget(targetBNTJ, "Barbanegras", modeloBNTJ);
    configurarTarget(targetCTKT, "Cerveceros", modeloCTKT);
    configurarTarget(targetMENS, "Marineros", modeloMENS);
    configurarTarget(targetTPPS, "Tiburones", modeloTPPS);

    btnAnimacion.addEventListener("click", function () {
        if (!modeloDetectado) return;
        const animacion = modeloDetectado.components.animation;
        if (!animacion) return;

        if (animacionActiva) {
            animacion.pause();
            animacionActiva = false;
            btnAnimacion.textContent = "▶";
        } else {
            animacion.play();
            animacionActiva = true;
            btnAnimacion.textContent = "⏸";
        }
    });

    btnInfo.addEventListener("click", function () {
        if (!equipoDetectado) return;
        const informacion = informacionEquipos[equipoDetectado];
        if (!informacion) return;
        nombreEquipoInfo.textContent = informacion.nombre;
        descripcionEquipoInfo.textContent = informacion.descripcion;
        panelInfo.style.display = "flex";
    });

    btnCerrarInfo.addEventListener("click", function () {
        panelInfo.style.display = "none";
    });

    // LANZAR CONFETI Y DESTELLOS 
    function lanzarEfectoConfeti(tipo) {
        const duracion = 3000;
        const fin = Date.now() + duracion;

        let opcionesBase = {
            zIndex: 9999,
            scalar: 1,
            useWorker: false
        };

        if (tipo === "confeti") {
            opcionesBase.colors = ["#176987", "#2385a5", "#ffffff", "#ff0080", "#ff478d"];
        }
        else if (tipo === "destellos") {
            opcionesBase.shapes = ['star', 'circle'];
            opcionesBase.colors = ["#FFD700", "#FFF8DC", "#FFFFFF"];
            opcionesBase.scalar = 1.5;
        }

        efectoActivo = true;

        (function frame() {
            confetti({ ...opcionesBase, particleCount: 4, angle: 60, spread: 55, origin: { x: 0 } });
            confetti({ ...opcionesBase, particleCount: 4, angle: 120, spread: 55, origin: { x: 1 } });

            if (Date.now() < fin) {
                requestAnimationFrame(frame);
            } else {
                efectoActivo = false;
            }
        })();
    }

    // LANZAR PELOTAS DE BÉISBOL
    function lanzarBeisbol() {
        const contenedor = document.getElementById("contenedorBeisbol");
        const cantidad = 30;

        for (let i = 0; i < cantidad; i++) {
            setTimeout(() => {
                const pelota = document.createElement("div");
                pelota.classList.add("pelota-beisbol");

                const posX = Math.random() * 100; 
                const posY = 90 + Math.random() * 10;

                const desvio = (Math.random() - 0.5) * 200; 
                const desvioFinal = desvio * 2.5;

                const escala = 0.5 + Math.random() * 0.8;

                pelota.style.left = `${posX}%`;
                pelota.style.top = `${posY}%`;
                
                pelota.style.setProperty('--desvio', `${desvio}px`);
                pelota.style.setProperty('--desvioFinal', `${desvioFinal}px`);
                pelota.style.setProperty('--escala', escala);

                contenedor.appendChild(pelota);

                setTimeout(() => {
                    pelota.classList.add("animar");
                }, 10);

                setTimeout(() => {
                    pelota.remove();
                }, 4000);

            }, i * 80);
        }
    }


    // LISTENERS DE LOS BOTONES
    btnConfeti.addEventListener("click", () => lanzarEfectoConfeti("confeti"));
    btnDestellos.addEventListener("click", () => lanzarEfectoConfeti("destellos"));
    btnBeisbol.addEventListener("click", lanzarBeisbol);


    // TOMAR FOTO
    btnFoto.addEventListener("click", function () {
        const canvasAFrame = escena.renderer && escena.renderer.domElement;
        if (!canvasAFrame) {
            alert("No se encontró el canvas de la escena AR.");
            return;
        }

        const videoCamara = sistemaMindAR && sistemaMindAR.video;

        requestAnimationFrame(function () {
            requestAnimationFrame(function () {
                const canvasFinal = document.createElement("canvas");
                canvasFinal.width = canvasAFrame.width;
                canvasFinal.height = canvasAFrame.height;

                const ctx = canvasFinal.getContext("2d");
                const anchoFinal = canvasFinal.width;
                const altoFinal = canvasFinal.height;
    
                function dibujarCover(imagen, anchoImg, altoImg) {
                    const escala = Math.max(anchoFinal / anchoImg, altoFinal / altoImg);
                    const nuevoAncho = anchoImg * escala;
                    const nuevoAlto = altoImg * escala;
                    const x = (anchoFinal - nuevoAncho) / 2;
                    const y = (altoFinal - nuevoAlto) / 2;
                    ctx.drawImage(imagen, x, y, nuevoAncho, nuevoAlto);
                }

                // 1. CAPA CÁMARA
                if (videoCamara && videoCamara.videoWidth > 0) {
                    dibujarCover(videoCamara, videoCamara.videoWidth, videoCamara.videoHeight);
                }

                // 2. CAPA MODELO 3D
                ctx.drawImage(canvasAFrame, 0, 0, anchoFinal, altoFinal);

                // 3. CAPA CONFETI
                if (efectoActivo) {
                    const canvasConfeti = document.querySelector('canvas[style*="position: fixed"]');
                    if (canvasConfeti) {
                        dibujarCover(canvasConfeti, canvasConfeti.width, canvasConfeti.height);
                    }
                }

                // 4. CAPA PELOTAS DE BÉISBOL
                const contenedorBeisbol = document.getElementById("contenedorBeisbol");
                const pelotas = contenedorBeisbol.querySelectorAll(".pelota-beisbol");
                
                pelotas.forEach((pelota) => {
                    const rect = pelota.getBoundingClientRect();
                    const estilo = window.getComputedStyle(pelota);
                    const matriz = estilo.transform || estilo.webkitTransform;

                    const centroX = rect.left + rect.width / 2;
                    const centroY = rect.top + rect.height / 2;

                    ctx.save();
                    
                    ctx.translate(centroX, centroY);
                    
                    // Giro
                    if (matriz && matriz !== 'none') {
                        const values = matriz.split('(')[1].split(')')[0].split(',');
                        if (values.length >= 4) {
                            const a = parseFloat(values[0]);
                            const b = parseFloat(values[1]);
                            const angulo = Math.atan2(b, a);
                            ctx.rotate(angulo);
                        }
                    }
                    
                    // tamaño 60
                    const escalaReal = rect.width / 60;
                    ctx.scale(escalaReal, escalaReal);

                    // 1. Sombra de la pelota
                    ctx.beginPath();
                    ctx.arc(0, 0, 30, 0, Math.PI * 2);
                    const gradiente = ctx.createRadialGradient(-10, -10, 5, 0, 0, 30);
                    gradiente.addColorStop(0, "#ffffff");
                    gradiente.addColorStop(1, "#dcdcdc");
                    ctx.fillStyle = gradiente;
                    ctx.fill();
                    
                    // Borde sutil
                    ctx.lineWidth = 1;
                    ctx.strokeStyle = "#cccccc";
                    ctx.stroke();

                    // 2. Costuras rojas 
                    ctx.save();
                    ctx.beginPath();
                    ctx.arc(0, 0, 30, 0, Math.PI * 2);
                    ctx.clip(); 

                    ctx.strokeStyle = "#d32f2f";
                    ctx.lineWidth = 2.5;

                    // Costura izquierda
                    ctx.beginPath();
                    ctx.arc(-36, 0, 45, -Math.PI / 2.5, Math.PI / 2.5, false);
                    ctx.stroke();
                    
                    // Costura derecha
                    ctx.beginPath();
                    ctx.arc(36, 0, 45, Math.PI - Math.PI / 2.5, Math.PI + Math.PI / 2.5, false);
                    ctx.stroke();

                    // Puntadas
                    ctx.fillStyle = "#d32f2f";
                    for (let i = -2; i <= 2; i++) {
                        const y = i * 12;
                        // Izquierda
                        ctx.beginPath(); ctx.arc(-21, y, 1.5, 0, Math.PI * 2); ctx.fill();
                        // Derecha
                        ctx.beginPath(); ctx.arc(21, y, 1.5, 0, Math.PI * 2); ctx.fill();
                    }
                    ctx.restore(); 

                    ctx.restore();
                });

                // Descargar
                try {
                    const enlace = document.createElement("a");
                    enlace.download = "foto_AR_" + Date.now() + ".png";
                    enlace.href = canvasFinal.toDataURL("image/png");
                    enlace.click();
                } catch (error) {
                    console.error("Error al generar la foto:", error);
                    alert("No se pudo generar la foto.");
                }
            });
        });
    });

    // ACTIVAR / DESACTIVAR CÁMARA
    async function activarCamara() {
        if (!sistemaMindAR) return;
        try {
            await sistemaMindAR.start();
            camaraActiva = true;
            btnCamara.textContent = "Desactivar cámara";
            escena.classList.add("activa");
        } catch (error) {
            camaraActiva = false;
            btnCamara.textContent = "Activar cámara";
            alert("No se pudo acceder a la cámara.");
        }
    }

    function desactivarCamara() {
        if (!camaraActiva || !sistemaMindAR) return;
        sistemaMindAR.stop();
        camaraActiva = false;
        btnCamara.textContent = "Activar cámara";
        escena.classList.remove("activa");
        controlesModelo.style.display = "none";
        panelInfo.style.display = "none";
        efectoActivo = false;
        document.getElementById("contenedorBeisbol").innerHTML = "";
    }

    const enlacesMenu = document.querySelectorAll(".menu-desplegable a");
    enlacesMenu.forEach(function (enlace) {
        enlace.addEventListener("click", function () {
            desactivarCamara();
        });
    });

    window.addEventListener("pagehide", function () {
        desactivarCamara();
    });

});