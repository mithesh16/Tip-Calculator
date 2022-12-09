
const billtotalinput=document.getElementById('billTotalInput')
const tipinput=document.getElementById('tipInput')
const numberofpeople=document.getElementById('numberOfPeople')
const perpersontotal=document.getElementById('perPersonTotal')


 let numofpeople=Number(numberofpeople.innerText)

const calculateBill = () => {

  let bill=Number(billtotalinput.value)
  let tip=Number(tipinput.value)/100
  let totalamount=bill + (bill*tip)
 
  let perpersonamt= totalamount/numofpeople

  perpersontotal.innerText=   `$${perpersonamt.toFixed(2)}` 
}


const increasePeople = () => {
 
  numofpeople+=1
  numberofpeople.innerText=numofpeople
  calculateBill() 

  
  
}

const decreasePeople = () => {
  
  if(numofpeople==1){
    alert ("PEOPLE SHOULD BE GREATER THAN 1")
    return 
  }
  numofpeople-=1
  numberofpeople.innerText=numofpeople
  calculateBill() 
  }


  
