const {Movie, moviesArray} = require("./utils");

const app = (args) =>{
    switch(args[2]) {
        case "add":
            const movie1 = new Movie(args[3], args[4], args[5], args[6])
            const movie2 = new Movie(args[7], args[8], args[9], args[10])
            movie1.add();
            movie2.add()
            console.log(moviesArray);
            break;
        default:
            console.log("Incorrect command");
    }
};

app(process.argv);