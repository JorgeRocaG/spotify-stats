import React from "react";
import axios from "axios";

const meURL = "https://api.spotify.com/v1/me";

export default function User({ accessToken }) {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    axios
      .get(meURL, {
        headers: {
          "Authorization": `Bearer ${accessToken}`,
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((res) => setUser(res.data))
      .catch((error) => {
        console.error(error);
      });
  }, [accessToken]);

  if (!user) return null;

  console.log(user);

  return (
    <div className="d-flex justify-content-center align-items-center">
      <h1>Hola {user.display_name}</h1>
      <img src={user.images[0].url} alt="profile picure" />
      <a
        href={user.external_urls.spotify}
        className="btn btn-primary"
        target="_blank"
        rel="noreferrer"
      >
        See my profile
      </a>
    </div>
  );
}
