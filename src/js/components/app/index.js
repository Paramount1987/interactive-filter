import data from '../data';
import dataFilter from '../data';

const APP = {
    data: data.apartments,
    filterList: [],
    dataFilter: dataFilter.filterItems,
    isMapVisible: false,

    domLoaded: function() {
        $(document).ready(function(){
            //hide preload
            setTimeout(function(){$('#preloader').fadeOut()},300);
        });
    },
}

export default APP;
