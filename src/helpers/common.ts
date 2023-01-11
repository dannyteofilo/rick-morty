import { RandomsInterface } from "../interfaces/helpers/Randoms.interface";

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

export const isValidPassword = (password: string) => {
  return passwordRegex.test(password);
};

export const generateNumberRandom = ({ min, max, total }: RandomsInterface) => {
  const numbersRandom = [];
  for (let i = 0; i < total; i++) {
    numbersRandom.push(Math.floor(Math.random() * (max - min + 1) + min));
  }
  return numbersRandom;
};
