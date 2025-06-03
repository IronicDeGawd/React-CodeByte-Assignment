import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch users: ${response.status}`);
      }

      const userData = await response.json();
      setUsers(userData);
    } catch (err) {
      setError(err.message || "Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  const retryFetch = () => {
    fetchUsers();
  };

  if (loading) {
    return (
      <div className="app">
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading user data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="app">
        <div className="error-container">
          <div className="error-icon">⚠️</div>
          <h2>Error Loading Users</h2>
          <p>{error}</p>
          <button onClick={retryFetch} className="retry-button">
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <div className="header">
        <h1>User Directory</h1>
        <p>Fetched from JSONPlaceholder API</p>
      </div>

      <div className="users-grid">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <div className="user-avatar">
              {user.name.charAt(0).toUpperCase()}
            </div>

            <div className="user-info">
              <h3 className="user-name">{user.name}</h3>
              <p className="user-email">📧 {user.email}</p>
              <p className="user-company">🏢 {user.company.name}</p>

              <div className="user-details">
                <p className="user-phone">📞 {user.phone}</p>
                <p className="user-website">🌐 {user.website}</p>
                <p className="user-address">
                  📍 {user.address.city}, {user.address.zipcode}
                </p>
              </div>

              {user.company.catchPhrase && (
                <p className="user-catchphrase">"{user.company.catchPhrase}"</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="footer">
        <p>Total Users: {users.length}</p>
        <button onClick={retryFetch} className="refresh-button">
          Refresh Data
        </button>
      </div>
    </div>
  );
}

export default App;
