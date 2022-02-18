const theme = {
  name: 'DefaultTheme',
  backgroundColor: '#FFFFFF',
  textColor: 'black',
  primaryColor: '#1D4588',
  primaryColorDark: '#021D48',
  primaryColorLight: '#3E7BD7',
  primaryColorLighter: '#82BCFF',
  primaryColorWhite: '#D7EAFF',
  secondaryColor: '#22B5FB',
  fadedColor: '#646464',
  fontFamilyDefault: 'Sora',
  fontFamilyHeaders: 'Poppins',
  header: {
    heightOnDesktop: `80px`,
  },
  sideMenu: {
    width: `16.6667%`
  }
};
export default theme;

export type ThemeInterface = typeof theme