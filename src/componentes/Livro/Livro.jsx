import { Context } from "../../contexts/context";
import { useContext } from "react";

import "./LivroModal.css";

export default function Livro() {
	const { livroAtual, setOpenModalLivro } = useContext(Context);
	return (
		<div className="modalBackground" id="background">
			<div className="modalContainer">
				<div className="titleCloseBtn">
					<button
						onClick={() => {
							setOpenModalLivro(false);
						}}
					>
						X
					</button>
				</div>
				<h1 className="livroModal-h1">{livroAtual.volumeInfo.title}</h1>
				<div className="livroModal-container">
					<div className="livroModal-container"></div>
					<div>
						<div className="livroModal-top">
							<p>{livroAtual.volumeInfo.authors + " "}</p>
							<p>{livroAtual.volumeInfo.publishedDate}</p>
						</div>
						<p className="livroModal-descricao">
							{livroAtual.volumeInfo.description
								? livroAtual.volumeInfo.description
								: "Esse Livro não possui descrição completa."}
						</p>
					</div>

					<div className="livroModal-visual">
						{livroAtual.volumeInfo.imageLinks ? (
							<img
								className="livroModal-tumb"
								src={livroAtual.volumeInfo.imageLinks.thumbnail}
								alt=""
							/>
						) : (
							<img
								className="livroModal-tumb"
								src="https://via.placeholder.com/200"
								alt=""
							/>
						)}

						<p>{livroAtual.volumeInfo.pageCount} páginas</p>
					</div>
				</div>

				<div className="footer">
					<button
						className="footer-botao"
						onClick={() => {
							setOpenModalLivro(false);
						}}
						id="cancelBtn"
					>
						Voltar
					</button>
					<div>
						<a
							target="_blank"
							className="footer-link"
							href={livroAtual.saleInfo.buyLink}
						>
							Comprar
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
