import './UserRow.css';

export default function UserRow({ data: { id, firstName, lastName }, onEdit, onDelete }) {

  const handleEdit = () => {
    onEdit(id);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div className="user">
      <div className="id">{id}</div>
      <div className="firstName">{firstName}</div>
      <div className="lastName">{lastName}</div>
      <div className="ED">
        <button className='buttonUpdate' type="button" onClick={handleEdit}>Edit</button>
        <button className='buttonUpdate' type="button" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}
