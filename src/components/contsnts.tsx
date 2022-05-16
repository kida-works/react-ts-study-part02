// Framer Motion使用
import { motion } from "framer-motion";
import AnimetionText from "./animetionText"
import Header from "./Header";
import Title from "./functions/title";
import { useEffect } from "react";
import {scrollAnimetion} from './functions/animetion';
import "./contents.scss";
// import css from "styled-jsx/css";



const Contents = () => {

  
  return (
    <>
      <div className="test">
        <Header />
        <Title title="title" hoge={false} />
        <motion.button whileTap={{ scale: 1.5 }} >
            クリック
        </motion.button>
          <AnimetionText text="ノーゲームノーライフ"/>
          <div className="box"></div>
          <AnimetionText text="とある科学の超電磁砲"/>
      </div>
     
    {/* {styles} */}
    </>
    
  )
}

// const { className, styles } = css.resolve`
//   .wrapper {
//     margin: 100px;
//   }
//   button {
//     border: none;
//     border-radius: 8px;
//     width: 100px;
//     height: 30px;
//     background: red;
//     color: white;
//   }
// `;

export default Contents

