import { roleBasedTabs } from "../../utils/constants";
import Sidebar from "./Sidebar";
import { Role } from "../../utils/types";

export default function DynamicSidebar({
  role,
  pathname,
}: {
  role: Role;
  pathname: string;
}) {
  const tabs = roleBasedTabs[role] || roleBasedTabs.USER;

  return <Sidebar tabs={tabs} pathname={pathname} />;
}
