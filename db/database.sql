-- CREATE USER 'telemetria'@'localhost' IDENTIFIED BY 'Baja@2016';
-- GRANT ALL PRIVILEGES ON * . * TO 'telemetria'@'localhost';

# TIME aaaa mm dd hh mm ss cc
# TIME ANO MES DIA HORA MINUTO SEGUNDO CENTESIMO

DROP SCHEMA IF EXISTS telemetria;
CREATE SCHEMA telemetria;
USE telemetria;

CREATE TABLE estado(
    time DATETIME NOT NULL
);

CREATE TABLE velocidade(
    velocidade INT NOT NULL,
    time DATETIME NOT NULL
);

CREATE TABLE rpm(
    rpm INT NOT NULL,
    time DATETIME NOT NULL
);

CREATE TABLE temperatura_motor(
    temperatura INT NOT NULL,
    time DATETIME NOT NULL
);

CREATE TABLE temperatura_cvt(
    temperatura INT NOT NULL,
    time DATETIME NOT NULL
);

CREATE TABLE bateria(
    tensao FLOAT NOT NULL,
    time DATETIME NOT NULL
);

CREATE TABLE combustivel(
    combustivel INT NOT NULL,
    time DATETIME NOT NULL
);

CREATE TABLE forcas_piloto(
    x INT NOT NULL,
    y INT NOT NULL,
    z INT NOT NULL,
    time BIGINT NOT NULL
);

CREATE TABLE forcas_suspencao(
    x1 INT NOT NULL,
    y1 INT NOT NULL,
    z1 INT NOT NULL,

    x2 INT NOT NULL,
    y2 INT NOT NULL,
    z2 INT NOT NULL,

    x3 INT NOT NULL,
    y3 INT NOT NULL,
    z3 INT NOT NULL,

    x4 INT NOT NULL,
    y4 INT NOT NULL,
    z4 INT NOT NULL,

    time BIGINT NOT NULL
);
