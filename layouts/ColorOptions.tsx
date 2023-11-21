import { Box, Stack } from '@mui/material';
import useSettings from 'hooks/useSettings';

import { getLinearBackgrounds } from '@/utils/themeColors';

type ColorBoxProps = {
  primaryColor: string;
  background?: string;
  isActive: boolean;
};

const ColorBox = ({ primaryColor, background, isActive }: ColorBoxProps) => {
  return (
    <Box
      sx={{
        height: '45px',
        width: '45px',
        background,
        boxShadow: isActive ? `0 8px 16px 0 ${primaryColor}` : 'unset',
        transform: isActive ? 'scale(1.1)' : 'unset',
        borderRadius: 1,
        '&:hover': {
          boxShadow: `0 8px 16px 0 ${primaryColor}`,
          transform: 'scale(1.1)',
        },
      }}
    />
  );
};

type BackgroundType = {
  light: string;
  dark: string;
};

export default function ColorOptions() {
  const { colorOption, themeMode, themeColor, onChangeColor } = useSettings();

  const options = colorOption.map((option) => ({
    ...option,
    mode: themeMode === 'light' ? 'light' : 'dark',
  }));

  const background: BackgroundType[] = getLinearBackgrounds();
  return (
    <Box
      pl={2}
      height={'100vh'}
      sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
    >
      <Stack
        p={1.5}
        justifyContent={'center'}
        position={'fixed'}
        bgcolor={'background.neutral'}
        gap={2}
        borderRadius={1}
      >
        {options.map((option, index) => (
          <Box key={index} onClick={() => onChangeColor(option.name)}>
            <ColorBox
              isActive={option.name === themeColor}
              primaryColor={option.value}
              background={background[index]?.[option.mode as keyof (typeof background)[0]]}
            />
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
