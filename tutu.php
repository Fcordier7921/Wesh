<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Un site en vuejs</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/vue@2.6.12"></script>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
</head>
<body>
    <div id="app">
    <nav>
    
    </nav>
    <div class="row">
    
    


    </div>
    <button v-on:click="UpdateAll()">mettre a jour</button>
        
    </div>


    
<script>
    let app= new Vue({
        el:'#app',
        data:{
            posts: []
        },
        methods:{
            UpdatePost(){
                axios.get('https://fakestoreapi.com/products').then(reponse => this.posts= reponse.data).catch(erreur => this.posts=[{title: "Erreur de chargement"}]);
            },
            UpdateAll(){
                axios.get('https://fakestoreapi.com/products').then(reponse => this.posts= reponse.data).catch(erreur => this.posts=[{title: "Erreur de chargement"}]);
                var div = document.createElement("div");
                var att=document.createAttribute("class");
                att.value="prod_box";
                div.setAttributeNode(att);
                
                
            }

        }
    })
</script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js" integrity="sha384-q2kxQ16AaE6UbzuKqyBE9/u/KzioAlnx2maXQHiDX9d4/zp8Ok3f+M7DPm+Ib6IU" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.min.js" integrity="sha384-pQQkAEnwaBkjpqZ8RU1fF1AKtTcHJwFl3pblpTlHXybJjHpMYo79HY3hIi4NKxyj" crossorigin="anonymous"></script>
</body>

</html>