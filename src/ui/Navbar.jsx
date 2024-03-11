import React from "react";
import styled from "styled-components";
import InputButton from "../components/InputButton";
import { FaAngleDown, FaLocationDot, FaClockRotateLeft } from "react-icons/fa6";

const Wrapper = styled.nav`
  background-color: white;
  border-bottom: 1px solid var(--secondary-bg);
  padding: 1rem 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;

  menu {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-size: 16px;

    span {
      font-weight: 600;
    }
  }

  section {
    display: flex;
    align-items: center;
    gap: 2rem;

    img {
      width: 4rem;
    }

    menu {
      display: flex;
      gap: 16px;
      li {
        text-transform: uppercase;
        font-size: clamp(12px, 1.2vw, 22px);
        font-weight: 700;
        color: #434141;
        display: flex;
        align-items: center;
        width: 100%;
        min-width: fit-content;
        gap: 10px;
        cursor: pointer;
      }
    }
  }

  @media (max-width: 820px) {
    padding-inline: 4rem;
    display: block;
    menu {
      display: none;
    }
    section {
      justify-content: space-around;
    }
  }
`;

const Navbar = () => {
  return (
    <Wrapper>
      <section>
        <img src="/cars24.webp" alt="logo" />
        <InputButton location={<FaLocationDot />} icon={<FaAngleDown />}>
          Kochi
        </InputButton>
        <menu>
          <li>
            <span>Buy a Car</span>
            <FaAngleDown />
          </li>
          <li>
            <span>Sell a Car</span>
          </li>
        </menu>
      </section>
      <menu>
        <FaClockRotateLeft />
        <span>Login</span>
      </menu>
    </Wrapper>
  );
};

export default Navbar;
