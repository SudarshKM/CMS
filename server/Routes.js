
import express from "express";

import * as properties from './controller/propertiesController.js'

const router = express.Router();

//properties
router.post('/add-property', properties.addProperty);
router.get('/get-property' ,properties.getProperties);
router.put('/update-property' ,properties.updateProperty);
router.delete('/delete-property' , properties.deleteProperty)


export default router;