import { BoltankaImage, FogImage, IceImage, NightImage, RainImage, ThunderImage, VngoImage, WindImage } from "../constants";

export const calcsData = [
    {
        category: 'Прогноз',
        point: 'Гроз',
        image: ThunderImage,
        link: ''
    },
    {
        category: 'Прогноз',
        point: 'Туманов',
        image: FogImage,
        link: ''
    },
    {
        category: 'Прогноз',
        point: 'Высоты нижней границы облаков',
        image: VngoImage,
        link: ''
    },
    {
        category: 'Расчёт',
        point: 'Скорости ветра',
        image: WindImage,
        link: ''
    },
    {
        category: 'Прогноз',
        point: 'Болтанки',
        image: BoltankaImage,
        link: ''
    },
    {
        category: 'Прогноз',
        point: 'Обледенения',
        image: IceImage,
        link: ''
    },
    {
        category: 'Прогноз',
        point: 'Осадков',
        image: RainImage,
        link: ''
    },
    {
        category: 'Прогноз',
        point: 'Ночного понижения температуры',
        image: NightImage,
        link: ''
    }
]