import { GameType } from "@/types/GameType";

export const games: GameType[] = [
    {
        title: 'Chico Sabido',
        date: '22 de março de 2025',
        link: 'https://jogodochico.pythonanywhere.com/',
        objective: 'Chico Sabido é um jogo de quiz educativo que se adapta a qualquer tipo de tema, permitindo que jogadores testem conhecimentos enquanto o Caranguejo Chico reage dinamicamente, além de oferecer um modo selfie para reações divertidas.',
        image: 'chico-jogo.svg',
        gallery: 'https://chico-site.netlify.app/pages/images',
        blue: true
    },
    {
        title: 'Lila em Defesa do Mangue',
        date: '2025',
        link: 'https://fisocame.itch.io/l1la',
        objective: 'L1la em Defesa do Mangue é um jogo 2D educativo que visa educar os jogadores sobre a conscientização da reciclagem, com o jogador ajudando a L1la a jogar o lixo nos locais certos e contribuindo com o meio ambiente.',
        image: 'l1la-jogo.jpg',
        blue: false
    },
]