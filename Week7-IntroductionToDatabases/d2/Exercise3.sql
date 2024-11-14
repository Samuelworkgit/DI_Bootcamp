
CREATE TABLE students(
id SERIAL PRIMARY KEY,
first_name TEXT,
last_name TEXT,
birth_date date);

INSERT INTO students (first_name, last_name, birth_date) 
VALUES
    ('Marc', 'Benichou', '1998-11-02'),
    ('Yoan', 'Cohen', '2010-12-03'),
    ('Lea', 'Benichou', '1987-07-27'),
    ('Amelia', 'Dux', '1996-04-07'),
    ('David', 'Grez', '2003-06-14'),
    ('Omer', 'Simpson', '1980-10-03');

select * from students

select first_name, last_name from students

select first_name, last_name from students where id=2;

select first_name, last_name from students where last_name='Benichou' and first_name='Marc';

select first_name, last_name from students where last_name='Benichou' or first_name='Marc';

select first_name, last_name from students where first_name like '%a%' or first_name like '%A%';

select first_name, last_name from students where first_name like 'a%' or first_name like 'A%';

select first_name, last_name from students where first_name like '%a' or first_name like '%A';

select first_name, last_name from students where first_name like '%a';

select first_name, last_name from students where id=1 or id=3;
-- Returns the students whose id’s are equal to 1 AND the students whose id’s are equal 3 
-- but im guessing the answer you are expecting id:
-- select first_name, last_name from students where id=1 and id=3;
-- that doesnt return anything