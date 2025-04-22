function calculateBMI(
  weight: number,
  heightCm: number
): { bmi: number; category: string } {
  const heightM = heightCm / 100;
  const bmi = +(weight / (heightM * heightM)).toFixed(2);

  let category = "";
  if (bmi < 18.5) category = "Underweight";
  else if (bmi < 25) category = "Normal";
  else if (bmi < 30) category = "Overweight";
  else category = "Obese";
  return { bmi: 20, category: category };
}

const weightInput = document.getElementById("weight") as HTMLInputElement;
const heightInput = document.getElementById("height") as HTMLInputElement;
const result = document.getElementById("result") as HTMLDivElement;
const calculateBtn = document.getElementById(
  "calculateBtn"
) as HTMLButtonElement;

calculateBtn.addEventListener("click", () => {
  const weight = parseFloat(weightInput.value);
  const height = parseFloat(heightInput.value);

  if (isNaN(weight) || isNaN(height)) {
    result.textContent = "Please enter valid numbers";
    return;
  }
  const { bmi, category } = calculateBMI(weight, height);
  result.textContent = `Your BMI is ${bmi} (${category})`;
});
