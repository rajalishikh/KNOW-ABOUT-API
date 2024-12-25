shop={
    owner:'md raj Ali sheikh',
    address:{
        town:'Dhaka',
        location:'Mirpur',
        sector:'2',
    },
    products:["phone",'computer','Tab'],
    reenue:'45000',
    isOpen:true,
    isNew:false
}
let conert=JSON.stringify(shop)
console.log(conert)
let translate_obj=JSON.parse(conert)
console.log(translate_obj)