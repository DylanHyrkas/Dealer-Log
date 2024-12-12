import { createTheme, ThemeOptions } from '@mui/material/styles';

const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#088c3a',
    },
    secondary: {
      main: '#8c2577',
    },
  },
  components: {
    MuiTooltip: {
      styleOverrides: {
        arrow: true,
      },
    },
  },
  typography: {
    fontFamily: 'Noto Sans',
    fontWeightLight: 600,
    fontSize: 16,
    fontWeightMedium: 600,
    fontWeightBold: 800,
    htmlFontSize: 14,
  },
};

const Theme = createTheme(themeOptions);

export default Theme;