import DefaultLayout from '@/components/layouts/defaultLayout';
import { ProductCategoryTitle, ProductContainer} from '@/styles/product-styles';
import ProductItemComponent from '@/components/common-components/ProductItemComponent';
import React, { ReactElement } from 'react';
import BgHeroComponent from '@/components/common-components/BgHeroComponent';
import DataTableComponent from '@/components/common-components/DataTableComponent';

const Home = () => {
  const productListData = [
    {
      id: 1,
      imageSrc: "https://source.unsplash.com/1000x1000/?product",
      description:
        "DairyBoost 5000",
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
    <>
    <BgHeroComponent/>
    <br/>
    <DataTableComponent />
      <ProductCategoryTitle>Top Buys today</ProductCategoryTitle>
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
      <ProductCategoryTitle>Top Buys today</ProductCategoryTitle>
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
      <ProductCategoryTitle>Top Buys today</ProductCategoryTitle>
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
    </>
  );
};

export default Home;

Home.getLayout = (page: ReactElement) => {
  return <DefaultLayout>{page}</DefaultLayout>;
};
