import { z } from "zod";
import { StyledForm, StyledModal } from "./style";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../../form/inputs";

export const registerUserSchema = z.object({
  name: z.string().min(1, "Este campo é obrigatório"),

  percentage: z.number().min(1, "Este campo é obrigatório"),

  dateStart: z.string().min(8, "Este campo é obrigatório"),
  dateFinished: z.string().min(8, "Este campo é obrigatório"),
});
type TRegisterUser = z.infer<typeof registerUserSchema>;

export const CheckOutAttendant = () => {
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
      name: payload.name,
      percentage: payload.percentage,
      nacionality: payload.nacionality,
      contactEmergency: payload.contactEmergency,
    };
    registerUser(newData);
  };

  return (
    <>
      <StyledModal>
        <section>
          <div>
            <p>Desconto:</p><span>0%</span>
          </div>
          <div>
            <p>Diárias:</p><span>R$ 1500,00</span>
          </div>
          <div>
            <p>Descontos:</p><span>R$ 100,00</span>
          </div>
          <div>
            <p>Total:</p><span>R$ 1400,00</span>
          </div>

          <button>Confirmar pagamento</button>
        </section>
        <section className="sectionBtn">
          <button>Aplicar desconto</button>
        </section>
      </StyledModal>
    </>
  );
};
