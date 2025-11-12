import conection from "./conection.js";

export async function inserirUsuario(novoUsuario) {
    const comando = `
        insert into usuario (nome, email, senha)
        values
        (?,?,MD5(?))
    `
    const [registros] = await conection.query(comando, [
        novoUsuario.nome,
        novoUsuario.email,
        novoUsuario.senha
    ]
    )
    return registros.insertId;
}

export async function VerificarUsuario(email, senha) {
    const comando = `
        select id_user, nome, email
        from usuario
        where email = ? AND senha = MD5(?)
    `
    const [registros] = await conection.query(comando, [email, senha]);

    if (registros.length === 0) {
        return null;
    }
    return registros[0];
}

  
export async function inserirAdmin(admin) {
    const comando = `
      INSERT INTO adm (nome, email, senha)
      VALUES (?, ?, MD5(?))
    `;
    const [resposta] = await conection.query(comando, [admin.nome, admin.email, admin.senha]);
    return resposta.insertId;
  }
  

  export async function VerificarAdmin(email, senha) {
    const comando = `
      SELECT id_adm, nome, email
      FROM adm
      WHERE email = ? AND senha = MD5(?)
    `;
    const [linhas] = await conection.query(comando, [email, senha]);
    return linhas[0];
  }