import mongoose from 'mongoose';
const {
    ObjectId
} = mongoose.Schema;

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32
    },
    category: {
        type: ObjectId,
        ref: "Category",
        required: true
    },
    description: {
        type: String,
        required: true,
        maxlength: 2000
    },
    price: {
        type: Number,
        required: true,
        maxlength: 10
    },
    photo: {
        data: Buffer,
        contentType: String
    },
    quantity: {
        type: Number,
    },
    sold: {
        type: Number,
        default: 0
    },
    shipping: {
        required: true,
        type: Boolean
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Product", productSchema);