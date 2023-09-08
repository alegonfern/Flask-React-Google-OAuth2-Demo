import logo from "./logo.svg";
import "./App.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Auth from "./auth/auth";
import React from "react";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GoogleOAuthProvider clientId="743589702684-8oqjrv6994hco1eb5cemq6lv3fa798f4.apps.googleusercontent.com">
          <Auth></Auth>
        </GoogleOAuthProvider>
      </header>
    </div>
  );
}

export default App;
