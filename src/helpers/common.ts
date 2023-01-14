import { RandomsInterface } from "../interfaces/helpers/Randoms.interface";

export const isValidPassword = (password: string) => {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/
  return passwordRegex.test(String(password));
};

export const generateNumberRandom = ({ min, max, total }: RandomsInterface) => {
  const numbersRandom = [];
  for (let i = 0; i < total; i++) {
    numbersRandom.push(Math.floor(Math.random() * (max - min + 1) + min));
  }
  return numbersRandom;
};
