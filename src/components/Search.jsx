import React from "react";
import styled from "styled-components";
// import "../components/search.css";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
  };
  return (
    <FormStyle onSubmit={submitHandler}>
      <FaSearch />
      <input
        onChange={(e) => setInput(e.target.value)}
        type="text"
        value={input}
      />
    </FormStyle>
  );
}

const FormStyle = styled.form`
  position: relative;
  display: flex;
  flex: 0.7;
  justify-content: center;
  align-items: center;
  padding: 20px;
  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    border: none;
    border-radius: 1rem;
    outline: none;
    width: 70%;
  }
  svg {
    position: relative;
    left: 30px;
    color: white;
    font-size: 1rem;
  }
`;

export default Search;
