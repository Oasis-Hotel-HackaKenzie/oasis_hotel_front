import { StyledMain}from "./style";
import { Menu } from "../../components/menu";

import { CheckOutAttendant } from "../../components/modals/checkoutAttendant";
import { DeletePromotion } from "../../components/DeletePromotion";
import { MyProfile } from "../../components/myProfile";

export const PageGuest = () => {
  return (
    <StyledMain>
     <Menu/>
     <MyProfile/>
     {/* <MyReservation/> */}
    </StyledMain>
  );
};
