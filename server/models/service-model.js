// const { Schema, model } = require("mongoose");

// const serviceSchema = new Schema({
//     name: { type: String, required: true },
//     date_of_cause: { type: String, required: true },
//     discovered_by: { type: String, required: true },
//     disease_emergence: { type: String, required: true },
//     vaccination: { type: String, required: true },
//     description: { type: String, required: true },
//     image: { type: String, required: true }  // Store image URL
// });


// const Service = model("Service", serviceSchema);

// module.exports = Service;

const { Schema, model } = require("mongoose");

const serviceSchema = new Schema({
    name: { type: String, required: true },
    date_of_cause: { type: String, required: true },
    discovered_by: { type: String, required: true },
    disease_emergence: { type: String, required: true },
    vaccination: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true } 
});

const Service = model("Service", serviceSchema);

module.exports = Service;
