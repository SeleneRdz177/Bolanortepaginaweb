<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Bola Norte</title>

    <link rel="stylesheet" href="Estadis.css">
    <link rel="stylesheet" href="menbar.css">
</head>

<body>

    <?php include 'menbar.php'; ?>

    <main class="contenido-principal">
        <h1>Liga Norte de México</h1>

        <table class="tabla-estadisticas">
            <thead>
                <tr>
                    <th>Equipo</th>
                    <th class="col-stat">G</th>
                    <th class="col-stat">P</th>
                    <th class="col-stat">Pct</th>
                    <th class="col-stat">JV</th>
                    <th class="col-stat">Casa</th>
                    <th class="col-stat">Visita</th>
                    <th class="col-stat">Racha</th>
                </tr>
            </thead>
            <tbody>

                <tr>
                    
                    <td class="col-team" >
                        <a href="Equipo.php?equipo=marineros">
                            <img src="LOGOS/MENS.png" alt="Logo Marineros" class="team-logo"> 
                            Marineros de Ensenada
                        </a>
                    </td>
                    
                    <td class="col-stat">26</td>
                    <td class="col-stat">14</td>
                    <td class="col-stat">0.650</td>
                    <td class="col-stat">0</td>
                    <td class="col-record">14-6</td>
                    <td class="col-record">12-8</td>
                    <td class="col-streak">P1</td>
                </tr>

                <tr>
                    <td class="col-team">
                        <a href="Equipo.php?equipo=barbanegras">
                            <img src="LOGOS/BNTJ.png" alt="Logo Barbanegras" class="team-logo"> 
                            Barbanegras de Tijuana
                        </a>
                    </td>
                    <td class="col-stat">25</td>
                    <td class="col-stat">13</td>
                    <td class="col-stat">0.658</td>
                    <td class="col-stat">0</td>
                    <td class="col-record">15-3</td>
                    <td class="col-record">10-10</td>
                    <td class="col-streak">G4</td>
                </tr>

                <tr>
                    <td class="col-team">
                        <a href="Equipo.php?equipo=bucaneros">
                            <img src="LOGOS/BLC.png" alt="Logo Bucaneros" class="team-logo"> 
                            Bucaneros de Los Cabos
                        </a>
                    </td>
                    <td class="col-stat">21</td>
                    <td class="col-stat">17</td>
                    <td class="col-stat">0.553</td>
                    <td class="col-stat">4</td>
                    <td class="col-record">16-8</td>
                    <td class="col-record">5-9</td>
                    <td class="col-streak">G1</td>
                </tr>

                <tr>
                    <td class="col-team">
                        <a href="Equipo.php?equipo=algodoneros">
                            <img src="LOGOS/ASL.png" alt="Logo Algodoneros" class="team-logo"> 
                            Algodoneros de San Luis
                        </a>
                    </td>
                    <td class="col-stat">21</td>
                    <td class="col-stat">19</td>
                    <td class="col-stat">0.525</td>
                    <td class="col-stat">5</td>
                    <td class="col-record">14-6</td>
                    <td class="col-record">7-13</td>
                    <td class="col-streak">G1</td>
                </tr>

                <tr>
                    <td class="col-team">
                        <a href="Equipo.php?equipo=tiburones">
                            <img src="LOGOS/TPPS.png" alt="Logo Tiburones" class="team-logo"> 
                            Tiburones de Puerto Peñasco
                        </a>
                    </td>
                    <td class="col-stat">19</td>
                    <td class="col-stat">21</td>
                    <td class="col-stat">0.475</td>
                    <td class="col-stat">7</td>
                    <td class="col-record">12-8</td>
                    <td class="col-record">7-13</td>
                    <td class="col-streak">P1</td>
                </tr>

                <tr>
                    <td class="col-team">
                        <a href="Equipo.php?equipo=cerveceros">
                            <img src="LOGOS/CTKT.png" alt="Logo Cerveceros" class="team-logo"> 
                            Cerveceros de Tecate
                        </a>
                    </td>
                    <td class="col-stat">5</td>
                    <td class="col-stat">33</td>
                    <td class="col-stat">0.132</td>
                    <td class="col-stat">20</td>
                    <td class="col-record">3-11</td>
                    <td class="col-record">2-22</td>
                    <td class="col-streak">P13</td>
                </tr>
            </tbody>
        </table>
    </main>

    <script src="Estadis.js"></script>

</body>
</html>