const express = require("express");
const db = require("../models/user.model");
const mongoose = require("mongoose");

const addTodo = async (req, res) => {
  try {
    const { title, description } = req.body;
    console.log(req.body)
    console.log(req.params.id);
    const updateResult = await db.updateOne(
      { _id: req.params.id },
      {
        $push: {
          todo: { title: title, description: description },
        },
      }
    );
    return res.status(200).json({ message: "Notes added" });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Error" });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const { notesId} = req.body;

    console.log(req.params.id,notesId);
    const updateResult = await db.updateOne(
        { _id: req.params.id },
        { $pull: { todo: { _id: notesId } } }
      );
    return res.status(200).json({ message: "Notes deleted" });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Error" });
  }
};

const editTodo = async (req, res) => {
  try {
    const {title,description,todoId} = req.body;
    const updatedDocument = await db.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { 'todo.$[elem].title': title, 'todo.$[elem].description': description } },
        { 
          new: true, 
          arrayFilters: [{ 'elem._id': todoId }]
        }
      );
      return res.status(200).json({ message: "Notes updated" });
  } catch (err) {
    return res.status(400).json({ message: "Error" });
  }
};


const getTodos = async (req,res) => {
    try{
        const data = await db.find({_id : req.params.id});
        console.log(data)
        return res.status(200).json({data : data[0]?.todo});
    }catch(err){
      console.log(err)
        return res.status(400).json({ message: "Error" });
    }
}

module.exports = { addTodo ,deleteTodo,editTodo,getTodos};
// "todoId":"6690db20a4fde6237429d132"