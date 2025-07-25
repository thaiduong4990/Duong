function foodHack() {
  const loading = document.getElementById("loading");
  const result = document.getElementById("food-result");
  loading.style.display = "block"; // Hiển thị loading
  result.innerText = ""; // Xóa kết quả cũ
  document.body.style.backgroundColor = "#111";

  setTimeout(() => {
    const foods = ["Chǎofàn (Cơm chiên)", "Jiǎozi (Sủi cảo)", "Miàntiáo (Mì)", "Bāozi (Bánh bao)", "Làzhī jī (Gà cay Tứ Xuyên)"];
    const randomFood = foods[Math.floor(Math.random() * foods.length)];
    result.innerText = `Hệ thống đề xuất món: ${randomFood}! 😎`;
    loading.style.display = "none"; // Ẩn loading
    document.body.style.backgroundColor = "#000";
  }, 2000); // Chờ 30 giây để mô phỏng loading
}