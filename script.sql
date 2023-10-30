CREATE DATABASE lastbrief;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    firstname VARCHAR(255) NOT NULL,
    lastname VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(60) NOT NULL
);

CREATE TABLE category (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE product (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    quantity INTEGER NOT NULL,
    category_id INTEGER REFERENCES category(id),
    users_id INTEGER REFERENCES users(id)
);

INSERT INTO category (name) VALUES
('Électronique'),
('Vêtements'),
('Alimentation'),
('Jeux vidéo'),
('Sport'),
('Meubles'),
('Livres'),
('Jouets'),
('Outils'),
('Santé et Beauté');
