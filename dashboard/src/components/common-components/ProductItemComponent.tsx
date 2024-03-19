import React from "react";
import {
  ProductContainer,
  ProductFooterContainer,
  ProductImage,
  ProductItem,
  ProductMiniText,
  ProductSubItem,
  ProductSubText,
  ProductText,
} from "@/styles/product-styles";
import StarIcon from "@mui/icons-material/Star";

function ProductItemComponent({
  id,
  imageSrc,
  description,
  price,
  minOrder,
  rating,
}) {
  return (
    <ProductItem key={id} item xs={6} sm={6} md={4} lg={3} xl={3}>
        <a href="/productdetail">
      <ProductSubItem>
        <ProductImage src={imageSrc} alt="product" />
        <ProductSubText>{description}</ProductSubText>
        <ProductText>{price}</ProductText>
        <hr />
        <ProductFooterContainer>
          <ProductMiniText>{minOrder}</ProductMiniText>
          <ProductMiniText>
            {rating} <StarIcon sx={{ fontSize: "12px", color: "#E8AD4B" }} />
          </ProductMiniText>
        </ProductFooterContainer>
      </ProductSubItem>
        </a>
    </ProductItem>
  );
}

export default ProductItemComponent;
