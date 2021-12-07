import { BirdImage, BookImage, SynopImage, TechImage, WatcherImage } from "../constants/images";

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
    },
    {
        category: 'Технические средства',
        point: 'Метеорологической службы',
        image: TechImage,
        link: 'Tech'
    }
]