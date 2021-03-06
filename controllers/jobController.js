const jobModel = require('../models/job.model')

exports.addJob = async (req,res) =>{
    try {
        const newJob = await new jobModel({
            job_title : req.body.job_title,
            description : req.body.description,
            job_type :req.body.job_type,
            salary : req.body.salary,
            experience :req.body.experience,
            job_posted_by: req.user._id
        })
        await newJob.save()
        return res.status(200).json(newJob)
            
    } catch (error) {
        
    }
}
exports.jobsList = async (req,res) =>{
    try {
        const jobs = await jobModel.paginate({});
        res.status(200).json(jobs)  

    } catch (error) {
        res.status(400).json({
            error: true,
            message: error.message
        })
    }
}
exports.jobDetail = async (req,res) =>{
    try {
        const job =  await jobModel.findById(req.params.id)
        if(job){
            return res.status(200).json(job)
        }
        return res.json({
            message: "no data with the id"
        })
      
    } catch (error) {
        res.status(400).json({
            error: true,
            message: error.message
        })
    }
}
exports.onlyOpen = async (req,res) =>{

}
exports.deleteJob = async (req,res) =>{
    try {
        const job =  await jobModel.findById(req.params.id)
        if(job) {
            await jobModel.remove({
                _id: job._id
            })
            return res.status(200).json({
                error:false,
                message: "Successfully deleted"
            })
        }
        res.status(200).json({
            error: false,
            message: 'municipal doesn\t exist',
    
        })
        throw new Error(" report not found")
      
    } catch (error) {
        res.status(400).json({
            error: true,
            message: error.message
        })
    }
}

exports.openJobs = async (req,res) =>{
    try {
        const jobs =  await jobModel.find({
            isclosed : false
        })
        res.json(jobs)
    } catch (error) {
        res.status(400).json({
            error: true,
            message: error.message
        })
    }
}


