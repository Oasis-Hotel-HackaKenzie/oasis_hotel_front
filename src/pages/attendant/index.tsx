import { StyledMain}from "./style";
import { Menu } from "../../components/menu";
// import { RoomsComponents } from "../../components/roomComponent";
import { Checkin } from "../../components/checkin";
import { CheckOut } from "../../components/checkout";

export const PageAttendant = () => {
  
  return (
    <StyledMain>
     <Menu/>
     <CheckOut/>

    </StyledMain>
  );
};
