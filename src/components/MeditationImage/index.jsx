import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  meditationImage: {
    height: "100%"
    // display: "none"
  }
});

export default function MeditationImage({ selectedImage }) {
  const classes = useStyles();
  return (
    <img src={selectedImage} className={classes.meditationImage} alt=""></img>
  );
}

MeditationImage.propTypes = {
  selectedImage: PropTypes.string.isRequired
};
