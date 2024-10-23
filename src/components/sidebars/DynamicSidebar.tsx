import { Role, roleBasedTabs } from "../../utils/constants";
import Sidebar from "./Sidebar";

export default function DynamicSidebar({ role, pathname }: { role: string; pathname: string }) {
  switch (role) {
    case Role.USER:
        return <Sidebar tabs={roleBasedTabs.USER} pathname={pathname} />
    case Role.ADMIN:
        return <Sidebar tabs={roleBasedTabs.ADMIN} pathname={pathname} />
    case Role.MANAGER:
        return <Sidebar tabs={roleBasedTabs.MANAGER} pathname={pathname} />
  }
}
