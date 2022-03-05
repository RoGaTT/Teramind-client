import axios from "axios";

type IAuthLogin = {
  username: string;
  password: string
}

export const login = (data: IAuthLogin) => {
  axios.post(`${process.env.ANGULAR_APP_API_URL}/auth/login`, {
    ...data
  })
}

export const register = (data: IAuthLogin) => {
  axios.post(`${process.env.ANGULAR_APP_API_URL}/user`, {
    ...data
  })
}