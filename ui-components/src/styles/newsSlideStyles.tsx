import styled from 'styled-components'

const StyledNewSlide = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  grid-column-end: span 8;
  background: ${(props) => props.theme.colors.darkFont};
  color: ${(props) => props.theme.colors.lightFont};
  height: 475px;
  padding: 5%;
  border-radius: ${(props) => props.theme.border.full};
  box-shadow: ${(props) => props.theme.shadow.sm};

  .hero-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('https://images.unsplash.com/photo-1515266591878-f93e32bc5937?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: ${(props) => props.theme.border.full};
    filter: brightness(0.8) saturate(1.2);
  }

  header {
    position: relative;
    display: flex;
    align-items: center;

    h3 {
      font-size: 0.85em;
      font-weight: 400;
      margin-left: 10px;
    }
    *:last-child {
      margin-left: auto;

      &:hover {
        cursor: pointer;
      }
    }
  }
  section {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 60%;
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
      li {
        width: 25px;
        height: 2px;
        margin: 0 5px;
        background: ${(props) => props.theme.colors.lightFont};
        border-radius: ${(props) => props.theme.border.rounded};
        opacity: 0.5;

        &:hover {
          cursor: pointer;
        }
      }
      li:first-child {
        opacity: 1;
      }
    }
  }
`
export default StyledNewSlide
