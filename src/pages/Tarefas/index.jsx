import React, { useState, useEffect  } from 'react';
import styles from "./Tarefas.module.css";  

function Tarefas({ tarefas, onEdit, onDelete }) {
    const [editingId, setEditingId] = useState(null);
    const [completedTasks, setCompletedTasks] = useState({});

    const handleEdit = (tarefa) => {
        if (editingId === tarefa.id) {
            onEdit(tarefa);
            setEditingId(null);
        } else {
            setEditingId(tarefa.id);
        }
    }

    const handleCheckboxChange = (taskId) => {
        setCompletedTasks((prev) => ({
            ...prev,
            [taskId]: !prev[taskId], // Alterna o estado do checkbox
        }));
    }


    useEffect(() => {
        const initialCompletedTasks = {};
        tarefas.forEach(task => {
            initialCompletedTasks[task.id] = true; // Define todas as tarefas como não concluídas
        });
        setCompletedTasks(initialCompletedTasks);
    }, [tarefas]);
    return (
        <>
                {tarefas.map((task) => (
                    <div key={task.id}>
                        {editingId === task.id ? (
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    handleEdit({
                                        ...task,
                                        titulo: e.target.titulo.value,
                                        descricao: e.target.descricao.value,
                                    });
                                }}
                            >  
                            <div className={styles.container2}>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                    <input className={styles.input2} name="titulo" defaultValue={task.titulo} />
                                    <br/>
                                    <input className={styles.input2}  name="descricao" defaultValue={task.descricao} />
                                    <br/>
                                    <button className={styles.login_button2} type="submit">Salvar</button>
                            </div>
                            </form>
                        ) : (
                            <div className={styles.card}>
                                <span className={styles.title}>{task.titulo}</span>
                                <span className={styles.description}>{task.descricao}</span>
                                <div className={styles.actions}>
                                    <button className={styles.valid} onClick={() => setEditingId(task.id)}>
                                        Editar
                                    </button>
                                    <button className={styles.decline} onClick={() => onDelete(task.id)}>
                                        Excluir
                                    </button>
                                    <label className={styles.container}>
                                        <input
                                            type="checkbox"
                                            checked={completedTasks[task.id] || false} 
                                            onChange={() => handleCheckboxChange(task.id)}
                                        />
                                        <div className={styles.checkmark}></div>
                                    </label>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
        </>
    );
}

export default Tarefas;