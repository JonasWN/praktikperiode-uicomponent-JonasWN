import styled from 'styled-components'

const StyledBookMark = styled.article`
  position: relative;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 8%;
  grid-row-end: span 3;
  grid-column-end: span 4;
  color: ${(props) => props.theme.colors.darkFont};
  background: ${(props) => props.theme.colors.componentBG};
  border-radius: ${(props) => props.theme.border.full};
  box-shadow: ${(props) => props.theme.shadow.sm};

  .hero-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('${(props: any) => props.cover}');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: ${(props) => props.theme.border.full};
    filter: contrast(1.4)  saturate(1.2);
  }

  img {
    position: absolute;
    right: 5%;
    top: 0;

    &:hover {
      cursor: pointer;
    }
  }

  h2 {
      position: relative;
      align-self: center;
  }

  h3 {
      position: relative;
      color: burlywood;
      align-self: flex-end;
  }
`
export default StyledBookMark
