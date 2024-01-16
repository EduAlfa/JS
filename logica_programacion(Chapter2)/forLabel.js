let array1 = ["María", "Josefa", "Roberta"];
let array2 = ["Pedro", "Marcelo", array1, "josephina"];

forRancio:
for (array in array2) {
    if (array == 2 ) {
        for (let array of array1) {
            document.write(array + "<br>");
            if (array == "María") {
                continue forRancio;
            }
        }
    } else {
        document.write(array2[array]);
    }
}