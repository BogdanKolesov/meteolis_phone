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
import MetarTaf from "../components/views/Codes/Codes.content/MetarTaf";
import Tech from "../components/views/Articles/Articles.content/Tech";
import CloudAtlas from "../components/views/Articles/Articles.content/Everything/Everything.content/CloudAtlas";
import Waiting from "../components/views/Calcs/Calcs.content/Thunder/Thunder.content/Waiting";
import Fateev from "../components/views/Calcs/Calcs.content/Thunder/Thunder.content/Fateev";
import Sweat from "../components/views/Calcs/Calcs.content/Thunder/Thunder.content/Sweat";
import Ki from "../components/views/Calcs/Calcs.content/Thunder/Thunder.content/Ki";
import Ippolitov from "../components/views/Calcs/Calcs.content/Vngo/Vngo.content/Ippolitov";
import VngoFormula from "../components/views/Calcs/Calcs.content/Vngo/Vngo.content/VngoFormula";
import Ferrel from "../components/views/Calcs/Calcs.content/Vngo/Vngo.content/Ferrel";
import Baily from "../components/views/Calcs/Calcs.content/Thunder/Thunder.content/Baily";


export const navigationStackData = [
    {
        name: 'Main',
        component: Main,
        options: { headerShown: false }
    },
    //???????????? ???? ?????????????? "????????????"
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
    {
        name: 'Tech',
        component: Tech,
        options: { headerShown: false }
    },
    //???????????? ???? ?????????????? "?????????????????? ????????????"
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
    //???????????? ???? ?????????????? "????????"
    {
        name: 'Metar/Taf',
        component: MetarTaf,
        options: { headerShown: false }
    },
    //EVERYTHING
    {
        name: 'CloudAtlas',
        component: CloudAtlas,
        options: { headerShown: false }
    },

    //CALCS
    //THUNDER
    {
        name: 'ThunderWaiting',
        component: Waiting,
        options: { headerShown: false }
    },
    {
        name: 'ThunderFateev',
        component: Fateev,
        options: { headerShown: false }
    },
    {
        name: 'ThunderSweat',
        component: Sweat,
        options: { headerShown: false }
    },
    {
        name: 'ThunderKi',
        component: Ki,
        options: { headerShown: false }
    },
    {
        name: 'ThunderBaily',
        component: Baily,
        options: { headerShown: false }
    },

    //VNGO
    {
        name: 'VngoFerrel',
        component: Ferrel,
        options: { headerShown: false }
    },
    {
        name: 'VngoIppolitov',
        component: Ippolitov,
        options: { headerShown: false }
    },
    {
        name: 'VngoFormula',
        component: VngoFormula,
        options: { headerShown: false }
    },

]
