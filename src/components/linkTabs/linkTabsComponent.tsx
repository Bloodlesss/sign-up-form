import Tab from "@mui/material/Tab";
import { To, useNavigate } from "react-router-dom";
import style from "./linkTabsComponent.module.scss";
interface LinkTabProps {
  label?: string;
  href?: string;
}

function LinkTabsComponent(props: LinkTabProps) {
  const { href } = props;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(href as string);
  };
  return (
    <Tab
      component="a"
      className={style.tab}
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        handleClick();
        event.preventDefault();
      }}
      {...props}
    />
  );
}
export default LinkTabsComponent;
