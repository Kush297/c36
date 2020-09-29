class Form{
constructor(){
this.input=createInput("Name");
this.button=createButton('Play');
this.greeting=createElement('h2')
}
hide(){
    this.greeting.hide();
    this.input.hide();
    this.button.hide();
}
display(){
var title=createElement('h2');
title.html("car racing game");
title.position(200,0);

this.input.position(430,160);
this.button.position(450,200);
this.button.mousePressed(()=>{
    this.input.hide()
    this.button.hide()
    player.name=this.input.value();
    playerCount=playerCount+1;
    player.index=playerCount;
    player.update();
    player.updateCount(playerCount)
    this.greeting.html("hello"+ player.name)
    this.greeting.position(430,160)
})
}

}
