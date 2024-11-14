select first_name, last_name, birth_date from students
order by last_name
limit 4;

select first_name, last_name, birth_date from students
where birth_date = (select min(birth_date) from students);

select first_name, last_name, birth_date from students
offset 2 rows
limit 3;