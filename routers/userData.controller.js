const {getAllData , getDataByID,addNewUser,idCheck,deleteData,updateData} = require('../model/userData.model');

async function httpGetAllData(req,res){
    return res.status(200).json(await getAllData());
}

async function httpGetDataByID(req,res){

    const dataId = req.params.id;
    const getData = await getDataByID(dataId);
    return res.status(200).json(getData);
}

async function httpAddNewUser(req,res){
    const dataBody = req.body;
    if(!dataBody.firstName || !dataBody.lastName || !dataBody.email || !dataBody.date){
        return res.status(400).json({
            error:'Mising value',
        });
    }

    dataBody.date = new Date(dataBody.date);
    if (isNaN(dataBody.date)){
        return res.status(400).json({
            error:'Invalid  date',
        })
    }
    await addNewUser(dataBody);
    return res.status(201).json(dataBody);
}

async function httpDeleteData(req,res) {
    const dataId = req.params.id; 

    await deleteData(dataId);
    return res.status(200).json({
        success:"Id is deleted"
    });
    
}

async function httpUpdateData(req,res){
    const updateId = req.params.id;
    const updateBodyPart = req.body
    
    const updatedData = await updateData(updateId,updateBodyPart)
    //console.log(updatedData);
    return res.status(200).send();
    
};


module.exports = {
    httpGetAllData,
    httpGetDataByID,
    httpAddNewUser,
    httpDeleteData,
    httpUpdateData
};