import styled from 'styled-components'

const StyledNewSlide = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  grid-row-end: span 10;
  grid-column-end: span 8;
  background: ${(props) => props.theme.colors.darkFont};
  color: ${(props) => props.theme.colors.lightFont};
  padding: 5%;
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
    filter: contrast(1.4) brightness(0.8) saturate(1.2);
  }

  header {
    position: relative;
    display: flex;
    align-items: center;

    img {
      width: 30px;
    }
    h3 {
      font-size: 0.85em;
      font-weight: 400;
      margin-left: 10px;
    }
    *:last-child {
      margin-left: auto;
      width: 20px;

      &:hover {
        cursor: pointer;
      }
    }
  }
  section {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 40%;
    justify-content: space-between;

    div {
      max-width: 60%;

      h2 {
        font-size: 2.2em;
        line-height: 1em;
        margin-bottom: 10px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        -webkit-line-clamp: 3;
      }
      p {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        -webkit-line-clamp: 3;
      }
    }

    ul {
      display: flex;
      justify-content: center;
      max-width: 100%;
      li {
        width: 5%;
        height: 2px;
        margin: 0 5px;
        background: ${(props) => props.theme.colors.lightFont};
        border-radius: ${(props) => props.theme.border.rounded};
        opacity: 0.5;

        &:hover {
          cursor: pointer;
        }
      }
      li:nth-child(${(props: any) => props.currentSlide + 1}) {
        opacity: 1;
      }
    }
  }
`
export default StyledNewSlide
