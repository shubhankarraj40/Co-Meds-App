import mongoose from 'mongoose';


export const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, { 
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to database!');
  } catch (err) {
    console.error('Some error occurred while connecting to the database:', err);
  }
};
