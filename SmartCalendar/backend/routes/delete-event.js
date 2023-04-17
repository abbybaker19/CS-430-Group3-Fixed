const express = require('express');
const router = express.Router();
const db = require('../db');

// Define the route for deleting a user
router.delete('/delete-event/:id', (req, res) => {
  const id = req.params.id;
  console.log(req.body)
  db.run(`DELETE FROM event WHERE id = ?`, [id], function(err) {
    if (err) {
      console.error(err.message);
      return res.status(500).send('Internal Server Error');
    }

    res.send(`User with id ${id} deleted successfully`);
  });
});

module.exports = router;