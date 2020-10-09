import React from 'react'
import "./VideoRow.css"

function VideoRow({views,channel,subs,title,timestamp,description,image}) {
    return (
      <div className="videoRow">
        <img src={image} />
        <div className="videoRow__description">
          <h4>{title}</h4>
    <p>{channel} * {subs} subscribers * {views} views * {timestamp}</p>
          <p>{description}</p>
        </div>
      </div>
    );
}

export default VideoRow
