import React from "react";
import styled from "styled-components";
import Hero from "../ui/Home/Hero";

const Wrapper = styled.div`
  background-color: gray;
  height: 400vh;
`;

const Home = () => {
  return (
    <Wrapper>
      <Hero />
    </Wrapper>
  );
};

export default Home;
