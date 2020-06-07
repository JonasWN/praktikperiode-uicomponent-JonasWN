import styled from 'styled-components'
import { motion } from 'framer-motion'

const StyledLeisure = styled(motion.section)`
  display: flex;
  grid-column-end: span 8;
  height: 420px;
  background: ${(props) => props.theme.colors.componentBG};
  border-radius: ${(props) => props.theme.border.full};
  box-shadow: ${(props) => props.theme.shadow.sm};
  padding: 5%;

  img {
    border-radius: ${(props) => props.theme.border.full};
    box-shadow: ${(props) => props.theme.shadow.img};
    object-fit: fill;
    filter: saturate(1.3) contrast(1.3);
  }

  .large-photo {
    width: 50%;
  }

  article {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 5%;
    width: 50%;

    button {
      align-self: flex-end;
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

    h2 {
      font-size: 2.4rem;
      font-weight: bold;
      text-transform: capitalize;
      line-height: 3rem;
    }

    p {
      font-weight: 100;
      max-height: 80px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      -webkit-line-clamp: 3;
    }

    div {
      display: flex;
      justify-content: space-between;
      height: 80px;
      width: 100%;

      img {
        max-width: 30%;
      }
    }
  }
`
export default StyledLeisure
