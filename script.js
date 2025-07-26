function hackProfile() {
  const userName = document.getElementById("userName").value.trim();
  const loading = document.getElementById("loading");
  const result = document.getElementById("result");
  const matrix = document.createElement("div");
  const passwordDisplay = document.getElementById("password-display");
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

  // Tạo và hiển thị mật khẩu ảo
  function generatePassword() {
    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*";
    let password = "";
    for (let i = 0; i < 12; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
  }

  // Cập nhật mật khẩu ngẫu nhiên mỗi 500ms
  let passwordInterval = setInterval(() => {
    passwordDisplay.innerText = `Mật khẩu đang xử lý: ${generatePassword()}`;
  }, 500);

  // Thêm âm thanh
  const audio = new Audio("duong.wav"); // Thay bằng tên file âm thanh của cậu
  audio.play(); // Phát âm thanh khi bấm nút

  loading.style.display = "block";
  matrix.style.display = "block";
  passwordDisplay.style.display = "block"; // Hiển thị mật khẩu
  result.innerText = "";
  document.body.style.backgroundColor = "#111";

  // Phát âm thanh lặp trong loading
  const interval = setInterval(() => {
    const beep = new Audio("hack-sound.mp3");
    beep.play();
  }, 1000); // Tiếng beep mỗi 1 giây

  setTimeout(() => {
    clearInterval(interval); // Dừng âm thanh lặp
    clearInterval(passwordInterval); // Dừng cập nhật mật khẩu
    if (userName === "Trịnh Đình Dương" || userName === "trịnh đình dương") {
      result.innerText = `Chào ${userName}! Hệ thống xác nhận: Bạn là Dương The Shadow! 😎 Sống ảo thành công!`;
    } else {
      result.innerText = `Lỗi xâm nhập! Chỉ ${userName} không phải Dương The Shadow. Nhập đúng tên đi! 😄`;
    }
    loading.style.display = "none";
    matrix.style.display = "none";
    passwordDisplay.style.display = "none"; // Ẩn mật khẩu
    document.body.style.backgroundColor = "#000";
    matrix.remove();
  }, 3000); // Chờ 300 giây
}