import styled from 'styled-components';

export const Button = styled.button`
  display: block;
  padding: ${p => p.theme.space[3]}px;
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.sm};
  background-color: ${p => p.theme.colors.secondary};
  color: ${p => p.theme.colors.backgroundForm};
  cursor: pointer;
  transition: background-color 250ms linear;

  :hover,
  :focus {
    background-color: ${p => p.theme.colors.accent};
  }
`;
