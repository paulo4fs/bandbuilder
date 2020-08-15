### for help

\?
q to leave

### login

psql name-of-the-user

### login superuser

psql -U name-of-the-user

#### ex:

psql -U postgres

### list database

\l

### verificar tabelas do Banco de dados

\d

### to create a new database

CREATE DATABASE database_name;

### to connect to a database

\c database_name

### criar nova(s) tabela(s)

CREATE TABLE table-name (column_1 datatype, column_2 datatype, column_3 datatype);

CREATE TABLE users (
id BIGSERIAL PRIMARY KEY NOT NULL,
name VARCHAR(50) NOT NULL,
avatar VARCHAR(100) NOT NULL,
phone VARCHAR(15) UNIQUE NOT NULL,
instrument VARCHAR(20) NOT NULL
);

### datatypes

https://www.postgresql.org/docs/9.5/datatype.html

#### ex:

CREATE TABLE users (name text, age smallint, birthday date);

### inserir dados em uma linha
INSERT INTO table_name (column_1, column_2, column_3) VALUES (value_1, ’value_2’, value_3);

#### ex:
INSERT INTO users (name ,phone , instrument) VALUES (‘Andrei’, ’31’,’555513313145’);
INSERT INTO users (name, avatar ,phone , instrument) VALUES (‘Andrei’,'aaaaa', ’31’,’guitar’);

### observar nome, idade, aniversário de um db

SELECT column_1, column_2, column_3 FROM database-name;

#### ex:

SELECT name, age, birthday FROM users;

### observar todos os dados da tabela users do banco de dados

SELECT \* FROM database-name;

#### ex:

SELECT \* FROM users;

### adicionar uma coluna a tabela users

ALTER TABLE table_name ADD column datatype;

#### ex:

ALTER TABLE users ADD score smallint;

### atualizar valor em uma coluna para um usuário

UPDATE table_name SET some_column WHERE some_column=’some_value’;

#### ex:

UPDATE users SET score = 50 WHERE name=’Andrei’

### atualizar valor em uma coluna para dois usuários

UPDATE table_name SET some_column WHERE some_column=’some_value’ OR some_column=’some_value’;

#### ex:

UPDATE users SET score = 50 WHERE name=’John’ OR name=’Sally’;

### sair do banco de dados

\q
