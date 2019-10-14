    var express = require("express");
    var _ = require("lodash");
    var app = express();
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        next();
    });
    var todos = [
        {
            id: 1,
            desc: "learn node"
        }
    ];
    var visitors = [];
    var visitorId = 0;
    var id = 1;
    app.get("/", function (req, res) {
        res.send("Hey Deepak!");
    });

    app.get("/todos", function (req, res) {
        res.json(todos);
    });

    app.post("/todos", function (req, res) {
        let todo = {
            id: ++id,
            desc: req.body.desc
        };
        todos.push(todo);
        res.json(todo);
    });

    app.get("/todos/:id", function (req, res) {
        let todo = _.find(todos, todo => todo.id === parseInt(req.params.id));
        res.json(todo || {});
    });

    app.delete("/todos/:id", function (req, res) {
        todos = todos.filter((todo) => todo.id !== parseInt(req.params.id))
        res.json({ status: 1 });
    });

    app.put("/todos/:id", function (req, res) {
        for (var i = 0; i < todos.length; i++) {
            if (todos[i].id === parseInt(req.params.id)) {
                todos[i].desc = req.body.desc;
            }
        }
        res.json({ status: 1 });
    });

    //------------start visitor api--------
    app.get("/visitors", function (req, res) {
        res.json(visitors);
    });

    app.post("/visitors", function (req, res) {
        let visitor = {
            id: ++visitorId,
            name: req.body.name,
            intime: req.body.intime
        };
        visitors.push(visitor);
        res.json(visitor);
    });
    //------------End visitor api--------
    app.listen(5000, function () {
        console.log("listing on localhost:5000");
    });
    