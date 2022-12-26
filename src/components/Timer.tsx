import { useEffect, useState, useRef } from "react";
type TimerArgs = {
  miliseconds: number;
  seconds?: number;
};
const Timer = ({ miliseconds }: TimerArgs) => {
  const [seconds, setSeconds] = useState(0);
  const ref = useRef<NodeJS.Timeout>();

  console.log(miliseconds);

  useEffect(() => {
    ref.current && clearInterval(ref.current);

    ref.current = setInterval(() => {
      setSeconds((s) => s + 1);
    }, miliseconds);
  }, [miliseconds]);

  return (
    <>
      <h4>
        Timer: <small>{seconds}</small>
      </h4>
    </>
  );
};

export default Timer;
