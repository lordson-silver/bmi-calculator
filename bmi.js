/*
BMI Calculator
Create a BMI calculator usin JavaScript functions.
Calculate using the formla : BMI = weight(kg)/(height**2(m**2))
The challenge is to create a function that takes height
and weight as inputs and gives the calculated BMI as output.
*/

function bmiCalculator(weight, height){
    bmi = Math.round(weight/(height**2));
    return bmi;
}
bmiCalculator(65, 1.8);