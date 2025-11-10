import { useEffect, useState } from "react";
import api from '../api';
import './adm.scss'
import { Link } from 'react-router';

export default function PaginaAdm() {
    const [usuarios, setUsuarios] = useState([]);

    async function carregarUsuarios() {
        try {
            const resp = await api.get("/usuarios");
            setUsuarios(resp.data);
        } catch (err) {
            alert("Erro ao carregar usuários: " + (err.response?.data?.erro || err.message));
        }
    }

    useEffect(() => {
        carregarUsuarios();
    }, []);

    return (
        <div className="PaginaAdm">
            <h1>Área do Administrador </h1>
            <h2>Lista de usuários cadastrados no sistema:</h2>

            <table >
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.length > 0 ? (
                        usuarios.map((user) => (
                            <tr key={user.id_user}>
                                <td>{user.nome}</td>
                                <td>{user.email}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td>
                                Nenhum usuário encontrado.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>

            
                <div className="botao">
                    <Link to={"/inicio"}>
                    <button>
                        ir para início
                    </button>
                    </Link>
                </div>
            


        </div>
    );
}
