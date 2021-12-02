import { createTheme } from '@mui/material/styles';
import { orange } from '@mui/material/colors';

/**
 * Mui theme customization function
 * @return {Mui::Theme}
 */
export default function composeTheme() {
  return createTheme({
    // palette: {
    //   primary: {
    //     main: orange[500],
    //   },
    // },
  });
}
