import React from "react";
import useAuth from "../hooks/useAuth";

import TopArtists from "./TopArtists";

export default function Dashboard({ code }) {
  const accessToken = useAuth(code);

  return (
    <div className="my-4">
      <div className="container mx-auto px-2 md:px-0">
        <TopArtists accessToken={accessToken} />
      </div>
    </div>
  );
}
