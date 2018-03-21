var appleName = 'Яблоки украинские';
var orangeName = 'Апельсины, Испания';

var applePrice = 12.50;
var orangePrice = 12.50;
var discount = 15;
var margin = 15;
var applePriceDiscount;
var orangePriceMargin;

applePriceDiscount = (applePrice - applePrice * (discount / 100)) * 100;
orangePriceMargin = (orangePrice + orangePrice * (margin / 100)) * 100;

applePriceDiscount = Math.round(applePriceDiscount) / 100;
orangePriceMargin = Math.round(orangePriceMargin) / 100;

var labelApple = `'${appleName}.\nцена: ${applePriceDiscount} грн'`;
var labelOrange = `'${orangeName}.
цена: ${orangePriceMargin} грн'`;

console.log(labelApple);
console.log(labelOrange);