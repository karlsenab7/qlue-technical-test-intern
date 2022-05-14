<h1>SQL</h1>

### I made a dummy database using postgresql with this schema
![schema](./ERD_schema.png)

## Number 1
![alt text](./question_images/sql_no_1.png)

> SELECT p.name, sum(total) AS total_price <br>
FROM persons AS p NATURAL INNER JOIN transactions AS t <br>
GROUP BY p.name
___
## Number 2
![alt text](./question_images/sql_no_2.png)

> SELECT <br><br>
	SUM(t.total) AS Total, <br>
	date_part('month', t.date) AS "Month", <br>
	date_part('year', t.date) AS "Year" <br><br>
FROM transactions AS t <br>
GROUP BY "Month", "Year" <br>
ORDER BY "Year", "Month"

___
## Number 3
![alt text](./question_images/sql_no_3.png)

> SELECT p.name, COUNT(distinct t.item_id) AS "Total Variety" <br>
FROM transactions AS t, persons AS p <br>
WHERE t.person_id = p.id <br>
GROUP BY p.name <br>
ORDER BY "Total Variety" DESC
