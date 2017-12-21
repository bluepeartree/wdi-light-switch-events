document.addEventListener('DOMContentLoaded', function() {

var body = document.querySelector('body');
var button = document.querySelector('button');
var message = document.querySelector('.status');

button.addEventListener('click', function() {
  if (button.classList.contains('on'))
{
  button.classList.add('off');
  button.classList.remove('on');
  body.classList.add('dark');
  body.classList.remove('light');
  message.innerText = 'Hey, who turned off the lights?';

}
else {

  button.classList.add('on');
  button.classList.remove('off');
  body.classList.add('light');
  body.classList.remove('dark');
  message.innerText = 'Its so bright in here!';
}


}


)



}
)
