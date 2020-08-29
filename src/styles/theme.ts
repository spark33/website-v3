import { createMuiTheme, responsiveFontSizes } from '@material-ui/core'

// Initialize to get access to default variables in customizations
let theme = createMuiTheme()

const fontFamilies = ['Overpass']

theme = createMuiTheme({
  typography: {
    fontFamily: fontFamilies.join(','),
    h1: {
      fontWeight: 800,
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': fontFamilies.map((f) => {
          return { fontFamily: f }
        }),
        a: {
          color: theme.palette.primary.main,
        },
      },
    },
  },
})

theme = responsiveFontSizes(theme)
export default theme
