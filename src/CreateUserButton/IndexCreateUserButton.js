import './CreateUserButton.css';

function CreateUserButton({ setOpenModalCreateUser }) {
  return (
    <button
      className="CreateUserButton"
      onClick={
        () => {
            setOpenModalCreateUser(state => !state);
        }
      }
    >+</button>
  );
}

export { CreateUserButton };