const express = require("express");
const cors  = require("cors"); 
const { connection } = require("./Config/config");
const { usermodel } = require("./Models/usermodel");

const url = "https://randomuser.me/api/?results=100";
const app = express();
app.use(cors());

app.get("/api", async (req, res) => {
  try {
    let { page , limit , filter } = req.query;
    if(!page) page = 1;
    if(!limit) limit =10
    const skip = (page - 1) * 10;
    let payload = {} 
    if(filter) payload.gender = filter

    const datalength = await usermodel.find(payload)
    const data = await usermodel.find(payload).skip(skip).limit(limit);
    res.send({
      data,
      page,
      limit,
      length: datalength.length,
      success: true,
    });
  } catch (error) {
    res.send({
      success: false,
    });
  }
});

app.post("/data", async (req, res) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    await usermodel.insertMany(data.results);
    res.send({
      success: true,
    });
  } catch (error) {
    res.send({
      success: false,
    });
  }
});

app.delete("/delete", async (req, res) => {
  try {
    await usermodel.deleteMany();
    res.send({
      success: true,
    });
  } catch (error) {
    res.send({
      success: false,
    });
  }
});

app.listen(9000, async () => {
  try {
    await connection;
    console.log("Connected");
  } catch {
    console.log("Error");
  }
  console.log("Server Started");
});
