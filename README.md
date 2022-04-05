# oneOfOneT_shirts

# Setup

1.) Install Dependencies: argon2, mysql, notenv, express, jsonwebtoken, nodemon. 

2.) Create a .env file. Include credentials used to set up a connection in MySQL workbench. 

# Initialize.sql

Create a schema called oneOfOne in MySQL workbench. Take the initialize.sql data and upload it to your MySQL schema. 

# Tables

The first table in our database is the user_info table. This contains a users email, password, and id. The primary key is user_id. 

The second table in our database is the order_details table. This contains an order_num, user_id, shirt_id, order_date, and total_amount. 
The primary key is order_num and the foreign keys are user_id and shirt_id.

The third table is the order_items table. This contains shirt_id, shirt_name, shirt_quantity, and shirt_price. The primary key is shirt_id. 

