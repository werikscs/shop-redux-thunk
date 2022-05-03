import styled from "styled-components";

export const Ul = styled.ul`
  list-style: none;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;

  width: 100%;
  max-width: 300px;

  padding: 12px 0;

  border-radius: 8px;

  background-color: var(--color-white);

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    padding: 12px 8px;

    border-radius: 8px;

    background-color: var(--color-gray);
  }

  h4 {
    font-size: 1.25rem;

    padding: 32px;
  }
`;

export const Li = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;

  width: 100%;

  padding: 8px;

  /* background-color: var(--color-gray); */

  border: 1px solid var(--color-blue-navy);

  border-radius: 8px;

  figure {
    height: 50px;

    img {
      height: 50px;
    }
  }

  h2 {
    width: 100%;

    margin: auto 0;

    margin-bottom: auto;

    font-size: 1rem;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  span {
  }

  button {
    color: red;
    background-color: transparent;

    font-size: 1.25rem;
  }
`;
