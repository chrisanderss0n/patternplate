module.exports = fonts;

const SYSTEM_FONTS = [
  '-apple-system',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  'Helvetica',
  'Arial',
  'sans-serif',
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"'
]

function fonts() {
  return {
    default: SYSTEM_FONTS.join(', ')
  };
}
