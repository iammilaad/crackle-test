import styled from "styled-components";

export const Style = styled.div`
  .hero-movie {
    width: 100%;
    height: 500px;
    position: relative;
    .poster {
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;
      left: 0;
      top: 0;
    }
    .content {
      z-index: 2;
      .name {
        color: #fff;
        text-transform: capitalize;
        font-size: 3rem;
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
        color: #fff;
        text-transform: capitalize;
        font-size: 0.8rem;
      }
      .btn-group {
        margin-top: 12px;
      }
      .description {
        margin-top: 30px;
        color: #fff;
        max-width: 800px;
        p {
          font-weight: 500;
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
      background: rgba(0, 0, 0, 0.6);
    }
  }
`;
