import styled from "styled-components";

export const SList = styled.ul`
  list-style: none;
`;

export const SListItem = styled.li`
  display: flex;
  align-items: center;
  font-family: ${({ theme }) => theme.font.primary};
  font-weight: 400;
  font-size: 14px;
  color: ${({ theme }) => theme.color.onSurface};

  + li {
    margin-top: 10px;
  }

  > svg {
    margin-right: 6px;
  }
`;