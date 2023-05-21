import { useState } from 'react'

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function loginUser(ev) {
    ev.preventDefault();
    const response = await fetch('http://localhost:1337/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }, 
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    })

    const data = await response.json();

    console.log(data);
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={loginUser}>
        <input value={name} onChange={(ev) => setName(ev.target.value)} type="text" placeholder="First Name" />
        <input value={email} onChange={(ev) => setEmail(ev.target.value)} type="email" placeholder="Email" />
        <input value={password} onChange={(ev) => setPassword(ev.target.value)} type="password" placeholder="Password" />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
}

export default App;
