import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import ArtistCard from "./ArtistCard";

const H2 = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
`;

const Tabs = styled.div`
  border-radius: 2rem;
  border: 2px solid #000;

  button {
    font-weight: 600;
    padding: 1rem 1rem;
  }

  button.active {
    outline: 2px solid #000;
    border-radius: 2rem;
    background: rgb(30, 215, 96);
  }
`;

let topArtistsURL = `https://api.spotify.com/v1/me/top/artists?time_range=short_term`;

export default function TopArtists({ accessToken }) {
  const [artists, setArtists] = useState(null);
  const [period, setPeriod] = useState(null);

  if (period) {
    topArtistsURL = `https://api.spotify.com/v1/me/top/artists?time_range=${period}`;
  } else {
    setPeriod("short_term");
  }

  useEffect(() => {
    axios
      .get(topArtistsURL, {
        headers: {
          "Authorization": `Bearer ${accessToken}`,
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setArtists(res.data.items);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [period, accessToken]);

  if (!artists) return <h2>Error getting most listened artists</h2>;

  const artistsListItems = artists.map((el) => (
    <ArtistCard imgUrl={el.images[0].url} name={el.name} />
  ));

  return (
    <div>
      <H2>Most listened artists</H2>
      <Tabs className="tabs flex md:inline-block justify-between my-4 w-full md:w-auto">
        <button
          className={period === "short_term" ? "active" : ""}
          onClick={() => setPeriod("short_term")}
        >
          last 4 weeks
        </button>
        <button
          className={period === "medium_term" ? "active" : ""}
          onClick={() => setPeriod("medium_term")}
        >
          last year
        </button>
        <button
          className={period === "long_term" ? "active" : ""}
          onClick={() => setPeriod("long_term")}
        >
          all time
        </button>
      </Tabs>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-fr">
        {artistsListItems}
      </div>
    </div>
  );
}
