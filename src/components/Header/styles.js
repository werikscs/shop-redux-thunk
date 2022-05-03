import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  max-width: var(--max-width);
  height: 70px;

  padding: 0 16px;

  h1 {
    color: var(--color-black);

    font-size: 2.25rem;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;

    position: relative;

    span {
      position: absolute;
      left: -20px;
      z-index: 10;

      display: flex;
      justify-content: center;
      align-items: center;

      width: 30px;
      height: 30px;

      font-size: 1rem;
      font-weight: bold;

      border-radius: 50%;

      color: var(--color-black);
      background-color: var(--color-white);
      outline: 1px solid var(--color-blue-navy);
    }

    button {
      font-size: 1.25rem;
      font-weight: 600;

      color: var(--color-white);
      background-color: var(--color-blue-navy);

      border-radius: 8px;

      padding: 8px 12px;

      :hover {
        color: var(--color-black);
        background-color: var(--color-white);
        outline: 1px solid var(--color-blue-navy);
      }
    }
  }
`;
