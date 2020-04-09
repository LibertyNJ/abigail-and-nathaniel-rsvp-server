import mongoose from 'mongoose';

export type Config = {
  address: string;
  password: string;
  user: string;
};

export default async (config: Config) => {
  try {
    await mongoose.connect(
      `mongodb://${config.user}:${config.password}@${config.address}`,
      { useNewUrlParser: true, useUnifiedTopology: true }
    );

    console.log('Connected to database.');
  } catch (error) {
    console.error('Encountered an error connecting to the database:\n', error);
  }
};
