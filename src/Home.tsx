import { createContext, useContext, useState } from 'react'

// contexto nao é modificado em um contexto copartilhado
const CyclesContext = createContext({} as any)

function NewCycleFor() {
  const { activeCycle, setActiveCycle } = useContext(CyclesContext)

  return (
    <h1>
      NewCycleForm: {activeCycle}
      <button
        onClick={() => {
          setActiveCycle(2)
        }}
      >
        Alterar ciclo ativo
      </button>
    </h1>
  )
}

function Countdown() {
  const { activeCycle } = useContext(CyclesContext)
  return <h1>Countdown: {activeCycle}</h1>
}

export function Home() {
  const [activeCycle, setActiveCycle] = useState(0)
  // envia  activeCycle, e setActiveCycle no conext provider para cesso nos compoentes filhos
  return (
    <CyclesContext.Provider value={{ activeCycle, setActiveCycle }}>
      <div>
        <NewCycleFor />
        <Countdown />
      </div>
    </CyclesContext.Provider>
  )
}
