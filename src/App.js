import Routes from "./routes/index.routes";
import Helvetica from './constants/fonts/helveticaNeue/Helvetica Neue LTW0697BlkCnObl.ttf';
import {createMuiTheme,
  ThemeProvider
} from "@material-ui/core/styles";
import {CssBaseline} from "@material-ui/core";

const helveticaNeue = {
  fontFamily: 'Helvetica',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('Helvetica'),
    local('Helvetica-Heavy-05'),
    local('Helvetica-Medium'),
    local('Helvetica'),
    url(${Helvetica}) format('ttc', 'ttf', 'otf')
  `,
  unicodeRange:
      'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Helvetica',
    button: {
      textTransform: "none"
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [helveticaNeue],
      },
    },
  }
});

function App() {
  return (
      <ThemeProvider theme={theme}>
        <CssBaseline>
           <Routes />
        </CssBaseline>
      </ThemeProvider>
  );
}

export default App;
