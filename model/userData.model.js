const { default: mongoose } = require('mongoose');
const userDataes = require('./userData.mongo');

const data = new Map();

// let oldID = 100;

const userData = {
    id : 100,
    firstName:'shrey',
    lastName:'Patel',
    email:'sp@gmail.com',
    date: new Date('April 19,2022'),
};

saveData(userData);

// data.set(userData.id,userData);

// Get data of all user
async function getAllData(){
    return await userDataes.find({},{'__v':0});
   // return Array.from(data.values());
}

async function saveData (userData){
    await userDataes.insertMany(userData)
}

// To get data from id
function getDataByID(id){
    const getId = userDataes.find({
        _id: new Object(id)
    },{'__v':0});
    return getId;
}

async function getLatestID(){
    const latestID = await userDataes
        .findOne()
        .sort('-id');
    return latestID.id
}

// To add new user
async function addNewUser(userData){
    return await saveData(userData)
} 


async function idCheck(id){
    return mongoose.isValidObjectId(id) && await userDataes.findById(id)
}
// TO delete id
async function deleteData(dataId){
    const dataID = await userDataes.deleteOne({
        _id:dataId
    });
    return dataID
}



async function updateData(updateId,updatebody){
   const update = await userDataes.updateOne({_id : updateId},{
       firstName:updatebody.firstName,
       lastName:updatebody.lastName,
       email:updatebody.email,
       date:updatebody.date
   })
  // console.log(update);
   return update
    

}

module.exports = {
    getAllData,
    getDataByID,
    addNewUser,
    idCheck,
    deleteData,
    updateData
};