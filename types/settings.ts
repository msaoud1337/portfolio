// ----------------------------------------------------------------------

export type ThemeMode = 'light' | 'dark';
export type ThemeDirection = 'rtl' | 'ltr';
export type ThemeColor = 'default' | 'purple' | 'cyan' | 'blue' | 'orange' | 'red';

export type SettingsContextProps = {
  themeMode: ThemeMode;
  themeDirection: ThemeDirection;
  themeColor: ThemeColor;
  setColor?: {
    name: string;
    lighter: string;
    light: string;
    main: string;
    dark: string;
    darker: string;
    contrastText: string;
  };
  colorOption: {
    name: string;
    value: string;
  }[];
  onChangeMode: (color: ThemeMode) => void;
  onChangeDirection: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeColor: (color: string) => void;
};
