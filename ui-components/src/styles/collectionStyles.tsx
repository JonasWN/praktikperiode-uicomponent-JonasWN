import styled from 'styled-components'
import { motion } from 'framer-motion'

const StyledCollection = styled(motion.article)`
  display: flex;
  flex-direction: column;
  height: 375px;
  grid-column-end: span 4;
  background: ${(props) => props.theme.colors.componentBG};
  border-radius: ${(props) => props.theme.border.full};
  box-shadow: ${(props) => props.theme.shadow.sm};

  figure {
    position: relative;
    img {
      border-top-right-radius: ${(props) => props.theme.border.full};
      border-top-left-radius: ${(props) => props.theme.border.full};
      height: 200px;
      width: 100%;
      filter: brightness(0.9) saturate(1.1) contrast(1.2);
      object-fit: cover;
    }
    figcaption {
      position: absolute;
      top: 10%;
      left: 10%;
      color: ${(props) => props.theme.colors.lightFont};
      font-size: 0.85em;
      font-weight: bold;
      text-transform: uppercase;
    }
  }
  div {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-grow: 1;
    text-align: center;

    .avatar {
      position: absolute;
      top: -28px;
      left: 10%;
      height: 55px;
      width: 55px;
      border-radius: ${(props) => props.theme.border.circle};
      object-fit: cover;
    }
    h3 {
      font-weight: 500;
    }
    p {
      font-size: 0.85em;
      font-weight: 100;
    }
  }
`

export default StyledCollection
