import React, { useState } from 'react';

const contacts = ['Ali', 'Sara', 'Ahmed', 'Fatima', 'Usman'];

const styles = {
  page: { display: 'flex', gap: '20px', padding: '20px' },
  contacts: { width: '150px', background: '#f0f0f0', padding: '10px' },
  box: { width: '300px', background: '#eaeaea', padding: '20px' },
  input: { width: '100%', padding: '8px', marginBottom: '12px', boxSizing: 'border-box' },
  button: { background: '#222', color: 'white', padding: '10px 25px', border: 'none', cursor: 'pointer' },
};

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [message, setMessage] = useState('');
  const [selected, setSelected] = useState('');

  const handleSubmit = () => {
    if (username === '' || password === '') {
      setMessage('Please fill in both fields.');
    } else {
      setMessage('Welcome, ' + username + '!');
    }
  };

  return (
    <div style={styles.page}>
      {/* Left side: contact names */}
      <div style={styles.contacts}>
        <h3>Contacts</h3>
        {contacts.map((name) => (
          <p key={name} style={{ cursor: 'pointer' }} onClick={() => setSelected(name)}>
            {name}
          </p>
        ))}
        <p><b>Selected: {selected}</b></p>
      </div>

      {/* Right side: login box */}
      <div style={styles.box}>
        <h2>LOGIN</h2>

        <label>User Name</label>
        <input style={styles.input} value={username}
          onChange={(e) => setUsername(e.target.value)} />

        <label>Password</label>
        <input style={styles.input} type="password" value={password}
          onChange={(e) => setPassword(e.target.value)} />

        <label>
          <input type="checkbox" checked={remember}
            onChange={(e) => setRemember(e.target.checked)} />
          {' '}Remember me
        </label>
        <p style={{ cursor: 'pointer', textDecoration: 'underline' }}
          onClick={() => setMessage('Password reset link sent!')}>
          Forgot Password?
        </p>

        <button style={styles.button} onClick={handleSubmit}>Submit</button>

        <p><b>{message}</b></p>
      </div>
    </div>
  );
};

export default Login;