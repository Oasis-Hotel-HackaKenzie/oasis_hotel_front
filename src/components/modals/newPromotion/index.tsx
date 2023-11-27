import { z } from "zod";
import { StyledForm, StyledModal } from "./style";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../../form/inputs";


export const registerUserSchema = z.object({
  name: z.string().min(1, "Este campo é obrigatório"),
 
  percentage: z
    .number()
    .min(1, "Este campo é obrigatório"),
  
  

    dateStart: z.string().min(8, "Este campo é obrigatório"),
    dateFinished: z.string().min(8, "Este campo é obrigatório"),

});
type TRegisterUser = z.infer<typeof registerUserSchema>;

export const RegisterNewPromotion = () => {
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
      <h3>Criar promoção</h3>
        {/* <section className="formRegister"> */}
          <StyledForm onSubmit={handleSubmit(handleRegisterForm)}>
            <Input
              label="Nome da promoção"
              type="text"
              placeholder="Este campo é obrigatório"
              register={register("name")}
              error={errors.name?.message}
            />

          

            <Input
              label="Porcentagem de desconto"
              type="number"
              placeholder="10%"
              register={register("percentage")}
              error={errors.percentage?.message}
            />
        
            <Input
              label="Data de início"
              type="date"
              placeholder="**/**/****"
              register={register("dateStart")}
              error={errors.dateStart?.message}
            />
             <Input
              label="Data final"
              type="date"
              placeholder="**/**/****"
              register={register("dateFinished")}
              error={errors.dateFinished?.message}
            />
           
          
            <div className="buttonsForm">
              <button className="btnContinue">Criar</button>
             
            </div>
          </StyledForm>
        {/* </section> */}
      </StyledModal>
    </>
  );
};
