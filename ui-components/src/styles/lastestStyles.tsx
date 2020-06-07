import styled from 'styled-components'
import { motion } from 'framer-motion'

export const StyledLatest = styled(motion.aside)`
  grid-column-end: span 4;
  grid-row-end: span 12;
  background: ${(props) => props.theme.colors.componentBG};
  border-radius: ${(props) => props.theme.border.full};
  box-shadow: ${(props) => props.theme.shadow.sm};

  header {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    color: ${(props) => props.theme.colors.lightFont};
    background: linear-gradient(45deg, #a600fb, #25afff);
    border-top-right-radius: ${(props) => props.theme.border.full};
    border-top-left-radius: ${(props) => props.theme.border.full};
    text-transform: uppercase;
    font-size: 0.6em;
  }

  article {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    grid-row-gap: 20px;
    padding: 8%;
  }

  footer {
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid #ccc;
    text-transform: uppercase;
    font-size: 0.75em;
    color: grey;

    &:hover {
      cursor: pointer;
    }
  }
`

export const StyledNewsArticle = styled.section`
  display: flex;

  img {
    border-radius: ${(props) => props.theme.border.full};
    filter: saturate(1.3) contrast(1.3);
    width: 30%;
    height: 80px;
    object-fit: cover;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 3% 6%;
    padding-right: 0;
  }

  &:hover {
    cursor: pointer;
  }
`
export const StyledParagraph = styled.div`
  h3 {
    color: burlywood;
    letter-spacing: 2px;
    font-weight: 600;
    font-size: 0.75em;
    text-transform: uppercase;
  }
  p {
    line-height: 1.2em;
    font-weight: 100;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 3;
  }
`
