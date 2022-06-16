
number = "";
Vue.createApp({
    data(){
        return{
            tasks: [],
            valeurDeInput: '',
            testVariable: 'Je suis une variable !',
            testList : ["Numéro1","Numéro2","Numéro3"]
        };
    },
    methods: {
        ajouterTask(){
            this.tasks.push(this.valeurDeInput);
            this.valeurDeInput = "";
        },
        createNumber(){
            let number = Math.random();
            if(number >= 0.5){
                const result =  "Supérieur"
                console.log(result)
                return result;
            }else{
                const result =  "Inférieur"
                console.log(result)
                return result;
            }
        }
    },
}).mount("#app")