const Pool = require("pg").Pool;

const pool = new Pool({
  user: "gaspo",
  password: "Cacatua24",
  database: "api",
  host: "localhost",
  port: 5432,
});

const getUsers = (request, response) => {
  pool.query("SELECT * FROM users ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getEvents = (request, response) => {
  pool.query("SELECT * FROM events ORDER BY eventid ASC", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getUserById = (request, response) => {
  const id = request.params.id;

  pool.query("SELECT * FROM users WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getUserByEmail = (request, response) => {
  const email = request.params.email;

  pool.query(
    "SELECT * FROM users WHERE email ilike $1",
    [email],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const registerUser = (request, response) => {
  const { username, email, password } = request.body;
  pool.query(
    "INSERT INTO users (username, email, password) VALUES ($1, $2, $3);",
    [username, email, password],
    (error, results) => {
      if (error) {
        throw error;
      }

      response.status(201).send(`User ${username} added correctly\n`);
      console.log(`User ${username} added correctly`);
    }
  );
};

const updateUser = (request, response) => {
  const id = parseInt(request.params.id);
  const { name, email, password } = request.body;

  pool.query(
    "UPDATE users SET username = $1, email = $2, password = $3 WHERE id = $4",
    [name, email, password, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`User modified with ID: ${id}`);
    }
  );
};

const deleteUser = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query("DELETE FROM users WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send(`User deleted with ID: ${id}`);
  });
};

module.exports = {
  getUsers,
  getUserById,
  registerUser,
  updateUser,
  deleteUser,
  getEvents,
  getUserByEmail,
};
