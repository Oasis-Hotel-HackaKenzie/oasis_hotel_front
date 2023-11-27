import { z } from "zod";
import { StyledForm, StyledModal } from "./style";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../../form/inputs";


export const registerUserSchema = z.object({
  name: z.string().min(1, "Este campo é obrigatório"),
  cpf: z.number().min(11, "Deve estar no formato +**(**)*****-****."),
  email: z
    .string()
    .email("Digite aqui seu email")
    .min(1, "Este campo é obrigatório"),
  contact: z.number().min(10, "Este campo é obrigatório"),
  nacionality: z.string().min(1, "Este campo é obrigatório"),
  contactEmergency: z.number().min(10, "Este campo é obrigatório"),

  password: z.string().min(8, "Este campo é obrigatório"),
});
type TRegisterUser = z.infer<typeof registerUserSchema>;

export const UpdateClient = () => {
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
      contact: payload.contact,
      cpf: payload.cpf,
      email: payload.email,
      name: payload.name,
      password: payload.password,
      nacionality: payload.nacionality,
      contactEmergency: payload.contactEmergency,
    };
    registerUser(newData);
  };

  return (
    <>
      <StyledModal>
      <h3>Atualizar informações</h3>
        {/* <section className="formRegister"> */}
          <StyledForm onSubmit={handleSubmit(handleRegisterForm)}>
            <Input
              label="Nome"
              type="text"
              placeholder="Este campo é obrigatório"
              register={register("name")}
              error={errors.name?.message}
            />

            <Input
              label="Cpf"
              type="string"
              placeholder="Digite aqui seu cpf"
              register={register("cpf")}
              error={errors.cpf?.message}
            />

            <Input
              label="Email"
              type="string"
              placeholder="Digite aqui seu email"
              register={register("email")}
              error={errors.email?.message}
            />
            <Input
              label="Telefone"
              type="string"
              placeholder="Digite aqui seu telefone"
              register={register("contact")}
              error={errors.contact?.message}
            />
            <Input
              label="Nacionalidade"
              type="string"
              placeholder="Digite aqui sua nacionalidade"
              register={register("nacionality")}
              error={errors.nacionality?.message}
            />
            <Input
              label="Contato de emergência"
              type="string"
              placeholder="Digite aqui um contato para emergência"
              register={register("contactEmergency")}
              error={errors.contactEmergency?.message}
            />
            <Input
              label="Senha"
              type="string"
              placeholder="Digite aqui sua senha"
              register={register("password")}
              error={errors.password?.message}
            />
            <div className="buttonsForm">
              <button className="btnContinue">Atualizar</button>
             
            </div>
          </StyledForm>
        {/* </section> */}
      </StyledModal>
    </>
  );
};
