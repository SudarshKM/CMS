import properties from "../model/propertiesModel.js";

export const addProperty = async (req, res) => {
  try {
    const newProperty = new properties(req.body);

    await newProperty.save();
    res.status(200).json(req.body);
  } catch (error) {
    res.status(401).json(error);
  }
};

export const getProperties = async (req, res) => {
  try {
    const propertyList = await properties.find();
    res.status(200).json(propertyList);
  } catch (error) {
    res.status(401).json(error);
  }
};

export const updateProperty = async (req, res) => {
  const { id, image, saletype, amount, address, area, beds, baths, garages } =
    req.body;

    try {
      await properties.updateOne({_id:id} , {
        image, saletype, amount, address, area, beds, baths, garages
      });

      res.status(200).json('Product Updated')
    } catch (error) {
      res.status(401).json(error);

    }
};


export const deleteProperty = async(req,res)=>{
  const {id} = req.body
  try {
    await properties.deleteOne({_id:id})
    res.status(200).json("Product Deleted")
    
  } catch (error) {
    res.status(401).json(error);

  }
}

