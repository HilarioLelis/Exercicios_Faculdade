import React, { useState } from "react";

type ImageCarProps = {
    src: string;
    legenda: string;
};

export function ImageCard() {
    
    const [imagens, setImagens] = useState<ImageCarProps[]>([]);
    const [src, setSrc] = useState('');
    const [legenda, setLegenda] = useState('');

    function adicionarImagem() {
        if (src === '' || legenda === '') return;
        setImagens([...imagens, {src, legenda}]);
        setSrc('');
        setLegenda('');
    };


    return (
        <div>
            <h2>Galeria de Imagens</h2>
            <div style={{marginBottom: '20px'}}>
                <input type="text" value={src} placeholder="URL da imagem" onChange={(e) => setSrc(e.target.value)} style={{marginRight: '10px'}} />
                <input type="text" value={legenda} placeholder="Legenda" onChange={(e) => setLegenda(e.target.value)} style={{marginRight: '10px'} }/>
                <button onClick={adicionarImagem}>Adicionar</button>
            </div>
            <div>
                {imagens.map((img, index) => (
                    <div key={index} style={{marginBottom: '16px'}}>
                        <img src={img.src} alt={img.legenda} style={{maxWidth: '100%', height: 'auto'}} />
                        <p>{img.legenda}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

