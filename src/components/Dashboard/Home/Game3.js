import React from 'react';
import {Container} from 'react-bootstrap';
import { Link, useHistory } from "react-router-dom";
import Unity, { UnityContext } from "react-unity-webgl";

export default function Game3() {
    return(
    <Container className="ml-5">
            <Unity unityContext={unityContext}
                matchWebGLToCanvasSize={true}
                style={{ width: "1920px", height: "1080px" }}
            />
    </Container>
    ) 
}

const unityContext = new UnityContext({
    codeUrl: "/buildGame3/Chemi-Cool v0.6.3.wasm",
    frameworkUrl: "/buildGame3/Chemi-Cool v0.6.3.framework.js",
    dataUrl: "/buildGame3/Chemi-Cool v0.6.3.data",
    loaderUrl: "/buildGame3/Chemi-Cool v0.6.3.loader.js",

});