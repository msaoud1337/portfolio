import type { ReactNode } from 'react';
import { createContext } from 'react';
import type { SettingsContextProps, ThemeColor, ThemeMode } from 'types/settings';

import useLocalStorage from '../hooks/useLocalStorage';
import palette from '../theme/palette';

const PRIMARY_COLOR = [
  {
    name: 'default',
    ...palette.light.primary,
  },
  {
    name: 'purple',
    lighter: '#EBD6FD',
    light: '#B985F4',
    main: '#7635dc',
    dark: '#431A9E',
    darker: '#200A69',
    contrastText: '#fff',
  },
  {
    name: 'cyan',
    lighter: '#D1FFFC',
    light: '#76F2FF',
    main: '#1CCAFF',
    dark: '#0E77B7',
    darker: '#053D7A',
    contrastText: palette.light.grey[800],
  },
  {
    name: 'blue',
    lighter: '#CCDFFF',
    light: '#6697FF',
    main: '#0045FF',
    dark: '#0027B7',
    darker: '#00137A',
    contrastText: '#fff',
  },
  {
    name: 'orange',
    lighter: '#FEF4D4',
    light: '#FED680',
    main: '#fda92d',
    dark: '#B66816',
    darker: '#793908',
    contrastText: palette.light.grey[800],
  },
  {
    name: 'red',
    lighter: '#FFE3D5',
    light: '#FFC1AC',
    main: '#FF3030',
    dark: '#B71833',
    darker: '#7A0930',
    contrastText: '#fff',
  },
];

function SetColor(themeColor: ThemeColor) {
  const DEFAULT = PRIMARY_COLOR[0];
  const PURPLE = PRIMARY_COLOR[1];
  const CYAN = PRIMARY_COLOR[2];
  const BLUE = PRIMARY_COLOR[3];
  const ORANGE = PRIMARY_COLOR[4];
  const RED = PRIMARY_COLOR[5];

  switch (themeColor) {
    case 'purple':
      return PURPLE;
    case 'cyan':
      return CYAN;
    case 'blue':
      return BLUE;
    case 'orange':
      return ORANGE;
    case 'red':
      return RED;
    default:
      return DEFAULT;
  }
}

const initialState: SettingsContextProps = {
  themeMode: 'dark',
  themeDirection: 'ltr',
  themeColor: 'cyan',
  onChangeMode: () => {},
  onChangeDirection: () => {},
  onChangeColor: () => {},
  setColor: PRIMARY_COLOR[0],
  colorOption: [],
};

const SettingsContext = createContext(initialState);

type SettingsProviderProps = {
  children: ReactNode;
};

function SettingsProvider({ children }: SettingsProviderProps) {
  const [settings, setSettings] = useLocalStorage('settings', {
    themeMode: initialState.themeMode,
    themeDirection: initialState.themeDirection,
    themeColor: initialState.themeColor,
  });

  const onChangeMode = (color: ThemeMode) => {
    setSettings({
      ...settings,
      themeMode: color,
    });
  };

  const onChangeDirection = (_: React.ChangeEvent<HTMLInputElement>) => {
    // setSettings({
    //   ...settings,
    //   themeDirection: (event.target as HTMLInputElement).value as ThemeDirection,
    // });
  };

  const onChangeColor = (color: ThemeColor) => {
    setSettings({
      ...settings,
      themeColor: color as ThemeColor,
    });
  };

  return (
    <SettingsContext.Provider
      value={{
        ...settings,
        onChangeMode,
        onChangeDirection,
        onChangeColor,
        setColor: SetColor(settings.themeColor),
        colorOption: PRIMARY_COLOR.map((color) => ({
          name: color.name,
          value: color.main,
        })),
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export { SettingsContext, SettingsProvider };
