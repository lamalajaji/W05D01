const express = require("express");
const app = express();
const port = 5000;
app.use(express.json());

const toDos = [
  {
    id: 1,
    task: "sleep",
    isCompleted: false,
  },
  {
    id: 2,
    task: "Code",
    isCompleted: false,
  },
  {
    id: 3,
    task: "Shopping",
    isCompleted: false,
  },
];

///// Display Data (GET / Read)
app.get("/toDoList", (req, res) => {
  res.status(200);
  res.json(toDos);
});

////Display specific Task (GET / Read)
app.get("/task", (req, res) => {
  const { id } = req.query;

  const found = toDos.find((ele) => {
    return ele.id == id;
  });

  if (found) {
    res.status(200);
    res.json(found);
  } else {
    res.status(404);
    res.send("there is no task!");
  }
});
///// Get a task by name 
app.get("/taskName", (req, res) => {
  const  task  = req.body.task;
console.log(task);
  const found = toDos.find((ele) => {
    return ele.task === task;
  });

  if (found) {
    res.status(200);
    res.json(found);
  } else {
    res.status(404);
    res.send("there is no task!");
  }
});


//// Add to Data (POST / create)
app.post("/newTask", (req, res) => {
  const { id, task, isCompleted } = req.body;
  toDos.push({ id, task, isCompleted });
//   req.json(req.body);
  res.status(200);
  res.json(toDos);
});


/// modifiction Completed tasks by task name (PUT / update)
app.put("/completed", (req, res) => {
  const task = req.body.task;
  toDos.map((ele) => {
    if (task == ele.task) {
      ele.isCompleted === true;
    }
  });
  res.status(200);
  res.json(toDos);
});


//// modifiction Completed tasks by task id (PUT / update)
app.put("/completedId", (req, res) => {
  const task = req.body.id;
  toDos.map((ele) => {
    if (task == ele.id) {
      ele.isCompleted === true;
    }
  });
  res.status(200);
  res.json(toDos);
});



//// delete specific Tasks (Delete)
app.delete("/deleted", (req, res) => {
  const deleted = req.query.id;
  toDos.map((ele) => {
    if (deleted === ele.id) {
      toDos.splice(ele, 1);
    }
  });
  res.status(200);
  res.json(toDos);
});

//// Clear ToDo List (Delete)
app.delete("/clear", (req, res) => {
  res.status(200);
  res.json((toDos.length = 0));
});

app.listen(port, () => {
  console.log(`server is running on ${port}`);
  console.log();
});
