

new Vue({
          el:'#app',
          data:{
          post:'',
          posts: [],
          shop:[],
          shopprice:'',
          selected:'',
          selectedp:'',
          selectedsearch:'',
          showModal: false
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
                      return post.price >100
                    }
                  })
              }
                return tempRecipes 
                
                
            } 

            
          },
          methods:
          {
            Updaetshop(id, price)
              {//ajouter au panier
                this.shop.push(this.posts[id])
                localStorage.setItem("shop", JSON.stringify(this.shop));
              }
          },
         
    })