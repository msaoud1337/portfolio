import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Box, styled } from '@mui/material';
import { MaterialDesignContent, SnackbarProvider } from 'notistack';

const IconBox = ({ children }: { children: React.ReactNode }) => (
  <Box
    sx={{
      height: '30px',
      width: '30px',
      color: (theme) => theme.palette.success.main,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      mr: 2,
    }}
  >
    {children}
  </Box>
);

export default function SnackBarOverride({ children }: { children: React.ReactNode }) {
  const StyledMaterialDesignContent = styled(MaterialDesignContent)(({ theme }) => ({
    '&.notistack-MuiContent-success': {
      backgroundColor: theme.palette.background.neutral,
      boxShadow: theme.customShadows.primary,
    },
  }));

  return (
    <SnackbarProvider
      iconVariant={{
        success: (
          <IconBox>
            <CheckCircleIcon height={24} width={24} />
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
