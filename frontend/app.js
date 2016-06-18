(function main() {
  var counterElement = document.getElementsByClassName('counter')[0];
  var image = document.getElementsByClassName('cat-image')[0];
  var counter = 0;

  image.addEventListener('click', function() {
    counter++;
    counterElement.innerHTML = counter;
    console.log('clicked');
  });
})();
