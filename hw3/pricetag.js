var appleName = 'Яблоки украинские';
var orangeName = 'Апельсины, Испания';

var applePrice;       // Яблоки Цена
var applePriceTag;    // Яблоки Ценник 
var orangePrice;      // Апельсины Цена
var orangePriceTag;   // Апельсины Ценник 
var margin;           // Наценка магазина
var discount;         // Скидка

applePrice = 12.50;
orangePrice = 12.50;
discount = 15;
margin = 15;

applePriceTag = (applePrice - applePrice * (discount / 100)) * 100;
orangePriceTag = (orangePrice + orangePrice * (margin / 100)) * 100;

applePriceTag = Math.round(applePriceTag) / 100;
orangePriceTag = Math.round(orangePriceTag) / 100;

var labelApple = `'${appleName}.\nцена: ${applePriceTag} грн'`;
var labelOrange = `'${orangeName}.
цена: ${orangePriceTag} грн'`;

console.log(labelApple);
console.log(labelOrange);