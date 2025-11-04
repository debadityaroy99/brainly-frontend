import { useState } from "react"

import { ShareIcon } from "../icons/shareicon"
import { AddContentModal } from "../ui/addContentModal"
import { Button } from "../ui/button"
import { Card } from "../ui/card"
import { Sidebar } from "../ui/sidebar"
import { PlusIcon } from "../icons/plusicon"

function Dashboard() {
  const [open,setModal]=useState(true)
  return (
    <div>
        <AddContentModal open={open} setModal={setModal}/>
        <Sidebar/>
        <div className="ml-72 bg-gray-100 h-screen border"> 
        <div className="flex justify-end">
          <Button  fullwidth={false} onClick={()=>setModal(true)} variant="secondary" size="sm" startIcon={<PlusIcon size="lg"/>} text="Add Content"/>
          <Button fullwidth={false} variant="primary" size="sm" startIcon={<ShareIcon size="lg"/>} text="Share Brain"/>
        </div>
        <div className="flex gap-4">
          <Card type="youtube" title="Pravachan" link="https://www.youtube.com/watch?v=MmC-98uM6Sc" />
          <Card type="twitter" title="Pravachan" link="https://x.com/amritwt/status/1985251620880572458" />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
