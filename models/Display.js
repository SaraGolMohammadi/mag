class Display {
    constructor(parent,products){
        this.parent = parent;
        this.products = products;
        this.parent.addEventListener("click", this);
    }
    showProducts() {
        this.toShow= [...new Set(this.products)];
        this.parent.innerHTML="";
          this.toShow.forEach((product) => {
            const qty= this.products.filter(p => p.id==product.id).length;
             this.createCard(product,qty)
          });
          this.calculateTotalprice();
        }
        createCard(data,qty){
            const cardEle =document.createElement("div");
             
            const imgEle=this.productImg(data);
            const infoEle=this.productInfo(data);
            
      
            cardEle.innerHTML=imgEle;
            cardEle.innerHTML+=infoEle;

            if(this.constructor.name ==="Cart"){
                const controlEle=this.productControl(data,qty);
                cardEle.innerHTML+=controlEle;
            }
            // console.dir(this.constructor);
            this.parent.appendChild(cardEle);
            }
            productImg(data){
                const { image, alt } = data;
                const imgjsx = `<img alt="${alt}" src="${image}"/>`;
                return imgjsx;
              }
}
export default Display;