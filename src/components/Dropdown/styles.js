import styled from "styled-components";

export const Main = styled.div`
  background: #000;
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1,
  small {
    color: #fff;
    margin: 1rem;
  }

  span {
    color: #0ddac5;
    font-weight: bold;
  }
`;

export const DropDownContainer = styled.div`
  width: 20em;
`;

export const DropDownHeader = styled.div`
  padding: 1.4rem;
  background: #121212;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 1.3rem;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: 0.5ms;

  .arrow-icon:hover {
    color: #0ddac5;
    cursor: pointer;
  }

  &:hover {
    background: #000;
    transition: 0.5s;
  }
`;

export const DropDownListContainer = styled.div`
  position: absolute;
  z-index: 100;
  width: 20rem;
`;

export const DropDownList = styled.ul`
  padding: 1rem 0 1rem 1rem;
  background: #121212;
  box-sizing: border-box;
  color: #464646;
  font-size: 1.3rem;
  font-weight: 500;
  border-top: 1px solid #000;
`;

export const ListItem = styled.li`
  list-style: none;
  margin-top: 0.6rem;
  transition: 0.5s;

  &:hover {
    color: #0ddac5;
    transition: 0.5s;
  }

  &:first-child {
    margin-top: 0;
  }
`;
