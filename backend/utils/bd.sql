CREATE DATABASE loginSistema;
USE loginSistema;
DROP DATABASE loginSistema;

CREATE TABLE usuario (
    id_user INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(250),
    email VARCHAR(300) UNIQUE,
    senha VARCHAR(250)
);

CREATE TABLE adm (
    id_adm INT PRIMARY KEY AUTO_INCREMENT,
    id_user INT,
    FOREIGN KEY (id_user) REFERENCES usuario(id_user)
);

insert into usuario (nome,email,senha)
values
("sim","s@gmail.com","cla");

-- mostra -1(ADM) --
SELECT 
    COUNT(usuario.id_user) - 1 AS total_usuarios_menos_um
FROM usuario
LEFT JOIN adm ON adm.id_user = usuario.id_user;


-- mostra tds adm e td --
SELECT COUNT(usuario.id_user) AS total_usuarios
FROM usuario
left JOIN adm ON adm.id_user = usuario.id_user;

