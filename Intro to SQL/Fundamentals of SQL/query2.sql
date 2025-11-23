-- up to now we have conditionally produced result
-- now applying filters to the results


-- ORDER BY
/*
	Select the brand, model and year from the cars table
		order by the brand (brand in asc order)
		for descending DESC
		year by ASC
*/
-- SELECT brand, model, year FROM cars ORDER BY brand DESC, year;

/*
	Select the brand, model, condition and price from cars
		where the car is not sold
		and the condition is not 5
		order the table by condition in descending order
		and by price in ascending order (default is ASC)
*/
-- SELECT brand, model, condition, price FROM cars
-- 	WHERE sold IS FALSE AND condition != 5
-- 	ORDER BY condition DESC, price ASC;



-- LIMIT (no of results)
/*
	Select the brand, model, year and price from the cars table
		order the results by the price in descending order
		limit the results to 1
*/
-- SELECT brand, model, year, price FROM cars
-- 	ORDER BY price DESC
-- 	LIMIT 5;

/*
	Select the brand, model, color and price from cars
		where the color is a shade of 'red'
		and sold is false
		order by price
		limit the results to 5
*/
-- SELECT brand, model, color, price FROM cars
-- 	WHERE color LIKE '%red%'
-- 	AND sold IS FALSE
-- 	ORDER BY price
-- 	LIMIT 5;


-- aggregate functions
-- COUNT and SUM
/*
	Count the number of cars
		where sold is true
*/
-- SELECT COUNT(*) FROM cars
-- 	WHERE sold IS TRUE;
-- SELECT COUNT(model) FROM cars
-- 	WHERE sold IS TRUE;
-- SELECT COUNT(*) FROM cars
-- 	WHERE sold IS TRUE;
-- SELECT COUNT(*) AS NO_OF_CARS FROM cars
-- 	WHERE sold IS TRUE;

-- sum for across a single column
/*
	Sum the price of cars
		where sold is true
	Use the alias total_earnings in your output
*/
-- SELECT SUM(price) AS total_earnings FROM cars
-- 	WHERE sold IS TRUE



-- MIN MAX AVG
/*
	Select the maximum retail price
		where sold is true
	Use most_expensive as an alias
*/
-- SELECT MAX(price) AS most_expensive FROM cars
-- 	WHERE sold IS TRUE;

/*
	Use the AVG aggregate function to find the average price
		where the brand is Bentley
We can use FLOOR and CEIL to round the average down or up
			to the nearest whole number
*/
-- SELECT AVG(price) FROM cars
-- 	WHERE brand = 'Bentley';

-- SELECT FLOOR(AVG(price)) AS average FROM cars
-- 	WHERE brand = 'Bentley'
-- SELECT CEIL(AVG(price)) AS average FROM cars
-- 	WHERE brand = 'Bentley'

/*
	Select the average, minimum and maximum price from cars
		where sold is true
	Round the average up to the nearest whole number
		and use 'avg' as the alias for that result	
*/
-- SELECT CEIL(AVG(price)) AS avg, MIN(price), MAX(price) FROM cars
-- 	WHERE sold IS TRUE



-- GROUP BY - in order to perform complex aggregates
/*
	Select the brand, and a count of the brand from cars
		alias the count as brand_count
		group by the brand column (count for each specific brand)
*/
-- SELECT brand, COUNT(brand) AS brand_count FROM cars
-- 	GROUP BY brand;

/*
	Select the condition, and a count of the condition from cars
		group by the condition column
*/
-- SELECT condition, COUNT(condition) FROM cars
-- 	GROUP BY condition

/*
	Select:
		* the brand
		* a count of the brand
		* and an average of the price for each brand
		* round the average down to the nearest number
		* alias the average as 'AVG' in your output
	From cars where
		the car has not been sold
	Group the table by brand.
*/
-- SELECT brand, COUNT(brand), FLOOR(AVG(price)) AS AVG FROM cars
-- 	WHERE sold IS FALSE
-- 	GROUP BY brand;



-- HAVING - to allow conditions in aggregates
/*
	Select:
		* the brand
		* a count of the brand
		* and an average of the price for each brand
		* round the average down to the nearest number
		* alias the average as 'AVG' in your output
	From cars where
		the car has not been sold
	Group the table by brand.
	
	Show results where the count is > 1
*/
-- SELECT brand, COUNT(brand), FLOOR(AVG(price)) AS AVG FROM cars
-- 	WHERE sold IS FALSE 
-- 	GROUP BY brand
-- 	HAVING COUNT(brand) > 1;
-- error query below
-- SELECT brand, COUNT(brand) AS brand_count, FLOOR(AVG(price)) AS AVG FROM cars
-- 	WHERE sold IS FALSE AND brand_count > 1
-- 	GROUP BY brand
-- 	-- HAVING brand_count > 1;

/*
	Select:
		* year
		* a count of cars from that year, aliased as car_count
		* the maximum price
		* the minimum price
	from the table cars
		where the car has been sold
	group by year
		only show years where more than one car has been sold from that year
	order the result by car_count
*/
-- SELECT year,
-- 	count(year) AS car_count,
-- 	MAX(price),
-- 	MIN(price)
-- FROM cars
-- WHERE sold IS TRUE
-- GROUP BY year
-- HAVING count(year) > 1
-- ORDER BY car_count;



-- CHALLENGES
/*
	Select brand, model, and year from cars
		only show the oldest 5 cars in the database
		show cars which haven't been sold
*/
-- SELECT brand, model, year FROM cars
-- 	WHERE sold is FALSE
-- 	ORDER BY year
-- 	LIMIT 5

/*
	Select color and count how many cars have each color
		find cars which have not been sold
		order by count in descending order
		only show results where the count is greater than 2
*/
-- SELECT color, COUNT(color) FROM cars
-- 	WHERE sold IS FALSE
-- 	GROUP BY color
-- 	HAVING COUNT(color) > 2
-- 	ORDER BY COUNT(color) DESC;