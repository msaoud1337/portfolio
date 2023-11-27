export type ThemeMode = 'light' | 'dark';
export type ThemeColor = 'default' | 'purple' | 'cyan' | 'blue' | 'orange' | 'red';

export type SettingsContextProps = {
  themeMode: ThemeMode;
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
  onChangeColor: (color: string) => void;
};
