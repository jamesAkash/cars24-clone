import React from "react";
import styled from "styled-components";
const Wrapper = styled.section`
  display: flex;
  flex-wrap: nowrap;
  gap: 10px;
  img {
    width: 100%;
    border-radius: 12px;
  }

  div {
    padding: 8px 12px;
    width: 100px;
    background-color: #fff;
    border-radius: 12px;
  }
`;
const HeroCompany = () => {
  return (
    <Wrapper>
      <div>
        <img src="/hyundai.webp" alt="company-car" />
      </div>
      <div>
        <img src="/renault.webp" alt="company-car" />
      </div>
      <div>
        <img src="/hyundai.webp" alt="company-car" />
      </div>
      <div>
        <img src="/maruti-suzuki.webp" alt="company-car" />
      </div>
      <div>
        <img src="/tata.webp" alt="company-car" />
      </div>
    </Wrapper>
  );
};

export default HeroCompany;
