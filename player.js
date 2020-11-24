class Player{

    constructor(){
        this.gender = null
        this.name = null
        this.Sprite = createSprite(500,500,43,49);
        this.Image = loadImage("Images/boy.png");
    }
    display(){
        this.Sprite.addImage(this.Image);
        this.Sprite.x = mouseX;
        this.Sprite.y = mouseY;

    }




}