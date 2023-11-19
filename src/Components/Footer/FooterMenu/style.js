import styled from "styled-components";
import { pallete } from "../../../theme";

export const Style = styled.div`
  padding-bottom: 60px;
  .title {
    text-transform: capitalize;
    color: ${pallete.whiteColor1};
  }
  ul {
    li {
      a {
        color: #9da1a4;
        display: block;
        padding: 8px 4px;
        text-transform: capitalize;
        &:hover {
          color: #fff;
        }
      }
    }
  }
`;
