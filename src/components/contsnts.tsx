// Framer Motion使用
import { motion } from "framer-motion";
import AnimetionText from "./animetionText"
import Header from "./Header";
import { useEffect } from "react";
import "./contents.css"
// import css from "styled-jsx/css";


const Contents = () => {
  useEffect(()=>{
    const scrollAnimetion = () =>{
      const test:any = document.getElementById('test');
      
      // オプション指定
      const options:object = {
        threshold: 1 // 指定範囲は0 〜 1
      };
    
      // 実行するよ
      const observer = new IntersectionObserver(showElement, options);
    
      // heading に到達したら発動
      observer.observe(test);
    
      // 要素が表示されたら実行する動作
      function showElement(){
        test.style.opacity = 1;
      };
    }
    
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

