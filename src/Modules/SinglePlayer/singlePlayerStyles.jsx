import styled from "styled-components";

export const TableGame = styled.div`
  text-align: center;
  font-size: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 0;
  width: 150px;
  height: 150px;
`;

export const Overflow = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
`;

export const Field = styled.div`
  border: 1px solid #000;
  width: 50px;
  height: 50px;
`;
