
import { StyledModal } from "./style";


export const DeletePromotion = () => {
  return (
    <>
      <StyledModal>
        <h3>Deseja mesmo deletar Promo 1?</h3>
        <div>
          <button className="btnYes">Sim</button>
          <button  className="btnNo">Não</button>
        </div>
      </StyledModal>
    </>
  );
};
