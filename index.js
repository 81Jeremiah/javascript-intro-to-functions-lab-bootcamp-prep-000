function shout (string) {
  return string.UpperCase ();
}
function whisper (string) {
  return string.LowerCase ();
}
function logshout (string) {
  console.log (string.UpperCase);
}
function whisper (string) {
  console.log (string.LowerCase);
}
function sayHiToGrandma (string) {
  if (string.LowerCase() === string){
  return "I can\'t hear you!";
} 
else if (string.UpperCase() === string){
return "YES INDEED";
}
else {
return "I love you, too.";

}
}