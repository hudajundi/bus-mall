' use strict ';
console.log('hello I am alive');



var leftSideImageElement = document.getElementById('left_item_img');   //same name im HTML page 
var centerSideImageElement = document.getElementById('center_item_img');
var rightSideImageElement = document.getElementById('right_item_img');
var imagesSection = document.getElementById('all_items'); // related to a function down , what is a section and why we use it ?

var currentLeftSideImage;
var currentCenterSideImage; 
var currentRightSideImage;

var totalClicks = 0; // to the loop down , we use it to limit the user clicks 


// All the Global var: to save the objects
var allItems = [];         // I need more explanation aboyt the arrays 
console.log(allItems);


// constructor
function ItemImage(itemName, link) {    // these proparities from the question 
  this.itemName = itemName;
  this.link = link;
  this.votes = 0;         // what?   vote = click
  this.timesDisplayed = 0;     //what?
  allItems.push(this);            // to put the results into an array 

}



//   // creating objects   : we add the imgs 

  new ItemImage('Bag','img/bag.jpg');      //Q: why we used "new"? to create the object with the arguments (name, link)
  new ItemImage('Banana','img/banana.jpg');
  new ItemImage('Bathroom','img/bathroom.jpg');
  new ItemImage('Boots','img/boots.jpg');
  new ItemImage('Brakfast','img/breakfast.jpg');
  new ItemImage('bubblegum','img/bubblegum.jpg');
  new ItemImage('Chair','img/chair.jpg');
  new ItemImage('Cthulhu','img/cthulhu.jpg');
  new ItemImage('Dog-duck','img/dog-duck.jpg');
  new ItemImage('Dragon','img/dragon.jpg');
  new ItemImage('Pen','img/pen.jpg');
  new ItemImage('Pet-sweep','img/pet-sweep.jpg');
  new ItemImage('Scissors','img/scissors.jpg');
  new ItemImage('shark','img/shark.jpg');
  new ItemImage('Sweep','img/sweep.png');
  new ItemImage('Tauntaun','img/tauntaun.jpg');
  new ItemImage('Unicorn','img/unicorn.jpg');
  new ItemImage('USB','img/usb.gif');
  new ItemImage('Water-can','img/water-can.jpg');
  new ItemImage('Wine-glass','img/wine-glass.jpg');





  function displayRandomImages(){
    var leftImageIndex;
    var centerImageIndex;
     var rightImageIndex;
    leftImageIndex = Math.floor((Math.random() * allItems.length));
     
    do {
      centerImageIndex= Math.floor((Math.random()* allItems.length));
    } while (centerImageIndex === leftImageIndex);

do {
      
       rightImageIndex= Math.floor((Math.random() * allItems.length));
    } while (rightImageIndex === centerImageIndex || rightImageIndex=== leftImageIndex);
     
// for (i=0 ; i< allItems.length; i++){
// allItems.pop(leftImageIndex,rightImageIndex,centerImageIndex),
// displayImages();
// allItems.push(leftImageIndex,rightImageIndex,centerImageIndex);
//}


    
displayImages(leftImageIndex,centerImageIndex, rightImageIndex);
  }; 
 






  function displayImages(leftIndex, centerIndex, rightIndex){
    currentLeftSideImage = allItems[leftIndex];              //??
    currentCenterSideImage = allItems[centerIndex];
    currentRightSideImage = allItems[rightIndex];
    currentLeftSideImage.timesDisplayed++;
    currentCenterSideImage.timesDisplayed++;
    currentRightSideImage.timesDisplayed++;
  
    leftSideImageElement.setAttribute('src',currentLeftSideImage.link);
    centerSideImageElement.setAttribute('src', currentCenterSideImage.link);
    rightSideImageElement.setAttribute('src',currentRightSideImage.link);
  }
  
  displayRandomImages();

  
  imagesSection.addEventListener('click',handleVote);



  function handleVote(event){
    var clickedImage;
  
    if(event.target.id === 'left_item_img'){ // we use this so the function tell me what image has shown 
      clickedImage = currentLeftSideImage;
    } else if(event.target.id === 'center_item_img'){
      clickedImage = currentCenterSideImage;
    } else if(event.target.id === 'right_item_img'){
      clickedImage = currentRightSideImage
    }
  
    if(clickedImage){
      clickedImage.votes++;
      displayRandomImages();
      totalClicks++;
    }
  
    if(totalClicks >= 25){
      imagesSection.removeEventListener('click',handleVote);     // to stop the loop = REMOVE EVENT 
      displayResults();
    }
  }

var resultsList = document.getElementById('finalResult');

  // why we use this function?

  function displayResults(){
    var listItem;
    for(var i = 0; i < allItems.length; i++){
      listItem = document.createElement('li');
      listItem.textContent =  allItems[i].itemName + ' had ' + allItems[i].votes+ '  votes and was shown ' +  allItems[i].timesDisplayed +' times ';
      resultsList.appendChild(listItem);
    }

    var allVote=[];
    for (var j=0; j< allItems.length;j++) {
     allVote.push(allItems[j].votes);   // That's how I add the values in an array 
    };
     var allName=[];
     for(var b=0; b< allItems.length ; b++) {
       allName.push(allItems[b].itemName);
       
     };
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: allName,
        datasets: [{
            label: '# of Votes',
            data: allVote , // I'll do a loop outside the chart so i can use this 
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: { 
        scales: {
            yAxes: [{ allVote,
                ticks: {  allName, 
                    beginAtZero: true
                }
            }]
        }
    }
});      // What happened here? we moved the chart inside the function because i want the results to appear after i'm done with my clicks 


  }


  // Banana Slicer had 3 votes and was shown 5 times 









// The Persange : 

document.getElementById('test').addEventListener('click', function(event){
  var per = event.timesDisplayed / this.votes * 100;
  alert(per);
});



     
//to ensure that the result dont repeat .. TRY to contiue lab 12 
// function renderNewItems() {

  
//   var irrit = [ItemImage.leftImageIndex, ItemImage.centerImageIndex, ItemImage.rightImageIndex];

//   do {

//     ItemImage.leftImageIndex= displayRandomImages();

//   } while (irrit.includes(ItemImage.leftImageIndex))

//   irrit.push(ItemImage.leftImageIndex);

//   do {

//     ItemImage.centerImageIndex = displayRandomImages();

//   } while (irrit.includes(ItemImage.centerImageIndex))

//   irrit.push(ItemImage.centerImageIndex);

//   do {

//     ItemImage.rightImageIndex = displayRandomImages();

//   } while (irrit.includes(ItemImage.rightImageIndex));



