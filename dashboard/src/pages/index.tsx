import DefaultLayout from "@/components/layouts/defaultLayout";
import React, { ReactElement, useEffect, useState } from "react";
import { useRouter } from "next/router";
import CircularProgress from "@mui/material/CircularProgress";

const Home = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true); // State to manage loading state

  useEffect(() => {
    const { token }: any = router.query;
    sessionStorage.setItem("auth_token", token);
    console.log(sessionStorage.getItem("auth_token"));
    if (token === undefined) {
      setTimeout(() => {
        if (token === undefined) {
          console.log("token not found");
          router.push("https://muiaafeeds.com");
        }
      }, 2000);
    } else if (token) {
      setTimeout(() => {
        router.push("/home");
        console.log("token found");
      }, 2000); // Simulating a delay of 2 seconds for demonstration
    }

    // Hide loader after redirection
    setLoading(false);
  }, [router]);

  return (
    <>
      {loading ? ( // Render loader if loading state is true
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <CircularProgress />
        </div>
      ) : null}
    </>
  );
};

export default Home;

Home.getLayout = (page: ReactElement) => {
  return <DefaultLayout>{page}</DefaultLayout>;
};
