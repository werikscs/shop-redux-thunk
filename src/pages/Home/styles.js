import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  align-items: flex-start;
  gap: 32px;

  margin: 8px 0;
  padding: 0 16px;

  width: 100%;
  max-width: var(--max-width);
`;

export const Ul = styled.ul`
  list-style: none;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 32px;

  width: 100%;
`;

export const Li = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  width: 100%;
  max-width: calc(1440px / 5);
  height: 450px;

  padding: 16px;

  background-color: var(--color-white);

  border-radius: 8px;

  figure {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;

    padding: 0 8px 8px;

    border-bottom: 1px solid var(--color-gray);

    img {
      width: 100%;
      max-height: 200px;
      object-fit: contain;
    }
  }

  h2 {
    width: 100%;

    margin-bottom: auto;

    font-size: 1.15rem;

    text-align: justify;

    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 32px;

    width: 100%;

    span {
      font-weight: 600;
      font-size: 1.5rem;
    }

    button {
      width: 100%;

      padding: 12px;

      font-size: 1.25rem;
      font-weight: 600;

      border-radius: 8px;

      color: var(--color-white);
      background-color: var(--color-blue-navy);

      :hover {
        color: var(--color-black);
        background-color: var(--color-white);
        outline: 1px solid var(--color-blue-navy);
      }
    }
  }
`;
