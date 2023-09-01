import React, { useEffect, useState } from "react";

const useTextRandomize = (
  text,
  duration = 5000,
  perCharacterDuration = true,
  onStartCallback = () => ({}),
  onFinishCallback = () => ({})
) => {
  const [displayText, setDisplayText] = useState("");
  const characters = text.split("");
  const totalCharacters = characters.length;
  const specialMathCharacters = [
    "æ", // ∀
    "ƒ", // ∂
    "~", // ∃
    "^", // ∅
    "=", // ∇
    "•", // ∈
    "§", // ∉
    "×", // ∋
    "÷", // ∏
    "φ", // ∑
  ];
  const delay = perCharacterDuration ? duration / totalCharacters : duration;

  useEffect(() => {
    let animationInterval;
    let currentIndex = 0;
    onStartCallback && onStartCallback();

    if (text) {
      animationInterval = setInterval(() => {
        let newText = "";
        for (let i = 0; i < currentIndex; i++) {
          newText += characters[i];
        }

        for (let i = currentIndex; i < totalCharacters; i++) {
          if (/^[a-zA-Z]+$/.test(characters[i])) {
            // Choose a random special math character from the array
            const randomIndex = Math.floor(
              Math.random() * specialMathCharacters.length
            );
            newText += specialMathCharacters[randomIndex];
          } else {
            newText += characters[i]; // Keep non-alphabetic characters as they are
          }
        }

        setDisplayText(newText);

        currentIndex++;

        if (currentIndex > totalCharacters) {
          onFinishCallback && onFinishCallback();
          clearInterval(animationInterval);
        }
      }, delay);
    }

    return () => {
      clearInterval(animationInterval);
    };
  }, [text, delay]);

  return displayText;
};

export default useTextRandomize;
