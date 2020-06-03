import styled from 'styled-components'

const StyledNewsDigest = styled.article`
  grid-column-end: span 4;
  grid-row-end: span 6;
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

  ol {
    padding: 10%;
  }
`
export const StyledOrderedArticle = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  height: 190px;
  padding: 10% 0;
  border-bottom: 1px solid #cdc3c3;

  &:last-child {
    border: none;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    //@ts-ignore
    background: ${(props) => props.background};
    color: ${(props) => props.theme.colors.lightFont};
    border-radius: ${(props) => props.theme.border.circle};
  }

  h4 {
    font-weight: 400;
  }

  p {
    font-weight: 100;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 3;
  }
`

export default StyledNewsDigest
