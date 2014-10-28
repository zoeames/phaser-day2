
var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create,update : update });

function preload(){
  game.load.spritesheet('button', 'assets/buttons/button_sprite_sheet.png', 193, 71);
  game.load.image('background','assets/misc/starfield.jpg');
}

var button, background;

function create(){
  game.stage.backgroundColor = '#cccccc';
  background = game.add.tileSprite(0, 0, 800, 600, 'background');
  button = game.add.button(game.world.centerX, game.world.centerY, 'button', actionOnClick, this, 2, 1, 0);
  button2 = game.add.button(game.world.centerX, game.world.centerY, 'button', actionOnClick, this, 2, 1, 0);
  button3 = game.add.button(game.world.centerX, game.world.centerY, 'button', actionOnClick, this, 2, 1, 0);
  button4 = game.add.button(game.world.centerX, game.world.centerY, 'button', actionOnClick, this, 2, 1, 0);
  button5 = game.add.button(game.world.centerX, game.world.centerY, 'button', actionOnClick, this, 2, 1, 0);
  button6 = game.add.button(game.world.centerX, game.world.centerY, 'button', actionOnClick, this, 2, 1, 0);
}

function actionOnClick(){
  background.visible =! background.visible;
}

function update(){
  button.angle += 1;
  button2.angle += 3;
  button3.angle += 5;
  button4.angle += 7;
  button5.angle -= 1;
  button6.angle -= 12;
}
