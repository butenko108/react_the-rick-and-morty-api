import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ReactNode } from 'react';

declare module '@mui/material/styles' {
  interface Palette {
    white: Palette['primary'];
  }

  interface PaletteOptions {
    white?: PaletteOptions['primary'];
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    white: true;
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
  },
});

interface Props {
  children: ReactNode;
}

export const MaterialUIProvider = ({ children }: Props) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;
