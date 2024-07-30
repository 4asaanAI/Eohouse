import mongoose from "mongoose";
import { connectionSrt } from "@/db/connect";
import { Product } from "@/db/product";
import { NextResponse } from "next/server";

export async function POST(req) {
   try {
      await mongoose.connect(connectionSrt);

      const { email, plan_Activate, Plan_Name, Service_Name, duration, Mode } = await req.json();
     
      const existingProduct = await Product.findOne({ email })
      if(existingProduct){
        
        
         existingProduct.Mode = Mode
         if(Mode=='services'){
      existingProduct.Plan_Name 
      existingProduct.Service_Name.push(...Service_Name)
         }
      else if(Mode=='join'){
         existingProduct.Plan_Name.push(...Plan_Name)
         existingProduct.Service_Name
      }
      await existingProduct.save();
      }
      else{
         await Product.create({ email, plan_Activate, Plan_Name, Service_Name, duration, Mode });
      }
      
      return NextResponse.json( {message:email},{ status: 200 });
   } catch (error) {
     console.error(error)
      return NextResponse.json({ error: error.message }, { status: 500 });
   }
   
}
export async function GET(req) {
   try {
      await mongoose.connect(connectionSrt);

      const email = req.nextUrl.searchParams.get("email");
      if (!email) {
         return NextResponse.json({ error: "Email is required" }, { status: 400 });
      }

      const existingProduct = await Product.findOne({ email });
      if (existingProduct) {
         const plan = existingProduct.Plan_Name;
         const service = existingProduct.Service_Name;
         const Activate = existingProduct.plan_Activate;

         return NextResponse.json({ plan, service, Activate }, { status: 200 });
      } else {
         return NextResponse.json({ error: "Product not found" }, { status: 404 });
      }
   } catch (error) {
      console.error(error);
      return NextResponse.json({ error: error.message }, { status: 500 });
   }
}