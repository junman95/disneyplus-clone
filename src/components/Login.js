import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <Container>
      <CTA>
        <CTALogoOne src="images/cta-logo-one.svg" />
        <SignUp>Get All there</SignUp>
        <Description>
          Enjoy Disney+ content for 9,900 won per month.
        </Description>
        <CTALogoTwo src="images/cta-logo-two.png" />
      </CTA>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  display: flex;
  justify-content: center;
  &:before {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: "";
    background: url("images/login-background.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.8;
    z-index: -1;
  }
`;

const CTA = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  margin-top: 100px;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CTALogoOne = styled.img``;

const CTALogoTwo = styled.img`
  width: 90%;
`;

const SignUp = styled.div`
  width: 100%;
  text-transform: uppercase;
  background: #0063e5;
  font-weight: bold;
  font-size: 18px;
  letter-spacing: 1.8px;
  color: #f9f9f9;
  text-align: center;
  padding: 17px 0;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #0483ee;
  }
`;

const Description = styled.div`
  font-size: 24px;
  line-height: 1.4;
  text-align: center;
  letter-spacing:1.8px;
  line-height: 1.5;
  margin-bottom: 20px;
`;