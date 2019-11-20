DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;
CREATE TABLE products (
id INTEGER(255) AUTO_INCREMENT NOT NULL,
item_id VARCHAR(255) NOT NULL,
product_name VARCHAR(255) NOT NULL,
department_name VARCHAR(255) NOT NULL,
customer_price DOUBLE(255, 2) NOT NULL,
stock_quantity INTEGER(255) NOT NULL,
PRIMARY KEY(id)
);

USE bamazon_db;
INSERT INTO products(item_id, product_name, department_name, customer_price, stock_quantity)
VALUES('11', 'Pencil', 'School Supplies', '1.99', '100');
INSERT INTO products(item_id, product_name, department_name, customer_price, stock_quantity)
VALUES('22', 'Erasor', 'School Supplies', '1.99', '25');
INSERT INTO products(item_id, product_name, department_name, customer_price, stock_quantity)
VALUES('33', 'Notebook', 'School Supplies', '4.50', '100');
INSERT INTO products(item_id, product_name, department_name, customer_price, stock_quantity)
VALUES('44', 'Backpack', 'School Supplies', '25.50', '10');
INSERT INTO products(item_id, product_name, department_name, customer_price, stock_quantity)
VALUES('55', 'Spoon', 'Kitchen Supplies', '1.99', '200');
INSERT INTO products(item_id, product_name, department_name, customer_price, stock_quantity)
VALUES('66', 'Fork', 'Kitchen Supplies', '1.99', '200');
INSERT INTO products(item_id, product_name, department_name, customer_price, stock_quantity)
VALUES('77', 'Plate', 'Kitchen Supplies', '6.99', '20');
INSERT INTO products(item_id, product_name, department_name, customer_price, stock_quantity)
VALUES('88', 'Knife', 'Kitchen Supplies', '2.00', '200');
INSERT INTO products(item_id, product_name, department_name, customer_price, stock_quantity)
VALUES('99', 'Pillow', 'Bedroom', '18.00', '50');
INSERT INTO products(item_id, product_name, department_name, customer_price, stock_quantity)
VALUES('100', 'Lamp', 'Bedroom', '20.00', '5');