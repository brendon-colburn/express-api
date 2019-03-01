import mongoose from 'mongoose';

const Schema = mongoose.Schema; 

const businessModel = new Schema({
	_id: { type: String },
	name: { type: String }
});
export default mongoose.model('businesses', businessModel)