import mongoose from 'mongoose';

mongoose.connect('mongodb://127.0.0.1:27017/tarot')
  .then(() => console.log('[INFO] connected to db.'))
  .catch((err) => console.error("[ERROR] Failed to connect to db.", err));
