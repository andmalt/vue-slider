let app = new Vue({
    el:'#app',
    data:{

        images:[
            {
                img:'https://static.wikia.nocookie.net/voiceacting/images/0/0c/KonoSuba_God%27s_Blessing_on_this_Wonderful_World%21.jpg',
                alt:'copertina anime Konosuba'
            },
            {
                img:'https://www.animeclick.it/immagini/anime/Overlord/cover/Overlord-cover.jpg',
                alt:'copertina anime Overlord'
            },
            {
                img:'https://www.animeclick.it/immagini/anime/Tensei_Shitara_Slime_Datta_Ken/cover/Tensei_Shitara_Slime_Datta_Ken-cover.jpg',
                alt:'copertina anime Tensei shitara slime datta ken'
            },
            {
                img:'https://www.animeclick.it/immagini/anime/Attack_on_Titan/cover/Attack_on_Titan-cover.jpg',
                alt:'copertina anime L\'\attacco dei giganti'
            },
            {
                img:'https://image.jimcdn.com/app/cms/image/transf/dimension=1000x10000:format=jpg/path/sbba6be86150f7b6a/image/i1298e5a1f9974945/version/1536315368/image.jpg',
                alt:'copertina anime My Hero Academia'
            },
            {
                img:'https://www.animeclick.it/immagini/anime/Arifureta/cover/Arifureta-cover.jpg',
                alt:'copertina anime Arifureta shokugyō de sekai saikyō'
            },
            
            
        ],

        imgIndex: 0 ,
    },
    methods:{
        previousImage: function(){
            this.imgIndex -- ;
            if(this.imgIndex < 0){
                this.imgIndex = this.images.length -1 ;
            }
        },
        nextImage: function(){
            this.imgIndex ++ ;
            if(this.imgIndex >= this.images.length ){
                this.imgIndex = 0;
            } 
        },
        clickImage: function(imgIndex){
            this.imgIndex = imgIndex;
        }
    }
    
});