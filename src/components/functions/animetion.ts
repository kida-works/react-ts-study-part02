import { createTypeReferenceDirectiveResolutionCache } from "typescript";

export const scrollAnimetion = (items:any, isFlagFunction:any) => {
  const header = items.pointElement
  const textWrap = items.textWrap
  const innerText = items.innerText
  // オプション指定
  const options:object = {
    threshold: 0.25,// 指定範囲は0 〜 1
  };

  // 実行するよ
  const observer = new IntersectionObserver(showElement, options);

  // heading に到達したら発動
  observer.observe(header);
  // 要素が表示されたら実行する動作
  function showElement(){
    isFlagFunction(true)
    console.log("test");
    
   
  };
}