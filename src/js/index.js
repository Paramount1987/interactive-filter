'use strict';

//------------------------------------------
import APP        from './components/app';

require('./components/tab');
require( './components/collapse');

require('./components/apartments');
require('./components/filter');
require('./components/map');
//--------------dom is loaded
APP.domLoaded();


//----------------components
APP.tab.init();
APP.collapse.init();

//--------------init apartments
APP.apartments.init();
APP.filter.init();
APP.map.init();
