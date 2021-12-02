import { createTheme } from '@mui/material/styles';
import { orange } from '@mui/material/colors';

/**
 * Mui theme customization function
 * @return {Mui::Theme}
 */
export default function composeTheme() {
  return createTheme({
    palette: {
      primary: {
        main: '#009fda',
        secondary: '#CB5621',
        white: '#ffffff'
      },
      secondary: {
        main: '#CB5621',
      },
      psbMain: '#303181',
    },
  });
}
