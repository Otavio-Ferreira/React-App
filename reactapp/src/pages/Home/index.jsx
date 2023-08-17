import { useState } from 'react'
import './style.css'
import { Card } from '../../components/Card';

export function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <h1>Lista de Presença</h1>
      <input type="text" placeholder='Digite um nome...' />
      <button>Adicionar</button>

      <Card name="Otavio" time="10:15:25"/>
      <Card name="Meduarda" time="11:15:11"/>
    </div>
  )
}
