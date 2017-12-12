const el = $('#main');
el.on('focus', function(){
  $('#search-store-select').addClass('age').removeClass('ega');
});
el.on('blur', function(){
  $('#search-store-select').removeClass('age').addClass('ega');
});
el.on('focus', function(){
  $('#lb-main').removeClass('no-display');
});
el.on('blur', function(){
  $('#lb-main').addClass('no-display');
});
const eli = $('#search-nav')
eli.on('focus', function(){
  $('#search-store-nav').addClass('age').removeClass('ega');
});
eli.on('blur', function(){
  $('#search-store-nav').removeClass('age').addClass('ega');
});
eli.on('focus', function() {
  $('#nav-history').removeClass('no-display');
})
eli.on('blur', function() {
  $('#nav-history').addClass('no-display');
})
