import logo from './logo.svg';


// Get started by creating a new React 
// component and importing the libraries!

import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";

export class App extends React.Component {
  constructor(props) {
    super(props);

    // Next up create a new Unity Context object to 
    // initialise and define your WebGL build. The 
    // paths are relative from your index file.

    this.unityContext = new UnityContext({
      loaderUrl: "build/build_1/Build/build_1.loader.js",
      dataUrl: "build/build_1/Build/build_1.data",
      frameworkUrl: "build/build_1/Build/build_1.framework.js",
      codeUrl: "build/build_1/Build/build_1.wasm",
    });
  }

  render() {

    // Finally render the Unity component and pass
    // the Unity context through the props.

    return <Unity unityContext={this.unityContext} />;
  }
}

export default App;