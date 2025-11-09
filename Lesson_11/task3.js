// Виконайте завдання 2 але використовуючи конструкцію async/await для функції що виконує запити


const checkResponse = (response, message) =>
    response.ok ? response.json() : Promise.reject(message);

async function getTodo() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        return await checkResponse(response, "ERROR while get todo");
    } catch (error) {
      console.error("ERROR in getTodo:", error);
    }
}
  
async function getUser() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        return await checkResponse(response, "ERROR while get user");
    } catch (error) {
      console.error("ERROR in getUser:", error);
    }
}
  
async function mainFunction() {
    try {
        const [todo, user] = await Promise.all([getTodo(), getUser()]);
        console.log(" Promise.all:");
        console.log("Todo:", todo);
        console.log("User:", user);
        
        const fastestPromise = await Promise.race([getTodo(), getUser()]);
        console.log(" Promise.race:");
        console.log(fastestPromise);
    } catch (error) {
        console.error("ERROR in mainFunction:", error);
    }
}
  

mainFunction();
