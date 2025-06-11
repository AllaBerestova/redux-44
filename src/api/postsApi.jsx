export const fetchPosts = async (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        if (!response.ok) {
          throw new Error(`Ошибка: ${response.status}`);
        }
        const data = await response.json();
        resolve({ data });
      } catch (error) {
        console.error("Ошибка при получении поста:", error);
        reject(error);
      }
    }, 1000);
  });
};