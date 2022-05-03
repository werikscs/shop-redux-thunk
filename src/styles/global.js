import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  :root{
    --color-black: #000000;
    --color-white: #ffffff;
    --color-gray: #e5e5e5;
    --color-gold: #fca311;
    --color-blue-navy: #14213d;

    --max-width: 1440px;
  }

  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
  }

  font-size: 16px;

  main{
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    min-height: 100vh;

    hr{
      width: 100%;
      height: 1px;
      background-color: var(--color-black);
    }

    background-color: var(--color-gray);

  }

  button{
    border: 0;
    outline: 0;

    cursor: pointer;
  }
`;
