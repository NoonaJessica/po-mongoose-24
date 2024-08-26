import mongoose from 'mongoose';
import { Category } from '../../types/Gategory';


const categorySchema = new mongoose.Schema<Category>({
  category_name: {
    type: String,
    required: true,
    unique: true,
    minlength: 2,

  },
});

export default mongoose.model('Category', categorySchema);
