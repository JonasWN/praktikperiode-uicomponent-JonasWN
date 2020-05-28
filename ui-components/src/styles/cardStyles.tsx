import styled from 'styled-components'

export const StyledCard = styled.article`
  flex: 2;
  width: 300px;
  height: 420px;
  background: ${(props) => props.theme.colors.componentBG};
  border-radius: ${(props) => props.theme.border.rounded};
  box-shadow: ${(props) => props.theme.shadow.sm};

  .card-image {
    border-top-right-radius: ${(props) => props.theme.border.rounded};
    border-top-left-radius: ${(props) => props.theme.border.rounded};
    filter: hue-rotate(200deg);
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    font-size: medium;

    height: 50%;

    padding: 10%;
    h3 {
      font-size: 0.75em;
      font-weight: 500;
      text-transform: uppercase;
    }
    h2 {
      font-weight: bold;
    }
    p {
      font-weight: 300;
    }
  }
`
