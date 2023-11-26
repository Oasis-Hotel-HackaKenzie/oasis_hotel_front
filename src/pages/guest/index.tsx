import { StyledMain}from "./style";
import { Menu } from "../../components/menu";
import { MyProfile } from "../../components/myProfile";
import { MyReservation } from "../../components/myReservations";
import { UpdateClient } from "../../components/updateProfile";

export const PageGuest = () => {
  return (
    <StyledMain>
     <Menu/>
     <UpdateClient/>
     {/* <MyReservation/> */}
    </StyledMain>
  );
};
