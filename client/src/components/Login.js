import React from "react";

const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const SCOPES = "user-read-private user-read-email user-top-read";
const REDIRECT_URL = process.env.REACT_APP_REDIRECT_URL;

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
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold mb-4">Welcome to Spotify Stats</h1>
      <a
        className="border-4 border-black rounded-full p-4 bg-green-400 hover:bg-green-500 transition duration-500 ease-in-out font-bold"
        href={AUTH_URL}
      >
        login with spotify
      </a>
    </div>
  );
}
