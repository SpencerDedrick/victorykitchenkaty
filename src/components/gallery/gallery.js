import React from "react";
import Gallery from "react-photo-gallery";
import "./gallery.css";

const photos = [
  {
    src: require("../../Photos/Photo1.jpeg"),
    width: 4,
    height: 3,
  },
  {
    src: require("../../Photos/Photo2.jpeg"),
    width: 4,
    height: 3,
  },
  {
    src: require("../../Photos/Photo3.jpeg"),
    width: 3,
    height: 4,
  },
  {
    src: require("../../Photos/Photo4.jpeg"),
    width: 4,
    height: 3,
  },
  {
    src: require("../../Photos/Photo5.jpeg"),
    width: 3,
    height: 5,
  },
  {
    src: require("../../Photos/Photo6.jpeg"),
    width: 3,
    height: 4,
  },
  {
    src: require("../../Photos/Photo7.jpeg"),
    width: 5,
    height: 3,
  },
  {
    src: require("../../Photos/Photo8.jpeg"),
    width: 3,
    height: 5,
  },
  {
    src: require("../../Photos/Photo9.jpeg"),
    width: 3,
    height: 5,
  },
  {
    src: require("../../Photos/Photo10.jpeg"),
    width: 5,
    height: 3,
  },
  {
    src: require("../../Photos/Photo11.jpeg"),
    width: 5,
    height: 3,
  },
  {
    src: require("../../Photos/Photo12.jpeg"),
    width: 3,
    height: 5,
  },
  {
    src: require("../../Photos/Photo13.jpeg"),
    width: 3,
    height: 5,
  },
  {
    src: require("../../Photos/Photo14.jpeg"),
    width: 3,
    height: 5,
  },
  {
    src: require("../../Photos/Photo15.jpeg"),
    width: 3,
    height: 5,
  },
  {
    src: require("../../Photos/Photo16.jpeg"),
    width: 3,
    height: 5,
  },
  {
    src: require("../../Photos/Photo17.jpeg"),
    width: 5,
    height: 3,
  },
  {
    src: require("../../Photos/Photo18.jpeg"),
    width: 3,
    height: 5,
  },
  {
    src: require("../../Photos/Photo19.jpeg"),
    width: 5,
    height: 3,
  },
  {
    src: require("../../Photos/Photo20.jpeg"),
    width: 5,
    height: 3,
  },
];

const Gallery1 = () => {
  return (
    <div className="gallery">
      <Gallery photos={photos} />
    </div>
  );
};

export default Gallery1;
