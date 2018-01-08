document.addEventListener('DOMContentLoaded', function() {
  var summonKitties = document.querySelector('.summon-cats')
  var catBoxes = document.querySelectorAll('.cat-box')

  summonKitties.addEventListener('click', function() {
    $.ajax({
      url: 'http://bitkittens.herokuapp.com/cats.json',
      method: 'GET',
      data: {},
      dataType: 'JSON'
    }).done(function(responseData) {
      var litter = responseData['cats']
      for (var i = 0; i < litter.length; i++) {
        var tagger = document.createElement('img');
        tagger.src = litter[i].photo;
        tagger.alt = litter[i].name;
        catBoxes[i].append(tagger);
      }
    });


    console.log('clerked');

  });
});
