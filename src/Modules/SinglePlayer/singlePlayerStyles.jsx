import styled from "styled-components";

export const TableGame = styled.table`
  margin: 5px auto;
  text-align: center;
  font-size: 3rem;
  h1 {
    text-align: center;
  }
  td {
    width: 100px;
    height: 100px;
  }
  .vert {
    border-left: 2px solid black;
    border-right: 2px solid black;
  }
  .hori {
    border-top: 2px solid black;
    border-bottom: 2px solid black;
  }
`;
