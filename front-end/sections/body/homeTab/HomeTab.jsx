import React from "react";

const HomeTab = () => {
  return (
    <div className="w-full maintabs">
    <TextLeftTab
      headerText="Eventos
  "
      subheadingText="¡No te lo pierdas! Apunte en el calendario y acompáñenos en los eventos importantes
  "
      buttonLink="/unete"
      buttonText="EVENTOS"
      image={EventosCardImage}
    />
    <TextRightTab
      headerText="Eventos
  "
      subheadingText="¡No te lo pierdas! Apunte en el calendario y acompáñenos en los eventos importantes
  "
      buttonLink="/unete"
      buttonText="EVENTOS"
      image={EventosCardImage}
    />

    <TextLeftTab
      headerText="Eventos
  "
      subheadingText="¡No te lo pierdas! Apunte en el calendario y acompáñenos en los eventos importantes
  "
      buttonLink="/unete"
      buttonText="EVENTOS"
      image={EventosCardImage}
    />
    <TextRightTab
      headerText="Eventos
  "
      subheadingText="¡No te lo pierdas! Apunte en el calendario y acompáñenos en los eventos importantes
  "
      buttonLink="/unete"
      buttonText="EVENTOS"
      image={EventosCardImage}
    />
  </div>
  );
};

export default HomeTab;
