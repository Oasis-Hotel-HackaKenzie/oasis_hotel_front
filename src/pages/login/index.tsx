import { Header } from "../../components/header";
import image from "../../assets/landscapes/img-login.svg";
import {
  StyledForm,
  StyledImage,
  StyledMain,
  StyledSectionLoginForm,
} from "./style";
import { Input } from "../../components/form/inputs";
import { UserContext } from "../../providers";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const LoginPage = () => {
  const loginSchema = z.object({
    email: z
      .string()
      .nonempty("Email obrigatório")
      .email({ message: "Formato inválido" }),
    password: z.string().nonempty("Senha obrigatória"),
  });
  type tLogin = z.infer<typeof loginSchema>;
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<tLogin>({ resolver: zodResolver(loginSchema) });
  return (
    <>
      <Header />
      <StyledMain>
        <StyledImage>
          <img src={image} alt="image-page-login" />
        </StyledImage>

        <StyledSectionLoginForm>
          {/* onSubmit={handleSubmit(login)} */}
          <StyledForm>
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
              <button className="btnContinue">Continuar</button>
              <button className="btnBack">Voltar</button>
            </div>

            <div className="notCountLink">
              <p>Ainda não tem conta?</p>
              <Link to="/register" className="registerLink">
                Cadastre-se agora!
              </Link>
            </div>
          </StyledForm>
        </StyledSectionLoginForm>
      </StyledMain>
    </>
  );
};
