var appleName;
var orangeName;
var applePrice;         // Яблоки Цена
var applePriceTotal;    // Яблоки Ценник 
var orangePrice;        // Апельсины Цена
var orangePriceTotal;   // Апельсины Ценник 
var margin;             // Наценка магазина
var discount;           // Скидка
var labelApple;         // Ценник яблок
var labelOrange;        // Ценник апельсинов

appleName = 'Яблоки украинские';
orangeName = 'Апельсины, Испания';
applePrice = 15.50;
orangePrice = 15.50;
discount = 15;
margin = 15;

// Расчет цены апельсинов с учетом наценки магазина
orangePrice = orangePrice + orangePrice * (margin / 100);

// Расчет цены с/без скидки
applePriceTotal = (applePrice - applePrice * (discount / 100));
orangePriceTotal = (orangePrice - orangePrice * (discount / 100));

// Округление цены до 2 знаков после зпятой
applePriceTotal = Math.round(applePriceTotal * 100) / 100;
orangePriceTotal = Math.round(orangePriceTotal * 100) / 100;

// Формирование ценника
if (discount > 0) {
  labelApple = `'Скидка ${discount}%\n${appleName}.\nцена: ${applePriceTotal} грн'`;
  labelOrange = `'Скидка ${discount}%\n${orangeName}.\nцена: ${orangePriceTotal} грн'`;
} else {
  labelApple = `'${appleName}.\nцена: ${applePriceTotal} грн'`;
  labelOrange = `'${orangeName}.\nцена: ${orangePriceTotal} грн'`;
}

console.log(labelApple);
console.log(labelOrange);