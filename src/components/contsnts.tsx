// Framer Motion使用
import { motion } from "framer-motion";
// import css from "styled-jsx/css";


const Contents = () => {
  return (
    <>
      <div>
        <motion.button whileTap={{ scale: 1.5 }} >
            クリック
          </motion.button>
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

