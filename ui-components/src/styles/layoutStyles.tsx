import styled from 'styled-components'

const sizes = {
  mobile: '375px',
  tablet: '768px',
  desktop: '1280px',
  desktopL: '1920px',
}

export const device = {
  mobile: `(min-width: ${sizes.mobile})`,
  tablet: `(min-width: ${sizes.tablet})`,
  desktop: `(min-width: ${sizes.desktop})`,
  desktopL: `(min-width: ${sizes.desktopL})`,
}

export const gridSpecs = {
  gap: {
    sm: '10px',
    md: '20px',
    lg: '30px',
  },
  spanCol: {
    sm: 'span 1',
    md: 'span 2',
    wide: 'span 12',
  },
  spanRow: {
    sm: 'span 1',
    md: 'span 2',
    wide: 'span 12',
  },
}

export const FlexibleGrid = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-gap: ${gridSpecs.gap.md};

  > * {
    cursor: default;
  }
`
export const Container = styled.div`
  max-width: 950px;
  margin: 0 auto;
  padding: 30px 0;
`
