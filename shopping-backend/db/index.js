import mongoose from "mongoose"
const mongoURI = 'mongodb+srv://devkumark:LYipxFRx3dsSKjjh@cluster0.ie8o5.mongodb.net/' 
const server = async () => {
  try{
    mongoose.connect(mongoURI)
    console.log(" server connected successful");
  } catch(error){
    console.log(error);
    process.exit(1);
  }
}

export {server}