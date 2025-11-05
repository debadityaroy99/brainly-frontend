import { useState } from "react";
import { Sidebar } from "../ui/sidebar";
import { AddContentModal } from "../ui/addContentModal";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { ShareIcon } from "../icons/shareicon";
import { PlusIcon } from "../icons/plusicon";
import { useContent } from "../hooks/useContent";

function Dashboard() {
  const [open, setModal] = useState(false);
  const contents = useContent();

  return (
    <div className="flex min-h-screen w-full overflow-x-hidden">
      {/* Sidebar — visible only on large screens */}
      <aside className="hidden lg:flex w-72 bg-white border-r flex-col">
        <Sidebar />
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 bg-gray-100 flex flex-col">
        {/* Top Bar */}
        <div className="flex justify-end gap-2 p-4 border-b bg-white">
          <Button
            fullwidth={false}
            onClick={() => setModal(true)}
            variant="secondary"
            size="sm"
            startIcon={<PlusIcon size="lg" />}
            text="Add Content"
          />
          <Button
            fullwidth={false}
            variant="primary"
            size="sm"
            startIcon={<ShareIcon size="lg" />}
            text="Share Brain"
          />
        </div>
        <AddContentModal open={open} setModal={setModal} />
        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 flex-1 overflow-y-auto">
          {contents.map(({ type, link, title }) => (
            <Card key={link} type={type} title={title} link={link} />
          ))}
        </div>

        {/* Modal */}
       
      </main>
    </div>
  );
}

export default Dashboard;
