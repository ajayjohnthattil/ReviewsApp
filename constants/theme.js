import { Dimensions } from "react-native";

const {width,height} = Dimensions.get(window);

export const COLORS ={
    //base colours
    primary : "FC6D3F", //orange
    secondary :"CDCDD2", //gray

    // colors
    black: "#1E1F20",
    white: "#FFFFFF",
    
    lightgray : "F5F5F6",
    lightgray2 : "F6F6F7",
    lightgray3 : "EFEFF1",
    lightgray4 : "F8F8F9",
    transparent : "transparent",
    darkgray : "898C95",


};

export const SIZES = {

    //global sizes
    base: 8,
    font: 14,
    radius: 30,
    padding : 10,
    padding2 : 12,

    //FONT SIZES

    largeTitle: 50,
    h1: 30,
    h2: 22,
    h3: 20,
    h4: 18,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,
    body5: 12,

    //app dimensions

    width,
    height
};

export const FONTS = {
    largeTitle: { fontFamily:"Roboto-regular", fontSize: SIZES.largeTitle, lineHeight: 55},
    h1: {fontFamily:"Roboto-bold", fontSize: SIZES.h1, lineHeight: 36},
    h2: {fontFamily:"Roboto-bold", fontSize: SIZES.h2, lineHeight: 30},
    h3: {fontFamily:"Roboto-bold", fontSize: SIZES.h3, lineHeight: 22},
    h4: {fontFamily:"Roboto-bold", fontSize: SIZES.h4, lineHeight: 22},
    body1: {fontFamily:"Roboto-regular", fontSize: SIZES.body1, lineHeight: 36},
    body2: {fontFamily:"Roboto-regular", fontSize: SIZES.body2, lineHeight: 30},
    body3: {fontFamily:"Roboto-regular", fontSize: SIZES.body3, lineHeight: 22},
    body4: {fontFamily:"Roboto-regular", fontSize: SIZES.body4, lineHeight: 22},
    body5: {fontFamily:"Roboto-regular", fontSize: SIZES.body5, lineHeight: 22},
   

};

const appTheme = {COLORS,SIZES,FONTS};

export default appTheme;