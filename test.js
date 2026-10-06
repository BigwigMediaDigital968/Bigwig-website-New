const getuser = (id, callback)=>{
  fetch(`https://dummyjson.com/users/${id}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      callback(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

const addT

console.log("1");
getuser(2, (res)=>{
  console.log("hello ", res?.firstName);
  addToCart(res.id, [
      {
        id: 144,
        quantity: 4,
      },
      {
        id: 98,
        quantity: 1,
      },
    ], )
});
console.log("2")
