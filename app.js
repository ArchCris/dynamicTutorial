//Selectors
const questionDom = document.querySelector('.question__question')
const responsesDom = document.querySelector('.question__responses')

//Counter
let questionCounter = 0

//Main function
const tutorialHandler = () => {
  questionCounter = 0
  displayQuestion() 
}

//Display function
const displayQuestion = (ref) => {
  console.log(questions[questionCounter])
  //clean fields
  questionDom.innerHTML = ''
  responsesDom.innerHTML = ''
  if(questions[questionCounter]==undefined){
    questionDom.innerHTML = 'The guide has finished'
  }else{
  //check
  if(Array.isArray(questions[questionCounter])){
    processArray(questions[questionCounter],ref)
  }else{
    processObject(questions[questionCounter])
  }
  questionCounter+=1
}
}

//process array
const processArray = (array,refe) =>{
  const selectedObject = array.filter(obj=>obj.ref==refe)[0]
  questionDom.innerHTML = selectedObject.question
  for (let i = 0; i < selectedObject.responses.length; i++) {
    responsesDom.innerHTML += `<li id=${selectedObject.responses[i].node} onclick='handleResponse(event)'>${selectedObject.responses[i].name}</li>`
  }
}

//process object, no options
const processObject = (object) =>{
  questionDom.innerHTML = object.question
  for (let i = 0; i < object.responses.length; i++) {
    responsesDom.innerHTML += `<li id=${object.responses[i].node} onclick='handleResponse(event)'>${object.responses[i].name}</li>`
  }
}

//Select option
const handleResponse = (event) =>{
  console.log(event.target.id)
  displayQuestion(event.target.id)
}

//Select option
const nodo = (name,node) =>{
  return {
    name:name,
    node:node
  }
}




//Data
let questions = [
    //1- Presentation
    {question:'Welcom to the PURE quotation guide',
     responses:[nodo('Start','a')]},
    //2- Type of project
    {ref:'a',
     question:'What are you going to quote?',
     responses:[nodo('Kitchen','b1'),nodo('Wardrobe','b2'),nodo('Furniture','b3')]},
    //3- Brand
    [
    {ref:'b1',
     question:'What brand are you going to use?',
     responses:[nodo('Arclinea','c1'),nodo('Arrital','c1')]},
    {ref:'b2',
     question:'What brand are you going to use?',
     responses:[nodo('Lema','c2')]},
    {ref:'b3',
     question:'What brand are you going to use?',
     responses:[nodo('Antonio Lupi','c3')]},
    ],
    //3- Specific software
    [
    {ref:'c1',
      question:'We need to use Py greco',
      responses:[nodo('Lets start with the first step','d1')]},
    {ref:'c2',
      question:'We need to use Compusoft',
      responses:[nodo('Lets start with the first step','d2')]},
    {ref:'c3',
      question:'We need to use the pricelist',
      responses:[nodo('Lets start with the first step','d3')]},
    ],
    //3- First step
    [
      {ref:'c1',
        question:'We need to use Py greco',
        responses:[{name:'Lets start',node:'d1'}]},
      {ref:'c2',
        question:'We need to use Compusoft',
        responses:[{name:'Lets start',node:'d2'}]},
      {ref:'c3',
        question:'We need to use the pricelist',
        responses:[{name:'Lets start',node:'d3'}]},
    ]
    
]

tutorialHandler()