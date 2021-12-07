import Ornitology from "../components/views/Articles/Articles.content/Ornitology";
import Everything from "../components/views/Articles/Articles.content/Everything";
import Observer from "../components/views/Articles/Articles.content/Observer";
import Synoptic from "../components/views/Articles/Articles.content/Synoptic";
import Main from "../components/views/Main/Main";
import Fog from "../components/views/Calcs/Calcs.content/Fog";
import Icing from "../components/views/Calcs/Calcs.content/Icing";
import Precipitation from "../components/views/Calcs/Calcs.content/Precipitation";
import Thunder from "../components/views/Calcs/Calcs.content/Thunder";
import Turbulence from "../components/views/Calcs/Calcs.content/Turbulence";
import Vngo from "../components/views/Calcs/Calcs.content/Vngo";
import WindSpeed from "../components/views/Calcs/Calcs.content/WindSpeed";
import Temperature from "../components/views/Calcs/Calcs.content/Temperature";
import MetarTaf from "../components/views/MetarTaf";

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
    {
        name: 'Fog',
        component: Fog,
        options: { headerShown: false }
    },
    {
        name: 'Icing',
        component: Icing,
        options: { headerShown: false }
    },
    {
        name: 'Precipitation',
        component: Precipitation,
        options: { headerShown: false }
    },
    {
        name: 'Thunder',
        component: Thunder,
        options: { headerShown: false }
    },
    {
        name: 'Turbulence',
        component: Turbulence,
        options: { headerShown: false }
    },
    {
        name: 'Vngo',
        component: Vngo,
        options: { headerShown: false }
    },
    {
        name: 'WindSpeed',
        component: WindSpeed,
        options: { headerShown: false }
    },
    {
        name: 'Temperature',
        component: Temperature,
        options: { headerShown: false }
    },
    //Данные из вкладки "Коды"
    {
        name: 'Metar/Taf',
        component: MetarTaf,
        options: { headerShown: false }
    },
]