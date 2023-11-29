// NAME: Elia Ahmad Alshaiban
// DATE:  21/11/23
// Assignment Title: Maze Runner

//Global variable that stores the grid
//Each element is a string representing a color, like "red" or "blue"
//This can be a nested array
// make array 21 by 21 size
// use snake code to do this
let board = [
["1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1"],
["1","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","1"],
["1","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","1"],
["1","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","1"],
["1","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","1"],
["1","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","1"],
["1","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","1"],
["1","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","1"],
["1","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","1"],
["1","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","1"],
["1","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","1"],
["1","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","1"],
["1","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","1"],
["1","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","9","1"],
["1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1"]];

//This sets up our grid
 
function start(){
	//TO DO: change this to setup the grid you want
	for(let y=0;y<board.length;y++)
 {
	for(let x=0;x<board[y].length;x++)
	{
		if(board[y][x]==".") AddBlock(x,y,"red");
	}
 }
	//Reset block array variable
	//blockArray = [];
	
	//Add a red block
	//blockArray.push("red");
	
	//Draw the block array
	drawBlockArray(board);

}

//Adds a block to the array
function addBlockToArray(){
	//TO DO: add a block to the array and draw the array
	//Add a red block
	blockArray.push("red");
	
	//Draw the block array
	drawBlockArray(blockArray);
}

//Add a block of random color
function addRandomColorBlocktoArray() {
	//TO DO: add a block(s) of a random color to the array
}

function createNestedArray() {
	//TO DO: Make the blockArray a 20 by 20 nested array
}

//Call this function to draw the blockArray
function drawBlockArray() {
	drawArray(board);
}

//Will trigger when user clicks a block, and returns block position in array
//Will only work with nested, two-dimensional arrays!
function blockClickedEvent(x,y){
	console.log(x,y);
}

//Main Loop - This loop will be run every 100 milliseconds (every 0.1 second)
//We can start and stop it by clicking the buttons on the html page
function MainLoop()
{
	console.log('Main loop running');
	
	//TO DO: Make the blockArray grid do something interesting here
	
}
