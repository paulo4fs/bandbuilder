// GET ALL
exports.getAll = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      response: 'this is working',
    },
  });
};

// GET ONE
exports.getOne =
  ('/:id',
  (req, res) => {
    res.status(200).json({
      status: 'success',
      data: {
        response: 'deu bom um',
      },
    });
  });

// CREATE ONE
exports.createOne =
  ('/:id',
  (req, res) => {
    console.log(req.body);
    res.status(201).json({
      status: 'success',
    });
  });

// UPDATE ONE
exports.updateOne =
  ('/:id',
  (req, res) => {
    res.status(200).json({
      status: 'success',
      data: {
        response: 'oiiii update one',
      },
    });
  });

// DELETE ONE
exports.deleteOne =
  ('/:id',
  (req, res) => {
    res.status(200).json({
      status: 'success',
      data: {
        response: 'xau e bença',
      },
    });
  });
