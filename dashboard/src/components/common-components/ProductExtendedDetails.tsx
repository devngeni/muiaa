import React from 'react'
import {
  ButtonContainer,
  OrangeButton,
  GrayButton,
} from "@/styles/bghero-styled";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
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
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import { Box, styled } from "@mui/material";


function ProductExtendedDetails() {
    const AccDets = styled(AccordionDetails)({
      fontWeight: "300",
      fontSize: "15px",
      lineHeight: "28px",
      color: "#454545",
    });
    const AccSummary = styled(AccordionSummary)({
      fontWeight: "500",
      fontSize: "16px",
      lineHeight: "28px",
      color: "#000",
    });
  return (
    <>
      <Box
        sx={{
          boxShadow: "0px 7px 29px 0px rgba(100, 100, 111, 0.2)",
          borderRadius: "5px",
          mt: "40px",
          p: "20px",
        }}
      >
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
              nutrients, designed to maximize milk output while ensuring robust
              cow health
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
            <ButtonContainer sx={{ padding: "0" }}>
              <OrangeButton sx={{ width: "82%", background: "#033D66" }}>
                Place order
              </OrangeButton>
              <GrayButton>
                <FavoriteBorderIcon />
              </GrayButton>
            </ButtonContainer>
          </ProductDetailItem>
        </ProductDetailContainer>
      </Box>
      <br />
      <Accordion defaultExpanded>
        <AccSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Description
        </AccSummary>
        <AccDets>
          Discover our revolutionary dairy feed blend meticulously crafted to
          optimize your herd's health and performance. Our expertly formulated
          feed, enriched with a carefully balanced blend of essential nutrients,
          vitamins, and minerals, is designed to elevate milk production,
          enhance overall cow vitality, and ensure superior milk quality.
          Crafted through rigorous research and employing premium-quality
          ingredients, our dairy feed promotes efficient digestion, robust
          immune systems, and sustained energy levels for your herd.
          <br />
          <br /> From lactating cows to growing calves, our feed caters to
          diverse nutritional needs, fostering optimal growth, increased milk
          yields, and healthy reproductive cycles. Trust our commitment to
          excellence in delivering a scientifically advanced dairy feed solution
          that not only maximizes your farm's productivity but also prioritizes
          the well-being of your prized cattle.
        </AccDets>
      </Accordion>
      <Accordion defaultExpanded>
        <AccSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          About DairyBoost 5000
        </AccSummary>
        <AccDets>
          IGMA DAIRY MEAL is specially formulated to meet the optimum nutrient
          requirements to boost milk production for dairy cows.
        </AccDets>
      </Accordion>
      <Accordion defaultExpanded>
        <AccSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Details
        </AccSummary>
        <AccDets>
          Contract Address: 0x23f1...4db8 <br /> <br />
          Token : ID103 <br /> <br />
          Token : StandardERC-721
          <br /> <br />
          Chain: Ethereum Last Updated: 10 hours ago <br /> <br />
          Distributor: Wonder Feeds
          <br /> <br />
        </AccDets>
      </Accordion>
      <Accordion defaultExpanded>
        <AccSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Available in
        </AccSummary>
        <AccDets>
          50 Kg bags
          <br /> <br />
          25 Kg bags <br /> <br />
          10 Kg bags
          <br /> <br />
        </AccDets>
      </Accordion>
      <Accordion defaultExpanded>
        <AccSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Feature and benefits
        </AccSummary>
        <AccDets>
          It provides the cow with vitamins, energy and protein in a balanced
          way, so that the cow produces good milk and keeps a healthy body
          weight. Additionally, it helps the cow:
          <br />
          <br />
          <ul style={{ width: "90%", margin: "auto" }}>
            <li>Rapidly return to breeding,hence a calf every year. </li>
            <li>
              Peak and sustained milk production in 8 weeks, hence more profits.
            </li>
          </ul>
        </AccDets>
      </Accordion>
      <Accordion defaultExpanded>
        <AccSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Feeding Direction
        </AccSummary>
        <AccDets>
          As part of improving the production of milk, we recommend feeding your
          cow SIGMA DAIRY MEAL as follows:
          <br />
          <br />
          <ul style={{ width: "90%", margin: "auto" }}>
            <li>
              Feed dry and allow 1kg for every 2 litres of milk produced.{" "}
            </li>
            <li>Maximum of 12 kg per cow per day</li>
          </ul>
        </AccDets>
      </Accordion>
      <Accordion defaultExpanded>
        <AccSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          What’s inside{" "}
        </AccSummary>
        <AccDets>
          What makes SIGMA DAIRY MEAL ideal for your dairy cows in terms of
          quality and quantity of the milk are the following features:
          <br />
          <br />
          <ul style={{ width: "90%", margin: "auto" }}>
            <li>Contains high levels of calcium and phosphorus. </li>
            <li>Contains high protein and energy levels</li>
          </ul>
        </AccDets>
      </Accordion>
    </>
  );
}

export default ProductExtendedDetails