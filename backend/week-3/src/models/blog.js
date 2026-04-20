import { Schema, model } from "mongoose";

const blogSchema = await Schema(
  {
    id: {
      type: String,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "Users",
    },
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const Blog = model("Blog", blogSchema);
export default blog;
