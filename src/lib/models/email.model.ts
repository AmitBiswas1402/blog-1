import mongoose, { Document, Schema, Model } from "mongoose";

export interface IEmailSubscriber extends Document {
  email: string;
  date: Date;
}

const emailSchema = new Schema<IEmailSubscriber>({
  email: {
    type: String,
    required: true,
    unique: true, // Avoid duplicate subscriptions
    lowercase: true,
    trim: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const EmailSubscriber: Model<IEmailSubscriber> =
  mongoose.models.EmailSubscriber || mongoose.model<IEmailSubscriber>("EmailSubscriber", emailSchema);

export default EmailSubscriber;
