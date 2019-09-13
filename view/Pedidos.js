class Pedidos{

    pedidos = [];
    fecha;
    total;
    tiempoDeEntrega;
    lastIndex;

    constructor (){
        this.lastIndex = 0;
    }

    adicionarPlatoPedido(plato){
        if(lastIndex != 0){
            this.lastIndex = this.lastIndex + 1;
        }
        
        pedidos[this.lastIndex] = plato;
        this.total = this.total + plato.precio;
    
    }

}