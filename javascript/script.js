let app = new Vue({
    el:'#app',
    data:{

        images:[
            {
                img:'https://www.google.it/url?sa=i&url=https%3A%2F%2Fwww.archonia.com%2Findex.php%2Fde-de%2Fprodukt%2F367436%2Fkonosuba-season-01-ova-blu-ray&psig=AOvVaw1Y-UoHozhc3-KmTBdohyL8&ust=1631801833051000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPic69qVgfMCFQAAAAAdAAAAABAc',
                alt:'copertina anime Konosuba'
            },
            {
                img:'https://www.google.it/url?sa=i&url=https%3A%2F%2Fwww.chuvadenanquim.com.br%2F2021%2F05%2Fanunciada-4a-temporada-e-filme-de-overlord%2F&psig=AOvVaw2KFcx8pDKg4BTlehjGL7Zs&ust=1631802299315000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJDJyMyXgfMCFQAAAAAdAAAAABAw',
                alt:'copertina anime Overlord'
            },
            {
                img:'https://www.google.it/url?sa=i&url=https%3A%2F%2Fwww.animeuniverse.it%2Ftensei-shitara-slime-datta-ken-2-sub-ita-streaming-download%2F&psig=AOvVaw121ghZn6tdKlP7M8nbFB2V&ust=1631802485709000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPiFiZOYgfMCFQAAAAAdAAAAABAI',
                alt:'copertina anime Tensei shitara slime datta ken'
            },
            {
                img:'https://www.google.it/url?sa=i&url=https%3A%2F%2Fwww.animeclick.it%2Fanime%2F4286%2Fattack-on-titan&psig=AOvVaw0zjd8pFWIxTXia2RSUzROA&ust=1631802721916000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKj_uP-YgfMCFQAAAAAdAAAAABAJ',
                alt:'copertina anime L\'\'attacco dei giganti'
            },
            {
                img:'https://www.google.it/url?sa=i&url=https%3A%2F%2Fcartoonfun.jimdofree.com%2F2018%2F09%2F07%2Fsvelata-la-data-di-messa-in-onda-su-italia-2-di-my-hero-academia-in-1-tv%2F&psig=AOvVaw2bnrVgzvMp7Xv_vTfzTRg-&ust=1631803399321000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJDDxMKbgfMCFQAAAAAdAAAAABAi',
                alt:'copertina anime My Hero Academia'
            },
            {
                img:'https://www.google.it/url?sa=i&url=https%3A%2F%2Fwww.animeclick.it%2Fanime%2F22891%2Farifureta&psig=AOvVaw3xVz_VX4x9iH25qoAIFvzw&ust=1631803579277000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPiO0JicgfMCFQAAAAAdAAAAABAD',
                alt:'copertina anime Arifureta shokugyō de sekai saikyō'
            },
            
            
        ],

        imgIndex:0 ,
    },
    methods:{
        previousImage: function(){
            this.imgIndex -- ;
            if(this.imgIndex < 0){
                this.images.length = -1;
            }
        },
        nextImage: function(){
            this.imgIndex ++ ;
            if(this.imgIndex > this.images.length ){
                this.imgIndex = 0;
            } 
        }
    }
    
});