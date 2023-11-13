import type { Theme } from '@mui/material/styles';

export default function Card(theme: Theme) {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: theme.customShadows.z16,
          borderRadius: theme.shape.borderRadiusSm,
          border: `1px solid ${theme.palette.divider}`,
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: 0,
          paddingInline: theme.spacing(3),
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          padding: 0,
        },
        content: {
          padding: theme.spacing(3),
          paddingBottom: theme.spacing(1),
        },
      },
    },
  };
}
