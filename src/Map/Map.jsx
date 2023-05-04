import React from "react"
import styled from "styled-components"
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.3/dist/leaflet.css"
integrity="sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI="
crossorigin=""/>


const Maps = styled('div')`
#map { height: 180px; }
`

function map(){
    return(
        <Maps>
        <div id="map"></div>
        </Maps>
    )
}

export default map;
<script src="https://unpkg.com/leaflet@1.9.3/dist/leaflet.js"
integrity="sha256-WBkoXOwTeyKclOHuWtc+i2uENFpDZ9YPdf5Hf+D7ewM="
crossorigin=""></script>

