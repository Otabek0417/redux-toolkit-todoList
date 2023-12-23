import Clipboard from "../images/Clipboard.png";
function NoUser() {
  return (
    <div className="noUser">
      <img src={Clipboard} alt="Clipboard" />
      <h2>You don't have tasks registered yet</h2>
      <h3>Create tasks and organize your to-do items</h3>
    </div>
  );
}

export default NoUser;
