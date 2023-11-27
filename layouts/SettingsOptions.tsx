import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import { Box, Divider, IconButton, Stack, useTheme } from '@mui/material';
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

const ThemeOptions = ({ isDarkMode }: { isDarkMode: boolean }) => {
  const { divider } = useTheme().palette;
  const { onChangeMode, themeMode } = useSettings();
  const border = `1px solid ${divider}`;

  const buttonStyle = {
    height: '45px',
    width: '45px',
    ':hover': { transform: 'scale(1.1)', border },
  };

  const onClickHandle = () => {
    if (themeMode !== 'light') return onChangeMode('light');
    onChangeMode('dark');
  };

  return (
    <Stack gap={2}>
      <IconButton
        onClick={onClickHandle}
        sx={{
          ...buttonStyle,
          border: !isDarkMode ? border : 'unset',
          transform: !isDarkMode ? 'scale(1.1)' : 'unset',
          backgroundColor: (theme) => (!isDarkMode ? theme.palette.background.paper : 'unset'),
        }}
      >
        <SunIcon height={35} width={35} />
      </IconButton>
      <IconButton
        onClick={onClickHandle}
        sx={{
          ...buttonStyle,
          border: isDarkMode ? border : 'unset',
          transform: isDarkMode ? 'scale(1.1)' : 'unset',
          backgroundColor: (theme) => (isDarkMode ? theme.palette.background.paper : 'unset'),
        }}
      >
        <MoonIcon height={35} width={35} />
      </IconButton>
    </Stack>
  );
};

export default function SettingsOptions() {
  const { colorOption, themeMode, themeColor, onChangeColor } = useSettings();
  const isDarkMode = themeMode === 'dark';

  const options = colorOption.map((option) => ({
    ...option,
    mode: isDarkMode ? 'dark' : 'light',
  }));

  const background: BackgroundType[] = getLinearBackgrounds();
  return (
    <Box
      pl={2}
      height={'100vh'}
      width={'auto'}
      sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
    >
      <Stack
        p={1.5}
        justifyContent={'center'}
        position={'fixed'}
        bgcolor={'background.neutral'}
        gap={2}
        borderRadius={1}
        sx={{ boxShadow: (theme) => theme.shadows[12] }}
      >
        <ThemeOptions isDarkMode={isDarkMode} />
        <Divider />
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
