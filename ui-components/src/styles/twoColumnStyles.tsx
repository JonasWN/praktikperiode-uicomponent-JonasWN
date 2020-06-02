import styled from 'styled-components'

const StyledTwoColumn = styled.section`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 30px;
  justify-content: space-between;
  grid-column-end: span 8;
  background: ${(props) => props.theme.colors.componentBG};
  border-radius: ${(props) => props.theme.border.full};
  box-shadow: ${(props) => props.theme.shadow.sm};
  padding: 3% 5%;
`
export default StyledTwoColumn
