const express   = require("express"),
      app       = express(),
      mongoose  = require("mongoose"),
      cors      = require("cors"),
      routes    = require("./routes/route"),
      port      = process.env.PORT||1000;


mongoose.connect("mongodb://localhost/test",
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

const db=mongoose.connection;
db.on("error",console.error.bind(console, "connection error: "));
db.once("open", () => {
    console.log("Database connected");
});


app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);



app.listen(port, function()
{
    console.log("Running on port "+port);
});