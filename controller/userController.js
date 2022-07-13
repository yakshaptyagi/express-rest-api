const userModel = require('../models/UserModel');
// var users = [
//      { id: 1, firstname: 'Peter', lastname: 'Parker', email: 'Peter@gmail.com', city: 'Mumbai' },
//      { id: 2, firstname: 'Tony', lastname: 'Stark', email: 'Tony@gmail.com', city: 'New Delhi' }
//  ]

function GetUsers(req, res) {
    userModel.find({}, (err, data) => {
        if (!err) {
            res.status(200).send(data);
        }
    });
}

function GetUser(req, res) {
    userModel.findOne({ _id: req.params.id }, (err, data) => {
        if (data !== null) {
            res.status(200).send(data);
        } else if (data == null) {
            res.status(404).send({ status: 404, message: "no data" })
        } else {
            throw err;
        }
    });



}

function AddUser(req, res) {
    let user = new userModel({
        // id: req.body.id,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        city: req.body.city,
        age: req.body.age
    });
    user.save((err) => {
        if (!err) {
            res.status(201).send(message = "user added");
        } else {
            throw err;
        }
    });


}

function DeleteUser(req, res) {
    userModel.deleteOne({ _id: req.params.id }, (err, data) => {
        console.log(data);
        if (err) {
            throw err;
        } else {
            res.status(200).send({ message: "user deleted" })
        }
    });

}

function UpdateUser(req, res) {
    let updateuser = new userModel({
        // id: req.body.id,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        city: req.body.city,
        age: req.body.age
    });
    userModel.findOneAndUpdate({ id: req.params.id }, updateuser, (err, data) => {
        console.log(data);
        if (!err) {
            res.status(200).send("Data is updated");
        } else {
            // console.log(err);
            res.status(404).send("Something went wrong ");
        }
    });



}
module.exports = { GetUsers, GetUser, AddUser, DeleteUser, UpdateUser };