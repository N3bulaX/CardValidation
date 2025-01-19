CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE cards (
    id INT AUTO_INCREMENT PRIMARY KEY,
    card_number VARCHAR(16) NOT NULL,
    card_type ENUM('debit', 'credit') NOT NULL,
    balance DECIMAL(10, 2) NOT NULL,
    status ENUM('valid', 'invalid') NOT NULL DEFAULT 'valid'
);
