import React from "react";

const VideoDetail = ({ video }) => {
  return video ? (
    <div>
      <div className="ui embed">
        <iframe
          width="806"
          height="453"
          src={`https://www.youtube.com/embed/${video.id.videoId}`}
          title="YouTube video player"
          frameBorder={0}
          allowFullScreen
        ></iframe>
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  ) : (
    ""
  );
};

export default VideoDetail;
