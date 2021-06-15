import React, { useContext, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Truncate from "react-truncate";
import { useHistory } from "react-router";
import { storeContext } from "../../contexts/StoreContext";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { IconButton } from "@material-ui/core";
import { notifySuccess } from "../../helpers/notifiers";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    backgroundColor: "#FFF5AB",
  },
  media: {
    height: 140,
  },
  description: {
    height: 100,
    marginTop: 20,
  },
  // cartIconActive: {
  //   color: "primary",
  // },
  // cartIconAnactive: {
  //   color: "secondary",
  // },
});

export default function ProductItem({ data }) {
  const classes = useStyles();

  const { title, images, price, description, id } = data;
  const { addProductToCart, cart, getCart, changeProductCount } =
    useContext(storeContext);

  const history = useHistory();
  const [cartState, setCartState] = useState("primary");

  useEffect(() => {
    getCart();
  }, []);
  const saveToCartBtn = () => {
    setCartState("secondary");
  };
  const rmvFromCartBtn = () => {
    setCartState("primary");
  };

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={images[0]} title={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            <Truncate lines={2} ellipsis={"..."}>
              {title}
            </Truncate>
          </Typography>

          <Typography variant="h5">{price} руб</Typography>

          <Typography
            className={classes.description}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            <Truncate lines={3} ellipsis={"..."}>
              {description}
            </Truncate>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton
          onClick={(e) => {
            addProductToCart(data);
            setCartState("secondary");
            cart.products.forEach((product) => {
              product.item.id === id
                ? setCartState("secondary")
                : setCartState("primary");
            });
          }}
          color={cartState}
          id="cartIcon"
        >
          <AddShoppingCartIcon />
        </IconButton>
        <Button
          onClick={() => history.push(`/products/${id}`)}
          size="small"
          color="secondary"
        >
          Далее
        </Button>
      </CardActions>
    </Card>
  );
}
