import React from "react";
import SongArtist from "./SongArtist";
import SongLiric from "./SongLiric";

const SongDetails = ({ search, lyric, bio }) => {
  return (
    <div>
      <h2>Detalles</h2>
      <SongArtist />
      <SongLiric />
    </div>
  );
};
export default SongDetails;
