// Створіть масив об'єктів users де обєкти мають довільні властивості (наприклад, name, email, age, тощо).
// Використовуючи цикл for...of, переберіть всі елементи масиву та виведіть їхні значення в консоль.
// Зробіть деструктуризацію в циклі

const users = [
    {name: "Oksana", email: "oksana@example.com", age: "30"},
    {email: "test@test.com"},
    {name: "Oleg", age: "36"},
    {}
]
for (const {name, email, age} of users){
    console.log(`${name ?? "-----"}, ${email ?? "-----"}, ${age ?? "--"} `);
}
