exports.getAll = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      response: 'this is working',
    },
  });
};

exports.getOne =
  ('/:id',
  (req, res) => {
    res.status(200).json({
      status: 'success',
      response: 'oiii getone',
    });
  });

exports.createOne =
  ('/:id',
  (req, res) => {
    console.log(req);
    res.status(200).json({
      status: 'success',
    });
  });

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
