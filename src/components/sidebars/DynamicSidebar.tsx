import { Role, roleBasedTabs } from "../../utils/constants";
import Sidebar from "./Sidebar";

export default function DynamicSidebar({ role }: { role: string }) {
  switch (role) {
    case Role.USER:
        return <Sidebar tabs={roleBasedTabs.USER} />
    case Role.ADMIN:
        return <Sidebar tabs={roleBasedTabs.ADMIN} />
    case Role.MANAGER:
        return <Sidebar tabs={roleBasedTabs.MANAGER} />
  }
}
