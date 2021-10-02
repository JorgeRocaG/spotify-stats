import React from "react";
import styled from "styled-components";

export default function ArtistCard({ imgUrl, name }) {
  const ArtistCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0.5rem;
    position: relative;

    border: 2px solid #000;
    border-radius: 2rem;
    background-color: #fff;

    top: 0px;
    right: 0px;
    box-shadow: 0px 0px rgb(30, 215, 96);

    transition: all 0.3s cubic-bezier(0.2, 0.83, 0.44, 0.99);

    :hover {
      top: -8px;
      right: -8px;
      box-shadow: -8px 8px rgb(30, 215, 96);
      transition: all 0.3s cubic-bezier(0.2, 0.83, 0.44, 0.99);
    }

    img {
      border: 2px solid black;
      border-radius: 1.5rem;

      max-height: 9rem;
      object-fit: cover;
    }

    .artist-name {
      display: flex;
      align-items: center;
      height: 100%;
      padding: 0.5rem;

      font-weight: 600;
    }
  `;

  return (
    <ArtistCard className="artist-card">
      <img src={imgUrl} alt={name} className="artist-icon" />
      <div className="artist-name">{name}</div>
    </ArtistCard>
  );
}
