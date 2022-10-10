create database employees;

\c employees


create table charges (
    id serial primary key,
    name varchar (50),
    status varchar (5)
);


create table employees (
    id serial primary key,
    name varchar (150),
    idNumber varchar (20),
    inDate date,
    charge int,
    status varchar (5),
    foreign key (charge) references charges (id)
);



insert into charges (name, status) values 
('Scrum Master', 'A'),
('Desarrollador', 'A'),
('QA', 'A'),
('PO', 'A');