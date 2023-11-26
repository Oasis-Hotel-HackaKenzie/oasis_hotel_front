
// export const MyProfile = () => {
//   const [role, setRole] = useState("guest");

//   return (
//     <StyledSectionService>
//       <div>
//         <ul>
//           <li>
//             <img src={arrow} alt="arrow-right" />
//           </li>
//         </ul>
//       </div>
//     </StyledSectionService>
//   );
// };
import { StyledSection } from "./style";

export const MyProfile = () => {
  return (
    <StyledSection>
      <div>
        <ul>
        <li>
           <p>Nome</p>
           <span>Fulano da Silva</span>
          </li>
          <li>
           <p>Email</p>
           <span>Fulano da Silva</span>
          </li>
          <li>
           <p>Nacionalidade</p>
           <span>Brasileiro</span>
          </li>
          <li>
           <p>Contato de emergência</p>
           <span>Ciclano da Silva</span>
          </li>
          <li>
           <p>Cpf</p>
           <span>000.000.000-00</span>
          </li>
          <li>
           <p>Telefone</p>
           <span>(+00) 00 99999-9999 </span>
          </li>
          
        </ul>
        <button>Atualizar</button>
      </div>
    </StyledSection>
  );
};
