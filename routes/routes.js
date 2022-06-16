const express = require('express');

const router = express.Router();
const TaskModel=require('../models/task');

//Post Method
router.post('/post',async  (req, res) => {

    const data=new TaskModel({
        value:req.body.value,
        state:0
    })

    try{
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
catch(error)
{
    res.status(200).json({message : error.message});
}

})

//Get all Method
router.get('/getAll', async(req, res) => {
    try{
        const data = await TaskModel.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Get by ID Method
router.get('/getOne/:id', async (req, res) => {
    try{
        const data= await TaskModel.findById(req.params.id);
        res.send(data);
    }
    catch(error){
        res.send({message : error.message});
    }
})

//Update by ID Method
router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await TaskModel.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Delete by ID Method
router.delete('/delete/:id', async (req, res) => {
    try{
        const id=req.params.id;
        const data= await TaskModel.findByIdAndDelete(id);
        res.send(`data with name ${data.value} has been deleted...`);
    }
    catch{
        res.status(400).json({message:error.message});
    }
})

module.exports = router;