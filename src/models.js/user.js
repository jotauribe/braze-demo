'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  created_at: Date,
  braze_id: String,
  external_id: String,
  appboy_id: String,
  user_aliases: [],
  random_bucket: Number,
  total_revenue: String,
  push_subscribe: String,
  email_subscribe: String,
  country: String,
  language: String,
  time_zone: String,
  gender: String,
  push_tokens: Array,
  devices: String,
  apps: [AppSchema],
  campaigns_received: String,
  custom_events: String,
  custom_attributes: []
});

const AppSchema = new Schema({
  name: String,
  platform: String,
  version: String,
  sessions: String,
  first_used: Date,
  last_used: Date
});

module.exports = mongoose.model('Providers', ProviderSchema);
