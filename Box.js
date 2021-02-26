class Block extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.visibility = 255;
      this.flag=0;
    }

    display(){
      if(this.body.speed<3){
        super.display();
        this.flag=1;
        //console.log(this.body.speed);
       }
      
       else{
         World.remove(world, this.body);
         
         if(this.flag===1){
           score++
           this.flag=0;
         }

        //  push();
        //  this.visibility-=5;
        //  tint(255, this.visibility);
        //  rectMode(CENTER);
        //  rect(this.body.position.x, this.body.position.y, this.width, this.height);
        //  pop();
        }
     }
  
  };
  