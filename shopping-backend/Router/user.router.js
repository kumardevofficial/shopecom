import express from 'express'

const router = express.Router();

router.get("/bindas", (req, res) => {
  res.send(" this is bindas")
});

export {router}