import styled from 'styled-components'
import { motion } from 'framer-motion'

const StyledCatagoryLogo = styled(motion.article)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  grid-column-end: span 2;
  grid-row-end: span 1;
  padding: 10%;
  color: ${(props) => props.theme.colors.lightFont};
  background: linear-gradient(45deg, #17c8da, #c914f7);
  border-radius: ${(props) => props.theme.border.full};
  box-shadow: ${(props) => props.theme.shadow.sm};
  border: 1px solid #82858b;

  .catagory-logo {
    font-size: 3em;
  }

  h2 {
    font-size: 0.95em;
    text-transform: uppercase;
  }
`
export default StyledCatagoryLogo
