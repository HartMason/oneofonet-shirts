CREATE TABLE user_info (
    user_id INT NOT NULL AUTO_INCREMENT,
    user_email VARCHAR(50),
    user_password VARCHAR(50),
    PRIMARY KEY (user_id)
);


CREATE TABLE order_items (
    shirt_id VARCHAR (50),
    shirt_name VARCHAR (50),
    shirt_quantity VARCHAR (50),
    shirt_price VARCHAR (50),
    PRIMARY KEY (shirt_id)
)

CREATE TABLE order_details (
    order_num INT NOT NULL AUTO_INCREMENT,
    shirt_id VARCHAR (50) NOT NULL,
    order_date timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    total_amount VARCHAR (50),
    user_id INT NOT NULL,
    PRIMARY KEY (order_num),
    FOREIGN KEY (shirt_id)
    FOREIGN KEY (user_id)
    REFRENCES order_items(shirt_id)
)



INSERT INTO user_info (user_email, user_password) 
    VALUES ("example@gmail.com", "password54321"),
    ("jason@gmail.com", "password654321"),
    ("example@gmail.com", "password54321"),
    ("example@gmail.com", "password54321")



INSERT INTO order_items (shirt_id, shirt_name, shirt_price, shirt_quantity)
    VALUES ("2", "moonShirt", "20.99", "7"),
    ("3", "campingShirt", "20.99", "4"),
    ("2", "animalShirt", "20.99", "10"),
    ("2", "dragonShirt", "20.99", "2")



INSERT INTO order_details (shirt_id, total_amount, user_id)
    VALUES ("45", "20.99", "1"),
    ("45", "20.99", "2"),
    ("33", "20.99", "3"),
    ("23", "20.99", "4"),
    ("55", "20.99", "5")
