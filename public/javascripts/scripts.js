var rgbled;
var left = $('#js_left');
var right = $('#js_right');
var up = $('#js_up');
var down = $('#js_down');

boardReady({device: '10VPEGpQ'}, async function (board) {

  var pin0 = getLed(board, 0);
  var pin2 = getLed(board, 2);
  var pin4 = getLed(board, 4);
  
  board.samplingInterval = 250;
  rgbled = getRGBLedCathode(board, 15, 12, 13);
  rgbled.setColor('#009900');
  await delay(1);
  rgbled.setColor('#ff0000');
  await delay(1);

  $('#js_left').on("click", async function(){
      pin2.on();
      pin4.off();
  });
  $('#js_right').on("click", async function(){
    pin2.off();
    pin4.on();
});
$('#js_stop').on("click", async function(){
  pin2.off();
  pin4.off();
  pin0.off();
});
$('#js_fire').on("click", async function(){
  pin0.on();
});


});