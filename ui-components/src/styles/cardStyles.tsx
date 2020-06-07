import styled from 'styled-components'
import { motion } from 'framer-motion'

export const StyledCard = styled(motion.article)`
  height: 420px;
  grid-column-end: span 4;
  background: ${(props) => props.theme.colors.componentBG};
  border-radius: ${(props) => props.theme.border.full};
  box-shadow: ${(props) => props.theme.shadow.sm};

  .card-image {
    border-top-right-radius: ${(props) => props.theme.border.full};
    border-top-left-radius: ${(props) => props.theme.border.full};
    filter: hue-rotate(200deg) saturate(1.2);
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    font-size: medium;

    height: 50%;

    padding: 10%;
    h3 {
      font-size: 0.75em;
      font-weight: 500;
      text-transform: uppercase;
    }
    h2 {
      font-weight: bold;
    }
    p {
      font-weight: 300;
    }
  }
`
export const StyledParagraph = styled.section`
  h2 {
    text-transform: uppercase;
  }
  p {
    font-weight: 100;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 3;
  }
`
