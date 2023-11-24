import { StyledMain}from "./style";
import { MenuServices } from "../../components/menu-services";
import { Menu } from "../../components/menu";

export const PageGuest = () => {
  return (
    <StyledMain>
     <Menu/>
      <MenuServices/>
    </StyledMain>
  );
};
