import styled from "styled-components";

export const Style = styled.div`
  .header {
    background: rgba(0, 0, 0, 0.5);
    padding: 10px 0;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 2;
    .logo {
      img {
        width: 109px;
        height: auto;
      }
    }
    .menu {
      ul {
        li {
          a {
            display: flex;
            gap: 5px;
          }
        }
      }
    }
  }
`;
