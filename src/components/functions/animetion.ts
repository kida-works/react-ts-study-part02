export const scrollAnimetion = (elements:any) => {
  const text:any = elements
  // オプション指定
  const options:object = {
    threshold: 1 // 指定範囲は0 〜 1
  };

  // 実行するよ
  const observer = new IntersectionObserver(showElement, options);

  // heading に到達したら発動
  observer.observe(text);
  // 要素が表示されたら実行する動作
  function showElement(){
    text.style.opacity = 1;
    text.style.width = "auto";
    
  };
}