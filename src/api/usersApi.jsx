export const fetchUsers = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
          throw new Error(`Ошибка: ${response.status}`);
        }
        const data = await response.json();
        resolve({ data });
      } catch (error) {
        console.error("Ошибка при получении пользователей:", error);
        reject(error);
      }
    }, 1000);
  });
};
