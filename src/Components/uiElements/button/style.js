import styled from "styled-components";
import { pallete } from "../../../theme";

export const Style = styled.a`
  border-radius: ${pallete.defaultRadius};
  border: 1px solid transparent;
  padding: 5px 10px;
  text-transform: capitalize;
  display: inline-block;
  &.primary {
    background: ${pallete.primary};
    color: ${pallete.dark};
  }
  &.default {
    background: transparent;
    color: ${pallete.defaultBtnColor};
    &:hover {
      background: ${pallete.primary};
      color: #fff;
    }
  }
  &.dark {
    background: ${pallete.dark};
    color: ${pallete.primary};
    border-color: ${pallete.defaultBtnColor};
  }
  &.block {
    display: block;
    text-align: center;
  }
  &.large {
    padding: 10px 20px;
  }
  &.bold {
    font-weight: 600;
  }
  .with-icon {
    display: flex;
    gap: 3px;
    align-items: center;
  }
`;
