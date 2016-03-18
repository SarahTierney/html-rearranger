var $h1A = $('<h1>');
var $body = $('<body>');
var $ulA = $('<ul>');
var $h1B = $('<h1>');
var $ulB = $('<ul>');

$h1A.html('Below ground veggies');
$body.append($h1A);
$body.append($ulA);
$h1B.html('Above ground veggies');
$body.append($h1B);
$body.append($ulB);

$('ul li').each(function () {
  if ($(this).hasClass('below')){
    $ulA.append($(this));
  } else {
    $ulB.append( )
  }
})
