if (jQuery) {
    console.log('jQuery est correctement défini')
  } else {
    console.log('Il y a un souci dans la définition de jQuery')
  }

$('h1').css('color', 'green')
$('h2').first().css('font-style', 'italic').text('Mes meilleurs articles')