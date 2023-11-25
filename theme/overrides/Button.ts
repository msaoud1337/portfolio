import type { Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------

export default function Button(theme: Theme) {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: theme.customShadows.primary,
          color: theme.palette.primary.contrastText,
          '&:hover': {
            boxShadow: 'none',
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.primary.dark,
          },
        },
        textInherit: {
          '&:hover': {
            backgroundColor: theme.palette.action.hover,
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: theme.spacing(1),
        },
      },
    },
  };
}
