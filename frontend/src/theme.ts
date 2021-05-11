import {createMuiTheme} from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#f14848',
      main: '#f13958',
      dark: '#f12070',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#fff',
    },
  },
  shadows: [
    'none',
    '0px 0px 0px 1px rgba(0,0,0,0.05)',
    '0px 0px 0px 1px rgba(0,0,0,0.05), 1px 1px 3px 0px rgba(0,0,0,0.05)',
    '1px 1px 6px 0px rgba(0,0,0,0.1)',
    '0px 2px 4px -1px rgba(0,0,0,0.1)', // default
    '0px 3px 5px -1px rgba(0,0,0,0.1)', // default
    '0px 3px 5px -1px rgba(0,0,0,0.1)', // default
    '0px 4px 5px -2px rgba(0,0,0,0.1)', // default
    '0px 5px 5px -3px rgba(0,0,0,0.1)', // default
    '0px 5px 6px -3px rgba(0,0,0,0.1)', // default
    '0px 6px 6px -3px rgba(0,0,0,0.1)', // default
    '0px 6px 7px -4px rgba(0,0,0,0.1)', // default
    '0px 7px 8px -4px rgba(0,0,0,0.1)', // default
    '0px 7px 8px -4px rgba(0,0,0,0.1)', // default
    '0px 7px 9px -4px rgba(0,0,0,0.1)', // default
    '0px 8px 9px -5px rgba(0,0,0,0.1)', // default
    '0px 8px 10px -5px rgba(0,0,0,0.1)', // default
    '0px 8px 11px -5px rgba(0,0,0,0.1)', // default
    '0px 9px 11px -5px rgba(0,0,0,0.1)', // default
    '0px 9px 12px -6px rgba(0,0,0,0.1)', // default
    '0px 10px 13px -6px rgba(0,0,0,0.1)', // default
    '0px 10px 13px -6px rgba(0,0,0,0.1)', // default
    '0px 10px 14px -6px rgba(0,0,0,0.1)', // default
    '0px 11px 14px -7px rgba(0,0,0,0.1)', // default
    '0px 11px 15px -7px rgba(0,0,0,0.1)', // default
  ],
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  typography: {
    h1: {
      fontWeight: 600,
      fontSize: '3.052rem',
      lineHeight: 1.5,
    },
    h2: {
      fontWeight: 600,
      fontSize: '2.441rem',
      lineHeight: 1.5,
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.953rem',
      lineHeight: 1.5,
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.563rem',
      lineHeight: 1.5,
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.25rem',
      lineHeight: 1.5,
    },
    h6: {
      fontWeight: 600,
      fontSize: '1rem',
      lineHeight: '24px',
    },
    body1: {},
    body2: {},
    subtitle1: {fontWeight: 600, fontSize: '0.8rem', lineHeight: '24px'},
    subtitle2: {fontWeight: 600, fontSize: '0.9rem', lineHeight: '24px'},
    caption: {fontWeight: 400, fontSize: '0.9rem', lineHeight: '24px'},
    button: {fontWeight: 500},
  },
});

export default theme;
