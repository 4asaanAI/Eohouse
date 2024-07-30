import mongoose from "mongoose";

const Param = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
      },
      Plan_Name: {
        type: Array,
        default: []
      },
      Service_Name:{
        type: Array,
        default: []
      },
      plan_Activate:{
        type: Array,
        default: []
      },
      Duration: {
        type: Date,
        default: Date.now
      }
      })

   
    


export const Product = mongoose.models.product || mongoose.model("product",Param)