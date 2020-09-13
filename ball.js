class ball {
    constructor(x, y, radius) {
        var options = {
            'restitution':1.2,
            'friction':0.5,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.width = width;
        this.height = height;
        this.scale = 100.0
        this.image = loadImage("ball.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        ellipseMode(CENTER);
        ellipse(0, 0, this.radius);
        pop();
    }
}
