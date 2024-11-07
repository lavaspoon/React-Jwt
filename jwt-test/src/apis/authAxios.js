import axios from 'axios';
import { getRefresh } from './refresh';

//리펙토링하기 위한 axios 인스턴스를 생성한다.
export const getAuthAxios = (tokens) => {
    const { access, refresh } = tokens; //파라미터로 받아온 tokens를 객체로 받아 대입해준다.

    const authAxios = axios.create({
        baseURL: 'http://front.cau-likelion.org/',
        headers: {
            Authorization: access,
        },
    });

    /**
     * use() -> (성공한 경우, 실패한 경우)
     */
    authAxios.interceptors.response.use( //authAxios.interceptors -> 토큰이 만료 됐을때,
        (res) => res, //성공한 경우 결과를 리턴
        async (error) => { //에러를 받았을때
            if (error.response.status === 401) {
                const { accessToken, refreshToken } = await getRefresh(access, refresh);
                localStorage.setItem('accessToken', accessToken);
                localStorage.setItem('refreshToken', refreshToken);
                const config = error.response.config;
                config.headers.Authorization = accessToken;
                return await axios.get(config.url, config);
            }
        }
    );
    return authAxios;
};