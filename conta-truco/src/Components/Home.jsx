import React from 'react'
import EquipoA from './EquipoA';
import EquipoB from './EquipoB';
import style from './Home.module.css';


const Home = () => {
  return (
    <div className={style.grandContainer}>
        <h1>ANOTADOR DE TRUCO</h1>
    <div className={style.countersContainer}>
        <EquipoA />
        <EquipoB />
    </div>
    
    <div>
    <span className={style.footerText}>Created by Agustin Bustamante | © Copyright 2023</span>
      <a className={style.iconLinks} href='https://github.com/agusbusta'><i class="fa-brands fa-github"></i></a>
      <a className={style.iconLinks} href='https://www.linkedin.com/in/agusbusta/'><i class="fa-brands fa-linkedin"></i></a>
    </div>
    </div>
  )
}

export default Home;
