import Ornitology from "../components/views/Articles/Articles.content/Ornitology";
import Main from "../components/views/Main/Main";

export const navigationStackData = [
    {
        name: 'Main',
        component: Main,
        options: { headerShown: false }
    },
    {
        name: 'Ornitology',
        component: Ornitology,
        options: { headerShown: false }
    },
]