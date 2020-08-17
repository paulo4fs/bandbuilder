const db = require('../db');

// GET ALL
exports.getAll = async (req, res) => {
  try {
    const results = await db.query('SELECT * FROM users;');

    res.status(200).json({
      status: 'success',
      results: results.rows.length,
      data: {
        users: results.rows.sort((a, b) => a.id - b.id),
      },
    });
  } catch (err) {
    console.log('error: ' + err);
  }
};

// GET ONE
exports.getOne =
  ('/:id',
  async (req, res) => {
    try {
      const results = await db.query('SELECT * FROM users where id=$1;', [
        req.params.id,
      ]);

      res.status(200).json({
        status: 'success',
        results: results.rows.length,
        data: {
          users: results.rows,
        },
      });
    } catch (err) {
      console.log('error: ' + err);
    }
  });

// CREATE ONE
exports.createOne = async (req, res) => {
  try {
    const results = await db.query(
      'INSERT INTO users (name,avatar,phone,instrument) values($1, $2, $3, $4) returning *',
      [req.body.name, req.body.avatar, req.body.phone, req.body.instrument]
    );

    res.status(201).json({
      status: 'success',
      results: results.length,
      data: {
        users: results.rows[0],
      },
    });
  } catch (err) {
    console.log('error: ' + err);
  }
};

// UPDATE ONE
exports.updateOne =
  ('/:id',
  async (req, res) => {
    try {
      const results = await db.query(
        'UPDATE users SET name = $1, avatar = $2, phone = $3, instrument = $4 where id = $5 returning *;',
        [
          req.body.name,
          req.body.avatar,
          req.body.phone,
          req.body.instrument,
          req.params.id,
        ]
      );

      res.status(200).json({
        status: 'success',
        results: results.length,
        data: {
          users: results.rows[0],
        },
      });
    } catch (err) {
      console.log('error: ' + err);
    }
  });

// DELETE ONE
exports.deleteOne =
  ('/:id',
  async (req, res) => {
    try {
      const results = await db.query('DELETE FROM users where id = $1;', [
        req.params.id,
      ]);

      res.status(204).json();
    } catch (err) {
      console.log('error: ' + err);
    }
  });
