<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Bola Norte</title>

    <link rel="stylesheet" href="Escanear.css">
    <link rel="stylesheet" href="menbar.css">

    <script src="LIB/aframe.min.js"></script>
    <script src="LIB/mindar-image-aframe.prod.js"></script>
</head>


<body>
    <?php include 'menbar.php'; ?>
    <main class="capturar-container">

        <h1>Escanear</h1>

        <button id="btnCamara">
            Activar cámara
        </button>

        <a-scene
            id="escenaAR"

            mindar-image="
                imageTargetSrc: ./targets.mind;
                autoStart: true;
                uiLoading: yes;
                uiScanning: yes;
                uiError: yes;
            "
            color-space="sRGB"

            renderer="
                colorManagement: true;
                physicallyCorrectLights: true;
                preserveDrawingBuffer: true;
            "
            vr-mode-ui="enabled: false"

            device-orientation-permission-ui="enabled: false">

            <a-assets>

                <a-asset-item id="assetASL" src="./MODELOS/LOGO_ASL.glb"></a-asset-item>
                <a-asset-item id="assetBLC" src="./MODELOS/LOGO_BLC.glb"></a-asset-item>
                <a-asset-item id="assetBNTJ" src="./MODELOS/LOGO_BNTJ.glb"></a-asset-item>
                <a-asset-item id="assetCTKT" src="./MODELOS/LOGO_CTKT.glb"></a-asset-item>
                <a-asset-item id="assetMENS" src="./MODELOS/LOGO_MENS.glb"></a-asset-item>
                <a-asset-item id="assetTPPS" src="./MODELOS/LOGO_TPPS.glb"></a-asset-item>

            </a-assets>

            <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>

            <a-entity id="targetASL" mindar-image-target="targetIndex: 0">
                <a-gltf-model id="modeloASL" src="#assetASL" position="0 0 0" rotation="0 0 0" scale="0.05 0.05 0.05" animation="property: rotation; to: 0 360 0; loop: true; dur: 3000"></a-gltf-model>
            </a-entity>

            <a-entity id="targetBLC" mindar-image-target="targetIndex: 1">
                <a-gltf-model id="modeloBLC" src="#assetBLC" position="0 0 0" rotation="0 0 0" scale="0.2 0.2 0.2" animation="property: rotation; to: 0 360 0; loop: true; dur: 3000"></a-gltf-model>
            </a-entity>

            <a-entity id="targetBNTJ" mindar-image-target="targetIndex: 2">
                <a-gltf-model id="modeloBNTJ" src="#assetBNTJ" position="0 0 0" rotation="0 0 0" scale="0.15 0.15 0.15" animation="property: rotation; to: 0 360 0; loop: true; dur: 3000"></a-gltf-model>
            </a-entity>

            <a-entity id="targetCTKT" mindar-image-target="targetIndex: 3">
                <a-gltf-model id="modeloCTKT" src="#assetCTKT" position="0 0 0" rotation="0 0 0" scale="0.45 0.45 0.45" animation="property: rotation; to: 0 360 0; loop: true; dur: 3000"></a-gltf-model>
            </a-entity>

            <a-entity id="targetMENS" mindar-image-target="targetIndex: 4">
                <a-gltf-model id="modeloMENS" src="#assetMENS" position="0 0 0" rotation="0 0 0" scale="0.2 0.2 0.2" animation="property: rotation; to: 0 360 0; loop: true; dur: 3000"></a-gltf-model>
            </a-entity>

            <a-entity id="targetTPPS" mindar-image-target="targetIndex: 5">
                <a-gltf-model id="modeloTPPS" src="#assetTPPS" position="0 0 0" rotation="0 0 0" scale="0.45 0.45 0.45" animation="property: rotation; to: 0 360 0; loop: true; dur: 3000"></a-gltf-model>
            </a-entity>

        </a-scene>

        <!-- CONTENEDOR PARA LAS PELOTAS DE BEISBOL -->
        <div id="contenedorBeisbol"></div>

        <div id="controlesModelo" class="controles-modelo">
            
            <button id="btnAnimacion">⏸</button>
            <button id="btnInfo">Información</button> 
            <button id="btnConfeti">Confeti</button>
            <button id="btnDestellos">Destellos</button>
            <button id="btnBeisbol">Béisbol</button>
            <button id="btnFoto">Foto</button>

        </div>
        
        <div id="panelInfo" class="panel-info">
            <div class="contenido-info"> 
                <button id="btnCerrarInfo" class="btn-cerrar-info"> ✕ </button> 
                <h2 id="tituloInfo">Información</h2>
                <h3 id="nombreEquipoInfo"></h3> 
                <p id="descripcionEquipoInfo"></p>
            </div>
        </div>

    </main>

    <script src="LIB/confetti.browser.min.js"></script>
    <script src="Escanear.js"></script>

</body>

</html>