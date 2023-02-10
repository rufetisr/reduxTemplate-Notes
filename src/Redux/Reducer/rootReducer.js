/* butun reducer lari yigib aparir store -a verir.
bizde counterReducer 1 dene count state-i ucundur. Ola bilerki cox state olsun onda o qeder reducer yaratmaliyiq.
Butun reducer lari yigib store-a vermek ucun combineReducers dan use edecik.
bu rootReducer de object kimi yaradaq, butun reducerleri oturmek ucun, 
Reducer-i import edek, ve bir prop-a assign edek.
Yeni countReducer-in return etdiyi value-nu store-da counter adi altinda saxla
*/

import { combineReducers } from "redux";
import {  countReducer } from "./counterReducer";


export const rootReducer = combineReducers({
    counter: countReducer, // artiq state-miz counter adi ile store da saxlandi
// basqa reducer lari da yaza bilerik
})

/* Reducer i store da saxlamaq ucun 
store.js de import edirik rootReducer-i ve
 butun reducerlari saxlamis olduq */
 // indi bu counter state-ni use etmek ucun hansisa componentde useSelector adli