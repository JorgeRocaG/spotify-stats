import React from "react";
import axios from "axios";

const topArtistsURL =
  "https://api.spotify.com/v1/me/top/artists?time_range=long_term";

export default function TopArtists({ accessToken }) {
  const [artists, setArtists] = React.useState(null);

  React.useEffect(() => {
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
  }, [accessToken]);

  if (!artists) return <h2>Error getting most listened artists</h2>;

  console.log(artists);
  const artistsListItems = artists.map((el) => (
    <div className="card col-4">
      <img src={el.images[0].url} alt={el.name} />
      <p>{el.name}</p>
    </div>
  ));

  return (
    <div>
      <h2>Most listened artists (all time)</h2>
      <div className="row">{artistsListItems}</div>
    </div>
  );
}
