import React from "react";
import { Avatar } from '@material-ui/core';
import "./ChannelRow.css";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

function ChannelRow({image,channel,verified,subs,nOfvideos,description}) {
    return (
      <div className="channelRow">
        <Avatar className="channelRow__avatar" src={image} alt="channel" />
        <div className="channelRow__description">
          <h3>
            {channel} {verified && <CheckCircleOutlineIcon />}
          </h3>
          <p>
            {subs} subscribers * {nOfvideos} videos
          </p>
          <p>{description}</p>
        </div>
      </div>
    );
}

export default ChannelRow
