
const shopA = [200, 800, 4, 300,700, 3000, 6547, 4579, 7654];

const shopB = [567, 5333, 5789,32729, 8432, 4172, 6422, 543];

const combined =  shopA.concat(shopB);


let max = combined[0];
let min = combined[0];

for(let index = 0; index < combined.length; index++){
    if(combined[index] > max){
        max = combined[index]
    }else if(combined[index] < min ){
        min = combined[index]
    }
}
console.log('Maximum Value =',max);
console.log('Minimum value =',min);

const shop_C = shopA.concat(shopB);

console.log("Shop A and Shop B combined in Shop C [] = ", shop_C);

function searchSales(sale){
    let found = false;
   for(let index = 0; index < shop_C.length; index++ ){
    
    if(shop_C[index] === sale){
        found = true
        break;
    } 
   }

   if (found === true){
    return sale;
   }else{
    return 'Sale not found'
   }
}

console.log(searchSales(32729));
console.log(searchSales(500))

function totalSales(...shopSales){
    let totalSales = 0;
    for(let index = 0; index < shopSales.length; index++){
         totalSales += shopSales[index]
    }
   return console.log('Total Sales = ', totalSales);
}


totalSales(...shopA, ...shopB)


