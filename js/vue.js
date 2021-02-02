new Vue({
          el:'#app',
          data:{
          post:'',
          posts: [],
          shop:[],
          selected:'',
          selectedp:''
          },
          mounted(){
            if(localStorage.getItem('posts')){
            this.posts=JSON.parse(localStorage.getItem('posts'));
            }
          },
          methods:{
              UpdatePost(){//appelle de la base de donné
              axios.get('https://fakestoreapi.com/products').then(reponse => this.posts= reponse.data).catch(erreur =>this.posts=[{title: "Erreur de chargement"}]);
              localStorage.setItem("posts", JSON.stringify(this.posts));

              },
              Updaetshop(index){//ajouter au panier
                this.shop=posts.index;
                localStorage.setItem("shop", JSON.stringify(this.shop));
              }
          }
    })
    