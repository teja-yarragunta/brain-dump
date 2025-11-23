-- manipulating

-- read
-- SELECT id, brand, color, price, year from cars;



-- INSERT INTO cars (
-- 	brand, model, year, price, color, condition, sold
-- ) VALUES (
-- 	'Ford', 'Escort RS2000', 1978, 39000, 'blue', 4, FALSE
-- ), (
-- 	'Aston Martin', 'V8 Vantage', 1977, 145000, 'dark green', 5, FALSE
-- ); 



/*
	Set the sold column to true for the Ford Escort RS2000
*/
-- UPDATE cars SET
-- 	sold = TRUE
-- WHERE brand = 'Ford'
-- 	AND model = 'Escort RS2000';

/*
	Update the record for the Aston Martin DB4 with ID 14
		set the condition to 5
		and the price to 465000
*/

-- UPDATE cars SET 
--     condition = 5,
--     price = 465000
--     WHERE id = 14;

/*
	Set the condition to 1
		and the price to $10,000
	where the car's brand is Porsche
		and sold is false
*/
-- UPDATE cars SET
-- 	condition = 1,
-- 	price = 10000
-- WHERE
-- 	brand = 'Porsche'
-- 	AND sold IS FALSE; 



-- DELETE
/*
	Delete from the cars table, any record where
		condition is 0
*/
-- DELETE FROM cars
-- 	WHERE condition = 0;



/*
	Delete any record from the cars table where sold is TRUE
*/

-- DELETE FROM cars
-- 	WHERE sold IS TRUE;