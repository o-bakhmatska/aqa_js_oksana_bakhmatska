// Створіть функцію divide, яка приймає два параметри: 
// numerator і denominator та повертає як результат виконання число отримане від ділення.
// У функції треба поділити numerator на denominator і повернути результат.
// Додайте валідацію в функції. У разі,якщо denominator дорівнює 0 або хоча б один з аргументів не є числом, викиньте помилку з інформативним повідомленням,
// Викличте функцію divide з різними значеннями numerator і denominator, включаючи випадок,коли denominator дорівнює 0 або один з аргументів не є числом.
// Огорніть кожен окремий виклик функції divide в try…catch.
// Використовуючи блок finally, виведіть повідомлення "Робота завершена" в консоль, навіть якщо помилка виникла або не виникла.

function divide(numerator, denominator) {
    if (typeof numerator !== "number" || typeof denominator !== "number") {
      throw new Error("Error: Both arguments must be numbers!");
    } 
    if (denominator === 0) {
      throw new Error("Error: Division by zero is impossible!");
    }
    return numerator / denominator;
  }
  

  try {
    console.log(divide(10, 2));
  } catch (error) {
    console.error(error.message);
  } finally {
    console.log("Work completed\n");
  }
  
  try {
    console.log(divide(10, 0)); 
  } catch (error) {
    console.error(error.message);
  } finally {
    console.log("Work completed\n");
  }
  
  try {
    console.log(divide("10", 5));
  } catch (error) {
    console.error(error.message);
  } finally {
    console.log("Work completed\n");
  }
