document.addEventListener('DOMContentLoaded', function() {
  var summonKitties = document.querySelector('.summon-cats')
  var catBoxes = document.querySelectorAll('.cat-box')

  summonKitties.addEventListener('click', function() {
    $.ajax({
      url: 'http://bitkittens.herokuapp.com/cats.json',
      method: 'GET',
      data: {},
      dataType: 'JSON'
    })


    console.log('clerked');

  });
});
