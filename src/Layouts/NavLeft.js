import "../Assets/Styles/Nav_Left.css";
import { AcUnit } from "@mui/icons-material";
import TextsmsIcon from "@mui/icons-material/Textsms";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import ApartmentIcon from "@mui/icons-material/Apartment";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import HelpIcon from "@mui/icons-material/Help";

const NavLeft = () => {
  return (
    <div className="nav_left">
      <ul>
        <li>
          <AcUnit fontSize="large" />
        </li>
        <li>
          <TextsmsIcon fontSize="large" />
        </li>
        <li>
          <ApartmentIcon fontSize="large" />
        </li>
        <li>
          <PermContactCalendarIcon fontSize="large" />
        </li>
        <li>
          <AccessTimeIcon fontSize="large" />
        </li>
        <li>
          <HelpIcon fontSize="large" />
        </li>
      </ul>
    </div>
  );
};

export default NavLeft;
