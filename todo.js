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
    },
}).mount("#app")