class boxx  extends baseClass {
    constructor(x,y){
        super(x,y,40,40);
        this.Visibility = 255;
        this.image = loadImage("sprites/squareBlue.png");
        
    }
    display(){
        if(this.body.speed < 6){
            super.display();
            
        }
        else{
            World.remove(world, this.body);
            push();
            this.Visiblity = this.Visiblity - 5;
            tint(255,this.Visiblity);
            image(this.image, this.body.position.x, this.body.position.y, 40, 40);
            pop();
        }
           
    }
}