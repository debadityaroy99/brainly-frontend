import { BrainlyLogo } from "../icons/brainLogo"
import { TwitterIcon } from "../icons/twitterIcon"
import { YoutubeIcon } from "../icons/youtubeIcon"
import { SidebarItem } from "./sidebarItem"

export const Sidebar = () => {
  return (
    <div className="bg-white h-screen lg:border-r border-none lg:w-72 w-0 fixed ">
      <div className="flex items-center justify-start">
        <div className="ml-2"><BrainlyLogo /></div>
        <div className="text-2xl p-2">Brainly</div>
      </div>

      <div className="my-5">
        <SidebarItem text="Twitter" icon={<TwitterIcon />} />
        <SidebarItem text="YouTube" icon={<YoutubeIcon />} />
      </div>
    </div>
  );
};
