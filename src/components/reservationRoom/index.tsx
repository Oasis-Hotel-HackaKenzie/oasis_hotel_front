import { useForm } from "react-hook-form";
import { Input } from "../form/inputs";
import { StyledForm, StyledReservation } from "./style";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import card from "../../assets/icons/card.svg";
import moneyTransfer from "../../assets/icons/money-transfer.svg";
import visa from "../../assets/icons/visa.svg";
import money from "../../assets/icons/money.svg";

export const registerUserSchema = z.object({
  amount: z.number().min(1, "Este campo é obrigatório"),
  date: z.date(),
});
type TRegisterUser = z.infer<typeof registerUserSchema>;

export const ReservationRoom = () => {
  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm<TRegisterUser>({
    resolver: zodResolver(registerUserSchema),
  });

  const handleRegisterForm = (payload: any) => {
    const newData: any = {
      amount: payload.amount,
      date: payload.date,
    };
    registerUser(newData);
  };

  return (
    <>
      <StyledReservation>
        <section className="formReservation">
          <StyledForm onSubmit={handleSubmit(handleRegisterForm)}>
            <Input
              label="Quantidade hóspedes"
              type="text"
              placeholder="Digite a quantidade de hóspedes"
              register={register("amount")}
              error={errors.amount?.message}
            />
            <Input
              label="Data de entrada"
              type="text"
              placeholder="Digite a data de saída"
              register={register("date")}
              error={errors.date?.message}
            />
            <button className="btnReservation">Reservar</button>
          </StyledForm>
        </section>
        <section className="pay">
          <div className="organization">
            <div className="total">Total: R$ 1500,00</div>

            <div className="icons">
              <div className="images">
                <img src={card} alt="card" />
                <img src={moneyTransfer} alt="moneyTransfer" />
                <img src={visa} alt="visa" />
                <img src={money} alt="money" />
              </div>

              <p>
                Formas de pagamento: cartão de crédito mastercad, visa, dinheiro
                e pix.
              </p>
            </div>
          </div>
        </section>
      </StyledReservation>
    </>
  );
};
