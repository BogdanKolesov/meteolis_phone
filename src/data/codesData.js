import { KMI85Image, KNImage, MetarImage } from "../constants/images";

export const CodesData = [
    {
        category: 'Metar/Taf',
        point: 'Приём и раскодирование',
        image: MetarImage,
        link: 'Metar/Taf'
    },
    {
        category: 'КН-01',
        point: 'Кодирование и раскодирование',
        image: KNImage,
        link: 'Metar/Taf'
    },
    {
        category: 'КМИ-85',
        point: 'Кодирование и раскодирование',
        image: KMI85Image,
        link: 'Metar/Taf'
    },
]