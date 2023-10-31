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

INSERT INTO product (name, price, quantity, category_id, users_id) VALUES
('Hoverboard de Marty McFly', 999.99, 5, 1, 1),
('Sonic Screwdriver', 49.99, 10, 5, 1),
('Épée Laser Star Wars', 299.99, 7, 5, 1),
('Dalek Aspirateur', 199.99, 8, 9, 1),
('Time-Turner', 29.99, 20, 5, 1),
('TARDIS Réfrigérateur', 499.99, 2, 6, 1),
('Dispositif de Traduction Universelle', 119.99, 15, 1, 1),
('Capsules de Capsule Corp.', 5.99, 100, 3, 1),
('Wand de Harry Potter', 89.99, 12, 5, 1),
('Plasma Rifle (Juste un modèle!)', 199.99, 5, 9, 1);

