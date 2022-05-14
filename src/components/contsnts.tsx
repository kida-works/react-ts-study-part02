// Framer Motion使用
import { motion } from "framer-motion";
import AnimetionText from "./animetionText"
import Header from "./Header";
import { useEffect } from "react";
import {scrollAnimetion} from './functions/animetion'
import "./contents.css"
// import css from "styled-jsx/css";


const Contents = () => {
  useEffect(()=>{
    const test = document.getElementById("test")
    scrollAnimetion(test)
    
  })
  return (
    <>
      <div className="test">
        <Header />
        <motion.button whileTap={{ scale: 1.5 }} >
            クリック
        </motion.button>
          <AnimetionText text="ノーゲームノーライフ"/>
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

