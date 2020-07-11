class MetricsStore {
  metrics = {};

  constructor() { }

  storeMetricValue(key, value) {
    if (this.metrics[key]) {
      this.metrics[key].push({ value, timestamp: this.generateTimestamp() });
      return;
    }

    this.metrics[key] = [
      { value, timestamp: this.generateTimestamp() }
    ];
  }

  getMetricValuesSum(key) {
    if (!this.metrics[key]) {
      return 0;
    }

    this.flushExpiredMetricValues(key);

    return Math.round(this.metrics[key].reduce((sum, metricValue) => sum + metricValue.value, 0));
  }

  flushExpiredMetricValues(key) {
    this.metrics[key] = this.metrics[key].filter(value => (value.timestamp + 3600) > this.generateTimestamp());
  }

  generateTimestamp() {
    return Math.floor(Date.now() / 1000);
  }
}

module.exports = MetricsStore;