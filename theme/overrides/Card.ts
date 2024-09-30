import type { Theme } from '@mui/material/styles';

export default function Card(theme: Theme) {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: theme.customShadows.z16,
          borderRadius: theme.shape.borderRadiusSm,
          border: `1px solid ${theme.palette.divider}`,
          backgroundImage: 'unset',
          backgroundColor: theme.palette.background.neutral,
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: 0,
          paddingInline: theme.spacing(2),
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          padding: 0,
        },
        content: {
          padding: theme.spacing(2),
          paddingBottom: theme.spacing(1),
        },
      },
    },
  };
}
