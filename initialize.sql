CREATE TABLE user info (
    user_id INT NOT NULL AUTO_INCREMENT,
    user_email VARCHAR(50),
    user_password VARCHAR(50),
    PRIMARY KEY (id)
);

CREATE TABLE order details (
    order_num INT NOT NULL AUTO_INCREMENT,
    shirt_id VARCHAR (50),
    order_date VARCHAR (50),
    total_amount VARCHAR (50),
    user_email VARCHAR (50),
    PRIMARY KEY (order_num),
    FOREIGN KEY (shirt_id)
)

CREATE TABLE order items (
    shirt_id VARCHAR (50),
    shirt_name VARCHAR (50),
    shirt_quantity VARCHAR (50),
    shirt_price VARCHAR (50),
    PRIMARY KEY (shirt_id)
)

