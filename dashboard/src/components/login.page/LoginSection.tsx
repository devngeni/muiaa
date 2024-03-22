import {
  StyledInputBase,
  LoginBtn,
  LoginContainer,
  LoginTitleWrapper,
  LoginWrapper,
  StyledOrTypo,
  StyledGoogleLoginBtn,
  StyledForgetPass,
  StyledSignUpTypo
} from '@/styles/loginAndRegistrationPageStyles';
import React from 'react';
import Google from '../../../public/assets/google';
import Link from 'next/link';

const LoginSection = () => {
  return (
    <LoginContainer>
      <LoginWrapper>
        <LoginTitleWrapper>
          <h1>Welcome</h1>
          <p>Login to continue to MUIAA Dairy Farmers</p>
        </LoginTitleWrapper>
        <StyledInputBase required type="email" placeholder="Email address" />
        <StyledInputBase required type="password" placeholder="Password" />
        <StyledOrTypo>OR</StyledOrTypo>
        <StyledGoogleLoginBtn>
          <Google />
          <span>Sign up with google</span>
        </StyledGoogleLoginBtn>
        <StyledForgetPass href="#">Forgot password?</StyledForgetPass>
        <LoginBtn type="submit">Login</LoginBtn>
        <StyledSignUpTypo>
          Don&apos; have account? <Link href="/registration">Sign up</Link>
        </StyledSignUpTypo>
      </LoginWrapper>
    </LoginContainer>
  );
};

export default LoginSection;
