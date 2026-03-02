import { useEffect, useState } from 'react';

interface StreamingTextProps {
  text: string;
  speed?: number;
  onDone?: () => void;
}

export const StreamingText = ({ text, speed = 40, onDone }: StreamingTextProps) => {
  const [visible, setVisible] = useState('');

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      i++;
      setVisible(text.slice(0, i));

      if (i >= text.length) {
        clearInterval(interval);
        onDone?.();
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text]);

  return <>{visible}</>;
};