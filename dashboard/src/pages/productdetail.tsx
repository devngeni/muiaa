import DefaultLayout from '@/components/layouts/defaultLayout'
import React from 'react'
import {
  ProductCategoryTitle,
  ProductContainer,
  ProductDetailContainer,
  ProductDetailItem,
  ProductDetailLayoutContainer,
  ProductDetailLayoutItem,
  ProductImage,
  ProductMiniText,
  ProductSubText,
  ProductText,
} from "@/styles/product-styles";
import ProductItemComponent from "@/components/common-components/ProductItemComponent";
import { ButtonContainer, OrangeButton, GrayButton } from '@/styles/bghero-styled';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";



function Productdetail() {
      const productListData = [
        {
          id: 1,
          imageSrc: "https://source.unsplash.com/1000x1000/?product",
          description: "DairyBoost 5000",
          price: "Ksh 10000",
          minOrder: "New Min Order: 10 packs",
          rating: 5,
        },
        {
          id: 2,
          imageSrc: "https://source.unsplash.com/1000x1000/?feeds",
          description: "Product description 2",
          price: "Ksh 20000",
          minOrder: "New Min Order: 5 packs",
          rating: 4,
        },
        {
          id: 3,
          imageSrc: "https://source.unsplash.com/1000x1000/?cows",
          description: "Product description 3",
          price: "Ksh 30000",
          minOrder: "New Min Order: 7 packs",
          rating: 3,
        },
        {
          id: 4,
          imageSrc: "https://source.unsplash.com/1000x1000/?product",
          description: "Product description 4",
          price: "Ksh 40000",
          minOrder: "New Min Order: 8 packs",
          rating: 4,
        },
        {
          id: 5,
          imageSrc: "https://source.unsplash.com/1000x1000/?product",
          description: "Product description 5",
          price: "Ksh 50000",
          minOrder: "New Min Order: 6 packs",
          rating: 5,
        },
        {
          id: 6,
          imageSrc: "https://source.unsplash.com/1000x1000/?product",
          description: "Product description 6",
          price: "Ksh 60000",
          minOrder: "New Min Order: 9 packs",
          rating: 3,
        },
        {
          id: 7,
          imageSrc: "https://source.unsplash.com/1000x1000/?product",
          description: "Product description 7",
          price: "Ksh 70000",
          minOrder: "New Min Order: 4 packs",
          rating: 4,
        },
        {
          id: 8,
          imageSrc: "https://source.unsplash.com/1000x1000/?product",
          description: "Product description 8",
          price: "Ksh 80000",
          minOrder: "New Min Order: 12 packs",
          rating: 5,
        },
      ];
  return (
    <DefaultLayout>
      <ProductDetailLayoutContainer container>
        <ProductDetailLayoutItem item md={8} sm={12}>
          <ProductDetailContainer container>
            <ProductDetailItem item md={6} sm={12}>
              <ProductImage
                src="https://source.unsplash.com/1000x1000/?product"
                alt="product"
                sx={{ maxHeight: "350px", width: "95%", margin: "auto" }}
              />
            </ProductDetailItem>
            <ProductDetailItem item md={6} sm={12}>
              <ProductMiniText>
                More From
                <span style={{ color: "#003565", fontWeight: "800" }}>
                  {" "}
                  Wonder Feeds
                </span>
              </ProductMiniText>
              <ProductSubText sx={{ color: "#000" }}>
                DairyBoost 5000, a premium feed blend, enriched with essential
                nutrients, designed to maximize milk output while ensuring
                robust cow health
              </ProductSubText>
              <ProductText>Ksh 1,102.25</ProductText>
              <ProductMiniText>
                Origin
                <span style={{ color: "#003565", fontWeight: "800" }}>
                  {" "}
                  Kenya
                </span>
              </ProductMiniText>
              <br />
              <hr />
              <ProductSubText sx={{ color: "#000", pt: "20px" }}>
                Min Order: 250kg
              </ProductSubText>
              <ButtonContainer sx={{padding:"0"}}>
                <OrangeButton sx={{ width: "82%", background: "#033D66" }}>
                  Place order
                </OrangeButton>
                <GrayButton>
                  <FavoriteBorderIcon />
                </GrayButton>
              </ButtonContainer>
            </ProductDetailItem>
          </ProductDetailContainer>
        </ProductDetailLayoutItem>
        <ProductDetailLayoutItem item md={4} sm={12}>
          ==
        </ProductDetailLayoutItem>
      </ProductDetailLayoutContainer>
      <ProductCategoryTitle>People also viewed</ProductCategoryTitle>
      <ProductContainer container>
        {productListData.map((product) => {
          return (
            <ProductItemComponent
              key={product.id}
              id={product.id}
              imageSrc={product.imageSrc}
              description={product.description}
              price={product.price}
              minOrder={product.minOrder}
              rating={product.rating}
            />
          );
        })}
      </ProductContainer>
    </DefaultLayout>
  );
}

export default Productdetail