-- SELECT * FROM sold_cars;

-- JOINS


-- LEFT JOIN
/*
	Select the brand, model, price, sold, sold_price columns
		from sold_cars
	Left join with cars
		matching sold_cars.cars_id to cars.id
*/
-- SELECT brand, model, price, sold, sold_price FROM sold_cars
--     LEFT JOIN cars ON sold_cars.cars_id = cars.id;

-- SELECT brand, model, price, sold, sold_price FROM sold_cars sc
--     LEFT JOIN cars c ON sc.cars_id = c.id;


/*
	Select name, role, city, state
		From the staff table
	Left join with the dealerships table where the dealership_id in staff
			matches with the id in dealerships
*/
-- SELECT name, role, city, state FROM staff 
--     LEFT JOIN dealerships d ON dealership_id=d.id


-- RIGHT JOIN
/*
	Select the brand, model, price, sold, sold_price columns
		from sold_cars
	Right join with cars
		matching sold_cars.cars_id to cars.id
*/
-- SELECT brand, model, price, sold, sold_price 
--   FROM sold_cars SC
--   RIGHT JOIN cars C ON SC.cars_id = C.id;



