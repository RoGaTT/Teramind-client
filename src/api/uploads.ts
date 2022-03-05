import axios from "axios";

export const uploadFile = (data: FormData) => {
  return axios({
    method: 'POST',
    url: `${process.env.ANGULAR_APP_API_URL}/uploads`,
    data: data
  })
}