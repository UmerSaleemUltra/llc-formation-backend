import mongoose from "mongoose";

const llcSchema = new mongoose.Schema({
  llcName: { type: String, required: true },
  state: { type: String, required: true },
  registeredAgent: { type: String, required: true },
  agentAddress: { type: String, required: true },
}, { timestamps: true });

const LLC = mongoose.model('LLC', llcSchema);
export default LLC;
