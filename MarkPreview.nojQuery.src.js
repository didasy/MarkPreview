var MarkPreview = (function(Showdown) {
  
  var _obsEl, _targetEl, _event, _triggerEl,
      showdown = new Showdown.converter();
  
  return {
    
    observing: function(element) {
     
      _obsEl = document.querySelector(element);
      
      return this;
      
    },
    
    triggeredBy: function(e, element) {
      
      _event = e;
      
      _triggerEl = document.querySelector(element);
      
      return this;
      
    },
    
    renderTo: function(element) {
      
      _targetEl = document.querySelector(element);
      
      return this;
      
    },
    
    render: function() {

      _triggerEl.addEventListener(_event, function(e) {
        
        _targetEl.innerHTML = showdown.makeHtml(_obsEl.value);
        
      }, false);
     
      return this;
    }
    
  };
  
})(Showdown);