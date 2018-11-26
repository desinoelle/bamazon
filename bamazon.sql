DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
  item_id INT NOT NULL,
  product_name VARCHAR(50) NULL,
  department_name VARCHAR(50) NULL,
  price DECIMAL(10, 2) NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (item_id)
);

-- ALL AVAILABLE PRODUCTS
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (0111, "Stunner Thigh-High Boots", "Shoes", 59.99, 5),
(0123, "Vans High-Top Sneakers", "Shoes", 39.99, 6),
(0257, "BombShell BodyCon Dress", "Apparel", 29.99, 8),
(0279, "CuddleMe Faux Fur Jacket", "Apparel", 49.99, 5),
(0456, "Boogie Nights Record Player", "Electronics", 99.99, 10),
(0412, "Samsung 55' HDTV", "Electronics", 499.99, 4),
(0835, "Boho Gal Dream Catcher", "Home Decor", 14.99, 15),
(0832, "Boho Gal Queen-Size Comforter Set", "Home Decor", 129.99, 9),
(0987, "Modern Side Table", "Furniture", 99.99, 4),
(0988, "Modern Dresser", "Furniture", 199.99, 4);

SELECT * FROM products;
