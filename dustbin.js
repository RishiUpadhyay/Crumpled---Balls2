class Dustbin {
constructor(x,y,width,height,color) {
    var options = {
        isStatic: true
    }

    
    this.width = width;
    this.height = height;
    this.color = color;
    this.image = loadImage("dustbingreen.png");
    this.body = Bodies.rectangle(x,y,width,height,options);
    World.add(world,this.body);
   
}

display() {
    push()
    rectMode(CENTER);
    translate(this.body.position.x,this.body.position.y)
    fill(this.color);
    //rect(this.body.position.x,this.body.position.y,this.width,this.height);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop()
    
}
}