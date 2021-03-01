import {ieFix} from './utils/ie-fix';
import {iosVhFix} from './utils/ios-vh-fix';

import {initModals} from './modules/init-modals';
import {moveBlock} from './modules/move-block';
import {openAccordion} from './modules/open-accordion';

// Utils
// ---------------------------------

ieFix();
iosVhFix();

// Modules
// ---------------------------------

initModals();
moveBlock();
openAccordion();
