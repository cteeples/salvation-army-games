import logo from './logo.svg';
import './App.css';

//import TestGame from './TestGame.js'
import Unity, { UnityContext } from "react-unity-webgl";






const unityContext = new UnityContext({
  loaderUrl: "build/build_2/Build/build_2.loader.js",
  dataUrl: "build/build_2/Build/build_2.data.gz",
  frameworkUrl: "build/build_2/Build/build_2.framework.js.gz",
  codeUrl: "build/build_2/Build/build_2.wasm.gz",
});



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Unity unityContext={unityContext} />;

    </div>

    
  );
}





export default App;
