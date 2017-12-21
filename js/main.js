document.addEventListener('DOMContentLoaded', function() {

var body = document.querySelector('body');
var button = document.querySelector('button');
var message = document.querySelector('.status');

button.addEventListener('click', function() {
  if (button.classList.contains('on'))
{
  button.classList.toggle('off');
  body.classList.toggle('dark');
  message.innerText = "Hey, who turned off the lights?";

}
else {

  button.classList.toggle('on');
  body.classList.toggle('light');
  message.innerText = "It\'s so bright in here!";
}


}


)



}
)
