import styled from "styled-components";

const Wrapper = styled.div`
  header {
    text-align: center;
    margin-bottom: 3rem;
    .btn {
      margin-bottom: 1rem;
    }
  }

  .img {
    border-radius: var(--borderRadius);
    width: 100%;
  }

  .recipe-info {
    padding-top: 2rem;
  }

  .recipe p {
    font-weight: 700;
    text-transform: capitalize;
    line-height: 2;
    margin-bottom: 1rem;
  }

  .recipe-data {
    margin-right: 0.5rem;
    background: var(--primary-300);
    padding: 0.25rem 0.5rem;
    border-radius: var(--borderRadius);
    color: var(--primary-700);
    letter-spacing: var(--letterSpacing);
  }

  /* .instructions {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;
    line-clamp: 5;
    overflow: hidden;
  } */

  /* .show-instructions {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 20;
    line-clamp: 5;
    display: inline;
    overflow: visible;
  } */

  @media (min-width: 992px) {
    .recipe {
      display: grid;
      grid-template-columns: 2fr 3fr;
      gap: 3rem;
      /* align-items: center; */
    }

    .recipe-info {
      padding-top: 0;
    }

    .img {
      width: 22rem;
      display: inline-block;
      margin-right: 0.5rem;
    }
  }
`;

export default Wrapper;
