function hackProfile() {
  const userName = document.getElementById("userName").value.trim();
  const loading = document.getElementById("loading");
  const result = document.getElementById("result");
  const matrix = document.createElement("div");
  matrix.id = "matrix";
  document.body.appendChild(matrix);

  // Tạo hiệu ứng matrix
  for (let i = 0; i < 50; i++) {
    const span = document.createElement("span");
    const char = String.fromCharCode(65 + Math.random() * 26); // Ký tự ngẫu nhiên A-Z
    span.innerText = char;
    span.style.left = Math.random() * 100 + "vw";
    span.style.animationDuration = Math.random() * 3 + 2 + "s";
    span.style.animationDelay = Math.random() * 5 + "s";
    matrix.appendChild(span);
  }

  // -soundhack
  const audio = new Audio("-soundhack.mp3"); // Thay bằng tên file âm thanh của cậu
  audio.play(); // Phát âm thanh khi bấm nút

  loading.style.display = "block";
  matrix.style.display = "block";
  result.innerText = "";
  document.body.style.backgroundColor = "#111";

  // Phát âm thanh lặp trong loading
  const interval = setInterval(() => {
    const beep = new Audio("hack-sound.mp3");
    beep.play();
  }, 1000); // Tiếng beep mỗi 1 giây

  setTimeout(() => {
    clearInterval(interval); // Dừng âm thanh lặp
    if (userName === "Trịnh Đình Dương" || userName === "trịnh đình dương") {
      result.innerText = `Chào ${userName}! Hệ thống xác nhận: Bạn là Dương The Shadow! 😎 Sống ảo thành công!`;
    } else {
      result.innerText = `Lỗi xâm nhập! Chỉ ${userName} không phải Dương The Shadow. Nhập đúng tên đi! 😄`;
    }
    loading.style.display = "none";
    matrix.style.display = "none";
    document.body.style.backgroundColor = "#000";
    matrix.remove();
  }, 3000); // Chờ 3 giây
}