import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
     Subcategory: {
        type: String,
        required: true
    }, 
    image: {
        type: Array ,
        required: false
    }, 
    sizes: {
        type: Array ,
        required: false
    }, 
       bestseller: {
        type: Boolean ,
        required: false
    }, 
       date: {
        type: Number ,
        required: false
    }, 
})

const ProductModel = mongoose.models.product || mongoose.model('product', productSchema);

export default ProductModel ;