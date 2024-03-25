import DefaultLayout from "@/components/layouts/defaultLayout";
import { TopBarContainer, MidCardContainer } from "@/styles/common-styles";
import { ContentCopy } from "@mui/icons-material";
import { Box, Grid, styled } from "@mui/material";
import React from "react";
import { OrangeButton } from "@/styles/bghero-styled";
import { useRouter  } from "next/router";

function Success() {
  const PaymentImg = styled("img")({
    width: "auto",
    height: "35px",
  });
  const [age, setAge] = useState("");

  const handleChange = (event: any) => {
    setAge(event.target.value as string);
  };
  const router = useRouter();

  const navigate = () => {
    router.push("/track-order/overview");
  }
  return (
    <>
      <DefaultLayout>
        <TopBarContainer>
          <p>Back to shopping</p>
          <p>Order ID: CR89899-23</p>
        </TopBarContainer>

        <Box sx={{ maxWidth: "1300px", margin: "auto" }}>
          <MidCardContainer
            sx={{
              padding: "0",
              overflow: "hidden",
              margin: "0",
              maxWidth: "1000px",
              height: "auto",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "60px",
                maxWidth: "1300px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0 40px",
                backgroundColor: "#fff",
              }}
            >
              <p style={{ fontWeight: "500", fontSize: "24px" }}>
                Order Placed Successfully
              </p>
              <p style={{ color: "#000" }}>Invoice id: CR89899-23</p>
            </Box>
            <Box
              sx={{
                width: "100%",
                padding: "40px",
                "*": {
                  lineHeight: "1.5",
                },
              }}
            >
              <p style={{ display: "flex", alignItems: "center" }}>
                Once the dispatch is initiated, you can use your order ID &nbsp;{" "}
                <span
                  style={{
                    background: "#E8AD4B",
                    borderRadius: "4px",
                    fontWeight: "500",
                    display: "flex",
                    alignItems: "center",
                    width: "150px",
                  }}
                >
                  {" "}
                  &nbsp; CR89899-23 &nbsp;{" "}
                  <ContentCopy sx={{ color: "#fff" }} />{" "}
                </span>
                &nbsp; to:
              </p>
              <br />
              <ol
                style={{
                  width: "95%",
                  margin: "auto",
                  listStyle: "none",
                  counterReset: "item",
                }}
              >
                <li>
                  <p style={{ height: "25px" }}>
                    Access the quality test and data of the feeds
                  </p>
                  <br />
                </li>
                <li>
                  <p style={{ height: "25px" }}>
                    Access the quality test and data of the feeds
                  </p>
                  <br />
                </li>
                <li>
                  <p style={{ height: "25px" }}>
                    Access the quality test and data of the feeds
                  </p>
                  <br />
                </li>
                <li>
                  <p style={{ height: "25px" }}>
                    Access the quality test and data of the feeds
                  </p>
                  <br />
                </li>
                <li>
                  <p style={{ height: "25px" }}>
                    Access the quality test and data of the feeds
                  </p>
                </li>
              </ol>
              <br />
              <p style={{ display: "flex", alignItems: "center" }}>
                You can find copies of your invoice on your email and text
                message registered under your account
              </p>
              <br/>
              <OrangeButton
                sx={{
                  width: "100%",
                  height: "55px",
                  background: "#033D66",
                  fontWeight: "600",
                }}
                onClick={() => navigate()}
              >
                Track Orders
              </OrangeButton>
            </Box>
          </MidCardContainer>
        </Box>
      </DefaultLayout>
    </>
  );
}

export default Success;
