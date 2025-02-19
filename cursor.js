// カスタムカーソルを作成して、bodyに追加する
const cursor = document.createElement("div");
cursor.classList.add("custom-cursor");
document.body.appendChild(cursor);

// マウス移動時にカーソル位置を更新
document.addEventListener("mousemove", (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

// マウスダウン時にクリックエフェクトを追加
document.addEventListener("mousedown", () => {
  cursor.classList.add("click-effect");
});

// マウスアップ時にクリックエフェクトを削除
document.addEventListener("mouseup", () => {
  cursor.classList.remove("click-effect");
});

// <a> タグに対してマウスホバー時にカーソルの色と大きさを変更
document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("mouseenter", () => {
    cursor.style.backgroundColor = "red";  // 色を赤に変更
    cursor.style.borderColor = "red";      // 枠線の色を赤に変更
    cursor.style.transform = "scale(.5)";  // サイズを小さくする
  });
  link.addEventListener("mouseleave", () => {
    cursor.style.backgroundColor = "#22c8ff";  // 元の色に戻す
          
    cursor.style.transform = "scale(1)";        // サイズを元に戻す
  });
});


/*popup */
document.getElementById("content").addEventListener("click", function() {
  document.getElementById("popup").style.display = "block";
});

document.getElementById("closePopup").addEventListener("click", function() {
  document.getElementById("popup").style.display = "none";
});
