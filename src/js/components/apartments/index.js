import APP from '../app';

import template from './template';

APP.apartments = {
    container: '.apartments-list',
    linkToRow: '#apartments-row',
    counterDiv: '.js-apartments__count',

    init: function(){
        var _this = this;
        $(document).ready(function(){
            APP.apartments.$list =  $(_this.container);

           _this.render(APP.data);

            $("a[href='" + _this.linkToRow + "']").on('shown.bs.tab', function () {
                APP.isMapVisible = false;
            });
        });
    },

    render: function(data){
       var _this = this;
       data.forEach(function(el){
           APP.apartments.$list.append(template.generateTemplate(el));
       });

       //--------counter
       var counter = data.length;
       var $counterDiv = $(_this.counterDiv);
       if(counter === 1){
           $counterDiv.text(counter + ' offer');
       }else{
           $counterDiv.text(counter + ' offers');
       }
    },

    updateApartments: function(){
        var _this = this;

        APP.apartments.$list.empty();

        if(!APP.filterList.length){
            _this.render(APP.data);
        }else{
            var filteredApartments = APP.data.filter(function(el){
                var status = true;
                for(var i = 0; i < APP.filterList.length; i++){
                    if(el.comfort.indexOf(APP.filterList[i]) == -1){
                        status = false;
                        break;
                    }
                }
                return status;
            });
            _this.render(filteredApartments);
        }
    }
}
