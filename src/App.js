import React from "react";
import logo from "./logo.svg";
import "./App.css";
import styles from "./app.module.less";

import StyTest from "./page/components/styleComponent";

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
           <div className={styles.center}>样式测试</div>
           <div className={styles.mixintest}>样式测试mixintest</div>
           {/* <div className={styles.center}>样式测试</div> */}
           {/* <div className={styles.center}>样式测试</div> */}
        </a>

      <StyTest></StyTest>
      </header>

    </div>
  );
}

export default App;
