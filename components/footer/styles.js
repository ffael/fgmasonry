import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  color: #fff;
  background: ${(props) => props.theme.colors.black};
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  section {
    flex: 1;
  }
  .info-section {
    h3 {
      color: ${(props) => props.theme.colors.orange};
      font-size: 1.5625rem;
    }
    address {
      font-style: normal;

      p {
        margin: 30px 0;
      }
      a {
        transition: all 0.3s ease;
      }

      a[href^="tel"] {
        font-size: 2rem;
        font-weight: bold;
      }
    }
  }

  .info-social {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: space-around;

    ul {
      display: flex;
      flex-direction: column;
    }
    .nav-social ul {
      flex-direction: row;

      li {
        margin: 0 15px;
      }
    }
    ul li {
      margin: 15px 0;
      font-size: 0.8125rem;

      &:first-child {
        margin-left: 0 !important;
      }
    }
    h4 {
      font-size: 1.1rem;
      color: ${(props) => props.theme.colors.orange};
    }

    @media (min-width: 700px) {
      .nav-services ul {
        height: 200px;
        flex-wrap: wrap;

        li {
          margin-right: 30px;
        }
      }
    }
  }

  @media (min-width: 950px) {
    flex-direction: row;
    a:hover {
      color: ${(props) => props.theme.colors.orange};
    }
  }
`;

export const Copyright = styled.section`
  background: ${(props) => props.theme.colors.orange};
  color: ${(props) => props.theme.colors.black};
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 40px;
  font-size: 0.8125rem;
  user-select: none;
`;
