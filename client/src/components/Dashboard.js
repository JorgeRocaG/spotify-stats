import React from "react";
import useAuth from "../hooks/useAuth";
import User from "./User";
import TopArtists from "./TopArtists";

export default function Dashboard({ code }) {
  const accessToken = useAuth(code);
  return (
    <div className="container">
      <User accessToken={accessToken} />
      <TopArtists accessToken={accessToken} />
    </div>
  );
}
