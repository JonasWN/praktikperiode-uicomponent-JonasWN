import styled from 'styled-components'

const StyledTravelCard = styled.article`
    display: flex;
    align-items: center;
    position: relative;
    grid-column-end: span 4;
    padding: 0 10%;
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
    filter: contrast(1.4) brightness(0.6) saturate(1.2);
  }
  div {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      color: ${(props) => props.theme.colors.lightFont};

      h3 {
        margin-bottom: 20px;
      }
  }  
`

export default StyledTravelCard
