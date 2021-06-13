import "./newUser.css";

export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="new-user-title">New User</h1>
      <form className="new-user-form">
        <div className="new-user-item">
          <label>Username</label>
          <input type="text" placeholder="joey_b" />
        </div>
        <div className="new-user-item">
          <label>Full Name</label>
          <input type="text" placeholder="Joe Burrow" />
        </div>
        <div className="new-user-item">
          <label>Email</label>
          <input type="email" placeholder="joey_b@bengals.com" />
        </div>
        <div className="new-user-item">
          <label>Password</label>
          <input type="password" placeholder="password" />
        </div>
        <div className="new-user-item">
          <label>Phone Number</label>
          <input type="text" placeholder="(123)555-5555" />
        </div>
        <div className="new-user-item">
          <label>Gender</label>
          <div className="new-user-gender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
          </div>
        </div>
        <div className="new-user-item">
          <label>Active</label>
          <select className="new-user-select" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="new-user-button">Create</button>
      </form>
    </div>
  );
}
