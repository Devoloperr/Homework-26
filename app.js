let user = prompt("Bosluqla 5 random eded daxil edin:");
let arr = [user.split(" ")];
if (arr[0][0] < arr[0][1] && arr[0][0] < arr[0][2] && arr[0][0] < arr[0][3] && arr[0][0] < arr[0][4]) {
    console.log(arr[0][0]);
} else if (arr[0][1] < arr[0][0] && arr[0][1] < arr[0][2] && arr[0][1] < arr[0][3] && arr[0][1] < arr[0][4]) {
    console.log(arr[0][1]);

} else if (arr[0][2] < arr[0][0] && arr[0][2] < arr[0][1] && arr[0][2] < arr[0][3] && arr[0][2] < arr[0][4]) {
    console.log(arr[0][2]);

} else if (arr[0][3] < arr[0][0] && arr[0][3] < arr[0][1] && arr[0][3] < arr[0][2] && arr[0][3] < arr[0][4]) {
    console.log(arr[0][3]);

}else if (arr[0][4] < arr[0][0] && arr[0][4] < arr[0][1] && arr[0][4] < arr[0][2] && arr[0][4] < arr[0][3]) {
    console.log(arr[0][4]);
}