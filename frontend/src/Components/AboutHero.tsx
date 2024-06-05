import {
  Grid,
  Box,
  styled,
  Button,
  FormControl,
  InputLabel,
  Input,
  OutlinedInput,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import CountUp from "react-countup";
import React, { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import {
  AboutContainer,
  AboutHeroContainer,
  AboutHeroMask,
  AboutPageTeamWrapper,
  AboutStyledExpertBtn,
  AboutStyledText,
  ContactFormSubmitBtn,
  CountrySelectorLabelWrapper,
  FormFieldWrapper,
  PartnerCarousel,
  PartnerCarouselItem,
  StyledInputField,
  StyledLabel,
  StyledTextAreaField,
  TeamSocialIconsWrapper,
} from "@/StyledComponents/AboutHero";
import Image from "next/image";
import Link from "next/link";
import LinkedIn from "../../public/assets/team/linkedIn";
import Twitter from "../../public/assets/team/twitter";
import KenyaEmoji from "../../public/assets/kenyaEmoji";
import ZanzibarEmoji from "../../public/assets/zanzibarEmoji";
import EmailIcon from "../../public/assets/emailIcon";
import LocationIcon from "../../public/assets/locationIcon";
import PhoneIcon from "../../public/assets/phoneIcon";

const AboutHero = () => {
  const [selectedImgIndex, setSelectedImgIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const aboutBgList = [
    "aboutbgIMG.jpeg",
    "aboutbgIMG2.png",
    "aboutbgIMG3.jpeg",
  ];
  useEffect(() => {
    const intervalId = setInterval(() => {
      setOpacity(0.6);
      setTimeout(() => {
        setSelectedImgIndex(
          (prevIndex) => (prevIndex + 1) % aboutBgList.length
        );
        setOpacity(1);
      }, 600);
    }, 4000);

    return () => clearInterval(intervalId);
  }, [aboutBgList.length]);

  const partnerList = [
    "partner1.png",
    "partner2.png",
    "partner1.png",
    "partner2.png",
  ];

  return (
    <>
      <AboutContainer>
        <AboutHeroContainer
          opacity={opacity}
          bgImgUrl={`/assets/${aboutBgList[selectedImgIndex]}`}
          sx={{ height: { xs: "50vh", md: "70vh" } }}
        >
          <AboutHeroMask>
            <AboutStyledText
              sx={{
                fontSize: { xs: "40px", md: "60px" },
                lineHeight: "72.61px",
                mb: { xs: "30px", md: "50px" },
              }}
            >
              About us
            </AboutStyledText>
            <Fade direction="up" triggerOnce duration={1200}>
              <AboutStyledText
                sx={{
                  fontSize: { xs: "16px", md: "24px" },
                  fontWeight: "normal",
                  width: { md: "80%", lg: "60%" },
                  lineHeight: { xs: "24px", md: "44px" },
                  margin: "auto",
                }}
              >
                Building the value in dairy supplies using blockchain
                technology. Enabling the world to move value the way information
                moves today.
              </AboutStyledText>
            </Fade>
            <Fade direction="up" triggerOnce duration={1200}>
              <AboutStyledExpertBtn
                sx={{ fontSize: { xs: "16px", md: "20px" } }}
              >
                Speak to our Experts
              </AboutStyledExpertBtn>
            </Fade>
          </AboutHeroMask>
        </AboutHeroContainer>
        <Grid
          container
          sx={{ background: "#f5f6f7", height: { xs: "60vh", md: "45vh" } }}
        >
          <Grid item md={6} xs={12} sx={{ margin: "auto" }}>
            <AboutStyledText
              sx={{
                textTransform: "uppercase",
                color: "#003565",
                fontSize: "20px",
                fontWeight: "400",
                mb: "20px",
              }}
            >
              Our Goal
            </AboutStyledText>
            <AboutStyledText
              sx={{
                color: "#1A1A1A",
                width: { xs: "85%", md: "90%", lg: "80%" },
                textAlign: "center",
                margin: "auto",
                fontWeight: "400",
                lineHeight: { xs: "30px", md: "38.73px" },
                fontSize: { xs: "20px", md: "28px" },
              }}
            >
              Our goal? To bring transparency, efficiency and traceability to
              every step of the supply chain.
            </AboutStyledText>
          </Grid>
          <Grid item md={6} xs={12} sx={{ margin: "auto" }}>
            <AboutStyledText
              sx={{
                textTransform: "uppercase",
                color: "#003565",
                fontSize: "20px",
                fontWeight: "400",
                mb: "20px",
              }}
            >
              Our Mission
            </AboutStyledText>
            <AboutStyledText
              sx={{
                color: "#1A1A1A",
                width: { xs: "85%", md: "90%", lg: "80%" },
                textAlign: "center",
                margin: "auto",
                fontWeight: "400",
                lineHeight: { xs: "30px", md: "38.73px" },
                fontSize: { xs: "20px", md: "28px" },
              }}
            >
              Spearheading a transformative era in cross-border cattle feed
              distribution,uniting Kenya and Zanzibar
            </AboutStyledText>
          </Grid>
        </Grid>

        <Box sx={{ pt: { xs: "40px", md: "100px" } }}>
          <AboutStyledText
            sx={{
              textTransform: "uppercase",
              color: "#003565",
              fontSize: "20px",
              fontWeight: "400",
              mb: "20px",
            }}
          >
            Why us
          </AboutStyledText>
          <AboutStyledText
            sx={{
              color: "#1A1A1A",
              width: { xs: "85%", md: "70%", lg: "40%" },
              textAlign: "center",
              margin: "auto",
              fontWeight: "400",
              lineHeight: "38.73px",
              fontSize: { xs: "20px", md: "28px" },
            }}
          >
            Transformative blockchain-enhanced solutions built to connect and
            manage distribution.
          </AboutStyledText>
        </Box>
        <Grid
          container
          sx={{ pt: { xs: "70px", md: "100px" }, width: "90%", margin: "auto" }}
        >
          <Grid item md={4} xs={12}>
            <Fade direction="left" triggerOnce duration={1300}>
              <Box sx={{ width: "90%", margin: "auto" }}>
                <AboutStyledText
                  sx={{
                    color: "#003565",
                    textAlign: { xs: "center", md: "start" },
                    fontWeight: "400",
                    lineHeight: "32px",
                    fontSize: { xs: "28px", md: "32px" },
                    pb: "25px",
                  }}
                >
                  Quality assurance
                </AboutStyledText>
                <AboutStyledText
                  sx={{
                    color: "#1A1A1A",
                    width: "100%",
                    fontWeight: "400",
                    lineHeight: "32px",
                    fontSize: { xs: "16px", md: "18px" },
                    textAlign: { xs: "justify", md: "start" },
                  }}
                >
                  We meticulously source and vet each batch of dairy farming
                  feeds to guarantee the highest quality products reach our
                  dairy customers. Through stringent quality control measures,
                  we ensure that every purchase made through MUIAA FEEDS meets
                  the standards for optimal animal health and high feed
                  conversion ratio.
                </AboutStyledText>
              </Box>
            </Fade>
          </Grid>
          <Grid item md={4} xs={12} sx={{ pt: { xs: "60px", md: "0" } }}>
            <Fade direction="up" triggerOnce duration={1300}>
              <Box sx={{ width: "90%", margin: "auto" }}>
                <AboutStyledText
                  sx={{
                    color: "#003565",
                    textAlign: { xs: "center", md: "start" },
                    fontWeight: "400",
                    lineHeight: "32px",
                    fontSize: "32px",
                    pb: "25px",
                  }}
                >
                  Traceability
                </AboutStyledText>
                <AboutStyledText
                  sx={{
                    color: "#1A1A1A",
                    width: "100%",
                    fontWeight: "400",
                    lineHeight: "32px",
                    fontSize: "18px",
                    textAlign: { xs: "justify", md: "start" },
                  }}
                >
                  Through the use of blockchain technology, we offer complete
                  visibility into the journey of each feed product, from its
                  origins to its final destination. We enable farmers to trace
                  the provenance of their feed purchases, we empower them to
                  make informed decisions that contribute to the overall
                  integrity and sustainability of their farming operations.
                </AboutStyledText>
              </Box>
            </Fade>
          </Grid>
          <Grid item md={4} xs={12} sx={{ pt: { xs: "60px", md: "0" } }}>
            <Fade direction="right" triggerOnce>
              <Box sx={{ width: "90%", margin: "auto" }}>
                <AboutStyledText
                  sx={{
                    color: "#003565",
                    textAlign: { xs: "center", md: "start" },
                    fontWeight: "400",
                    lineHeight: "32px",
                    fontSize: "32px",
                    pb: "25px",
                  }}
                >
                  Reliability
                </AboutStyledText>
                <AboutStyledText
                  sx={{
                    color: "#1A1A1A",
                    width: "100%",
                    fontWeight: "400",
                    lineHeight: "32px",
                    fontSize: "18px",
                    textAlign: { xs: "justify", md: "start" },
                  }}
                >
                  MUIAA FEEDS prides itself on its unwavering reliability. From
                  seamless order processing to timely delivery, we are dedicated
                  to providing a dependable and consistent service to our
                  customers. With us, farmers and suppliers can trust that their
                  feed procurement needs will be met efficiently and reliably,
                  every time.
                </AboutStyledText>
              </Box>
            </Fade>
          </Grid>
        </Grid>

        <Box sx={{ pt: "100px", height: "100%" }}>
          <AboutStyledText
            sx={{
              textTransform: "uppercase",
              color: "#003565",
              fontSize: "20px",
              fontWeight: "400",
              mb: "20px",
            }}
          >
            Our Team
          </AboutStyledText>
          <AboutStyledText
            sx={{
              color: "#1A1A1A",
              width: "90%",
              textAlign: "center",
              margin: "auto",
              fontWeight: "400",
              lineHeight: { xs: "36px", md: "50.09px" },
              fontSize: { xs: "28px", md: "48px" },
            }}
          >
            Revolutionizers of Dairy Supply Chains
          </AboutStyledText>

          <AboutStyledText
            sx={{
              color: "#1A1A1A",
              width: { xs: "80%", md: "70%" },
              fontWeight: "300",
              lineHeight: "32px",
              fontSize: "18px",
              textAlign: { xs: "justify", md: "center" },
              margin: "auto",
              pt: "20px",
            }}
          >
            Our passionate team leverages blockchain technology to redefine
            dairy supply chains. Guided by visionary leadership, our experts in
            blockchain development, cryptocurrency analysis, and supply chain
            optimization collaborate seamlessly. From architects ensuring data
            integrity to security specialists fortifying against threats, each
            member plays a vital role.
          </AboutStyledText>
        </Box>
        <Grid
          container
          sx={{
            width: "70%",
            margin: "auto",
            pb: { xs: "0", md: "50px" },
            pt: "50px",
          }}
          justifyContent={"center"}
        >
          <Grid item md={3} xs={12} sx={{ mb: { xs: "30px", md: "0" } }}>
            <Fade direction="top-left" triggerOnce duration={1300}>
              <AboutPageTeamWrapper>
                <Image
                  width={215}
                  height={216}
                  alt="Team"
                  src={"/assets/team/team1.png"}
                />
                <AboutStyledText
                  sx={{
                    color: "#003565",
                    width: "100%",
                    fontWeight: "500",
                    lineHeight: "25px",
                    fontSize: "20px",
                    textAlign: "center",
                    margin: "auto",
                    pt: "28px",
                  }}
                >
                  Dr. Charles Wasonga
                </AboutStyledText>
                <AboutStyledText
                  sx={{
                    color: "#1A1A1A",
                    width: "70%",
                    fontWeight: "400",
                    lineHeight: "22.5px",
                    fontSize: "14px",
                    textAlign: "center",
                    margin: "auto",
                    pt: "8px",
                  }}
                >
                  Crops Scientist/Plant Breeder
                </AboutStyledText>
                <TeamSocialIconsWrapper>
                  <Link href={"#"}>
                    <LinkedIn />
                  </Link>
                  <Link href={"#"}>
                    <Twitter />
                  </Link>
                </TeamSocialIconsWrapper>
              </AboutPageTeamWrapper>
            </Fade>
          </Grid>
          <Grid item md={3} xs={12} sx={{ mb: { xs: "30px", md: "0" } }}>
            <Fade direction="down" triggerOnce duration={1300}>
              <AboutPageTeamWrapper>
                <Image
                  width={215}
                  height={216}
                  alt="Team"
                  src={"/assets/team/team2.png"}
                />
                <AboutStyledText
                  sx={{
                    color: "#003565",
                    width: "100%",
                    fontWeight: "500",
                    lineHeight: "25px",
                    fontSize: "20px",
                    textAlign: "center",
                    margin: "auto",
                    pt: "28px",
                  }}
                >
                  John Muthee
                </AboutStyledText>
                <AboutStyledText
                  sx={{
                    color: "#1A1A1A",
                    width: "70%",
                    fontWeight: "400",
                    lineHeight: "22.5px",
                    fontSize: "14px",
                    textAlign: "center",
                    margin: "auto",
                    pt: "8px",
                  }}
                >
                  Co-Founder
                </AboutStyledText>
                {/* <TeamSocialIconsWrapper>
                <Link href={"#"}>
                  <LinkedIn />
                </Link>
                <Link href={"#"}>
                  <Twitter />
                </Link>
              </TeamSocialIconsWrapper> */}
              </AboutPageTeamWrapper>
            </Fade>
          </Grid>
          <Grid item md={3} xs={12} sx={{ mb: { xs: "30px", md: "0" } }}>
            <Fade direction="down" triggerOnce duration={1300}>
              <AboutPageTeamWrapper>
                <Image
                  width={215}
                  height={216}
                  alt="Team"
                  src={"/assets/team/team3.png"}
                />
                <AboutStyledText
                  sx={{
                    color: "#003565",
                    width: "100%",
                    fontWeight: "500",
                    lineHeight: "25px",
                    fontSize: "20px",
                    textAlign: "center",
                    margin: "auto",
                    pt: "28px",
                  }}
                >
                  Marvin Ngala
                </AboutStyledText>
                <AboutStyledText
                  sx={{
                    color: "#1A1A1A",
                    width: "70%",
                    fontWeight: "400",
                    lineHeight: "22.5px",
                    fontSize: "14px",
                    textAlign: "center",
                    margin: "auto",
                    pt: "8px",
                  }}
                >
                  Head of Operations
                </AboutStyledText>
                <TeamSocialIconsWrapper>
                  <Link href={"#"}>
                    <LinkedIn />
                  </Link>
                  <Link href={"#"}>
                    <Twitter />
                  </Link>
                </TeamSocialIconsWrapper>
              </AboutPageTeamWrapper>
            </Fade>
          </Grid>
          <Grid item md={3} xs={12} sx={{ mb: { xs: "30px", md: "0" } }}>
            <Fade direction="top-right" triggerOnce duration={1300}>
              <AboutPageTeamWrapper>
                <Image
                  width={215}
                  height={216}
                  alt="Team"
                  src={"/assets/team/team4.png"}
                />
                <AboutStyledText
                  sx={{
                    color: "#003565",
                    width: "100%",
                    fontWeight: "500",
                    lineHeight: "25px",
                    fontSize: "20px",
                    textAlign: "center",
                    margin: "auto",
                    pt: "28px",
                  }}
                >
                  Derrick Muriithi
                </AboutStyledText>
                <AboutStyledText
                  sx={{
                    color: "#1A1A1A",
                    width: "70%",
                    fontWeight: "400",
                    lineHeight: "22.5px",
                    fontSize: "14px",
                    textAlign: "center",
                    margin: "auto",
                    pt: "8px",
                  }}
                >
                  (Agripreneur) Feed Production Specialist
                </AboutStyledText>
                <TeamSocialIconsWrapper>
                  <Link href={"#"}>
                    <LinkedIn />
                  </Link>
                  <Link href={"#"}>
                    <Twitter />
                  </Link>
                </TeamSocialIconsWrapper>
              </AboutPageTeamWrapper>
            </Fade>
          </Grid>
          <Grid item md={3} xs={12} sx={{ mb: { xs: "30px", md: "0" } }}>
            <Fade direction="bottom-left" triggerOnce duration={1300}>
              <AboutPageTeamWrapper>
                <Image
                  width={215}
                  height={216}
                  alt="Team"
                  src={"/assets/team/team5.png"}
                />
                <AboutStyledText
                  sx={{
                    color: "#003565",
                    width: "100%",
                    fontWeight: "500",
                    lineHeight: "25px",
                    fontSize: "20px",
                    textAlign: "center",
                    margin: "auto",
                    pt: "28px",
                  }}
                >
                  Ronald Godia
                </AboutStyledText>
                <AboutStyledText
                  sx={{
                    color: "#1A1A1A",
                    width: "70%",
                    fontWeight: "400",
                    lineHeight: "22.5px",
                    fontSize: "14px",
                    textAlign: "center",
                    margin: "auto",
                    pt: "8px",
                  }}
                >
                  Animal Health Specialist
                </AboutStyledText>
                <TeamSocialIconsWrapper>
                  <Link href={"#"}>
                    <LinkedIn />
                  </Link>
                  <Link href={"#"}>
                    <Twitter />
                  </Link>
                </TeamSocialIconsWrapper>
              </AboutPageTeamWrapper>
            </Fade>
          </Grid>
          <Grid item md={3} xs={12} sx={{ mb: { xs: "30px", md: "0" } }}>
            <Fade direction="up" triggerOnce duration={1300}>
              <AboutPageTeamWrapper>
                <Image
                  width={215}
                  height={216}
                  alt="Team"
                  src={"/assets/team/team6.png"}
                />
                <AboutStyledText
                  sx={{
                    color: "#003565",
                    width: "100%",
                    fontWeight: "500",
                    lineHeight: "25px",
                    fontSize: "20px",
                    textAlign: "center",
                    margin: "auto",
                    pt: "28px",
                  }}
                >
                  Emmanuel Koki
                </AboutStyledText>
                <AboutStyledText
                  sx={{
                    color: "#1A1A1A",
                    width: "70%",
                    fontWeight: "400",
                    lineHeight: "22.5px",
                    fontSize: "14px",
                    textAlign: "center",
                    margin: "auto",
                    pt: "8px",
                  }}
                >
                  Outreach and Marketing
                </AboutStyledText>
                <TeamSocialIconsWrapper>
                  <Link href={"#"}>
                    <LinkedIn />
                  </Link>
                  <Link href={"#"}>
                    <Twitter />
                  </Link>
                </TeamSocialIconsWrapper>
              </AboutPageTeamWrapper>
            </Fade>
          </Grid>
        </Grid>

        <Box sx={{ pt: "100px", height: "100%" }}>
          <AboutStyledText
            sx={{
              textTransform: "uppercase",
              color: "#003565",
              fontSize: "20px",
              fontWeight: "400",
              mb: "20px",
            }}
          >
            Our Partners
          </AboutStyledText>
          <PartnerCarousel>
            {partnerList.map((partner, index) => {
              return (
                <PartnerCarouselItem key={index}>
                  <Box sx={{ width: "200px" }}>
                    <Image
                      src={`/assets/partner/${partner}`}
                      alt="Partner"
                      width={200}
                      height={200}
                    />
                  </Box>
                </PartnerCarouselItem>
              );
            })}
          </PartnerCarousel>
        </Box>

        <Box
          sx={{
            width: "100%",
            height: "100%",
            background: "#f5f6f7",
          }}
        >
          <Grid
            container
            sx={{
              width: { xs: "80%", md: "90%", lg: "70%", margin: "auto" },
              margin: "auto",
              pt: "80px",
              paddingBottom: "70px",
            }}
            justifyContent={"center"}
          >
            <Grid item md={12}>
              <AboutStyledText
                sx={{
                  fontSize: { xs: "36px", md: "48px" },
                  fontWeightL: "400",
                  lineHeight: "58.09px",
                  color: "#1A1A1A",
                  pb: "50px",
                }}
              >
                Get in touch
              </AboutStyledText>
            </Grid>
            <Grid item md={6} xs={12} sx={{ padding: { xs: "0", md: "50px" } }}>
              <FormControl sx={{ margin: "auto", display: "flex" }}>
                <FormFieldWrapper>
                  <StyledLabel>Name</StyledLabel>
                  <StyledInputField placeholder="Name" type="text" />
                </FormFieldWrapper>
                <FormFieldWrapper>
                  <StyledLabel>Email</StyledLabel>
                  <StyledInputField
                    placeholder="example@email.com"
                    type="email"
                  />
                </FormFieldWrapper>
                <FormFieldWrapper>
                  <StyledLabel>Phone</StyledLabel>
                  <StyledInputField placeholder="Phone number" type="text" />
                </FormFieldWrapper>
                <FormFieldWrapper>
                  <StyledLabel>Country</StyledLabel>
                  <RadioGroup
                    sx={{ display: "flex", flexDirection: "row", gap: "20px" }}
                  >
                    <FormControlLabel
                      value="kenya"
                      control={<Radio />}
                      label={
                        <CountrySelectorLabelWrapper>
                          <KenyaEmoji />
                          <span>Kenya</span>
                        </CountrySelectorLabelWrapper>
                      }
                    />
                    <FormControlLabel
                      value="zanzibar"
                      control={<Radio />}
                      label={
                        <CountrySelectorLabelWrapper>
                          <ZanzibarEmoji />
                          <span>Zanzibar</span>
                        </CountrySelectorLabelWrapper>
                      }
                    />
                  </RadioGroup>
                </FormFieldWrapper>
                <FormFieldWrapper>
                  <StyledLabel>Message</StyledLabel>
                  <StyledTextAreaField placeholder="Start typing..." />
                </FormFieldWrapper>
                <ContactFormSubmitBtn>Submit</ContactFormSubmitBtn>
              </FormControl>
            </Grid>
            <Grid item md={6} xs={12} sx={{ padding: { xs: "0", md: "50px" } }}>
              <Grid container sx={{ pt: "50px" }}>
                <Grid item xs={12}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: "30px",
                      background: "#f0f0f0",
                      padding: { xs: "30px", md: "50px" },
                      borderRadius: "10px",
                      marginBottom: "40px",
                    }}
                  >
                    <EmailIcon />
                    <Box>
                      <AboutStyledText
                        sx={{
                          textAlign: "left",
                          fontWeight: "400",
                          lineHeight: "24.5px",
                          color: "#444444",
                          size: "14px",
                        }}
                      >
                        Send us an email
                      </AboutStyledText>
                      <AboutStyledText
                        sx={{
                          textAlign: "left",
                          fontWeight: "500",
                          lineHeight: "24px",
                          color: "#003565",
                          size: "20px",
                        }}
                      >
                        admin@muiaalimited.com
                      </AboutStyledText>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: "30px",
                      background: "#f0f0f0",
                      padding: { xs: "30px", md: "50px" },
                      borderRadius: "10px",

                      marginBottom: "40px",
                    }}
                  >
                    <LocationIcon />
                    <Box>
                      <AboutStyledText
                        sx={{
                          textAlign: "left",
                          fontWeight: "400",
                          lineHeight: "24.5px",
                          color: "#444444",
                          size: "14px",
                        }}
                      >
                        Send us an email
                      </AboutStyledText>
                      <AboutStyledText
                        sx={{
                          textAlign: "left",
                          fontWeight: "500",
                          lineHeight: "24px",
                          color: "#003565",
                          size: "20px",
                        }}
                      >
                        P.O. Box 57610-00200
                        <br />
                        City Square, Nairobi-Kenya
                      </AboutStyledText>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: "30px",
                      background: "#f0f0f0",
                      padding: { xs: "30px", md: "50px" },
                      borderRadius: "10px",
                      marginBottom: "40px",
                    }}
                  >
                    <PhoneIcon />
                    <Box>
                      <AboutStyledText
                        sx={{
                          textAlign: "left",
                          fontWeight: "400",
                          lineHeight: "24.5px",
                          color: "#444444",
                          size: "14px",
                        }}
                      >
                        Send us an email
                      </AboutStyledText>
                      <AboutStyledText
                        sx={{
                          textAlign: "left",
                          fontWeight: "500",
                          lineHeight: "24px",
                          color: "#003565",
                          size: "20px",
                        }}
                      >
                        +2547 23 165 011
                        <br />
                        +1 602 705 2058
                      </AboutStyledText>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <AboutStyledText
                    sx={{
                      textAlign: "left",
                      fontWeight: "300",
                      lineHeight: "44px",
                      color: "#1A1A1A",
                      fontSize: { xs: "18px", md: "24px" },
                      marginTop: "40px",
                    }}
                  >
                    Explore limitless opportunities with us.
                  </AboutStyledText>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </AboutContainer>
    </>
  );
};

export default AboutHero;
