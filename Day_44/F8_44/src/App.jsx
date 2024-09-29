import { useState } from 'react';
import { v4 } from 'uuid';
import FCommonTable from './components/FCommonTable';

function App() {
  const columns = ['id', 'name', 'age', 'gender', 'address', 'action'];
  const [users, setUsers] = useState([
    { id: v4(), name: 'john', age: 25, gender: 'male', address: 'HN' },
  ]);

  const [user, setUser] = useState({
    id: null,
    name: '',
    age: '',
    gender: '',
    address: '',
  });

  const [isEditing, setIsEditing] = useState(false);

  const onInput = (e, key) => {
    const updatedUser = { ...user, [key]: e.target.value };
    setUser(updatedUser);
  };

  const onSave = () => {
    if (isEditing) {
      // Cập nhật người dùng
      setUsers(users.map((u) => (u.id === user.id ? user : u)));
      setIsEditing(false);
    } else {
      // Thêm người dùng mới
      setUsers([...users, { ...user, id: v4() }]);
    }

    // Reset các trường input
    setUser({
      id: null,
      name: '',
      age: '',
      gender: '',
      address: '',
    });
  };

  const onEdit = (id) => {
    const selectedUser = users.find((u) => u.id === id);
    setUser(selectedUser);
    setIsEditing(true);
  };

  const onDelete = (id) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="name"
        value={user.name}
        onChange={(e) => onInput(e, 'name')}
      />
      <input
        type="text"
        placeholder="age"
        value={user.age}
        onChange={(e) => onInput(e, 'age')}
      />
      <select value={user.gender} onChange={(e) => onInput(e, 'gender')}>
        <option value="male">male</option>
        <option value="female">female</option>
      </select>
      <input
        type="text"
        placeholder="address"
        value={user.address}
        onChange={(e) => onInput(e, 'address')}
      />
      <button onClick={onSave}>{isEditing ? 'Update' : 'Save'}</button>

      <FCommonTable
        columns={columns}
        rows={users.map((u) => ({
          ...u,
          action: (
            <>
              <button onClick={() => onEdit(u.id)}>Edit</button>
              <button onClick={() => onDelete(u.id)}>Delete</button>
            </>
          ),
        }))}
      />
    </div>
  );
}

export default App;
