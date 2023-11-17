import { Box, styled } from '@mui/material';
import { MaterialDesignContent, SnackbarProvider } from 'notistack';

const IconBox = ({ children }: { children: React.ReactNode }) => (
  <Box
    sx={{
      height: '30px',
      width: '30px',
      backgroundColor: 'background.neutral',
    }}
  >
    {children}
  </Box>
);

export default function SnackBarOverride({ children }: { children: React.ReactNode }) {
  const StyledMaterialDesignContent = styled(MaterialDesignContent)(({ theme }) => ({
    '&.notistack-MuiContent-success': {
      backgroundColor: theme.palette.background.neutral,
    },
  }));

  return (
    <SnackbarProvider
      iconVariant={{
        success: (
          <IconBox>
            <></>
          </IconBox>
        ),
      }}
      Components={{
        success: StyledMaterialDesignContent,
      }}
    >
      {children}
    </SnackbarProvider>
  );
}
