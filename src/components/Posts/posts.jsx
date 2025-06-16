import { useSelector, useDispatch } from "react-redux";
import { postsAsync, setPostIdInput } from "../../slices/posts/postsSlice";
import './posts.css'

export const Posts = () => {
  const { posts, loading, error, postIdInput } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  if (loading === "pending") {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>Ошибка: {error}</div>;
  }

  const handleInputChange = (e) => {
    const value = e.target.value
    if ((Number(value) > 0 && Number.isInteger(Number(value)))) { 
      dispatch(setPostIdInput(value));
    } else {
      alert("Пожалуйста, введите целое число.");
    }
  };

  return (
    <div className="posts">
      <input type="number" placeholder="Введите Id" value={postIdInput} onChange={handleInputChange} className="post-id"></input>
      <button onClick={() => dispatch(postsAsync(postIdInput))} className="btn-posts">Получить конкретный пост</button>
      {posts && (
        <div>
          <h3>{posts.title}</h3>
          <p>{posts.body}</p>
        </div>
      )}
    </div>
  );
};
