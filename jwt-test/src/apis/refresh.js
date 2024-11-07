import axios from 'axios';

export const getRefresh = async () => {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');
    const result = await axios.post(
        'http://localhost:8000/api/v1/refresh',
        {
            refreshToken,
        },
        {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        }
    );
    return result.data;
}

/*
export const getRefresh = async (access, refresh) => {
    const result = await axios.post(
        'http://front.cau-likelion.org/refresh',
        {
            refreshToken: refresh,
        },
        {
            headers: {
                Authorization: access,
            },
        }
    );
    return result.data;
};
 */