import React from 'react';
import {Link} from 'react-router-dom';
import { CtHome, CtImg, Logo, MainImg, MainSection, MainTxt, Txt } from './Home.styled';
import mainImg from '../../assets/homeImage.jpg';
import Button from '../../components/button/Button';
import logo from '../../assets/logo.svg';

function Home() {

  return (
    <>
        <CtHome>
            <CtImg>
                <MainImg src={mainImg} alt='imagen de un perro'/>
                <MainTxt>Bienvenida al zoo virtual</MainTxt>
            </CtImg>
            <MainSection>
              <Txt>Encuentra diferentes animales al azar</Txt>
              <Logo src={logo} alt='logo virtual zoo'/>
              <Link to="/list"><Button text='Entrar'/></Link>
            </MainSection>
        </CtHome>
    </>
  )
}

export default Home