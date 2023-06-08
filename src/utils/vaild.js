export const emailValidTest = (value) => {
  if (value.includes("@")) {
    return true;
  } else {
    return false;
  }
};

export const pwVaildTest = (value) => {
  if (value.length >= 8) {
    return true;
  } else {
    return false;
  }
};
