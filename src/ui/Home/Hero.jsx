import React from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import HeroCompany from "./HeroCompany";

const Wrapper = styled.div`
  /* height: 80vh; */
  background-color: #fff;
  display: flex;
  flex-direction: column;
  gap: 28px;
  padding: 8.5rem 10rem 2rem;
  background-image: url("/heroBannerCars24.webp");
  background-repeat: no-repeat;
  object-fit: cover;
  width: 100%;
  color: var(--primary-bg);
  .search-cars {
    background: var(--primary-bg);
    max-width: 600px;
    border: none;
    border-radius: 18px;
    padding: 0.8rem 1.2rem;
    color: black;
    display: flex;
    align-items: center;
    input {
      padding: 4px 12px;
      width: 100%;
      border: none;
      outline: none;
      background: inherit;
      font-size: clamp(16px, 3.2vw, 28px);
    }
    span {
      font-size: clamp(16px, 3.2vw, 28px);
    }
  }
  @media (max-width: 820px) {
    padding-inline: 4rem;
  }
`;

const Hero = () => {
  return (
    <Wrapper>
      <h2>Certified cars with</h2>
      <h1>
        up to 12-month <br />
        warranty plans
      </h1>
      <div className="search-cars">
        <span>
          <FaSearch />
        </span>
        <input type="text" placeholder="Search your favourite cars" />
      </div>
      <div className="companies">
        <HeroCompany />
      </div>
    </Wrapper>
  );
};

export default Hero;
