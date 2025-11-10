create database loginSistema;
use loginSistema;
drop database loginSistema;

create table usuario(
id_user int primary key auto_increment,
nome varchar(250),
email varchar(300) unique,
senha varchar (250)
);

--- para adm adicione tem que ser o primeiro id

// adm na senha
// adm@gmail.com