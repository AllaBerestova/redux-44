import { useSelector, useDispatch } from "react-redux";
import { usersAsync } from "../../slices/users/usersSlice";
import './users.css'

export const Users = () => {
  const { users, loading, error } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  if (loading === "pending") {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>Ошибка: {error}</div>;
  }

  return (
    <div className="users">
      <button onClick={() => dispatch(usersAsync())} className="btn-users">Получить список пользователей</button>
      {users.length > 0 && (
        <div className="list-users">
          {users.map((user) => (
            <div key={user.id}>{user.name}</div>
          ))}
        </div>
      )}
    </div>
  );
};
