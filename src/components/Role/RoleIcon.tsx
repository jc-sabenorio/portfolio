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
export default function RoleIcon({ icon }: { icon: string }) {
  const roleIcons = {
    forkright: <ForkRightIcon sx={{ fontSize: 50 }} />,
    integrationinstructions: (
      <IntegrationInstructionsIcon sx={{ fontSize: 50 }} />
    ),
    desktopwindows: <DesktopWindowsIcon sx={{ fontSize: 50 }} />,
    dns: <DnsIcon sx={{ fontSize: 50 }} />,
    storage: <StorageIcon sx={{ fontSize: 50 }} />,
    lock: <LockIcon sx={{ fontSize: 50 }} />,
    api: <ApiIcon sx={{ fontSize: 50 }} />,
    cloudupload: <CloudUploadIcon sx={{ fontSize: 50 }} />,
    brush: <BrushIcon sx={{ fontSize: 50 }} />,
    settingsethernet: <SettingsEthernetIcon sx={{ fontSize: 50 }} />,
    bugreport: <BugReportIcon sx={{ fontSize: 50 }} />,
    speed: <SpeedIcon sx={{ fontSize: 50 }} />,
    checkcircle: <CheckCircleIcon sx={{ fontSize: 50 }} />,
    server: <DnsIcon sx={{ fontSize: 50 }} />,
    security: <SecurityIcon sx={{ fontSize: 50 }} />,
    erroroutline: <ErrorOutlineIcon sx={{ fontSize: 50 }} />,
    description: <DescriptionIcon sx={{ fontSize: 50 }} />,
    buildcircle: <BuildCircleIcon sx={{ fontSize: 50 }} />,
    groups: <GroupsIcon sx={{ fontSize: 50 }} />,
  };

  return roleIcons[icon] ? roleIcons[icon] : <div></div>;
}
