import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
max-width: 1100px;

margin: 0 auto;

header {
  margin-top: 48px;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

a {
 color: ${props => props.theme.colors.title};
 font-weight: bold;
 text-decoration: none;

 display: flex;
 align-items: center;
}

svg {
  margin-right: 16px;
  color: var${props => props.theme.colors.primary};
}
`;

export const Form = styled.form`
  margin: 80px auto;
  padding: 64px;
  max-width: 730px;
  background: ${props => props.theme.colors.secundary};
  border-radius: 8px;
  display: flex;
  flex-direction: column;

  > h1 {
    font-size: 36px;
  }
  fieldset {
    margin-top: 64px;
    min-inline-size: auto;
    border: 0;
  }
  legend {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
    h2 {
      font-size: 24px;
    }
    span {
      font-size: 14px;
      font-weight: normal;
      color: ${props => props.theme.colors.text};
    }
  }
  .field {
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-bottom: 24px;
    label {
      font-size: 14px;
      margin-bottom: 8px;
    }
    input[type='text'],
    input[type='email'],
    input[type='number'] {
      flex: 1;
      background: ${props => props.theme.colors.input};
      border-radius: 8px;
      border: 0;
      padding: 16px 24px;
      font-size: 16px;
      color: ${props => props.theme.colors.text};
    }
    select {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      flex: 1;
      background: ${props => props.theme.colors.input};
      border-radius: 8px;
      border: 0;
      padding: 16px 24px;
      font-size: 16px;
      color: ${props => props.theme.colors.text};
    }
    & :disabled {
      cursor: not-allowed;
    }
  }
  .field-check {
    flex-direction: row;
    align-items: center;
    input[type='checkbox'] {
      background: ${props => props.theme.colors.text};
    }
    label {
      margin: 0 0 0 8px;
    }
  }
  .leaflet-container {
    width: 100%;
    height: 350px;
    border-radius: 8px;
    margin-bottom: 24px;
  }
  > button {
    width: 260px;
    height: 56px;
    background: ${props => props.theme.colors.primary};
    border-radius: 8px;
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    border: 0;
    align-self: flex-end;
    margin-top: 40px;
    transition: background-color 0.2s;
    cursor: pointer;
    &:hover {
      background: #2fb86e;
    }
  }
`;

export const GroupField = styled.div`
  flex: 1;
  display: flex;
  > div + div,
  > input + input {
    margin-left: 24px;
  }
`;

export const ItemsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  list-style: none;

  li {
    background: ${props => (props.theme.colors.content)};
    border: 2px solid ${props => (props.theme.colors.secundary)};
    height: 180px;
    border-radius: 8px;
    padding: 32px 24px 16px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    text-align: center;

    cursor: pointer;

    span {
      flex: 1;
      margin-top: 12px;
      display: flex;
      align-items: center;
      color: ${props => (props.theme.colors.title)};
    }
    &.selected {
      border: 2px solid #2FB86E;
    }
    
  }
`;