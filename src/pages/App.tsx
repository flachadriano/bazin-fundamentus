import { useState } from "react"
import { BazinService } from "../services/BazinService";

function App() {
  const bazinService = new BazinService();
  const [list, setList] = useState<any>();

  const generateList = () => setList(bazinService.getList());

  return (
    <div style={{ margin: 20 }}>
      <div style={{ display: 'flex', marginBottom: 20 }}>
        <h2>Bazin Fundamentus</h2>
        <button style={{ marginLeft: 30 }} onClick={generateList}>Gerar lista</button>
      </div>
      <div>
        <span>{ list }</span>
      </div>
    </div>
  )
}

export default App
