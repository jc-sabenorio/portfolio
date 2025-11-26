import ForkRightIcon from "@mui/icons-material/ForkRight";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import DesktopWindowsIcon from "@mui/icons-material/DesktopWindows";
import DnsIcon from "@mui/icons-material/Dns";
import StorageIcon from "@mui/icons-material/Storage";
import LockIcon from "@mui/icons-material/Lock";
import ApiIcon from "@mui/icons-material/Api";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import BrushIcon from "@mui/icons-material/Brush";
import SettingsEthernetIcon from "@mui/icons-material/SettingsEthernet";
import BugReportIcon from "@mui/icons-material/BugReport";
import SpeedIcon from "@mui/icons-material/Speed";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SecurityIcon from "@mui/icons-material/Security";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import DescriptionIcon from "@mui/icons-material/Description";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";
import GroupsIcon from "@mui/icons-material/Groups";
import type { JSX } from "react";
type RoleIconKeys =
  | "forkright"
  | "integrationinstructions"
  | "desktopwindows"
  | "dns"
  | "storage"
  | "lock"
  | "api"
  | "cloudupload"
  | "brush"
  | "settingsethernet"
  | "bugreport"
  | "speed"
  | "checkcircle"
  | "server"
  | "security"
  | "erroroutline"
  | "description"
  | "buildcircle"
  | "groups";

const roleIcons: Record<RoleIconKeys, JSX.Element> = {
  forkright: <ForkRightIcon sx={{ fontSize: 30 }} />,
  integrationinstructions: (
    <IntegrationInstructionsIcon sx={{ fontSize: 30 }} />
  ),
  desktopwindows: <DesktopWindowsIcon sx={{ fontSize: 30 }} />,
  dns: <DnsIcon sx={{ fontSize: 30 }} />,
  storage: <StorageIcon sx={{ fontSize: 30 }} />,
  lock: <LockIcon sx={{ fontSize: 30 }} />,
  api: <ApiIcon sx={{ fontSize: 30 }} />,
  cloudupload: <CloudUploadIcon sx={{ fontSize: 30 }} />,
  brush: <BrushIcon sx={{ fontSize: 30 }} />,
  settingsethernet: <SettingsEthernetIcon sx={{ fontSize: 30 }} />,
  bugreport: <BugReportIcon sx={{ fontSize: 30 }} />,
  speed: <SpeedIcon sx={{ fontSize: 30 }} />,
  checkcircle: <CheckCircleIcon sx={{ fontSize: 30 }} />,
  server: <DnsIcon sx={{ fontSize: 30 }} />,
  security: <SecurityIcon sx={{ fontSize: 30 }} />,
  erroroutline: <ErrorOutlineIcon sx={{ fontSize: 30 }} />,
  description: <DescriptionIcon sx={{ fontSize: 30 }} />,
  buildcircle: <BuildCircleIcon sx={{ fontSize: 30 }} />,
  groups: <GroupsIcon sx={{ fontSize: 30 }} />,
};

export default function RoleIcon({ icon }: { icon: string }) {
  // Type guard ensures TypeScript knows icon is a valid key
  if (icon in roleIcons) {
    return roleIcons[icon as RoleIconKeys];
  }
  return <div></div>;
}
