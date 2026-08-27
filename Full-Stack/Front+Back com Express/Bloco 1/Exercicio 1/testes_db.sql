CREATE TABLE tarefas (
	id SERIAL PRIMARY KEY,
	titulo VARCHAR(100),
	concluida INTEGER
);

INSERT INTO tarefas (titulo, concluida) VALUES
	
	('Limpeza', 1),
	('Almoço', 0),
	('Janta', 0);
	

SELECT * FROM tarefas