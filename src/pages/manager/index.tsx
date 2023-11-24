import { StyledMain}from "./style";
import { MenuServices } from "../../components/menu-services";
import { Menu } from "../../components/menu";

export const PageManager = () => {
  return (
    <StyledMain>
     <Menu/>
      <MenuServices/>
    </StyledMain>
  );
};
