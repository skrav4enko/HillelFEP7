var log = console.log;

var strPart1 = "It's beautiful day.";
var strPart2 = 'I like "free day".';

var str1 = "It's beautiful day. I like \"free day\".";  // Quotation Mark
var str2 = 'It\'s beautiful day. I like "free day".';   // Apostrophe
var str3 = `It's beautiful day. I like "free day".`;    // Grave Accent
var str4 = "It\u0027s beautiful day. I like \u0022free day\u0022."; // Using Unicode
var str5; // Concatenation

str5 = strPart1 + " " + strPart2;

log('1. ' + str1);
log('2. ' + str2);
log('3. ' + str3);
log('4. ' + str4);
log('5. ' + str5);