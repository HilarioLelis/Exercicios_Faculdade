import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

type FilmeForm = {
    titulo: string;
    descricao: string;
    categoria: string;
    data_lancamento: string;
    imagem: string;
}

export default function CadastrarFilme() {
    const [ form, setForm] = useState<FilmeForm>({
        titulo: "",
        descricao: "",
        categoria: "",
        data_lancamento: "",
        imagem: "",
    });
    const [ erro, setErro] = useState("");
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({...form, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErro("");
        console.log(form);
        try {
            await api.post("/filmes/", form);
            navigate("/filmes");
        } catch (err) {
            setErro("Erro ao cadastrar filme")
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="max-w-x1 mx-auto p-8 bg-white border border-black rounded-2xl shadow-md">
                <h2 className="text-3xl text-black font-semibold mb-6 text-center">Cadastrar Filme</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input 
                        type="url"
                        name="imagem"
                        placeholder="URL da imagem"
                        value={form.imagem}
                        onChange={handleChange}
                        required
                        className="w-full p2 text-black border border-gray-500 rounded"
                    />
                    <input 
                        type="text"
                        name="titulo"
                        placeholder="Título"
                        value={form.titulo}
                        onChange={handleChange}
                        required
                        className="w-full p2 text-black border border-gray-500 rounded"
                    />
                    <textarea 
                        name="descricao" 
                        placeholder="Descrição"
                        value={form.descricao}
                        onChange={handleChange}
                        required
                        className="w-full p2 text-black border border-gray-500 rounded"
                        rows={4}
                    />
                    <input 
                        type="text"
                        name="categoria"
                        placeholder="Categoria"
                        value={form.categoria}
                        onChange={handleChange}
                        required
                        className="w-full p2 text-black border border-gray-500 rounded"
                    />
                    <input 
                        type="text"
                        name="data_lancamento"
                        placeholder="Ano de lançamento"
                        value={form.data_lancamento}
                        onChange={handleChange}
                        required
                        className="w-full p2 text-black border border-gray-500 rounded"
                    />
                    <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-black rounded hover:bg-blue-700 transition">
                        Salvar
                    </button>
                    {erro && <p className="text-red-500 text-sm mt-2">{erro}</p>}
                </form>
            </div>
        </div>
    );


}