import styled from 'styled-components'

export const StyledCard = styled.article`
  height: 420px;
  grid-column-end: span 4;
  background: ${(props) => props.theme.colors.componentBG};
  border-radius: ${(props) => props.theme.border.full};
  box-shadow: ${(props) => props.theme.shadow.sm};

  .card-image {
    border-top-right-radius: ${(props) => props.theme.border.full};
    border-top-left-radius: ${(props) => props.theme.border.full};
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
