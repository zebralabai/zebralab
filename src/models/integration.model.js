const mongoose = require('mongoose');

const IntegrationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  applicationType: { type: String, required: true },
  auth: {
    type: {
      type: String,
      enum: ['apiKey', 'oauth2', 'basic'],
      required: true
    },
    credentials: { type: Object, required: true }
  },
  dataToCollect: [{ type: String }],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Integration', IntegrationSchema);