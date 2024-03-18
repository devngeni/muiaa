import {
  LoginBtn,
  LoginContainer,
  LoginTitleWrapper,
  LoginWrapper,
  StyledGoogleLoginBtn,
  StyledInputBase,
  StyledOrTypo,
  StyledSignUpTypo
} from '@/styles/loginAndRegistrationPageStyles';
import React from 'react';
import Google from '../../../public/assets/google';
import Link from 'next/link';

const RegistrationSection = () => {
  return (
    <LoginContainer>
      <LoginWrapper>
        <LoginTitleWrapper>
          <h1>Join our platform</h1>
          <p>Login to continue to MUIAA Dairy Farmers</p>
        </LoginTitleWrapper>
        <StyledInputBase required type="text" placeholder="Username" />
        <StyledInputBase required type="email" placeholder="Email address" />
        <StyledInputBase required type="password" placeholder="Password" />
        <StyledInputBase required type="password" placeholder="Repeat Password" />
        <StyledOrTypo>OR</StyledOrTypo>
        <StyledGoogleLoginBtn>
          <Google />
          <span>Sign up with google</span>
        </StyledGoogleLoginBtn>
        <LoginBtn type="submit">Create Account</LoginBtn>
        <StyledSignUpTypo>
          Have an account? <Link href="/login">Login</Link>
        </StyledSignUpTypo>
      </LoginWrapper>
    </LoginContainer>
  );
};

export default RegistrationSection;
