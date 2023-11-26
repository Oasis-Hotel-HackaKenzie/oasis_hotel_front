import { StyledMain}from "./style";
import { Menu } from "../../components/menu";

import { CheckOutAttendant } from "../../components/checkoutAttendant";
import { DeletePromotion } from "../../components/DeletePromotion";

export const PageGuest = () => {
  return (
    <StyledMain>
     <Menu/>
     <DeletePromotion/>
     {/* <MyReservation/> */}
    </StyledMain>
  );
};
