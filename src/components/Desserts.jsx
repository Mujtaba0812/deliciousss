import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";
const REACT_APP_API_KEY = "65a55a31b3a54cf8b6fcff392027fb92";

function Desserts() {
	const [dessert, setDessert] = useState([]);
	useEffect(() => {
		getDessert();
	}, []);
	const getDessert = async () => {
		const api = await fetch(
			`https://api.spoonacular.com/recipes/random?apiKey=${REACT_APP_API_KEY}&number=9&tags=dessert`
		);
		const data = await api.json();
		setDessert(data.recipes);
	};
	return (
		<div>
			<Wrapper>
				<h3>Desserts</h3>
				<Splide
					options={{
						perPage: 3,
						arrows: false,
						pagination: false,
						gap: "5rem",
						drag: "free",
					}}
				>
					{dessert.map((recipe) => {
						return (
							<SplideSlide key={recipe.id}>
								<Card>
									<Link to={"/recipe/" + recipe.id}>
										<p>{recipe.title}</p>
										<img src={recipe.image} alt={recipe.title} />
										<Gradient />
									</Link>
								</Card>
							</SplideSlide>
						);
					})}
				</Splide>
			</Wrapper>
		</div>
	);
}

const Wrapper = styled.div`
	margin: 4rem 0rem;
`;
const Card = styled.div`
	min-height: 20rem;
	border-radius: 2rem;
	overflow: hidden;
	position: relative;

	img {
		border-radius: 2rem;
		position: absolute;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	p {
		position: absolute;
		z-index: 10;
		left: 50%;
		bottom: 0%;
		transform: translate(-50%, 0%);
		color: white;
		width: 100%;
		text-align: center;
		font-weight: 600;
		font-size: 1rem;
		height: 40%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

const Gradient = styled.div`
	z-index: 3;
	position: absolute;
	width: 100%;
	height: 100%;
	background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

export default Desserts;
