import React from 'react';
import { Input, Inputs, Title, Wrapper } from '../components/Common';
import { useForm } from '../hooks/useForm';
import { styled } from 'styled-components';
import { signUp } from '../apis/signUp';
import { useNavigate } from 'react-router-dom';
const Signup = () => {
    const [id, changeId] = useForm();
    const [pw, changePW] = useForm();
    const [name, changeName] = useForm();
    const [age, changeAge] = useForm();
    const router = useNavigate();
    const onClick = async () => {
        await signUp(id, pw, name, age);
        router('/');
    };
    return (
        <Wrapper>
            <Title>회원가입</Title>
            <Inputs>
                <Input placeholder="아이디" value={id} onChange={changeId}></Input>
                <Input placeholder="비밀번호" value={pw} onChange={changePW}></Input>
                <Input placeholder="이름" value={name} onChange={changeName}></Input>
                <Input placeholder="나이" value={age} onChange={changeAge}></Input>
            </Inputs>
            <Button onClick={onClick}>Sign up</Button>
        </Wrapper>
    );
};

export default Signup;
const Button = styled.button`
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin-top: 20px;
  padding: 10px;
  font-size: 20px;
`;