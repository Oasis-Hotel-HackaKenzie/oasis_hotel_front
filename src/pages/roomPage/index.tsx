import roomOasis from "../../assets/landscapes/roomOasisOceano.svg";
import roomBelezaSelvagem from "../../assets/landscapes/roomBelezaSelvagem.svg";
import roomParaisoTropical from "../../assets/landscapes/roomParaisoTropical.svg";
import roomSonhoReal from "../../assets/landscapes/roomSonhoReal.svg";
import roomSuiteMiragem from "../../assets/landscapes/roomSuiteMiragem.svg";
import { StyledImagesRoomPage, StyledMain } from "./style";

export const RoomPage = () => {
  return (
    <StyledMain>
      <StyledImagesRoomPage>
        <img src={roomOasis} alt="image-page-home" />
        <img src={roomBelezaSelvagem} alt="image-page-home" />
        <img src={roomParaisoTropical} alt="image-page-home" />
        <img src={roomSonhoReal} alt="image-page-home" />
        <img src={roomSuiteMiragem} alt="image-page-home" />
        <div className="nameImages"></div>
      </StyledImagesRoomPage>
    </StyledMain>
  );
};
