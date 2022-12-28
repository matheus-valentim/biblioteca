import "../App.scss";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Hero from "./Pesquisa/hero";
import { Context } from "../contexts/context";
import { useContext } from "react";

import Livro from "./Livro/Livro";
export default function Home() {
	const {
		livros,
		setLivroAtual,
		setOpenModalLivro,
		openModalLivro,
		setCurrentPage,
	} = useContext(Context);

	useEffect(() => {
		const intersectionObserver = new IntersectionObserver((entries) => {
			if (entries.some((entry) => entry.isIntersecting)) {
				setCurrentPage((currentValue) => currentValue + 1);
			}
		});
		intersectionObserver.observe(document.querySelector("#sentinela"));
		return () => intersectionObserver.disconnect();
	}, []);

	return (
		<div className="App">
			{openModalLivro ? <Livro /> : null}
			<Hero />
			<main className="main-container">
				{livros
					? livros.map((livro) => {
							return (
								<article className="main">
									<section className="main-container">
										<img
											className="main-tumb"
											src={
												livro.volumeInfo.imageLinks
													? livro.volumeInfo.imageLinks.thumbnail
													: "https://via.placeholder.com/150"
											}
										/>
										<article className="main-conteudo">
											<p className="main-conteudo-p p-bold">
												{livro.volumeInfo.title}
											</p>
											<p className="main-conteudo-p p-normal">
												{livro.searchInfo
													? livro.searchInfo.textSnippet
													: "não possui descricao breve"}
											</p>
											<button
												className="main-button"
												onClick={(e) => {
													setLivroAtual(livro);
													setOpenModalLivro(true);
												}}
											>
												Ver completo
											</button>
										</article>
									</section>
								</article>
							);
					  })
					: "Procure um livro!!"}
			</main>
			<div id="sentinela"></div>
		</div>
	);
}
