import Analog from "./Analog";
import Kidswatch from "./Kidswatch";
import Smart from "./Smart";

export default function Watchmain() {
  return (
    <div>
      <h1>Watch section</h1>
      <Analog />
      <Kidswatch />
      <Smart />
    </div>
  );
}
