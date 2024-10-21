-- Tabela para armazenar informações dos proprietários dos animais
CREATE TABLE Proprietarios (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    telefone VARCHAR(20),
    email VARCHAR(100)
);

-- Tabela para armazenar informações dos animais
CREATE TABLE Animais (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    especie VARCHAR(50) NOT NULL,
    raca VARCHAR(50),
    idade INT,
    sexo CHAR(1),
    proprietario_id INT,
    FOREIGN KEY (proprietario_id) REFERENCES Proprietarios(id)
);

-- Tabela para armazenar informações dos veterinários
CREATE TABLE Veterinarios (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    especialidade VARCHAR(100)
);

-- Tabela para armazenar informações das internações
CREATE TABLE Internacoes (
    id SERIAL PRIMARY KEY,
    animal_id INT,
    veterinario_id INT,
    data_internacao DATE NOT NULL,
    data_alta DATE,
    status VARCHAR(20),
    motivo TEXT,
    FOREIGN KEY (animal_id) REFERENCES Animais(id),
    FOREIGN KEY (veterinario_id) REFERENCES Veterinarios(id)
);

-- Tabela para armazenar informações dos tratamentos realizados durante a internação
CREATE TABLE Tratamentos (
    id SERIAL PRIMARY KEY,
    internacao_id INT,
    descricao TEXT,
    data_tratamento DATE NOT NULL,
    FOREIGN KEY (internacao_id) REFERENCES Internacoes(id)
);

-- Tabela para armazenar informações dos exames realizados nos animais
CREATE TABLE Exames (
    id SERIAL PRIMARY KEY,
    internacao_id INT,
    descricao TEXT,
    resultado TEXT,
    data_exame DATE NOT NULL,
    FOREIGN KEY (internacao_id) REFERENCES Internacoes(id)
);
