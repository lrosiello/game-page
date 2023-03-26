class EntrySquare extends Square {
    constructor(x, y, squareWidth, squareHeight, content, context) {
        super(x, y, squareWidth, squareHeight, content, context);
        this.color = "lightblue";
        this.selected = false;
    }

    setColor(color){
        this.color = color ;
    }

    isSelected(){
        return this.selected;
    }

    setSelected(value){
        this.selected = value;
    }

    draw() {              //se dibuja casillero
        let borderWidth = 3;
        var offset = borderWidth * 2;
        let context = this.ctx;

        //SE GENERA UNA IMAGEN
        let img = new Image();
        img.context = context;

        context.beginPath();
       
              //SE DIBUJA RECUADRO CELESTE DE FONDO
              let descripcion = "Insertar";
              context.fillStyle = this.color;
              context.fillRect(this.x - borderWidth, this.y - borderWidth, this.squareWidth + offset, this.squareHeight + offset);
              context.fillStyle = 'rgba(10, 70, 5, 0.1)';
              context.fillRect(this.x, this.y, this.squareWidth, this.squareHeight);
              context.fillStyle = "black";
      
              //SE CARGA LA IMAGEN DE LA FLECHA QUE SENIALA LA ENTRADA
              img.src = "img/insertar.png";
              context.drawImage(img, this.x + this.squareWidth / 4, this.y + this.squareHeight / 3, this.squareWidth / 2, this.squareHeight / 2);
              context.font = "16px Arial";
              context.fillText(descripcion, (this.x - 30) + this.squareWidth / 2, (this.y - 20) + this.squareHeight / 2);


    }

    checkSelected(x, y){  
        return x>this.x && x< this.x + this.squareWidth 
        && y>this.y && y < this.y+this.squareHeight;
    }

    


}