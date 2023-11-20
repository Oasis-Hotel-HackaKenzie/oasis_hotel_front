import image from "../../assets/landscapes/img-homepage.svg";
import demoImage from "../../assets/landscapes/piscina.svg";
import demoImageGastronomic from "../../assets/landscapes/restaurant.svg";

import {
  StyledMain,
  StyledSectionExperienceGastronomic,
  StyledSectionFindHotel,
  StyledSectionImage,
} from "./style";

export const HomePage = () => {
  return (
    <>
      <StyledMain>
        <StyledSectionImage>
          <img src={image} alt="image-page-home" />
        </StyledSectionImage>

        <StyledSectionFindHotel>
          <h2>Descubra o oasis hotel</h2>
          <div className="explore-hotel">
            <div className="model1">
              <img src={demoImage} alt="demo-image-page-home" />

              <h3>Título</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                tenetur natus, nesciunt a id pariatur numquam in culpa dicta
                ipsam. Dolorum rerum placeat consequuntur nam suscipit
                cupiditate accusamus officiis ratione! Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Totam tenetur natus, nesciunt
                a id pariatur numquam in culpa dicta ipsam. Dolorum rerum
                placeat consequuntur nam suscipit cupiditate accusamus officiis
                ratione!
              </p>
            </div>
            <div className="model2">
              <img src={demoImage} alt="demo-image-page-home" />

              <h3>Título</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                tenetur natus, nesciunt a id pariatur numquam in culpa dicta
                ipsam. Dolorum rerum placeat consequuntur nam suscipit
                cupiditate accusamus officiis ratione! Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Totam tenetur natus, nesciunt
                a id pariatur numquam in culpa dicta ipsam. Dolorum rerum
                placeat consequuntur nam suscipit cupiditate accusamus officiis
                ratione!
              </p>
            </div>
            <div className="model3">
              <img src={demoImage} alt="demo-image-page-home" />

              <h3>Título</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                tenetur natus, nesciunt a id pariatur numquam in culpa dicta
                ipsam. Dolorum rerum placeat consequuntur nam suscipit
                cupiditate accusamus officiis ratione! Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Totam tenetur natus, nesciunt
                a id pariatur numquam in culpa dicta ipsam. Dolorum rerum
                placeat consequuntur nam suscipit cupiditate accusamus officiis
                ratione!
              </p>
            </div>
          </div>
        </StyledSectionFindHotel>

        <StyledSectionExperienceGastronomic>
          <h2>Experiências gastronômicas</h2>

          <div className="card-gastronomic-one">
            <img src={demoImageGastronomic} alt="demo-image-page-gastronomic" />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
              itaque laboriosam ratione totam odio autem illo, culpa explicabo
              quia animi voluptatem, provident vero velit qui? Neque assumenda
              veniam libero id.
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
              itaque laboriosam ratione totam odio autem illo, culpa explicabo
              quia animi voluptatem, provident vero velit qui? Neque assumenda
              veniam libero id. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
              itaque laboriosam ratione totam odio autem illo, culpa explicabo
              quia animi voluptatem, provident vero velit qui? Neque assumenda
              veniam libero id.
            </p>
          </div>
          <div className="card-gastronomic-two">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
              impedit perspiciatis, odio, voluptatum nam itaque ut expedita sunt
              pariatur iste repudiandae ab quaerat quos, minus blanditiis
              placeat quod aperiam dolor.
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
              itaque laboriosam ratione totam odio autem illo, culpa explicabo
              quia animi voluptatem, provident vero velit qui? Neque assumenda
              veniam libero id.  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
              itaque laboriosam ratione totam odio autem illo, culpa explicabo
              quia animi voluptatem, provident vero velit qui? Neque assumenda
              veniam libero id.
            </p>

            <img src={demoImageGastronomic} alt="demo-image-page-gastronomic" />
          </div>
        </StyledSectionExperienceGastronomic>
      </StyledMain>
    </>
  );
};
