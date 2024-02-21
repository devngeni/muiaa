import DefaultLayout from "@/components/layouts/defaultLayout";
import React, { ReactElement } from "react";

const Home = () => {
  return <div>Home</div>;
};

export default Home;

Home.getLayout = (page: ReactElement) => {
  return <DefaultLayout>{page}</DefaultLayout>;
};
