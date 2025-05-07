import mongoose, { Document, Schema as MongooseSchema, Model } from "mongoose";

// 1. Define a TypeScript interface for the Blog document
export interface IBlog extends Document {
  title: string;
  category: string;
  author: string;
  image: string;
  authorImg: string;
  date: Date;
}

// 2. Define the schema using that interface
const blogSchema = new MongooseSchema<IBlog>({
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  authorImg: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// 3. Create and export the model
const Blog: Model<IBlog> = mongoose.models.Blog || mongoose.model<IBlog>("Blog", blogSchema);

export default Blog;
