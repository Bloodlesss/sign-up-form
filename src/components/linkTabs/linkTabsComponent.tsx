import Tab from "@mui/material/Tab";
import { To, useNavigate } from "react-router-dom";
interface LinkTabProps {
  label?: string;
  href?: string;
}

function LinkTabsComponent(props: LinkTabProps) {
  const { href, label } = props;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(href as To);
  };
  return (
    <Tab
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        handleClick();
        event.preventDefault();
      }}
      {...props}
    />
  );
}
export default LinkTabsComponent;
