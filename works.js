// "prev" ボタンのクリックイベント
document.getElementById("prev").addEventListener("click", function() {
  rotateImages("left");
});

// "next" ボタンのクリックイベント
document.getElementById("next").addEventListener("click", function() {
  rotateImages("right");
});

// 画像の回転処理
function rotateImages(direction) {
  let webContainer = document.getElementById("web");
  let images = Array.from(document.querySelectorAll(".web1")); // 最新の順番を確保

  if (direction === "right") {
    images[0].classList.remove("active", "prev");
    images[1].classList.replace("next", "active");
    images[2].classList.replace("prev", "next");
    images[0].classList.add("prev");

    setTimeout(() => {
      webContainer.appendChild(images[0]); // 画像を最後に移動
    }, 500);
  } else {
    images[2].classList.remove("active", "next");
    images[1].classList.replace("active", "next");
    images[0].classList.replace("prev", "active");
    images[2].classList.add("prev");

    setTimeout(() => {
      let updatedImages = Array.from(document.querySelectorAll(".web1")); // 更新された順番を取得
      webContainer.insertBefore(updatedImages[2], updatedImages[0]); // 画像を前に移動
    }, 500);
  }
}

// メニューのボタンの状態更新
document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll(".menubox");

  function updatePressedButton() {
      let currentHash = window.location.hash; 
      if (!currentHash) return;

      menuItems.forEach(item => item.classList.remove("pressed"));
      document.querySelectorAll(`aside a[href="${currentHash}"] .menubox`)
          .forEach(button => button.classList.add("pressed"));
  }
  updatePressedButton(); // 初期状態を更新
  window.addEventListener("hashchange", updatePressedButton); // ハッシュ変更時に更新
});

// メニューのリンクをクリックしてページ切り替え
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("web-container").classList.add("active");
  document.getElementById("web").classList.add("show-page");

  const menuItems = document.querySelectorAll("aside a"); 
  const sections = document.querySelectorAll("#web-container > div"); 

  menuItems.forEach((item) => {
    item.addEventListener("click", function (event) {
      event.preventDefault(); // デフォルトのリンク動作をキャンセル

      let targetId = this.getAttribute("href").substring(1); 
      let targetSection = document.getElementById(targetId);

      if (!targetSection) return; 
      sections.forEach((section) => {
        section.classList.remove("show-page");
      });
      targetSection.classList.add("show-page"); // 対象のセクションを表示
    });
  });
});

// メニューアイテムの状態を更新（押されたボタンに「pressed」クラスを追加）
document.addEventListener("DOMContentLoaded", function() {
  const menuItems = document.querySelectorAll(".menubox"); 
  menuItems.forEach((item) => {
    item.addEventListener("click", function() {
      menuItems.forEach((otherItem) => {
        otherItem.classList.remove("pressed"); // すべてのアイテムから「pressed」クラスを削除
      });
      this.classList.add("pressed"); // クリックされたアイテムに「pressed」クラスを追加
    });
  });
});







