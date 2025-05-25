import { useEffect, useState } from "react";
import api from "../api/api";
import { useNavigate } from "react-router-dom";
import Comentarios from "../components/Comentario";


type Filme = {
    id: number;
    titulo: string;
    descricao: string;
    data_lancamento: string;
    categoria: string;
    imagem?: string;
    curtidas: number;
    curtido: boolean;
}

export default function Filmes() {
    const [filmes, setFilmes] = useState<Filme[]>([]);
    const [erro, setErro] = useState("");
    const [categoriaFiltro, setCategoriaFiltro] = useState("");
    const [ordenarPor, setOrdenarPor] = useState("");
    const navigate = useNavigate();

    const carregarFilmes  =  async () => {
        try {
            const params: any = {};
            if (categoriaFiltro) params.categoria = categoriaFiltro;
            if (ordenarPor) params.ordenar = ordenarPor;


            const response = await api.get<Filme[]>("/filmes", {params});
            setFilmes(response.data);
        } catch {
            setErro("Erro ao carregar filmes")
        }
    };

    const excluirFilme = async (id: number) => {
        if (!confirm("Tem certeza que deseja excluir este filme?")) return;
        try {
            await api.delete(`/filmes/${id}/`);
            carregarFilmes();
        } catch(error) {
            alert("Erro ao excluir o filme.")
        }
    }
    
    const curtirFilme = async (id: number) => {
        try {
            await api.post(`/filmes/${id}/curtir/`);
            carregarFilmes();
        } catch {
            alert("Erro ao curtir o filme")
        }
    }

    useEffect(() => {
        carregarFilmes();
    }, []);

    return (
        <div className="max-w-4x1 mx-auto p-6">
            <h2 className="text-2x1 font-bold mb-6 text-center" >🎬 Lista de Filmes</h2>

            {erro && <p className="text-red-500 text-center">{erro}</p>}

            {/* Filtros */}
            <div className="flex flex-col sm:flex-row justify-center items-center  gap-4 mb-6 ">
                <div>
                    <label htmlFor="ordenar" className="mr-2 font-medium">
                        Ordenar por:
                    </label>
                    <select 
                        id="ordenar"
                        value={ordenarPor}
                        onChange={(e) => setOrdenarPor(e.target.value)}
                        className="border rounded px-2 py-1"
                    >
                        <option value="">Padrão</option>
                        <option value="curtidas">Mais curtidas</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="categoria" className="mr-2 font-medium">
                        Categoria: 
                    </label>
                    <select 
                        id="categoria"
                        value={categoriaFiltro}
                        onChange={(e) => setCategoriaFiltro(e.target.value)}
                        className="border rounded px-2 py-1"
                    >
                        <option value="">Todas</option>
                        <option value="ação">Ação</option>
                        <option value="ficção">Ficção</option>
                        <option value="drama">Drama</option>
                        <option value="comédia">Comédia</option>
                        <option value="aventura">Aventura</option>
                    </select>
                </div>
                <button onClick={carregarFilmes} className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700">
                    Aplicar
                </button>
            </div>

            { /* Botão cadastrar */ }
            <div className="text-center mb-6">
                <button onClick={() => navigate("/cadastrar")} className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
                    Cadastrar Novo Filme
                </button>
            </div>

            {/* Lista de filme */}
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 ">
                {filmes.map((filme) =>(
                    <li
                        key={filme.id}
                        className="bg-white shadow-lg rounded-x1 p-4 border border-gray-400 rounded flex flex-col"
                    >
                        {filme.imagem && (
                            <img 
                                src={filme.imagem} 
                                alt={filme.titulo}
                                className="w-full h-90 object-cover rounded mb-4"
                            />
                        )}
                        <h3 className="text-lg font-bold text-gray-800 mb-1">{filme.titulo}</h3>
                        <span className="text-sm text-gray-500 italic mb-2">
                            {filme.categoria} • {filme.data_lancamento}
                        </span>
                        <p className="text-gray-700 text-sm mb-4 flex-grow">{filme.descricao}</p>

                        <div className="flex items-center justify-between mt-auto">
                            <button
                                onClick={() => curtirFilme(filme.id)}
                                className="text-3xl focus:outline-none px-3 cursor-pointer"
                            >
                                <span className={filme.curtido ? "text-red-600" : "text-gray-400"}>
                                ♥  
                                </span>
                            </button>
                            <div className="flex gap-2">
                                <button 
                                    onClick={() => navigate(`/editar/${filme.id}`)}
                                    className="bg-gray-400 text-white px-4 py-1 rounded cursor-pointer hover:bg-yellow-300"
                                >
                                    Editar
                                </button>
                                <button
                                    onClick={() => excluirFilme(filme.id)}
                                    className="bg-red-600 text-white px-4 py-1 rounded cursor-pointer hover:bg-red-700"
                                >
                                    Excluir
                                </button>
                            </div>
                        </div> 
                        <div className="mt-4 cursor-pointer">
                            <Comentarios filmeId={filme.id}/>
                        </div>  
                    </li>
                ))}
            </ul>
        </div>
    );


}