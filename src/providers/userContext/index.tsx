import { createContext, useContext, useEffect, useState } from "react";
// import {api} from "../../services/api"
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import axios from "axios";

interface IUserProviderProps {
  children: React.ReactNode;
}


interface IUserContext {
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  login: (payload: ILogin) => Promise<void>;
  registerUser: (payload: IRegisterUser) => Promise<void>;
  logout: () => Promise<void>;
  loading: boolean;
  token: string | null;
  updateUser: (payload: IUpdateUser) => Promise<void>;
  deleteEmployeer: () => Promise<void>;
}

export interface IUser {
  id: number;
  createdAt: string;
  deletedAt: string;
  contact: number;
  cpf: number;
  email: string;
  name: string;
  password: string;
  nacionality: string;
  contactEmergency: number;
}

interface ILogin {
  email: string;
  password: string;
}

interface IRegisterUser {
  contact: number;
  cpf: number;
  email: string;
  name: string;
  password: string;
  nacionality: string;
  contactEmergency: number;
}

interface IUpdateUser {
  contact: number;
  cpf: number;
  email: string;
  name: string;
  password: string;
  nacionality: string;
  contactEmergency: number;
}

export const UserContext = createContext({} as IUserContext);
export const UserProvider = ({ children }: IUserProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [role, setRole] = useState<IUser | null>(null);
  const token: string | null = localStorage.getItem("token");
  const [loading, setLoading] = useState<boolean>(true);
  const userID = localStorage.getItem("@ID"); //opcional
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      setLoading(false);
      return;
    }

    setLoading(false);
  }, []);

  const login = async (payload: ILogin) => {
    try {
      console.log(payload)
      const response = await api.post("/login", payload);
      localStorage.setItem("token", response.data.token);
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      const role = response.data.role;
      navigate(`/${role}page`);
      // getMyProfile();
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };

  // const getMyProfile = async () => {
  //   if (token) {
  //     try {
  //       const response = await api.get("/users/profile", {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });
  //       setUser(response.data);
  //       setRole(response.data.ads);
  //     } catch (error: any) {
  //       setUser(null);
  //       localStorage.clear();
  //       toast.error("Sessão expirada, realize o login novamente.");
  //     }
  //   }
  // };

  const logout = async () => {
    setUser(null);
    localStorage.clear();
    navigate("/login");
    toast.info("Sessão encerrada!");
  };



  
  const registerUser = async (payload: IRegisterUser) => {
    console.log("que que ta acontecendo")
    try {
      await api.post(`/users`, payload);
      navigate("/login");
      toast.success("Conta criada com sucesso!");
    } catch (error: any) {
      toast.error(error.response.data.message);
      console.log(error.response.data.message);
    }
  };

  const updateUser = async (payload: IUpdateUser) => {
    try {
      const response = await api.patch("/users", payload, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(response.data);
      toast.success("Dados atualizados.");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data);
      }
    }
  };
  const deleteEmployeer = async () => {
    try {
      await api.delete("/employeer", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(null);
      localStorage.clear();
      toast.info("Sua conta foi excluída 😞");
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <UserContext.Provider
    value={{
      login,
      user,
      setUser,
      registerUser,
      logout,
      loading,
      
      token,
      updateUser,
      deleteEmployeer
    }}
  >
    {children}
  </UserContext.Provider>
  );
};
