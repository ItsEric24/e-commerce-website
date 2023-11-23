import styled from "styled-components";

export const CategoryTitle = styled.h2`
  font-size: 3rem;
  margin-top: 25px;
  text-align: center;
  text-transform: uppercase;
`;

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;
`;
