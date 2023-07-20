import React from "react";
import GamesPlatform from "../component/GamesPlatform";

function GamerByTag() {
  return (
    <div className="backgroundDark">
      <GamesPlatform
        text="Games By Tag."
        startLength={28}
        endLength={40}
        stopShow={40}
      />
    </div>
  );
}

export default GamerByTag;
