const products = [
    {name:'rahyan' ,id:1111004, phone:'iphone'},
    {name:'sakl' ,id:1111004, phone:'iphone'},
    {name:'raki' ,id:1111004, phone:'iphone'},
    {name:'zaki' ,id:1111004, phone:'iphone'},
    {name:'taki' ,id:1111004, phone:'iphone'},
    {name:'kakin' ,id:1111004, phone:'iphone'},
    {name:'sakinan' ,id:1111004, phone:'iphone'},
    {name:'ranin' ,id:1111004, phone:'iphone'},
];

/* for(const product of products){
}
console.log(products); */

/* to search objects in lower cases  */

function matchedProducts (products, search){
    const matched=[];//to find same name and type products 
    for(const product of products){
        if(product.phone.toLowerCase().includes(search.toLowerCase()))//finding the products class and name objects and using includes to search any words 
        {
            matched.push(product)//when the search para is matched it will be pushed in the matched array 
        }
    }
    return matched;
}
const result = matchedProducts(products,'iphone');//giving the values in function parameter and searching out the values in objects
console.log(result);