var katzDeliLine=[]
function takeANumber (katzDeliLine, customName){
  katzDeliLine.push(customName)
return `Welcome, ${customName}. You are number ${katzDeliLine.length} in line.`

}

function nowServing (katzDeliLine){
if (katzDeliLine.length>=1){
return `Currently serving ${katzDeliLine.shift()}.`
}
else{
return "There is nobody waiting to be served!"}
}

function currentLine(katzDeliLine){
  katzDeliLine=[]
  return katzDeliLine
}
