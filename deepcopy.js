let user={
    name:"divyang",
    age:27,
    address:{
        city:"delhi",
        pincode:11001
    }
};
    // let usercopy=JSON.parse(JSON.stringify(user));
    let usercopy=structuredClone(user);
    usercopy.address.city="mumbai";
    console.log(user);
    console.log(usercopy);