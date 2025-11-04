import { useState } from "react"
import { PlusIcon } from "./components/icons/plusicon"
import { ShareIcon } from "./components/icons/shareicon"
import { AddContentModal } from "./components/ui/addContentModal"
import { Button } from "./components/ui/button"
import { Card } from "./components/ui/card"

function App() {
  const [open,setModal]=useState(true)
  return (
    <div>
      <AddContentModal open={open} setModal={setModal}/>
      <div className="flex justify-end">
        <Button variant="secondary" size="sm" startIcon={<PlusIcon size="lg"/>} text="Add Content"/>
        <Button variant="primary" size="sm" startIcon={<ShareIcon size="lg"/>} text="Share Brain"/>
      </div>
      <div className="flex gap-4">
        <Card type="youtube" title="Pravachan" link="https://www.youtube.com/watch?v=MmC-98uM6Sc" />
        <Card type="twitter" title="Pravachan" link="https://x.com/amritwt/status/1985251620880572458" />
      </div>
      
    </div>
  )
}

export default App
