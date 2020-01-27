import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  card: {
    minWidth: "345px",
    margin: "0 40px"
  }
});

export default function GalleryImage({ title, source, selectImage }) {
  const classes = useStyles();
  return (
    <Card className={classes.card} onClick={selectImage}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={title}
          height="140"
          image={source}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

GalleryImage.propTypes = {
  title: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired
};
