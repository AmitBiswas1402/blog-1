import mongoose, { Document, Schema as MongooseSchema, Model } from "mongoose";

export interface IBlog extends Document {
  title: string;
  category: string;
  author: string;
  image: string;
  authorImg: string;
  date: Date;
}

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

const Blog: Model<IBlog> = mongoose.models.Blog || mongoose.model<IBlog>("Blog", blogSchema);

export default Blog;
