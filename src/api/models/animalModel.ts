import mongoose from 'mongoose';
import { Animal } from '../../types/Animal';

const animalSchema = new mongoose.Schema<Animal>({
  animal_name: {
    type: String,
    required: true,
    minlength: 2,
  },
});

export default mongoose.model('Animal', animalSchema);
