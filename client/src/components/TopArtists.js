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

  let allGenres = [];

  artists.forEach((artist) => {
    artist.genres.forEach((genre) => {
      if (allGenres.length === 0) {
        allGenres.push({
          genreKey: genre,
          times: 1,
        });
      } else {
        let foundIndex = allGenres.findIndex((x) => x.genreKey === genre);
        if (foundIndex === -1) {
          allGenres.push({
            genreKey: genre,
            times: 1,
          });
        } else {
          allGenres[foundIndex].times++;
        }
      }
    });
  });

  allGenres
    .sort((a, b) => {
      return a.times - b.times;
    })
    .reverse();

  console.log(allGenres);

  const genresListItems = allGenres.map((el) => (
    <li>
      {el.genreKey}: {el.times}
    </li>
  ));

  return (
    <div>
      <h2>Most listened genres</h2>
      <ol>{genresListItems}</ol>
      <h2>Most listened artists (all time)</h2>
      <div className="row">{artistsListItems}</div>
    </div>
  );
}
