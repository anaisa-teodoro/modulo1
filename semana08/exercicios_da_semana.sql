-- [M1S08] Ex.1
create table departamento (
	id serial primary key,
	nome varchar(200) not null,
	dataCriacao date not null
);

-- [M1S08] Ex.2
create table funcionario (
	id serial primary key,
	nome varchar(200) not null,
	idade int not null,
	check(idade >= 14),
	cargo varchar(100) not null,
	salario decimal(18, 2) not null,
	idDepartamento int not null,
	foreign key (idDepartamento) references departamento (id)
);

-- [M1S08] Ex.3
insert into departamento (nome, dataCriacao) 
values 
('Marketing', '2020-01-01'),
('Ti', '2020-01-01'),
('Ecommerce', '2020-01-01');

-- [M1S08] Ex.4
insert into funcionario (nome, idade, cargo, salario, iddepartamento) values
('Alana Carneiro', 36, 'Deservolvedor', 6600.00, 1),
('Karina Peres', 33, 'Analista de RH', 5500.00, 2),
('Angell Magri', 22, 'Especialista em Marketing', 4400.00, 3),
('Miguel', 34, 'Recrutador', 6000, 1),
('Luanna', 28, 'Gerente de Marketing', 5000, 2),
('Fernanda', 45, 'Analista Financeiro', 7000, 3);

-- [M1S08] Ex.5
select * from funcionario as f inner join departamento as d
on f.iddepartamento = d.id;

-- [M1S08] Ex.5
select
f.nome as Funcionario,
f.idade,
f.cargo,
f.salario,
d.nome as Departamento,
d.dataCriacao
from Funcionario as f
inner join Departamento as d
on f.idDepartamento = d.id;

-- [M1S08] Ex.6
update departamento set nome = 'Ti e inovação' where id = 2
update funcionario set idade = 22 where id = 2

-- [M1S08] Ex.7
-- Excluir funcionários associados ao departamento
DELETE FROM Funcionario WHERE departamento_id = 2;
-- Excluir o departamento
DELETE FROM Departamento WHERE id = 1;

-- [M1S08] Ex.7
delete from Funcionario where idDepartamento in (select id from Departamento where id = 3);
delete from Departamento where id = 3;

-- [M1S08] Ex.8
drop table funcionario;
drop table departamento;