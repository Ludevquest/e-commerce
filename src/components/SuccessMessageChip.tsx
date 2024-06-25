import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Check from '@mui/icons-material/Check';

const finalTheme = createTheme({
  components: {
    MuiChip: {
      styleOverrides: {
        root: ({ theme }) =>
          theme.unstable_sx({
            px: 1,
            py: 0.25,
            borderRadius: 1,
          }),
        label: {
          padding: 'initial',
        },
        icon: ({ theme }) =>
          theme.unstable_sx({
            mr: 0.5,
            ml: '-2px',
          }),
      },
    },
  },
});

const SuccessMessageChip: React.FC = () => {
  return (
    <ThemeProvider theme={finalTheme}>
      <Chip
        color="success"
        label={
          <span>
            <b>Status:</b> Completed
          </span>
        }
        icon={<Check fontSize="small" />}
      />
    </ThemeProvider>
  );
};

export default SuccessMessageChip;
