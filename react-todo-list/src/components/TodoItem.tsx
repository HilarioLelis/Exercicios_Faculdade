import React from 'react';

// Tipagem das props do componente
type Props = {
  tarefa: {
    id: number;
    texto: string;
    concluida: boolean;
  };
  aoClicar: () => void;
};

// Componente que representa um item da lista
function TodoItem({ tarefa, aoClicar }: Props) {
  return (
    <li
      onClick={aoClicar}
      style={{
        textDecoration: tarefa.concluida ? 'line-through' : 'none',
        cursor: 'pointer',
      }}
    >
      {tarefa.texto}
    </li>
  );
}

export default TodoItem;
