function hackProfile() {
  const userName = document.getElementById("userName").value.trim();
  const loading = document.getElementById("loading");
  const result = document.getElementById("result");
  const matrix = document.createElement("div");
  matrix.id = "matrix";
  document.body.appendChild(matrix);

  for (let i = 0; i < 50; i++) {
    const span = document.createElement("span");
    const char = String.fromCharCode(65 + Math.random() * 26);
    span.innerText = char;
    span.style.left = Math.random() * 100 + "vw";
    span.style.animationDuration = Math.random() * 3 + 2 + "s";
    span.style.animationDelay = Math.random() * 5 + "s";
    matrix.appendChild(span);
  }

  loading.style.display = "block";
  matrix.style.display = "block";
  result.innerText = "";
  document.body.style.backgroundColor = "#111";

  setTimeout(() => {
    if (userName === "Trịnh Đình Dương" || userName === "trịnh đình dương") {
      result.innerText = `Chào ${userName}! Hệ thống xác nhận: Bạn là Dương The Shadow! 😎 Sống ảo thành công!`;
    } else {
      result.innerText = `Lỗi xâm nhập! Chỉ ${userName} không phải Dương The Shadow. Nhập đúng tên đi! 😄`;
    }
    loading.style.display = "none";
    matrix.style.display = "none";
    document.body.style.backgroundColor = "#000";
    matrix.remove();
  }, 3000);
}