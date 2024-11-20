import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Tarefas from './pages/Tarefas'
import PageBase from './pages/PaginaBase'
import AdicionarTarefas from './pages/Adicionartarefas'


function AppRoutes() {
    const [tarefas, setTarefas] = useState([]);

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <PageBase /> }>
                    <Route index element={ <AdicionarTarefas  setTarefas={setTarefas}/> }></Route>
                    <Route path="/tarefas" element={ <Tarefas tarefas={tarefas}/> }></Route>

                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes