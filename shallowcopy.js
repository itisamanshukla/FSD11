// let user={
//     name:"divyang",
//     age:27,
//     address:{
//         city:"delhi",
//         pincode:11001
//     }

// };
// // let usercopy={...user};
// let usercopy=Object.assign({},user);
// usercopy.address.city="mumbai";
// console.log(user);
// console.log(usercopy);

//array shallow copy
// let arr=[1,2,3];
// let arrcopy=[...arr];
// arrcopy[0]=10;
// console.log(arr);
// console.log(arrcopy);

//shallow copy only works for nested objects like address, as they have the same memory reference

// let user=[
//     {
//         name:"d"
//     },
//     {
//         name:"a"
//     }
// ];
// let usercopy={...user};
// usercopy[0].name="aman";
// console.log(user);