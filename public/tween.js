var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'tween', { preload: preload, create: create });


function preload(){
	game.load.image('sky', 'assets/skies/sky2.png');
	game.load.image('ground', 'assets/textures/wetstone.png');
	game.load.image('cloud1', 'assets/tests/cloud-big.png');
	game.load.image('cloud2', 'assets/tests/cloud-narrow.png');
	game.load.spritesheet('rain', 'assets/sprites/rain.png', 17, 17);
  game.load.spritesheet('ms', 'assets/sprites/metalslug_mummy37x45.png', 37, 45, 18);
}

function create() {
	game.add.image(0, 0, 'sky');

  platforms = game.add.group();
  platforms.enableBody = true;
  var ground = platforms.create(0, game.world.height - 64, 'ground');
  ground.scale.setTo(2, 2);
  ground.body.immovable = true;

  var cloud1 = game.add.image(0, 0, 'cloud1');
  var cloud2 = game.add.image(100, 150, 'cloud2');

  var emitter = game.add.emitter(game.world.centerX, 0, 400);
	emitter.width = game.world.width;
	emitter.makeParticles('rain');
	emitter.minParticleScale = 0.1;
	emitter.maxParticleScale = 0.5;
	emitter.setYSpeed(300, 500);
	emitter.setXSpeed(-5, 5);
	emitter.minRotation = 0;
	emitter.maxRotation = 0;
	emitter.start(false, 1600, 5, 0);


  sprite = game.add.sprite(40, 500, 'ms');
  sprite.animations.add('walk');
  sprite.animations.play('walk', 50, true);

  game.add.tween(sprite).to({ x: game.width }, 10000, Phaser.Easing.Linear.None, true);
  game.add.tween(cloud1).to({ x: game.width }, 15000, Phaser.Easing.Linear.None, true);
  game.add.tween(cloud2).to({ x: game.width }, 5000, Phaser.Easing.Linear.None, true);
}
