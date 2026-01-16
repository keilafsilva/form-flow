import styled from "styled-components";

export const Container = styled.div`
  p {
    font-size: 13px;
    color:var(--color-2);
    margin-bottom: 12px; /* metade */
  }

  h1 {
    margin: 0 0 24px; /* base */
    font-size: 26px;
    font-weight: 600;
  }

  hr {
    height: 1px;
    border: 0;
    background-color: var(--color-7);
    margin: 24px 0; /* base */
  }

   span {
      display: block;
      margin-top: 12px; /* metade */
      color: #ff6b6b;
      font-size: 13px;
      margin-left:10px;
    }
  }

 button {
    background-color: var(--color-3);
    color: var(--color-1);
    font-size: 14px;
    font-weight: bold;
    padding: 16px 40px;
    border: 0;
    border-radius: 30px;
    cursor: pointer;
    margin-bottom:40px;

    margin-top: 24px; /* base */

    transition: all 0.2s ease;
  }

  button:hover {
    background-color: var(--color-5);

  }
  .backButton {
    background-color: var(--color-3);
    color: var(--color-1);
    font-size: 14px;
    font-weight: bold;
    padding: 16px 40px;
    border: 0;
    border-radius: 30px;
    cursor: pointer;
    text-decoration:none;
    margin-right:30px;

    margin-top: 24px; /* base */
    margin-bottom:40px;

    transition: all 0.2s ease;
  }

    .backButton:hover {
    background-color: var(--color-5);

  }
.buttons {
  display: flex;
justify-content: flex-start;
  margin-top:24px;
}




`;
