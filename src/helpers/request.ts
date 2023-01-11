import { configs } from "../config";

const apiUrl = `${configs.URL_API}api/`;

export const getCharacters = async (data: string) => {
  const url = `${apiUrl}character/${data}`;
  const resp: any = await fetch(url);
  return await resp.json();
};
