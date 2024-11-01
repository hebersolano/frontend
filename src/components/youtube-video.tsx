"use client";
// import LiteYouTubeEmbed from "react-lite-youtube-embed";
// import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

function YoutubeVideo() {
  return (
    <div className="h-[800px] bg-green-200">
      {/* <LiteYouTubeEmbed
        id="o6ztBsSAXSU"
        title="What’s new in Material Design for the web (Chrome Dev Summit 2019)"
      /> */}
      <iframe
        width="732"
        height="412"
        src="https://www.youtube.com/embed/o6ztBsSAXSU"
        title="Torrefactora de Café Herrera | Café San Luis"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default YoutubeVideo;
