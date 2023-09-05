import React from "react";

import Carousel from "react-material-ui-carousel";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Card, CardMedia } from "@mui/material";

function Carrousel(props) {
  const { items } = props;
  return items ? (
    <Carousel
      NextIcon={<ArrowForwardIosIcon />}
      PrevIcon={<ArrowBackIosIcon />}
      navButtonsAlwaysVisible={true}
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  ) : null;
}

function Item(item) {
  item = item.item;
  return item.urls?.full ? (
    <Card>
      <CardMedia
        component="img"
        key={item.id}
        height={300}
        image={`${item.urls.full}`}
        alt={item.alt}
        loading="lazy"
      />
    </Card>
  ) : null;
}

export default Carrousel;
