import DefaultLayout from "@/components/layouts/defaultLayout";
import { LoginSection } from "@/components/login.page";
import React from "react";

const Login = () => {
  return (
    <DefaultLayout pageTitle="Login">
      <LoginSection />
    </DefaultLayout>
  );
};

export default Login;
