import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";
 
const unityContext = new UnityContext({
  loaderUrl: "build/build1/build_1.loader.js",
  dataUrl: "build/myunityapp.data",
  frameworkUrl: "build/build1/build_1.framework.js",
  codeUrl: "build/build1/build_1..wasm",
});



