const colors = {
 greenMain: "#23CE6B",
 greenLight:"",
 greenDark:"",
 mauveMain:"#AD7A99",
 mauveLight:"",
 mauveDark:"",
 blueMain: "#08B2E3",
 blueLight:"",
 blueDark:"",
 orangeMain: "#FF4E00",
 orangeLight:"",
 orangeDark:"",
 yellowMain: "#FFED66",
 yellowLight:"",
 yellowDark:"",
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

  export const theme = {
    breakpoints,
    colors
  }

