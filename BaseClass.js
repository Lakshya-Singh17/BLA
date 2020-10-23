class baseClass {
    constructor(x,y,width,height){
        var options = {
            'restitution': 1.0,
            'isStatic': false,
            'density': 1.2,
            'friction': 1.0
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.Visibility = 255;
        World.add(world,this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill("blue");
        rectMode(CENTER);
        rect( 0, 0, this.width, this.height);
        pop();
    }
    Count(){
        if(this.Visibility < 0 && this.Visibility > -105){
            count ++;
        }
    }
}