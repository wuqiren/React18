interface CaptchaAPIRes {
    msg: string;
    img: string;
    code: number;
    captchaEnabled: boolean;
    uuid:string
}
interface loginReq{
    username: string
    password: string
    code: string
    uuid:string|null
}
interface LoginAPIRes{
    msg: string;
    code: number;
    token:string
}