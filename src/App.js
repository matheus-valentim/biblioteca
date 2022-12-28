import Home from "./componentes/Home";
import { useState } from "react";
import { Context } from "./contexts/context";
function App() {
	const [livros, setLivros] = useState("");
	const [livro, setLivro] = useState("");
	const [livroAtual, setLivroAtual] = useState("");
	const [openModalLivro, setOpenModalLivro] = useState(false);
	const [currentPage, setCurrentPage] = useState(0);
	const [loading, setLoading] = useState(false);

	return (
		<Context.Provider
			value={{
				livros,
				setLivros,
				livroAtual,
				setLivroAtual,
				openModalLivro,
				setOpenModalLivro,
				currentPage,
				setCurrentPage,
				livro,
				setLivro,
				loading,
				setLoading,
			}}
		>
			<Home />
		</Context.Provider>
	);
}

export default App;
