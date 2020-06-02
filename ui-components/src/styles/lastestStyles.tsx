import styled from 'styled-components'

const StyledLatest = styled.aside`
  grid-column-end: span 4;
  background: ${(props) => props.theme.colors.componentBG};
  border-radius: ${(props) => props.theme.border.full};
  box-shadow: ${(props) => props.theme.shadow.sm};

  header {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    color: ${(props) => props.theme.colors.lightFont};
    background: ${(props) => props.theme.colors.gradientBlue};
    border-top-right-radius: ${(props) => props.theme.border.full};
    border-top-left-radius: ${(props) => props.theme.border.full};
    text-transform: uppercase;
    font-size: 0.6em;
  }

  article {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    grid-row-gap: 20px;
    padding: 8%;

    section {
      display: flex;

      img {
        border-radius: ${(props) => props.theme.border.full};
        filter: saturate(1.3) contrast(1.3);
      }

      div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 6%;
        padding-right: 0;

        h3 {
          color: burlywood;
          letter-spacing: 2px;
          font-weight: 600;
          font-size: 0.75em;
          text-transform: uppercase;
        }
        p {
          line-height: 1.2em;
          font-weight: 100;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          overflow: hidden;
          -webkit-line-clamp: 3;
        }
      }
      &:hover {
        cursor: pointer;
      }
    }
  }

  footer {
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid #ccc;
    text-transform: uppercase;
    font-size: 0.75em;
    color: grey;

    &:hover {
      cursor: pointer;
    }
  }
`

export default StyledLatest
