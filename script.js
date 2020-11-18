//challenge 1: Your Age in Days

function ageInDays() {

  let birthYear = prompt('What year were you born ... Good friend?');
  var ageInDays = (2020 - birthYear) * 365;
  var h1 = document.createElement('h1');
  var textAnswer = document.createTextNode('You are' +  ageInDays + 'days' );
  h1.setAttribute('id', 'ageInDays');
  h1.appendChild(textAnswer);
  document.getElementById('flex-box-result').appendChild(h1);

}

function reset() {
    document.getElementById('ageInDays').remove();
}

function generateCat(){
  var image = document.createElement('img');
  var div = document.getElementById('flex2');
  image.src = "https://cdn2.thecatapi.com/images/63.gif";
  div.appendChild(image);


}

function removeCat(){
  document.getElementById('flex2').remove();
}

