import "./hero.scss";
import { Context } from "../../contexts/context";
import { useContext } from "react";
import axios from "axios";
import { useEffect } from "react";
export default function Hero() {
	const { livro, setLivro, setLoading, setLivros, currentPage, livros } =
		useContext(Context);
	async function novoLivro() {
		setLoading(true);
		try {
			const response = await axios.get(
				`https://www.googleapis.com/books/v1/volumes?q=${livro}&maxResults=20&startIndex=${currentPage}`
			);
			setLivros((antigo) => [...response.data.items]);
			console.log(response);
		} catch (error) {
			console.error(error);
		}
		setLoading(false);
	}
	async function getLivros() {
		setLoading(true);
		try {
			const response = await axios.get(
				`https://www.googleapis.com/books/v1/volumes?q=${livro}&maxResults=20&startIndex=${currentPage}`
			);
			setLivros((antigo) => [...antigo, ...response.data.items]);
		} catch (error) {
			console.error(error);
		}
		setLoading(false);
	}
	useEffect(() => {
		getLivros();
	}, [currentPage]);
	return (
		<article className="main-hero">
			<form
				className="container-hero"
				onSubmit={(e) => {
					e.preventDefault();
					novoLivro();
				}}
			>
				<input
					className="input-hero"
					type="text"
					placeholder="Procure um livro..."
					onChange={(e) => {
						setLivro(e.target.value.trim());
					}}
				/>
				<button className="button-hero">Procurar</button>
			</form>
		</article>
	);
}
