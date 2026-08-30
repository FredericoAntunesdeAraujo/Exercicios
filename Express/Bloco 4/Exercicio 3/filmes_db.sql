SELECT
    f.id,
    f.titulo,
    f.diretor,
    f.ano,
    f.nota,
    g.nome AS genero
FROM filmes f
INNER JOIN generos g ON f.genero_id = g.id
ORDER BY f.titulo

-- Tabela pai — cria primeiro
CREATE TABLE generos (
    id   SERIAL PRIMARY KEY,
    nome VARCHAR(50) NOT NULL
);

-- Adiciona a FK na tabela filmes existente
ALTER TABLE filmes
    ADD COLUMN genero_id INTEGER REFERENCES generos(id);

-- Insere os gêneros
INSERT INTO generos (nome) VALUES
    ('Ficção Científica'),
    ('Drama'),
    ('Suspense'),
    ('Ação'),
    ('Terror');

-- Atualiza os filmes existentes com o gênero correto
UPDATE filmes SET genero_id = 1 WHERE titulo = 'Interestelar';
UPDATE filmes SET genero_id = 2 WHERE titulo = 'Parasita';
UPDATE filmes SET genero_id = 2 WHERE titulo = 'O Poderoso Chefão';
UPDATE filmes SET genero_id = 3 WHERE titulo = 'Coringa';
UPDATE filmes SET genero_id = 1 WHERE titulo = 'Duna';
UPDATE filmes SET genero_id = 1 WHERE titulo = 'Matrix';	

SELECT * FROM filmes
SELECT * FROM generos
