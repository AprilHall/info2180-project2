"use strict";
var posX;
var posY;
var pieces;
window.onload = function()
{
  var puzzlearea = document.getElementById('puzzlearea');
  pieces = puzzlearea.getElementsByTagName('div');
  for (var i = 0; i < pieces.length; i++)
  {
    pieces[i].className = 'puzzlepiece';
    pieces[i].style.left = (i%4*100)+'px';
    pieces[i].style.top = (parseInt(i/4)*100) + 'px';
    pieces[i].style.backgroundPosition= '-' + pieces[i].style.left + ' ' + '-' + pieces[i].style.top;
    pieces[i].onmouseover = function()
    {
      if (moveCheck(parseInt(this.innerHTML)))
      {
        this.setAttribute('class', 'puzzlepiece movablepiece');
      }
    }

    pieces[i].onclick = function(){
      if (moveCheck(parseInt(this.innerHTML))){
        swap(this.innerHTML-1);
        if (finished()===true){
          setTimeout(function()
          {
          document.getElementsByTagName("H1")[0].setAttribute("id", "change");
          document.getElementById('change').innerHTML = ("YOU WON, CONGRATULATIONS");
          }, 500);
          setTimeout(function()
          {
          alert("The winning text will revert back to normal within ten seconds");
        }, 1000); 

          setTimeout(function()
          {
          document.getElementsByTagName("H1")[0].setAttribute("id", "change");
          document.getElementById('change').innerHTML = ("Fifteen Puzzle");
        }, 10000);




        }
        return;
      }
    }
  }

  posX = '300px';
  posY = '300px';

  var shufflebutton = document.getElementById('shufflebutton');
  shufflebutton.onclick = function()
  {
    for (var k = 0; k < 250; k++){
      var l = parseInt(Math.random()* 100) %4;
      if (l == 0){
        var temp = moveUp(posX, posY);
        if (temp != -1){
          swap(temp);
        }
      }
      if (l == 1){
        var temp = moveDown(posX, posY);
        if (temp != -1){
          swap(temp);
        }
      }
      if (l == 2){
        var temp = moveLeft(posX, posY);
        if (temp != -1){
          swap(temp);
        }
      }
      if (l == 3)
      {
        var temp = moveRight(posX, posY);
        if (temp != -1){
          swap(temp);
        }
      }
    }
  }
}
