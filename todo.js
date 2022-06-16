const  users = 
{
    imageSrc  :  "./images/avatar-ffd9220111e032068c768269ac6ce9b2.jpg",
    name : "Julie",
    age : 23,
    age10 : null,
    nbRandom : null,
};

number = "";
Vue.createApp({
    data(){
        return{
            users :
            {
                imageSrc  :  "./image/avatar-ffd9220111e032068c768269ac6ce9b2.jpg",
                name : "Julie",
                age : 23,
                age10 : null,
                nbRandom : null,
            }
        };
    },
    methods: {
        ajouterTask(){
            this.tasks.push(this.valeurDeInput);
            this.valeurDeInput = "";
        },
        createNumber(){
            let number = Math.random();
            return number;
        },
        add10(age){
            return age+10;
        }
    },
}).mount("#app")