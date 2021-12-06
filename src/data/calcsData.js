import { BoltankaImage, FogImage, IceImage, NightImage, RainImage, ThunderImage, VngoImage, WindImage } from "../constants/images";

export const calcsData = [
    {
        category: 'Прогноз',
        point: 'Гроз',
        image: ThunderImage,
        link: 'Thunder'
    },
    {
        category: 'Прогноз',
        point: 'Туманов',
        image: FogImage,
        link: 'Fog'
    },
    {
        category: 'Прогноз',
        point: 'Высоты нижней границы облаков',
        image: VngoImage,
        link: 'Vngo'
    },
    {
        category: 'Расчёт',
        point: 'Скорости ветра',
        image: WindImage,
        link: 'WindSpeed'
    },
    {
        category: 'Прогноз',
        point: 'Болтанки',
        image: BoltankaImage,
        link: 'Turbulence'
    },
    {
        category: 'Прогноз',
        point: 'Обледенения',
        image: IceImage,
        link: 'Icing'
    },
    {
        category: 'Прогноз',
        point: 'Осадков',
        image: RainImage,
        link: 'Precipitation'
    },
    {
        category: 'Прогноз',
        point: 'температуры',
        image: NightImage,
        link: 'Temperature'
    }
]