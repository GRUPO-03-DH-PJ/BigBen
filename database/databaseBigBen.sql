/* código SQL para criação do banco de dados BigBen */

CREATE DATABASE bigben;

USE bigben;


CREATE TABLE Produto (
    IdProduto INT PRIMARY KEY AUTO_INCREMENT,
    NomeProduto VARCHAR(100) NOT NULL,
    DescricaoProduto TEXT,
    PrecoProduto DECIMAL(10,2) NOT NULL,
    ImagemProduto VARCHAR(255),
    QuantidadeEstoque INT NOT NULL,
    FOREIGN KEY (IdCategoria) REFERENCES Categoria(IdCategoria),
    INDEX (IdCategoria)
);

CREATE TABLE Cliente (
    IdCliente INT PRIMARY KEY AUTO_INCREMENT,
    NomeCliente VARCHAR(100) NOT NULL,
    EmailCliente VARCHAR(100) NOT NULL UNIQUE,
    Celular VARCHAR(20),
    TelefoneCliente VARCHAR(20),
    CPF VARCHAR(20) NOT NULL UNIQUE,
    EnderecoCliente VARCHAR(255) NOT NULL,
    Numero INT NOT NULL,
    Complemento VARCHAR(100),
    Cidade VARCHAR(255) NOT NULL,
    Estado CHAR(2) NOT NULL,
    CEP CHAR(10) NOT NULL,
    Genero VARCHAR(20),
    Senha varchar(200),
    INDEX (CPF)
);

CREATE TABLE Pedido (
    IdPedido INT PRIMARY KEY AUTO_INCREMENT,
    DataPedido DATE NOT NULL,
    HoraPedido TIME NOT NULL,
    NumeroPedido INT NOT NULL UNIQUE,
    PrecoTotal DECIMAL(10,2) NOT NULL,
    EnderecoEntrega VARCHAR(255) NOT NULL,
    FormaPagamento VARCHAR(100) NOT NULL,
    IdCliente INT NOT NULL,
    FOREIGN KEY (IdCliente) REFERENCES Cliente(IdCliente),
    INDEX (IdCliente)
);



CREATE TABLE Carrinho (
    IdCarrinho INT PRIMARY KEY AUTO_INCREMENT,
    IdCliente INT NOT NULL,
    Total DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (IdCliente) REFERENCES Cliente(IdCliente),
    INDEX (IdCliente)
);

CREATE TABLE bigben.pagamento (
  IdPagamento INT AUTO_INCREMENT PRIMARY KEY,
  numero_cartao VARCHAR(16),
  validade DATE,
  cvv VARCHAR(3),
  tipo_pagamento VARCHAR(10),
  link_boleto VARCHAR(255),
  link_pix VARCHAR(255),
  IdPedido INT,
  IdCliente INT NOT NULL,
  valor_total decimal(10,2) not null,
  FOREIGN KEY (IdPedido) REFERENCES bigben.pedido (IdPedido),
  FOREIGN KEY (IdCliente) REFERENCES bigben.cliente (IdCliente)
);

/* código SQL para criar senha para o usuário root no banco de dados BigBen */

ALTER USER 'root'@'localhost' IDENTIFIED BY 'dh_grupo3_pi';
