import axios from 'axios';

export const login = async (id, pw) => {
    const result = await axios.post('http://front.cau-likelion.org/', {
        id: id,
        pw: pw,
    });
    return result.data.data;
};