import styled from 'styled-components'
import { motion } from 'framer-motion'

const StyledNewsBlock = styled(motion.article)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  grid-column-end: span 4;
  grid-row-end: span 3;
  padding: 15% 10%;
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
    filter: contrast(1.4) brightness(0.8) saturate(1.2);
  }

  header {
    position: relative;
    display: flex;
    position: relative;
    display: flex;
    align-items: center;

    img {
      width: 30px;
    }
    h3 {
      text-transform: uppercase;
      font-size: 0.85em;
      font-weight: 700;
      margin-left: 10px;
    }
  }

  p {
    position: relative;
  }

  button {
    position: relative;
    width: 120px;
    height: 35px;
    border-radius: ${(props) => props.theme.border.pill};
    border: none;
    box-shadow: ${(props) => props.theme.shadow.btn};
    background: ${(props) => props.theme.colors.gradientBlue};
    color: ${(props) => props.theme.colors.lightFont};

    &:hover {
      cursor: pointer;
    }
  }
`
export default StyledNewsBlock
