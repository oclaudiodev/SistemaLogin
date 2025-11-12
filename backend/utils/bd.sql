create database loginSistema;
use loginSistema;
drop database loginSistema;

create table usuario(
id_user int primary key auto_increment,
nome varchar(250),
email varchar(300) unique,
senha varchar (250)
);


CREATE TABLE adm (
    id_adm INT PRIMARY KEY AUTO_INCREMENT,
    nome varchar(200),
    email varchar(200) unique,
    senha varchar(180),
    id_user INT,
    FOREIGN KEY (id_user) REFERENCES usuario(id_user)
);