import React from "react";
import useAuth from "../hooks/useAuth";
import TopArtists from "./TopArtists";

export default function Dashboard({ code }) {
  const accessToken = useAuth(code);
  return (
    <div className="container">
      <TopArtists accessToken={accessToken} />
    </div>
  );
}
