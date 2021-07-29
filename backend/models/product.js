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
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        maxlength: 10
    },
    quantity: {
        type: Number,
    },
    description_long: {
        type: String,
        required: true,
        maxlength: 2000
    },
    description_short: {
        type: String,
        required: true,
        maxlength: 2000
    },
    cate_id: {
        type: ObjectId,
        ref: "Category",
        required: true
    },
    sold: {
        type: Number,
        default: 0
    },
    shipping: {
        type: Boolean
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Product", productSchema);