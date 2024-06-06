export const Modal = ({ user, setModal }) => {
  const { id, name, username, email } = user;
  return (
    <div className="mi_modal">
      <h1>id:{id}</h1>
      <h2>name:{name}</h2>
      <h2>username:{username}</h2>
      <h2>:email{email}</h2>
      <button className="btn btn-danger" onClick={() => setModal(false)}>
        X
      </button>
    </div>
  );
};
