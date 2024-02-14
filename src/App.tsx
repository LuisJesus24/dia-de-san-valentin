import { useState } from "react";
import "./App.css";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "Quitate de aqui niño prieto",
      "Estas segura?",
      "Realmente segura?",
      "Piensalo otra vez! ",
      "ultimo intento!",
      "segura que no?",
      "Podrías arrepentirte de esto!",
      "Otra oportunidad de que lo pienses!",
      "Estas absolutamente segura?",
      "¡Esto podría ser un error!",
      "Ten corazón!",
      "No seas tan fria!",
      "Cambias de opinion?",
      "No lo reconsiderarias?",
      "Es tu respuesta final?",
      "rompes mi corazon ;(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="centered-container">      
      <div className="valentine-container">
        {yesPressed ? (
          <>
            <img src="https://gifdb.com/images/high/beso-black-and-white-rnohre8hp77by601.gif" />
            <div className="text-container">Ya sabia que si dd</div>
          </>
        ) : (
          <>
            <img
              className="h-[200px]"
              style={{ width: "400x", height: "240px" }}
              src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
            />
            <h1 className="text-container">Quieres ser mi valentin?</h1>
            <div>
              <button
                className={"yes-button"}
                style={{ fontSize: yesButtonSize }}
                onClick={() => setYesPressed(true)}
              >
                Si obio
              </button>

              <button onClick={handleNoClick} className="no-button">
                {noCount === 0 ? "Quitate de aqui niño prieto" : getNoButtonText()}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
