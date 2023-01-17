import { configs } from "../config";
import { UserLoginInterface } from "../interfaces/userLogin.interface";

export const singInRequest= async (user:UserLoginInterface)=>{
  const url = `${configs.URL_Auth}api/v1/auth`;
  try {
    const resp: any = await fetch(url,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    return await resp.json();
  } catch (error) {
    console.error(error);
  }
}

export const getCharacters = async (data: string) => {
  const url = `${configs.URL_API}api/character/${data}`;
  try {
    const resp: any = await fetch(url);
    return await resp.json();
  } catch (error) {
    console.error(error);
  }
};
