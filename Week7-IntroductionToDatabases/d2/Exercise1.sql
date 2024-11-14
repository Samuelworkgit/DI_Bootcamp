CREATE TABLE items(
id varchar PRIMARY KEY,
item_name TEXT,
price REAL);

CREATE TABLE customers(
id varchar PRIMARY KEY,
first_name TEXT,
last_name TEXT);

INSERT INTO items (id, item_name, price) 
VALUES 
    ('1', 'Small Desk', 100.00),
    ('2', 'Large Desk', 300.00),
    ('3', 'Fan', 80.00);


INSERT INTO customers (id, first_name, last_name) 
VALUES 
    ('1', 'Greg', 'Jones'),
    ('2', 'Sandra', 'Jones'),
    ('3', 'scott', 'Scott'),
    ('4', 'Trevor', 'Green'),
    ('5', 'Melanie', 'Johnson');


Select * from items

Select * from items where price>80;

Select * from items where price<300;

Select * from customers where last_name='Smith'

Select * from customers where last_name='Jones'

Select * from customers where last_name<>'Jones'