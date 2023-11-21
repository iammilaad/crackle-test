import styled from "styled-components";

export const Style = styled.div`
  ul {
    display: flex;
    justify-content: center;
    li {
      a {
        display: block;
        background-color: rgba(255, 255, 255);
        padding-left: 8px;
        padding-right: 8px;
        color: #000;
      }
      &.selected {
        a {
          background: blue;
        }
      }
    }
  }
`;
export default Style;
