import styled from 'styled-components'

export const shadow = {
  sm: '6px 4px 29px 1px rgba(212, 211, 211, 0.85)',
  lg: '6px 4px 29px 1px rgba(100, 100, 100, 0.76)',
  btn: '6px 4px 29px 1px rgba(218, 218, 218, 0.76)',
}

export const border = {
  rounded: '12px',
  pill: '500px',
}

export const bg = {
  component: '#f7fbff',
}

export const GridContainer = styled.main`
  /* display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, auto));
  grid-gap: 20px;

  > * {
    grid-row-end: span 1;
    grid-column-end: span 1;
  } */

  display: flex;
  flex-wrap: wrap;

  > * {
    margin: 0.9em;
  }
`

export const Container = styled.div`
  max-width: 950px;
  margin: 0 auto;
  padding: 30px 0;
`
