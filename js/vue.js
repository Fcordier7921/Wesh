new Vue({
          el:'#app',
          data:{
          post:'',
          posts: [],
          shop:[],
          selected:'',
          selectedp:'',
          selectedsearch:'',
          showModal: false
          },
          mounted(){
            if(localStorage.getItem('posts')){
            this.posts=JSON.parse(localStorage.getItem('posts'));
            }else if(localStorage.getItem('shop')) {
              this.posts=JSON.parse(localStorage.getItem('shop'));
            }
          },
          methods:{
              UpdatePost(){//appelle de la base de donné
              axios.get('https://fakestoreapi.com/products').then(reponse => this.posts= reponse.data).catch(erreur =>this.posts=[{title: "Erreur de chargement"}]);
              localStorage.setItem("posts", JSON.stringify(this.posts));

              },
              Updaetshop(id){//ajouter au panier
                this.shop.push(this.posts[id]);
                localStorage.setItem("shop", JSON.stringify(this.shop));
              }
          }
    })
    