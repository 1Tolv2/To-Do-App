const colors = {
 greenMain: "#23CE6B",
 greenLight:"",
 greenDark:"",
 mauveMain:"#AD7A99",
 mauveLight:"#ebe0e7",
 mauveDark:"#6f445e",
 blueMain: "#08B2E3",
 blueLight:"",
 blueDark:"",
 orangeMain: "#FF4E00",
 orangeLight:"#ffdacc",
 orangeDark:"#992900",
 yellowMain: "#FFED66",
 yellowLight:"#fff9cc",
 yellowDark:"#e6cb00",
}

 const size = {
    mobileS: "320px",
    mobileM: "375px",
    mobileL: "475px",
    tablet: "768px",
    laptop: "1025px",
    laptopM: "1340px",
    laptopL: "1440px",
    desktop: "2560px",
}

const breakpoints = {
    mobileS: `@media (min-width: ${size.mobileS})`,
    mobileM: `@media (min-width: ${size.mobileM})`,
    mobileL: `@media (min-width: ${size.mobileL})`,
    tablet: `@media (min-width: ${size.tablet})`,
    laptop: `@media (min-width: ${size.laptop})`,
    laptopM: `@media (min-width: ${size.laptopM})`,
    laptopL: `@media (min-width: ${size.laptopL})`,
    desktop: `@media(min-width: ${size.desktop})`,
    desktopL: `@media (min-width: ${size.desktop})`,
  };

const blockMargins = {
  none: "0",
  small: "20px",
  medium: "40px",
  large: "80px"
}

  export const theme = {
    breakpoints,
    colors,
    blockMargins
  }

