import styled from "styled-components";

export const ListContact = styled.ul`
  width: 300px;
`;

export const ItemContact = styled.li`
  display: flex;
  justify-content: space-between;
  font-weight: 400;
  font-size: 16px;
  margin-bottom: 15px;
`;

export const ButtonContact = styled.button`
  width: 80px;
  height: 20px;
  font-weight: 400;
  font-size: 12px;
  cursor: pointer;
  margin-left: 15px;
  background-color: #ffffff;
  border-radius: 4px;
  border: 2px solid #d3d3d3;
  &:focus {
    background-color: #87cefa;
  }
`;
