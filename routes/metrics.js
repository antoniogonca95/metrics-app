const express = require('express');
const router = express.Router();

/* POST metric value */
router.post('/:key', (req, res) => {
  if (typeof (req.body.value) !== 'number') {
    res.status(400).send({ error: 'Invalid value' });
    return;
  }

  global.metricsStore.storeMetricValue(req.params.key, req.body.value);
  res.status(200).send({});
});

/* GET metric sum */
router.get('/:key/sum', (req, res) => {
  const value = global.metricsStore.getMetricValuesSum(req.params.key);

  res.status(200).send({ value });
});

module.exports = router;
