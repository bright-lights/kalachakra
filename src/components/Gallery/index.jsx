import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GalleryImage from "./galleryImage";
import ah_hum_om_fast from "./../assets/ah_hum_om_fast.gif";
import ah_hum_om_medium from "./../assets/ah_hum_om_medium.gif";
import ah_hum_om_slow from "./../assets/ah_hum_om_slow.gif";
import ah_hum_om_desert from "./../assets/ah_hum_om_desert.jpg";

// timer https://www.npmjs.com/package/react-compound-timer

const useStyles = makeStyles(theme => ({
  container: {
    width: "100%",
    height: "400px",
    backgroundColor: "gray",
    display: "flex",
    // justifyContent: "space-around",
    alignItems: "center",
    overflow: "scroll"
  }
}));

const images = [
  { source: ah_hum_om_slow, title: "Slow" },
  { source: ah_hum_om_medium, title: "Medium" },
  { source: ah_hum_om_fast, title: "Fast" },
  { source: ah_hum_om_desert, title: "Desert Background" }
];

export default function Gallery({ selectImage }) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      {images.map((image, index) => {
        return (
          <GalleryImage
            title={image.title}
            source={image.source}
            selectImage={selectImage}
          ></GalleryImage>
        );
      })}
    </div>
  );
}
