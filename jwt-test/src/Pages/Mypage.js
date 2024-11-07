import React, { useEffect, useState } from 'react';
import { getMyPage } from '../apis/mypage';

const Mypage = () => {
    //로그인한 사람의 정보 가져오기
    const [data, setData] = useState({});
    const [isLoading, setLoading] = useState(true);

    //페이지 로딩 됐을때, useEffect 딱 한번만 실행
    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        const refreshToken = localStorage.getItem('refreshToken');

        getMyPage({
            access: accessToken,
            refresh: refreshToken
        }).then((res) => {
            //헤더에 토큰을 담아 /mypage api 호출 후, 받아온 데이터를 저장
            setData(res.data);
            setLoading(false);
        });
    }, []);

    //화면에 찍기
    if (isLoading) return <div>로딩중</div>;
    return (
        <>
            <div>{data.name}</div>
            <div>{data.age}</div>
        </>
    );
};

export default Mypage;