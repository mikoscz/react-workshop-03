import { useNavigate } from "react-router-dom";

export const ShipmentData = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    return navigate("/summary", { state: data });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          First name:
          <input type="text" name="firstName" />
        </label>
        <label>
          Last name:
          <input type="text" name="lastName" />
        </label>
        <label>
          Address:
          <input type="text" name="address" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
