import styled from "styled-components";
import { pallete } from "../../theme";

export const Style = styled.div`
  .hero-movie {
    width: 100%;
    position: relative;
    .children {
      z-index: 2;
    }
    .poster {
      width: 100%;
      height: 580px;
      background-size: cover;
      position: absolute;
      left: 0;
      top: 0;
    }
    .content {
      z-index: 2;
      .name {
        color: #fff;
        text-transform: capitalize;
        font-size: 3.5rem;
        margin-bottom: 5px;
      }
      .age {
        background: #101010;
        padding: 5px;
        border: 1px solid #3a3532;
        border-radius: 4px;
        color: #fff;
        font-weight: 600;
        font-size: 0.8rem;
      }
      .genres {
        color: ${pallete.defaultBtnColor};
        text-transform: capitalize;
        font-size: 0.7rem;
      }
      .btn-group {
        margin-top: 12px;
      }
      .description {
        margin-top: 30px;
        color: #fff;
        max-width: 700px;
        p {
          font-weight: 400;
          font-size: 0.9rem;
          line-height: 20px;
        }
      }
    }
    &:after {
      position: absolute;
      content: "";
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, #0d0d0de6, #0d0d0d00 53.51%),
        linear-gradient(180deg, #0d0d0d00, #0d0d0d);
    }
  }
`;
