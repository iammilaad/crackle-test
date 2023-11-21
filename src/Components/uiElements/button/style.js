import styled from "styled-components";
import { pallete } from "../../../theme";

export const Style = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  cursor: pointer;
  height: ${(props) => (props.size === "large" ? "56px" : "40px")};
  a {
    display: ${(props) => (props.block === "block" ? "block" : "flex")};
    justify-content: center;
    align-items: center;
    border-radius: ${pallete.defaultRadius};
    transition-property: color, opacity, border, margin, padding, width, height;
    transition-duration: 70ms;
    transition-timing-function: ease-in-out;
    white-space: nowrap;
    font-weight: 600;
    font-size: ${(props) => (props.size === "large" ? "1rem" : "0.9rem")};
    line-height: 14px;
    width: calc(100% - 8px);
    height: ${(props) => (props.size === "large" ? "48px" : "32px")};
    padding: ${(props) => (props.size === "large" ? "10px 20px" : "7px 10px")};
    border: ${(props) =>
      props.type === "primary"
        ? "2px solid tranaprent"
        : props.type === "dark"
        ? "2px solid #eaf6ff26"
        : "2px solid tranaprent"};
    text-transform: capitalize;
    background: ${(props) =>
      props.type === "primary"
        ? pallete.primary
        : props.type === "dark"
        ? "#151515cc"
        : "transparent"};
    color: ${(props) =>
      props.type === "primary"
        ? pallete.dark
        : props.type === "dark"
        ? pallete.primary
        : pallete.defaultBtnColor};
    &:hover {
      height: 100%;
      width: 100%;
      background: ${(props) =>
        props.type === "primary"
          ? pallete.primary
          : props.type === "dark"
          ? "#151515cc"
          : "#151515cc"};
      border-color: ${(props) =>
        props.type === "primary"
          ? "tranaprent"
          : props.type === "dark"
          ? pallete.primary
          : "#eaf6ff26"};
    }
  }
`;
