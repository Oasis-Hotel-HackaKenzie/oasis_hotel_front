import image from "../../assets/landscapes/img-login.svg";
import {
  StyledForm,
  StyledImage,
  StyledMain,
  StyledSectionLoginForm,
} from "./style";
import { Input } from "../../components/form/inputs";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { UserContext } from "../../providers/userContext";

export const LoginPage = () => {
 


  const loginSchema = z.object({
    email: z
      .string()
      .nonempty("Email obrigatório")
      .email({ message: "Formato inválido" }),
    password: z.string().nonempty("Senha obrigatória"),
  });
  type TLogin = z.infer<typeof loginSchema>;
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLogin>({ resolver: zodResolver(loginSchema) });
  return (
    <>
      <StyledMain>
        <StyledImage>
          <img src={image} alt="image-page-login" />
        </StyledImage>

        <StyledSectionLoginForm>
          {/* onSubmit={handleSubmit(login)} */}
          <StyledForm onSubmit={handleSubmit(login)}>
            <Input
              label="Email"
              type="email"
              placeholder="Digite seu email"
              register={register("email")}
              error={errors.email?.message}
            />

            <Input
              label="Senha"
              type="password"
              placeholder="Digite sua senha"
              register={register("password")}
              error={errors.password?.message}
            />

            <div className="buttonsForm">
              
             <button type="submit" className="btnContinue">Continuar</button>
             <button className="btnBack">Voltar</button>
            
            </div>

            <div className="notCountLink" onClick={() => navigate(`/Register`)}>
            <p>Ainda não tem conta?</p>
            </div>
              
              <Link to="/register" className="registerLink">
                Cadastre-se agora!
              </Link>
          </StyledForm>
        </StyledSectionLoginForm>
      </StyledMain>
    </>
  );
};
