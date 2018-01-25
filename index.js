function shout (string) {
  return string.upperCase ();
}
function whisper (string) {
  return string.lowerCase ();
}
function logshout (string) {
  console.log (string.upperCase);
}
function whisper (string) {
  console.log (string.lowerCase);
}
function sayHiToGrandma (string) {
  if (string.lowerCase() === string){
  return "I can\'t hear you!";
} 
else if (string.upperCase() === string){
return "YES INDEED";
}
else {
return "I love you, too.";

}
}