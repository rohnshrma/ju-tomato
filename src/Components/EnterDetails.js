import React, { useReducer } from "react";
import { useNavigate } from "react-router-dom";

const initialState = {
  name: "",
  email: "",
  phone: "",
};

const reducerFunction = (state, action) => {
  return { ...state, [action.type]: action.value };
};

const EnterDetails = () => {
  const [state, dispatch] = useReducer(reducerFunction, initialState);

  const navigate = useNavigate();

  const handleChange = (e) => {
    dispatch({ type: e.target.name, value: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userDetails", JSON.stringify(state));
    navigate("/payment");
    console.log("Submitting", state);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Enter Your Details</h2>
      <form onSubmit={handleSubmit} className="w-50 mx-auto">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            value={state.name}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            value={state.email}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input
            type="text"
            name="phone"
            value={state.phone}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Proceed to Payment
        </button>
      </form>
    </div>
  );
};

export default EnterDetails;
