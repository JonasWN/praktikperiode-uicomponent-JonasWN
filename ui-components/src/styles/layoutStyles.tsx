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
  grid-template-columns: repeat(12, 1fr);
  grid-gap: ${gridSpecs.gap.md};
  padding: 4%;
  background: #e0f1ff;
  color: ${(props) => props.theme.colors.darkFont};
  border-radius: ${(props) => props.theme.border.full};
  box-shadow: ${(props) => props.theme.shadow.sm};

  > * {
    cursor: default;
  }
`
export const Container = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  padding: 30px 0;
`
export const Title = styled.h1`
  text-align: center;
  margin: 10vh 0;
`
