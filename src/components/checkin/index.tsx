
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../form/inputs";
import { StyledForm, StyledModal } from "./style";
export const registerUserSchema = z.object({
 
  cpf: z.number().min(11, "Deve estar no formato +**(**)*****-****."),
  room: z.number().min(10, "Este campo é obrigatório"),
  date: z.string().min(1, "Este campo é obrigatório"),
  
  
});
type TRegisterUser = z.infer<typeof registerUserSchema>;


export const Checkin = () => {
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
      cpf: payload.cpf,
      room: payload.room,
      date: payload.date,
      
    };
    registerUser(newData);
  };

  return (
    <StyledModal>
        <StyledForm onSubmit={handleSubmit(handleRegisterForm)}>
         

          <Input
            label="Cpf"
            type="string"
            placeholder="Digite aqui seu cpf"
            register={register("cpf")}
            error={errors.cpf?.message}
          />

          <Input
            label="Quarto"
            type="string"
            placeholder="Digite aqui o quarto desejado"
            register={register("room")}
            error={errors.room?.message}
          />
          <Input
            label="Data de entrada"
            type="string"
            placeholder="01/01/2024"
            register={register("date")}
            error={errors.date?.message}
          />
          
          <div className="buttonsForm">
            <button className="btnContinue">Check-in</button>
           
          </div>
        </StyledForm>
      {/* </section> */}
    </StyledModal>
  );
};
