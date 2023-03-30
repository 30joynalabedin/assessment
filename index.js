const calculateBtn = document.getElementById("calculateBtn");

calculateBtn.addEventListener("click", () => {
  const weight = document.getElementById("weightInput").value;
  const height = document.getElementById("heightInput").value / 100;
  const bmi = (weight / (height * height)).toFixed(2);
  document.getElementById("result").textContent = bmi;
});
