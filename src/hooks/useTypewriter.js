import { useEffect, useState } from "react";

export default function useTypewriter(
  words = [],
  { typingSpeed = 80, deletingSpeed = 40, pause = 1400 } = {}
) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!words.length) return;

    const currentWord = words[wordIndex % words.length];

    if (!isDeleting && text === currentWord) {
      const pauseId = setTimeout(() => setIsDeleting(true), pause);
      return () => clearTimeout(pauseId);
    }

    if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const nextLength = text.length + (isDeleting ? -1 : 1);
    const nextText = currentWord.substring(0, nextLength);
    const timeout = isDeleting ? deletingSpeed : typingSpeed;

    const timeoutId = setTimeout(() => setText(nextText), timeout);
    return () => clearTimeout(timeoutId);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pause]);

  return text;
}
