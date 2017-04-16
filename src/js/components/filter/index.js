import APP from '../app';


APP.filter = {
    checkbox: '.js-checkbox-filter',
    inputFilter: '.js-filter-search__input',
    filterControl: '.filter-search__control',
    filerTags: '.js-filter-tags',
    filterTag: '.js-filter-tag',
    filterSearchTags: '.js-filter-search__list-tags',
    filterSearchTag: '.js-search-filter-tag',
    filterSearchList: '.js-filter-search__list',
    filterSearchLi: 'js-search-filter-li',
    filteredList: [],

    init: function(){
        var _this = this;
        $(document).ready(function(){
            _this.checkboxChange();
            _this.filterTagClick();
            _this.focusInputFilter();
            _this.clickOutsideSearchList();
            _this.clickFilterSearchLi();
            _this.keyupInputFilter();
        });
    },

    focusInputFilter: function(){
        var _this = this;
        var $filterSearchList = $(_this.filterSearchList);
        $(_this.inputFilter).focus(function(){
            $(this).val('');
            $filterSearchList.addClass('is-active');
            _this.updateSearchFilterList();
        });

        $(_this.filterControl).click(function(e){
            if(e.target.className == 'filter-search__control' || e.target.className == 'icon-search'){
                setTimeout(function(){
                    $(_this.inputFilter).focus();
                },10);
            }
        });
    },

    clickOutsideSearchList: function(){
        var _this = this;
        var $list = $(_this.filterSearchList);

        $(document).click(function(e) {
            if (e.target.className !== _this.filterSearchLi) {
                if(e.target.id !== 'filter-input'){
                    $list.removeClass('is-active');
                }
            }
        });
    },

    clickFilterSearchLi: function(){
        var _this = this;

        $('body').on( 'click', '.' + _this.filterSearchLi, function(){
            var tagName = $(this).data('name');
            APP.filterList.push(tagName);

            $(_this.checkbox + "[value='" + tagName +"']").prop("checked",true);
            //-----------hide list
            $(_this.filterSearchList).removeClass('is-active');
            //----------clear input
            $(_this.inputFilter).val('');
            //------update new list tags
            _this.updateFilterTag();
            _this.updateSearchFilterTag();
            _this.updateSearchFilterList();
            //------update apartments
            APP.apartments.updateApartments();

            //-----------if map is init and visible
            if(APP.isMapVisible){
                APP.map.updateMarkers();
            }
        });
    },

    keyupInputFilter: function(){
        var _this = this;
        var $inputFilter = $(_this.inputFilter);
        var $filterSearchList = $(_this.filterSearchList);
        var $filterControl = $(_this.filterControl);

        $inputFilter.css('width', $filterControl.width() - 13  + 'px');

        $inputFilter.keyup(function(){
            $inputFilter.css('width', $inputFilter.val().length*6 + 10 + 'px');

            $filterSearchList.empty();

            _this.filteredList.forEach(function(el){
                if(el.toLowerCase().indexOf($inputFilter.val().toLowerCase()) >= 0){
                   $filterSearchList.append(`<li class="js-search-filter-li" data-name="${el}">${el}</li>`)
                }
            });
        });

    },

    checkboxChange: function(){
        var _this = this;

        $('body').on( 'change',_this.checkbox, function(){
            var $filter = $(this);
            var filterVal = $filter.val();

            if($filter.is(':checked')){
                APP.filterList.push(filterVal);
            }else{
                APP.filterList.splice(APP.filterList.indexOf(filterVal),1);
            }

            //------update new list tags
            _this.updateFilterTag();
            _this.updateSearchFilterTag();
            _this.updateSearchFilterList();
            //------update apartments
            APP.apartments.updateApartments();

            //-----------if map is init and visible
            if(APP.isMapVisible){
                APP.map.updateMarkers();
            }
        });
    },

    filterTagClick: function(){
        var _this = this;

        $('body').on( 'click', _this.filterTag + ',' + _this.filterSearchTag, function(){
            var tagName = $(this).data('name');
            APP.filterList.splice(APP.filterList.indexOf(tagName),1);

            $(_this.checkbox + "[value='" + tagName +"']").prop("checked",false);
            //------update new list tags
            _this.updateFilterTag();
            _this.updateSearchFilterTag();
            _this.updateSearchFilterList();
            //------update apartments
            APP.apartments.updateApartments();

            //-----------if map is init and visible
            if(APP.isMapVisible){
                APP.map.updateMarkers();
            }
        });
    },

    updateFilterTag: function(){
        var _this = this;
        var $filterTags = $(_this.filerTags);

        $filterTags.empty();
        APP.filterList.forEach(function(el){
           $filterTags.append(`<li class="js-filter-tag" data-name="${el}">${el}</li>`);
        });
    },

    updateSearchFilterTag: function(){
        var _this = this;
        var $filterTags = $(_this.filterSearchTags);
        var $inputFilter = $(_this.inputFilter);
        var $filterControl = $(_this.filterControl);

        $filterTags.empty();
        APP.filterList.forEach(function(el){
            $filterTags.append(`<li class="js-search-filter-tag" data-name="${el}">${el}</li>`)
        });

        if(APP.filterList.length != 0){
            $inputFilter.css('width', '10px');
            $inputFilter.attr("placeholder", "");
        }else{
            $inputFilter.css('width', $filterControl.width() - 13  + 'px');
            $inputFilter.attr("placeholder", "enter the names of amenities that you need in apartment");
        }
    },

    updateSearchFilterList: function(){
        var _this = this;
        var $filterSearchList = $(_this.filterSearchList);
        $filterSearchList.empty();
        _this.filteredList.length = 0;;

        APP.dataFilter.forEach(function(el){
           if(APP.filterList.indexOf(el) == -1){
               _this.filteredList.push(el);
               $filterSearchList.append(`<li class="js-search-filter-li" data-name="${el}">${el}</li>`)
           }
        });
    }
}
