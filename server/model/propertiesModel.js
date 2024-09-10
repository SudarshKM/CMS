import mongoose from "mongoose";

const propertySchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  saletype: {
    type: String,
    required: true,
  },
  amount:{
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  area: {
    type: String,
    required: true,
  },
  beds: {
    type: String,
    required: true,
  },
  baths: {
    type: String,
    required: true,
  },
  garages: {
    type: String,
    required: true,
  },
});

const properties = mongoose.model("properties", propertySchema);

export default properties;
