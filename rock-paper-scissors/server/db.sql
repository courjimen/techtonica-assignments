--Step 1--
CREATE DATABASE player;

--Step 2--
\c player;

--Step 3--
CREATE TABLE score (
    player_id SERIAL PRIMARY KEY,
    player_name TEXT UNIQUE NOT NULL,
    player_score INT DEFAULT 0
);

--Step 4--
INSERT INTO score (player_name, player_score) VALUES 
('Bon Bon', 5),
('Cour', 3),
('Tre',7);

--Step 5 Rankings Table--
CREATE TABLE leaderboard (
    leaderboard_id SERIAL PRIMARY KEY,
    rank INT NOT NULL,
    player_name TEXT NOT NULL,
    player_score INT NOT NULL,
);

--Step 6 SCOREBOARD--
INSERT INTO leaderboard (rank, player_name, player_score)
 SELECT
    DENSE_RANK() OVER (ORDER BY player_score DESC) AS rank,
    player_name,
    player_score
FROM
    score
ORDER BY
    player_score DESC;
LIMIT 10;

--FUNCTION TO UPDATE SCOREBOARD--
CREATE OR REPLACE FUNCTION update_leaderboard()
RETURNS TRIGGER AS $$
BEGIN
    DELETE FROM leaderboard;
    INSERT INTO leaderboard (rank, player_name, player_score)
    SELECT
        DENSE_RANK() OVER (ORDER BY player_score DESC) AS rank,
        player_name,
        player_score
    FROM score
    ORDER BY player_score DESC
    LIMIT 10;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

--TRIGGER UPDATES LEADERBOARD--
CREATE TRIGGER score_updated
AFTER INSERT OR UPDATE OR DELETE ON score
FOR EACH STATEMENT
EXECUTE FUNCTION update_leaderboard();

SELECT * FROM leaderboard;