
const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');


const JobSchema = new mongoose.Schema({
    job_title: { type: String, required: true },
    description: { type: String, required: true },
    job_type: { type: String, default: "" },
    salary: { type: String, default: "" },
    experience: { type: String, default: "" },
    isclosed: {type:Boolean, default:false}
    },
    {timestamps: {createdAt: 'created_at', modifiedAt: 'modified_at'}}
)

JobSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('Jobs', JobSchema);
