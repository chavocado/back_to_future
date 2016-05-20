SQL commands

CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    first_name character varying(60),
    last_name character varying(60),
    emp_id integer,
    job_title character varying(60),
    yearly_salary integer,
    status character varying(30)
);
