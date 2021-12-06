import Ornitology from "../components/views/Articles/Articles.content/Ornitology";
import Everything from "../components/views/Articles/Articles.content/Everything";
import Observer from "../components/views/Articles/Articles.content/Observer";
import Synoptic from "../components/views/Articles/Articles.content/Synoptic";
import Main from "../components/views/Main/Main";

export const navigationStackData = [
    {
        name: 'Main',
        component: Main,
        options: { headerShown: false }
    },
    //Данные из вкладки "Статьи"
    {
        name: 'Ornitology',
        component: Ornitology,
        options: { headerShown: false }
    },
    {
        name: 'Observer',
        component: Observer,
        options: { headerShown: false }
    },
    {
        name: 'Synoptic',
        component: Synoptic,
        options: { headerShown: false }
    },
    {
        name: 'Everything',
        component: Everything,
        options: { headerShown: false }
    },
    //Данные из вкладки "Расчётные методы"

]