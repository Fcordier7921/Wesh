new Vue({
          el:'#app',
          data:{
          post:'',
          posts: [],
          shop:[],
          detail:[],
          detalbool:true,
          detalindex: '',
          shopprice:'',
          selected:'',
          selectedp:'',
          selectedsearch:'',
          showModal: false,
          showModal2: false,
          ht:0,
          tva:0,
          ttc:0
          
          },
          
          mounted(){
            
            axios.get('https://fakestoreapi.com/products').then(reponse => this.posts= reponse.data).catch(erreur =>this.posts=[{title: "Erreur de chargement"}]);
            

            if(localStorage.getItem('shop'))
            {
      
            this.shop=JSON.parse(localStorage.getItem('shop'));
            }
            
          },
          computed:
          {
            
            filteredRecipes() 
            {
              let tempRecipes = this.posts
              
              // Process search input
              if (this.selectedsearch != '' && this.selectedsearch) //barre de recherche
              {
                  tempRecipes = tempRecipes.filter((post) => 
                  {
                    return (post.title
                      .toUpperCase()
                      .includes(this.selectedsearch.toUpperCase())) || (post.description
                        .toUpperCase()
                        .includes(this.selectedsearch.toUpperCase()));
                  })
              }
              if (this.selected != '' && this.selected) // selection par catégorie
              {
                  tempRecipes = tempRecipes.filter((post) => 
                  {
                    return post.category === this.selected;
                  })
              }
              if (this.selectedp != '' && this.selectedp) //selection par prix
              {
                  tempRecipes = tempRecipes.filter((post) => 
                  {
                    if((this.selectedp) == 10 )
                    {
                      return post.price <=10;
                    }
                    if((this.selectedp) == 50 )
                    {
                      return (post.price >=10) && (post.price <=50)
                    }
                    if((this.selectedp) == 51 )
                    {
                      return (post.price >=50) && (post.price <=100)
                    }
                    if((this.selectedp) == 101 )
                    {
                      localStorage.setItem("posts", JSON.stringify(this.posts));
                      return post.price >100
                    }
                  })
              }
                return tempRecipes;

                
                
            }, 

            Addprice(){

                  let somme =0;
                  for( let i=0; i< this.shop.length; i++){
                    somme += (this.shop[i].price) * (this.shop[i].quantity)
          
                  this.ht = somme;
                  return this.ht.toFixed(2);
                
                }
              },
              addtva(){

                  this.tva= (this.ht * 0.2);
                  return this.tva.toFixed(2)
              },
              addttc(){
                
                return (this.ht+ this.tva).toFixed(2);
              }  
          },
          methods:
          {

            Updaetshop(id)
              {//ajouter au panier
                this.shop.push({
                  title:this.posts[id].title,
                  image: this.posts[id].image,
                  price: this.posts[id].price,
                  quantity: 1
                })
                localStorage.setItem("shop", JSON.stringify(this.shop));
              },

            toggleModale()
              {
                this.showModal = !this.showModal;
              },
              toggleModale2()
              {
                this.showModal2 = !this.showModal2;
              },
            dellShop(id)
            {
              this.shop.splice(id, 1);
              if(this.shop.length <1){
                this.ht =0;
              }
              localStorage.setItem("shop", JSON.stringify(this.shop));
            },
            addQuantity(id)
            {
              let allqt= this.shop[id].quantity;
              let vueqt= allqt +1;
              this.shop[id].quantity= vueqt
              localStorage.setItem("shop", JSON.stringify(this.shop));              
            },
            dellQuantity(id)
            {
              if((this.shop[id].quantity) >1)
              {
              let allqt= this.shop[id].quantity;
              let vueqt= allqt -1;
              this.shop[id].quantity= vueqt
              localStorage.setItem("shop", JSON.stringify(this.shop)); 
              }else{
                this.shop.splice(id, 1);
                this.ht=0;
                localStorage.setItem("shop", JSON.stringify(this.shop));
              }           
            },
            deatailFuction(id){
 
              this.detail.push({
                title:this.posts[id].title,
                image: this.posts[id].image,
                price: this.posts[id].price,
                quantity: 1,
                description: this.posts[id].description
              })
              this.detalindex = id;
              this.detalbool = !this.detalbool;

            },
            refrech(){
              document.location.reload();
            }
            
          }
         
    })