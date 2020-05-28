import styled from 'styled-components'
import { gridSpecs } from '../styles/layoutStyles'

const StyledLeisure = styled.section`
  display: flex;
  grid-column-end: ${gridSpecs.spanCol.md};
  height: 420px;
  background: ${(props) => props.theme.colors.componentBG};
  border-radius: 15px;
  box-shadow: ${(props) => props.theme.shadow.sm};
  padding: 5%;

  img {
    border-radius: ${(props) => props.theme.border.rounded};
    box-shadow: ${(props) => props.theme.shadow.sm};
  }

  article {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 5%;

    button {
      align-self: flex-end;
      width: 120px;
      height: 35px;
      border-radius: ${(props) => props.theme.border.pill};
      border: none;
      box-shadow: ${(props) => props.theme.shadow.btn};
      background: linear-gradient(135deg, #0072ff, #259bff);
      color: #fcfcfc;

      &:hover {
        cursor: pointer;
      }
    }

    h2 span {
      display: block;
      font-size: 1.25em;
      font-weight: bold;
      text-transform: capitalize;
      line-height: 1.2em;
    }

    p {
      font-weight: 100;
      max-height: 80px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      -webkit-line-clamp: 3;
    }

    div {
      display: flex;
      justify-content: space-between;
      width: 100%;

      img {
        max-width: 30%;
      }
    }
  }
`
export default StyledLeisure
