var vm = new Vue ({
    el: '#root',
    data: {
      apiUrl: 'http://dicionario-aberto.net/search-json/',
      title: 'Tradutor Português anti-processo',
      inputText: ''
    },
    computed: {
      outputText: function(){
        return this.inputText.split(' ').join(' alegadamente ')
      }
    },
  methods: {
    getWord: function(e){
      
      $.get(this.apiUrl+this.inputText, function(data){
        console.log(data.entry.sense.gramGrp)
      });
      e.preventDefault();
    }
  }
    
});