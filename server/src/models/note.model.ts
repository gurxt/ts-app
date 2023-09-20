import { Schema, model } from "mongoose";

export interface INote {
  title: string;
  description?: string;
}

const noteSchema = new Schema({ 
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    trim: true
  }
});

export default model<INote>("Note", noteSchema);