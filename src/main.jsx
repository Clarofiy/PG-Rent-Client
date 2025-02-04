import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
     domain="dev-idoc54yf27im01ku.us.auth0.com"
     clientId="RtYCJin60TvyEzcvUrJnNZskyXD45nNK"
     authorizationParams={{
      redirect_uri: "https://pg-rent-client.vercel.app"
     }}
     audience="https://vercel.com/clarofiys-projects/pg-rent-server"
     scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
