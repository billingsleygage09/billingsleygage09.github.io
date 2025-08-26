$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(110,620,100,20)
    createPlatform(110,620,20,100)
    createPlatform(320,550,100,20)
    createPlatform(550,480,100,20)
    createPlatform(800,410,100,20)
    createPlatform(550,340,100,20)
    createPlatform(320,270,100,20)
    createPlatform(110,200,100,20)
    createPlatform(550,110,100,20)
    createPlatform(300,410,100,20)
    createPlatform(550,650,100,20)
    createPlatform(780,550,100,20)
    createPlatform(780,270,100,20)
    createPlatform(1000,350,100,20)
    // TODO 3 - Create Collectables
    createCollectable("steve", 150, 670);
    createCollectable("steve", 330, 370);
createCollectable("steve", 130, 160);

    
    // TODO 4 - Create Cannons
    createCannon("right", 700, 1500);
    createCannon("left", 350, 1500)
    createCannon("right", 225, 1500)
    
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
