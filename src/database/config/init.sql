BEGIN;

DROP TABLE IF EXISTS users, posts, votes, comments CASCADE;
DROP TYPE IF EXISTS votes_values;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL UNIQUE,
  email VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(100) NOT NULL,
  img VARCHAR(100)
);

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id) NOT NULL,
  text VARCHAR(100) NOT NULL,
  img VARCHAR(100),
  vote_count INT NOT NULL DEFAULT 0,
  date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id) NOT NULL,
  post_id INT REFERENCES posts(id) NOT NULL,
  text VARCHAR(100) NOT NULL,
  date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TYPE votes_values AS ENUM ('none', 'up', 'down');

CREATE TABLE votes (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id) NOT NULL,
  post_id INT REFERENCES posts(id) NOT NULL,
  vote_state votes_values NOT NULL
);

COMMIT;