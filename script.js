function foodHack() {
  const foods = ["Chǎofàn (Cơm chiên)", "Jiǎozi (Sủi cảo)", "Miàntiáo (Mì)", "Bāozi (Bánh bao)", "Làzhī jī (Gà cay Tứ Xuyên)"];
  const randomFood = foods[Math.floor(Math.random() * foods.length)];
  document.getElementById("food-result").innerText = `Hệ thống đề xuất món: ${randomFood}! 😎`;
  document.body.style.backgroundColor = "#111";
  setTimeout(() => {
    document.body.style.backgroundColor = "#000";
  }, 500);
}