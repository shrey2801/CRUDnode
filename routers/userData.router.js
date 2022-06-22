const express = require('express');
const {httpGetAllData , httpGetDataByID , httpAddNewUser,httpDeleteData,httpUpdateData} = require('./userData.controller');

const {addNewDataValid,updateDataValid,validates,idValidation} = require('./validation');

const datarouter = express.Router();

datarouter.get('/',httpGetAllData);
datarouter.get('/:id',idValidation(),validates,httpGetDataByID);
datarouter.post('/',httpAddNewUser,validates,addNewDataValid());
datarouter.delete('/:id',idValidation(),validates,httpDeleteData);
datarouter.patch('/:id',idValidation(),updateDataValid(),validates,httpUpdateData);

module.exports = datarouter;