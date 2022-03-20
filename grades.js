let grades = [], sum = 0; finished = true;
for (let i = 0; i < 10; i++) {
    grades[i] = parseInt(Window.prompt("type grade"));
    sum += grades[i];
    if (grades[i] == 1) {
        console.log("failed");
        finished = false;
        break;
    }
}
if (finished) {
    console.log("passed");
    console.log("average grade: " + sum / 10);
}
