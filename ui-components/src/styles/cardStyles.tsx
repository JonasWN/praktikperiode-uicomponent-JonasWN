import styled from 'styled-components'
import { shadow, border } from './globalStyles'

export const StyledCard = styled.article`
  width: 300px;
  height: 420px;
  background: #fff;

  border-radius: ${border.rounded};

  box-shadow: ${shadow.sm};

  .card-image {
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
    filter: contrast(1.2);
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

    :hover {
      cursor: pointer;
    }
  }
`
