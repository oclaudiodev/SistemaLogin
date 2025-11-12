import conection from "./conection.js";

export async function ContarUsuarios() {
    const comando = `
    SELECT COUNT(usuario.id_user) AS total_usuarios
    FROM usuario
    LEFT JOIN adm ON adm.id_user = usuario.id_user;
    `
    const [registros] = await conection.query(comando)
    return registros[0].total_usuarios;
}


  export async function listarUsuarios() {
    const comando = `
      select nome, email
      from usuario
      order by id_user;
    `;
    const [linhas] = await conection.query(comando);
    return linhas;
  }