

//验证码请求

import  request  from "./index"

export const captchaAPI = ():Promise<CaptchaAPIRes> => {
   return request.get("/prod-api/captchaImage")
}
export const loginAPI = (params:loginReq):Promise<LoginAPIRes> => {
   return request.post("/prod-api/login",params)
}