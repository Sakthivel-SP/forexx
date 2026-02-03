function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    return <p>No user data</p>;
  }

  return (
    <div className="page">
      <h2>User Profile</h2>

      <div className="profile-card">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Age:</strong> {user.age}</p>
        <p><strong>Email:</strong> {user.email}</p>
      </div>
    </div>
  );
}

export default Profile;
