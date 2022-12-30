import styled from 'styled-components';

export const Form = styled.form`
  button {
    width: 190px;
    margin: 0 auto;
  }
`;

export const Label = styled.label`
  display: block;
  margin-bottom: ${p => p.theme.space[2]}px;
`;

export const Input = styled.input`
  padding: ${p => p.theme.space[2]}px;
  margin-bottom: ${p => p.theme.space[2]}px;
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.sm};
  outline: none;
  transition: transform 250ms linear, border-color 250ms linear,
    color 250ms linear;

  + button {
    width: 190px;
    margin: 0 auto ${p => p.theme.space[3]}px;
  }

  :focus,
  :hover,
  :focus-visible {
    color: ${p => p.theme.colors.text};
    border-color: ${p => p.theme.colors.primary};
    transform: scale(1.1);
  }
`;
// background-color: ${p => (p.value ? null : 'transparent')};
