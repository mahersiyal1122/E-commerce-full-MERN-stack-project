const express = require('express')
const app = express()
const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const multer = require("multer")
const path = require("path")
const cors = require("cors")
const { type } = require('os')
const { error } = require('console')

const port = 4000

app.use(express.json())
app.use(cors())

// DataBase Connection With MongoDB
mongoose.connect("mongodb://localhost:27017/ecommerce")

app.get('/', (req, res) => {
    res.send('Hello World!')
})

// Image Storage Engine
const storage = multer.diskStorage({
    destination: "./upload/images",
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})
const upload = multer({ storage: storage })

// Creating Upload Endpoint for images
app.use("/images", express.static('upload/images'))

app.post("/upload", upload.single('product'), (req, res) => {
    res.json({
        success: true,
        image_url: `http://localhost:${port}/images/${req.file.filename}`
    })
})

// Schema for Creating Products
const Product = mongoose.model("Product", {
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    new_price: {
        type: Number,
        required: true,
    },
    old_price: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    available: {
        type: Boolean,
        default: true,
    }
})
app.post("/addproduct", async (req, res) => {
    let products = await Product.find({});
    let id;
    if (products.length > 0) {
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id + 1;
    } else {
        id = 1;
    }
    const product = new Product({
        id: id,
        name: req.body.name,
        image: req.body.image,
        category: req.body.category,
        new_price: req.body.new_price,
        old_price: req.body.old_price
    })
    // console.log(product)
    await product.save()
    // console.log("Product Saved In Database")
    res.json({
        success: true,
        name: req.body.name,
    })
})

// Creating an API for Deleting Product
app.post("/removeproduct", async (req, res) => {
    await Product.findOneAndDelete({ id: req.body.id })
    // console.log("Product is Removed")
    res.json({
        success: true,
        name: req.body.name,
    })
})

// Creating an API for getting all products
app.get("/allproducts", async (req, res) => {
    let get_all_products = await Product.find({});
    // console.log("All Products Fetched")
    res.send(get_all_products);
})

// Creating Schema for User model
const Users = new mongoose.model("Users", {
    name: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
    },
    cartData: {
        type: Object,
    },
    date: {
        type: Date,
        default: Date.now,
    }
})

// Craeting Endpoint for Registering the user
app.post("/signup", async (req, res) => {
    let check = await Users.findOne({ email: req.body.email });
    if (check) {
        return res.status(400).json({ success: false, errors: "Existing user found with the same email address!!!" })
    }
    let cart = {};
    for (let i = 0; i < 300; i++) {
        cart[i] = 0;
    }
    const user = new Users({
        name: req.body.username,
        email: req.body.email,
        password: req.body.password,
        cartData: cart,
    })
    await user.save();

    const data = {
        user: {
            id: user.id
        }
    }
    //                           salt 
    const token = jwt.sign(data, 'secret_ecom');
    res.json({ success: true, token });
})

// Creating endpoint for user login
app.post("/login", async (req, res) => {
    let user = await Users.findOne({ email: req.body.email });
    if (user) {
        const passCompare = (req.body.password === user.password);
        if (passCompare) {
            const data = {
                user: {
                    id: user.id
                }
            }
            const token = jwt.sign(data, 'secret_ecom');
            res.json({ success: true, token })
        }
        else {
            res.json({ success: false, errors: "Wrong Password" });
        }
    }
    else {
        res.json({ success: false, errors: "Wrong Email Id" });
    }
})

// Creating an endpoint for newcollection data
app.get("/newcollections", async (req, res) => {
    let products = await Product.find({});

    let newMenCollection = products.filter(product => product.category === "men").slice(-3);
    let newWomenCollection = products.filter(product => product.category === "women").slice(-3);
    let newBoysCollection = products.filter(product => product.category === "kid").slice(-2);

    let new_collection = [...newMenCollection, ...newWomenCollection, ...newBoysCollection]
    res.send(new_collection)
    // console.log("New Collection Fetched");
})

// Creating an endpoint for popular in women section
app.get("/popularinwomen", async (req, res) => {
    let products = await Product.find({ category: "women" });
    let popular_in_women = products.slice(-4)
    res.send(popular_in_women)
    // console.log("Popular in women Section Data Fetched");
})

// Creating middleware to fetch user
const fetchUser = async (req, res, next) => {
    const token = req.header("auth-token");
    if (!token) {
        res.status(401).send({ errors: "Please authenticate using a valid token" })
    } else {
        try {
            const data = jwt.verify(token, 'secret_ecom');
            req.user = data.user;
            next();
        } catch (error) {
            res.status(401).send({ errors: "Please authenticate using a valid token" })
        }
    }
}

// Creating an endpoint for adding products to cartdata
app.post("/addtocart", fetchUser, async (req, res) => {
    // console.log("Added ",req.body.itemId);
    let userData = await Users.findOne({ _id: req.user.id });
    userData.cartData[req.body.itemId]+=1
    await Users.findOneAndUpdate({_id:req.user.id}, {cartData: userData.cartData})
    res.send({message:"Added"})
})

// Creating an endpoint to remove product from cartdata
app.post("/removefromcart", fetchUser, async (req, res) => {
    // console.log("Removed ",req.body.itemId);
    let userData = await Users.findOne({ _id: req.user.id });
    if (userData.cartData[req.body.itemId] > 0)
    userData.cartData[req.body.itemId]-=1
    await Users.findOneAndUpdate({_id:req.user.id}, {cartData: userData.cartData})
    res.send({message:"Removed"})
})

// Creating an endpoint to get cart data
app.post("/getcart", fetchUser, async (req, res) => {
    // console.log("Get Cart");
    let userData = await Users.findOne({ _id: req.user.id });
    res.json(userData.cartData);
    // console.log(userData.cartData);
})


app.listen(port, (error) => {
    if (!error) {
        console.log(`Server Running on port ${port}`)
    }
    else {
        console.log(`Error: ${error}`)
    }
})