import { useContext, useState, FormEvent } from "react"
import { AuthContext } from "../../contexts/AuthContext"

export function SignIn() {
  const { signIn } = useContext(AuthContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleSubmit(event: FormEvent){
    event.preventDefault();

    const data = {
      email,
      password
    }

    await signIn(data)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

      <button>Entrar</button>
    </form>
  )
}
