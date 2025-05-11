import { useState } from 'react';
import TodoItem from './TodoItem';

// Definimos o tipo de uma Tarefa usando TypeScript
type Tarefa = {
  id: number;
  texto: string;
  concluida: boolean;
};

function TodoList() {
  // Estado para armazenar o texto digitado
  const [input, setInput] = useState('');
  // Estado para armazenar a lista de tarefas
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);

  // Adiciona uma nova tarefa à lista
  const adicionarTarefa = () => {
    if (input.trim() === '') return;
    const novaTarefa: Tarefa = {
      id: Date.now(),
      texto: input,
      concluida: false,
    };
    setTarefas([...tarefas, novaTarefa]);
    setInput('');
  };

  // Alterna o status de concluída de uma tarefa
  const alternarConclusao = (id: number) => {
    setTarefas(prev =>
      prev.map(t =>
        t.id === id ? { ...t, concluida: !t.concluida } : t
      )
    );
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={e => {
          if (e.key === 'Enter') {
            adicionarTarefa();
          }
        }}
        placeholder="Digite uma tarefa"
      />
      <button onClick={adicionarTarefa}>Adicionar</button>

      <ul>
        {tarefas.map(tarefa => (
          <TodoItem
            key={tarefa.id}
            tarefa={tarefa}
            aoClicar={() => alternarConclusao(tarefa.id)}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
