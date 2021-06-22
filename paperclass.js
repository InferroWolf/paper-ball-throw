class PaperClass{
  constructor(x,y,width,height){
    var options={
    isStatic:false,
    restituion:0.5,
    friction:0.5,
    density:1.2
      }
      this.body=Bodies.rectangle(x,y,width,height,options);
      this.width=width;
      this.height=height;
      World.add(world,this.body);
  }
  display(){
    var loc=this.body.position;
    fill("white");
    rect(loc.x,loc.y,this.width,this.height);
  }
}