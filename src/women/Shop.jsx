import { useNavigate } from "react-router-dom";

export default function Shop() {
  const navigate = useNavigate(); // Hook for navigation

  const handleClick = () => {
    navigate(-1);
  };
  return (
    <div>
      <h1>you can shop now</h1>
      <button onClick={handleClick}>go back</button>
    </div>
  );
}
