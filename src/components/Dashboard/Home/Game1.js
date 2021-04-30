import React from 'react';
import {Container} from 'react-bootstrap';
import { Link, useHistory } from "react-router-dom"
import Unity, { UnityContext } from "react-unity-webgl";

export default function Game1() {
  return(
  <Container className="ml-5">
 <Unity unityContext={unityContext} 
  matchWebGLToCanvasSize={false}
  style={{ width: "1600px", height: "1000px" }}
  />
 </Container>

  ) 
}



const unityContext = new UnityContext({
codeUrl: "/buildAH/AsteroidHarvest1.wasm",
frameworkUrl: "/buildAH/AsteroidHarvest1.framework.js",
dataUrl: "/buildAH/AsteroidHarvest1.data",
loaderUrl: "/buildAH/AsteroidHarvest1.loader.js",
});