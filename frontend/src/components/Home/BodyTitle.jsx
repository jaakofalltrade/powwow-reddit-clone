import React from "react";
import {
  BodyContainer,
  BodyTitleBox,
  BodyTitle,
  BodyCaption
} from "./StyledComponents/StyledBody.jsx";

const BodyCont = () => {
  return (
    <BodyContainer flexNumber={3} hideLater="true">
      <BodyTitleBox>
        <BodyTitle>Powwow - A reddit clone but not quite.</BodyTitle>
        <BodyCaption>
          Billions upon billions rich in mystery finite but unbounded
          explorations Vangelis the sky calls to us. Circumnavigated white dwarf
          Sea of Tranquility ship of the imagination inconspicuous motes of rock
          and gas cosmic ocean.
        </BodyCaption>
        <BodyCaption>
          Globular star cluster culture explorations at the edge of forever
          dream of the mind's eye Jean-François Champollion. The sky calls to us
          trillion encyclopaedia galactica hearts of the stars emerged into
          consciousness ship of the imagination.
        </BodyCaption>
      </BodyTitleBox>
    </BodyContainer>
  );
};

export default BodyCont;
