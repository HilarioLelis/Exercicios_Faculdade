import { useEffect, useState } from "react";
import api from "../api/api";
import type { Comentario } from "../types/types";


type Props = {
    filmeId: number;
}

export default function Comentarios({filmeId}: Props) {
    const [comentarios, setComentarios] = useState<Comentario[]>([]);
    const [novoComentario, setNovoComentario] = useState("");
    const [erro, setErro] = useState("");

    const carregarComentarios = async () => {
        try {
            const response = await api.get(`/comentarios/?filme=${filmeId}`);
            setComentarios(response.data)
        } catch {
            setErro("Erro ao carregar comentários")
        }
    }

    const enviarComentario = async () => {
        if (!novoComentario.trim()) return;

        try {
            await api.post("/comentarios/", {
                texto: novoComentario,
                filme: filmeId,
            })
            setNovoComentario("");
            carregarComentarios();
        } catch {
            setErro("Erro ao enviar comentário");
        }
    };

    useEffect(() => {
        carregarComentarios();
    }, [filmeId]);

    return (
        <div className="mt-6">
            <h4 className="text-lg font-semibold mb-2">Comentários</h4>
            {comentarios.length === 0 && <p className="text-gray-500">Nenhum comentário ainda.</p>}
            <ul className="space-y-2 mb-4">
                {comentarios.map((comentario) => (
                    <li key={comentario.id} className="bg-gray-100 p3 rounded">
                        <strong className="text-sm text-blue-700">{comentario.autor_username}</strong> 
                        <p className="text-gray-800">{comentario.texto}</p>
                    </li>
                ))}
            </ul>
            <textarea 
                value={novoComentario}
                onChange={(e) => setNovoComentario(e.target.value)}
                placeholder="Deixe seu comentário"
                rows={3}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-400"
            />
            <button onClick={enviarComentario} className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                Enviar
            </button>
            {erro && <p className="text-red-500 text-sm mt-2">{erro}</p>}
        </div>
    )
}