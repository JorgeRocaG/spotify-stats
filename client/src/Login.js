import React from "react";
import { Container } from "react-bootstrap";

const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const SCOPES = "user-read-private user-read-email";
const REDIRECT_URL = "http://localhost:3000";

const AUTH_URL =
  "https://accounts.spotify.com/authorize" +
  "?response_type=code" +
  "&client_id=" +
  CLIENT_ID +
  (SCOPES ? "&scope=" + encodeURIComponent(SCOPES) : "") +
  "&redirect_uri=" +
  REDIRECT_URL;

export default function Login() {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <a className="btn btn-success btn-large" href={AUTH_URL}>
        Login with Spotify
      </a>
    </Container>
  );
}
