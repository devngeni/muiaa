import DefaultLayout from "@/components/layouts/defaultLayout";
import React, { ReactElement, useEffect, useState } from "react";
import { useRouter } from "next/router";
import CircularProgress from "@mui/material/CircularProgress";
import { Typography } from "@mui/material";
import Head from "next/head";

const Home = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true); // State to manage loading state

  useEffect(() => {
    const { token }: any = router.query;
    sessionStorage.setItem("auth_token", token);
    console.log(sessionStorage.getItem("auth_token"));
    if (token) {
      setTimeout(() => {
        router.push("/home");
        console.log("token found");
      }, 2000); // Simulating a delay of 2 seconds for demonstration
    }
    setLoading(false);
  }, [router]);

  return (
    <>
      <Head>
        <title>MUIAA</title>
        <meta name="description" content="HOME | MUIRURI & ASSOCIATES LTD" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/logomini.png" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          flexDirection: "column",
        }}
      >
        <Typography sx={{ marginBottom: "10px" }}>
          Preparing assets ...
        </Typography>
        <CircularProgress />
      </div>
    </>
  );
};

export default Home;

Home.getLayout = (page: ReactElement) => {
  return <DefaultLayout>{page}</DefaultLayout>;
};
