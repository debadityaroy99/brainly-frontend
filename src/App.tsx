import { PlusIcon } from "./components/icons/plusicon"
import { ShareIcon } from "./components/icons/shareicon"
import { Button } from "./components/ui/button"
import { Card } from "./components/ui/card"

function App() {

  return (
    <div>
      <div className="flex">
        <Button variant="secondary" size="sm" startIcon={<PlusIcon size="lg"/>} text="Add Content"/>
        <Button variant="primary" size="sm" startIcon={<ShareIcon size="lg"/>} text="Share Brain"/>
      </div>
      <div>
        <Card />
      </div>
      
    </div>
  )
}

export default App
