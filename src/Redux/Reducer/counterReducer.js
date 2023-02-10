import * as actions from "../Actions/action";

export const countReducer = (state = 0, action) => {
    //action obyektdir, bu obyekt ile emrler yerine yetirecik
    /* yeni mes + a click edende get bu state-i artir */
    switch (action.type) { // action nin type prop-u var, bura bir type gonderecik, bura emrler gelecek.
        case actions.inc: // mes increment i yerine yetirecik
            // return ++state;
            return state += action.payload
            // break; 
        case actions.dec:
            // return --state;
            return state -= action.payload
        default: // burda da by default 0-i return etmeliyem, cunki hecne icra etmesem yeni incr veya decr etmesem by default ilk olaraq 0-i qaytarsin. 
        // Yeni ele state-e default olaraq 0 i vermisem sadece hec bir action olmayanda bunu qaytarsin.
            return state;
    }

// bu function state-i deyisdi bes bu state-i oxumaq ucun hara gondermeliyem. Tebiki store-a.
/* Diger components bunu store-dan goturub ues etmelidir.
    Indi rootReducer yaradaq.
*/
}
/*
burda state-in value-sunu componentde istfde edende gondere bilerik, action.payload ile. state += action.payload ve eksi.
Yeni action da yeni bir property olacaq, dispatch-de type, ile payload -da gonderecik. Bunlar tebiki prop adidir, istenilen adda vere bilerik.
*/