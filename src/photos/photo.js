import React from "react";

function Photo({ match }) {
   return(
    <div>
      <img
        src={require(`./${match.params.person}.jpg`)}
        alt="test"
        height="200"
        width="200"
      />
    </div>
  );
};

export default Photo;
