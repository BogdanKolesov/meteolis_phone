import { BirdImage, BookImage, SynopImage, WatcherImage } from "../constants/images";

export const articlesData = [
    {
        category: 'Статьи',
        point: 'Для метеонаблюдателей',
        image: WatcherImage,
        link: 'Observer'
    },
    {
        category: 'Статьи',
        point: 'Для синоптиков',
        image: SynopImage,
        link: 'Synoptic'
    },
    {
        category: 'Статьи',
        point: 'Для всех',
        image: BookImage,
        link: 'Everything'
    },
    {
        category: 'Орнитология',
        point: 'Для метеорологического обеспечения',
        image: BirdImage,
        link: 'Ornitology'
    }
]