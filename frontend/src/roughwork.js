const newObj = {
  name: "Rose",
  age: 30
}
const photoArray = [];
//photoArray.push(newObj);

const newArray = photoArray.map((item) => {
  photoArray.push(newObj)
})
console.log(newArray);
