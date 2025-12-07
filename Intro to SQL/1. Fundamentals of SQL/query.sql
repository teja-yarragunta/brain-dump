-- select all rows from cars table
-- SELECT * from cars;

-- SELECT DISTINCT * FROM cars;



-- Selecting columns
/*
	Select the brand, model and price from the cars table
*/
-- SELECT brand, model, price FROM cars;
-- SELECT brand, model, price, year FROM cars;



-- Selecting rows based on condition with WHERE
/*
	Select the brand, model, color and price from cars
		where the color is black
*/
-- SELECT brand, model, color, price FROM cars
--     WHERE color = 'black';

/*
	Select the brand, model, condition and price from cars
		where the condition equals 0
*/
-- SELECT brand, model, condition, price FROM cars
-- 	WHERE condition = 0;



-- numerical filtering
/*
	Select the brand, model, condition and price from cars
		find results where the condition is greater than 3
*/
-- SELECT brand, model, condition, price FROM cars
-- 	WHERE condition > 3;

/*
	Select the brand, model, condition and price from cars
		find results where the price is less than $50,000
*/
-- SELECT brand, model, condition, price FROM cars
-- 	WHERE price < 50000;



-- not equal
/*
	Filter out cars from 1965 (do not display the cars from that year)
		Select the brand, model, year and price
*/
-- SELECT brand, model, year, price FROM cars
-- 	WHERE year != 1965;
-- <> this also means not equal to
-- SELECT brand, model, year, price FROM cars
-- 	WHERE year <> 1965;

/*
	Find cars which are not yellow
		Select the brand, model, price and color
*/
-- SELECT brand, model, price, color FROM cars
-- 	WHERE color != 'yellow';



-- partial matching, LIKE
-- % - any number of characters
-- _ one of any character
-- %green% - this matches light-green, greenish-yellow, anything including green
-- _-Type matches X-Type Any-Type Z-Type
/*
	Select the brand, model, color and year
		find any car where the color includes 'green' and also not includes
*/
-- SELECT brand, model, color, year FROM cars
-- 	WHERE color LIKE '%green%';

-- SELECT brand, model, color, year FROM cars
-- 	WHERE color NOT LIKE '%green%';
/*
	Select the brand, model, color and year for cars
		where the model is 'DB' followed by any other single character
*/
-- SELECT brand, model, color, year FROM cars
-- 	WHERE model LIKE 'DB_';



-- AND
/*
	Select the brand, model, color and year from cars
		exclude any green car
		show models which are 'DB' followed by any other single character
		and the year is after 1964
*/
-- SELECT brand, model, color, year FROM cars
-- 	WHERE color NOT LIKE '%green%'
-- 	AND model LIKE 'DB_'
-- 	AND year > 1964;
/*
	Select the brand, model, year, condition and price from cars
		where the condition is 3 or higher
		and the year is before 1970
		and the price is below 100,000
*/
-- SELECT brand, model, year, condition, price FROM cars
-- 	WHERE condition >= 3
-- 	AND year < 1970
-- 	AND price <= 100000;



-- BETWEEN
/*
	Select cars made between 1980 and 1989
		show the brand, model, year and price
*/
-- SELECT brand, model, year, price FROM cars
-- 	WHERE year >= 1980
-- 	AND year <= 1989;

-- using between
-- SELECT brand, model, year, price FROM cars
-- 	WHERE year BETWEEN 1980 AND 1989; 
/*
	Select brand, model, condition, color and price from cars
		where the price is between $20,000 and $60,000
		and the condition is between 1 and 3
		and the color contains red
*/
-- SELECT brand, model, condition, color, price FROM cars
-- 	WHERE price BETWEEN 20000 AND 60000
-- 	AND condition BETWEEN 1 AND 3
-- 	AND color LIKE '%red%'



-- OR
/*
	Find the brand, model, condition and price of cars
		where the price is less than $250,000
		or the brand is Porsche
*/
-- SELECT brand, model, condition, price FROM cars
-- 	WHERE price < 250000 
-- 	OR brand = 'Porsche'

/*
	Find the brand, model, condition and price of cars
		where the price is less than $250,000
		or the brand is Porsche,
		only show cars with condition > 3
		(brackets are imp here)
*/ 
-- SELECT brand, model, condition, price FROM cars
-- 	WHERE (price < 250000
-- 	OR brand = 'Porsche')
-- 	AND condition > 3;

/*
	Search for brand, model, color, year, price, sold of cars
		where the color is a shade of red
		or the year is between 1960 and 1969
		and sold is false
*/
-- SELECT brand, model, color, year, price, sold FROM cars
-- 	WHERE (color LIKE '%red%' 
-- 	OR year BETWEEN 1960 AND 1969)
-- 	AND sold IS FALSE;

-- SELECT brand, model, color, year, price, sold FROM cars
-- 	WHERE (color LIKE '%red%' 
-- 	OR year BETWEEN 1960 AND 1969)
	-- AND sold = false; (can be FALSE also)
-- (there might be some edge cases when using '=', so for strings and numbers use '=', and for booleans and null values, use IS)



-- IN
/*
	Select the brand, model, price and sold columns from cars
		the brand can be 'Ford', 'Chevorlet' or 'Ferrari'
		sold must be false
*/
-- SELECT brand, model, price, sold FROM cars
-- 	WHERE brand IN ('Ford', 'Chevrolet', 'Ferrari')
-- 	AND sold IS FALSE;

/*
	Select the brand, model, condition and year from cars
		Where the year is 1961, 1963, 1965, 1967 or 1969
		and the condition is 3 or higher
		and sold is false
*/
-- SELECT brand, model, condition, year FROM cars
-- 	WHERE year IN (1961, 1963, 1965, 1967, 1969)
-- 	AND condition >= 3
-- 	AND sold IS FALSE;

/*
	Select brand, model, price and sold from cars
		filter out any cars which are sold
		show cars where the brand is none of ('Ford', 'Triumph', 'Chevrolet', 'Dodge')
		or the price is less than $50000
*/
-- SELECT brand, model, price, sold FROM cars
-- 	WHERE (
-- 		brand NOT IN ('Ford', 'Triumph', 'Chevrolet', 'Dodge') 
-- 		OR price < 50000
-- 	)
-- 	AND sold IS FALSE;



-- challenges
/*
	Select brand, model, and color from cars
		where the color is 'red'
		and the brand is not 'Ferrari'
		and the car has not been sold
*/
-- SELECT brand, model, color FROM cars
-- 	WHERE color LIKE '%red%'
-- 	-- AND brand NOT LIKE 'Ferrari'
-- 	AND brand != 'Ferrari'
-- 	AND sold IS FALSE;

/*
	Select brand, model, and color from cars
		where the color is not red, blue, or white
		and the brand is none of: Aston Martin, Bentley or Jaguar
		and sold is false
*/ 
-- SELECT brand, model, color FROM cars
-- 	WHERE color NOT IN('red', 'blue', 'white')
-- 	AND brand NOT IN('Aston Martin', 'Bentley', 'Jaguar')
-- 	AND sold IS FALSE

/*
	Select brand, model, year, sold from cars
		where the brand is 'Dodge' and year is in the 60s
		or the brand is either 'Ford' or 'Triumph' and the car is from the 70s
		only select cars where sold is not true
*/
SELECT brand, model, year, sold FROM cars
	WHERE ((brand = 'Dodge' AND year BETWEEN 1960 AND 1969)
	OR (brand IN('Ford', 'Triumph') AND year BETWEEN 1970 AND 1979))
	AND sold IS NOT TRUE;