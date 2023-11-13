import type { Theme } from '@mui/material/styles';

export default function Tabs(theme: Theme) {
  return {
    MuiTabs: {
      styleOverrides: {
        root: {
          paddingInline: theme.spacing(4),
          borderBottom: `1px solid ${theme.palette.divider}`,
          borderLeft: `1px solid ${theme.palette.divider}`,
          '&.Mui-selected': {
            color: theme.palette.text.primary,
          },
          paddingRight: theme.spacing(3),
          maxHeight: '49px',
        },
      },
    },
    MuiTabScrollButton: {
      styleOverrides: {
        root: {
          width: 48,
          borderRadius: '50%',
        },
      },
    },
  };
}
