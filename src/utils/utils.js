import validator from "validator";

const containsUppercase = (text) => {
    let match = false;
    for (let i = 0; i < text.length; i++) {
        if (text.charCodeAt(i) > 64 && text.charCodeAt(i) < 91) {
            match = true;
            break;
        }
    }
    return match;
}


const containsLowercase = (text) => {
    let match = false;
    for (let i = 0; i < text.length; i++) {
        if (text.charCodeAt(i) > 96 && text.charCodeAt(i) < 123) {
            match = true;
            break;
        }
    }
    return match;
}

const containsDigit = (text) => {
    let match = false;
    for (let i = 0; i < text.length; i++) {
        if (text.charCodeAt(i) > 47 && text.charCodeAt(i) < 58) {
            match = true;
            break;
        }
    }
    return match;
}

const containsSpecialCharacter = (text) => {
    let match = false;
    for (let i = 0; i < text.length; i++) {
        if (validator.isAscii(text.charAt(i)) && !validator.isAlphanumeric(text.charAt(i))) {
            match = true;
            break;
        }
    }
    return match;
}


export const UTILS = {
    containsUppercase,
    containsLowercase,
    containsDigit,
    containsSpecialCharacter
}