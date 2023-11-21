import styled from "styled-components";

export const Style = styled.div`
  background: rgba(0, 0, 0, 0.5);
  padding: 10px 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  backdrop-filter: blur(20px);
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
`;
