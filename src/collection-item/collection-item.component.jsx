import React from "react";
import { connect } from "react-redux";

import { addItem } from "../redux/cart/cart.actions";
import "./collection-item.styles.scss";
import CustomButton from "../components/custom-button/custom-button.component";

const CollectionItem = ({ item, addItemToCart }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>

      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton
        inverted
        onClick={() => {
          addItemToCart(item);
        }}
      >
        Add to cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
