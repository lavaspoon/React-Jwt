import { getAuthAxios } from './authAxios';
import axios from "axios";
import {getRefresh} from "./refresh";

//리펙토링 전 코드
export const getMyPage = async () => {
    const access = localStorage.getItem('access');
    //accessToken이 실패한 경우, refresh api 호출하도록 try-catch 처리
    try {
        const result = axios.get('http://localhost:8080/mypage', {
            headers: {
                Authorization: `Bearer ${access}`,
            },
        });
        return result.data; //결과는 mypage로 전달된다.
    } catch (error) {
        if(error.response.status === 401) {
            //토큰이 만료된 경우
            const { accessToken, refreshToken } = await getRefresh(); //getRefresh 를 통해 받아온 데이터를 accessToken 과 refreshToken 에 대입 한다는것
            error.config.headers.Authorization = accessToken; //error.config에 새로운 accessToken 을 담는다.
            localStorage.setItem('accessToken', accessToken); //토큰 다시 세팅
            localStorage.setItem('refreshToken', refreshToken);
            return (axios.get(error.config.url, error.config)).data; //실패한 url과 config를 넣어주면 response.data를 리턴받는다.
        }
    }

}


/*
export const getMyPage = async (tokens) => {
    const authAxios = getAuthAxios(tokens);
    const result = await authAxios.get('/mypage');
    return result;
};

*/