import { useEffect, useRef, useState } from "react";
// MutableRef
export function MutableRef() {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef<number | null>(null);

  const stopTimer = () => {
    if (intervalRef.current) window.clearInterval(intervalRef.current);
  };
  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
    return () => {
      stopTimer();
    };
  }, []);
  return <div>MutableRef</div>;
}
//Immutable
function DomRef() {
  const inputRef = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
}
export default DomRef;
