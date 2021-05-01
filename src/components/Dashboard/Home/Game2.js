import React from 'react';
import { Container } from 'react-bootstrap';
import { Link, useHistory } from "react-router-dom"
import Unity, { UnityContext } from "react-unity-webgl";

export default function Game2() {
    return (
        <Container className="ml-5">
            <Unity unityContext={unityContext}
                matchWebGLToCanvasSize={true}
                style={{ width:"1280px", height:"720px" }}

            />
        </Container>

    )
}



const unityContext = new UnityContext({
    codeUrl: "/buildEC/EC.wasm",
    frameworkUrl: "/buildEC/EC.framework.js",
    dataUrl: "/buildEC/EC.data",
    loaderUrl: "/buildEC/EC.loader.js"
});