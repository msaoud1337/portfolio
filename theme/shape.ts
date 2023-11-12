declare module '@mui/system' {
  interface Shape {
    borderRadiusSm: number | string;
    borderRadiusMd: number | string;
  }
}

const shape = {
  borderRadius: 1,
  borderRadiusSm: 2,
  borderRadiusMd: 3,
};

export default shape;
