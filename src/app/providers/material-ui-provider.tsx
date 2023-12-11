import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ReactNode } from 'react';

declare module '@mui/material/styles' {
  interface Palette {
    white: Palette['primary'];
    'white-smoke': Palette['primary'];
  }

  interface PaletteOptions {
    white?: PaletteOptions['primary'];
    'white-smoke'?: PaletteOptions['primary'];
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    white: true;
    'white-smoke': true;
  }
}

let theme = createTheme({});

theme = createTheme(theme, {
  palette: {
    white: theme.palette.augmentColor({
      color: {
        main: '#fff',
      },
      name: 'white',
    }),
    'white-smoke': theme.palette.augmentColor({
      color: {
        main: '#F5F5F5',
      },
      name: 'white-smoke',
    }),
  },
});

interface Props {
  children: ReactNode;
}

export const MaterialUIProvider = ({ children }: Props) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;
