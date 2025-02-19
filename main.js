// DOM が完全に読み込まれた後に実行される
document.addEventListener("DOMContentLoaded", function() {
  // 初期位置と透明度を設定
  gsap.set("#S, #O, #n1, #n2", { y: -800, opacity: 0 });

  const progressText = document.getElementById('progress-text');
  const loadingScreen = document.getElementById('loading-screen');

  let progress = 0;

  // GSAP タイムラインアニメーションを作成
  const tl = gsap.timeline({
    onComplete: function() {
      // ローディング完了後、ローディング画面を非表示にし、メインコンテンツを表示
      gsap.to(loadingScreen, {
        opacity: 0,
        duration: 1,
        onComplete: function() {
          loadingScreen.style.display = "none"; // ローディング画面を非表示
          document.getElementById("main-content").style.display = "block"; // メインコンテンツを表示
        }
      });
    }
  });

  // アニメーションの順番
  tl.to("#S", { y: 62, opacity: 1, scale: 0.3,x:0, duration: 0.8, ease: "bounce.out" })
    .to("#O", { y: 65, opacity: 1, scale: 0.3, x: 51, duration: 0.8, ease: "bounce.out" }, "+=0.3")
    .to("#n1", { y: 63, opacity: 1, scale: 0.3, x: 110, duration: 0.8, ease: "bounce.out" }, "+=0.6")
    .to("#n2", { y: 63, opacity: 1, scale: 0.3, x: 170, duration: 0.8, ease: "bounce.out" }, "+=0.9");

  // ローディングプロセスをシミュレートし、パーセント表示を更新
  const loadingInterval = setInterval(() => {
    if (progress < 100) {
      progress++;
      progressText.innerText = progress + '%'; // パーセントを更新
    } else {
      clearInterval(loadingInterval); // ローディング完了後、タイマーをクリア
      // ローディングが完了したら、GSAP アニメーションを開始
      tl.play();
    }
  }, 45); // 100ms ごとに更新
});

// DOM が完全に読み込まれた後に実行される
document.addEventListener("DOMContentLoaded", function () {
  const menuLinks = document.querySelectorAll("aside a"); // <a> タグを選択
  const menuItems = document.querySelectorAll(".menubox");

  // クリックイベントをリッスンし、メニューボタンの状態を更新
  menuLinks.forEach(link => {
      link.addEventListener("click", function (e) {
          // すべてのボタンの `pressed` 状態を削除
          menuItems.forEach(item => item.classList.remove("pressed"));

          // 現在クリックされた .menubox を選択し、`pressed` スタイルを追加
          this.querySelector(".menubox").classList.add("pressed");
      });
  });
});


