import React from "react";
import "./Reaction.css";
const ReactionGiphy = ({ giphy }) => {
  return (
    <div>
      <img
        className="reaction_img"
        src={giphy.images.downsized.url}
        alt={giphy.title}
      />
      <p>{giphy.title}</p>
    </div>
  );
};
export default ReactionGiphy;