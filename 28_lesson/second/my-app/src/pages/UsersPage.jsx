import { useEffect, useState } from "react";
import { getData, deleteUser } from '../services/StorageService';
import UserRow from "../components/UserRow";
import { useNavigate } from "react-router-dom";
import './UsersPage.css';

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getData();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }
    fetchData();
  }, []);

  const handleEditUser = (userId) => {
    navigate(`/${userId}`);
  };

  const handleDeleteUser = async (userId) => {
    try {
      await deleteUser(userId);
      setUsers((prevUsers) => prevUsers.filter(user => user.id !== userId));
    } catch (error) {
      console.error("Error deleting user: ", error);
    }
  };

  const handleAddUser = () => {
    navigate(`/add-user`);
  };

  return (
    <div className="table">
      <button className="buttonUpdate" id="buttonAdd" onClick={handleAddUser}>Add User</button>
      {!users.length && <p>No records defined</p>}
      <div className="tableHeader">
        <div className="id">ID</div>
        <div className="firstName">First Name</div>
        <div className="lastName">Last Name</div>
        <div className="ED">E D</div>
      </div>
      <div className="tableBody">
        {!!users.length && users.map((user) => (
          <UserRow
            key={user.id}
            data={user}
            onEdit={handleEditUser}
            onDelete={handleDeleteUser}
          />
        ))}
      </div>
    </div>
  );
}
