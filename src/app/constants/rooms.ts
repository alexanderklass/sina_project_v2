import spielbereichShowcase from '@/app/assets/images/rooms/spielbereich-showcase.jpg';
import spielbereichBodenLava from '@/app/assets/images/rooms/spielbereich-bodenlava.jpg';
import spielbereichKletterwand from '@/app/assets/images/rooms/spielbereich-kletterwand.jpg';
import spielbereichKletterwand2 from '@/app/assets/images/rooms/spielbereich-kletterwand-matte.jpg';
import spielbereichStuhl from '@/app/assets/images/rooms/spielbereich-stuhl.jpg';
import spielbereichKletterwand3 from '@/app/assets/images/rooms/spielbereich-kletterwand-rutsche.jpg';

import garderobe from '@/app/assets/images/rooms/garderobe.jpg';
import essbereichShowcase from '@/app/assets/images/rooms/essbereich-showcase.jpg';
import essbereichKueche from '@/app/assets/images/rooms/essbereich-kueche.jpg';
import essBereichTisch from '@/app/assets/images/rooms/essbereich-tisch.jpg';

import ruhebereichShowcase from '@/app/assets/images/rooms/ruhebereich-showcase.jpg';
import kueche from '@/app/assets/images/rooms/kueche.jpg';
import wc1 from '@/app/assets/images/rooms/toilette-handtuecher.jpg';
import wc2 from '@/app/assets/images/rooms/toilette-waschbecken.jpg';
import wandbilder from '@/app/assets/images/rooms/wandbilder.jpg';

export const tabs = [
    {
        navButton: 'Spielbereich',
        image: spielbereichShowcase,
        titleText: 'Spielbereich',
        text: 'Unser großzügiger Spielbereich bietet verschiedene Aktivitätszonen, die speziell auf die Bedürfnisse und Interessen der Kinder abgestimmt sind. Hier können die Kleinen nach Herzenslust entdecken, experimentieren und ihre Kreativität entfalten.',
        subText: [
            'Bauecke mit verschiedenen Konstruktionsmaterialien',
            'Kinderküche zum kochen und spielen',
            'Kreativecke zum Malen, Basteln und Gestalten',
            'Bücherecke mit gemütlichen Sitzkissen',
        ],
    },
    {
        navButton: 'Essbereich',
        image: essbereichShowcase,
        titleText: 'Essbereich',
        text: 'In unserem gemütlichen Essbereich nehmen wir gemeinsam die Mahlzeiten ein. Hier lernen die Kinder nicht nur gesunde Ernährung kennen, sondern auch soziale Kompetenzen wie Tischmanieren und Gemeinschaft.',
        subText: [
            'Kindgerechte Tische und Stühle',
            'Altersgerechtes Geschirr und Besteck',
            'Von mir ausgewogene und frisch zubereitete Mahlzeiten',
            'Gemeinsame Rituale vor und nach dem Essen',
        ],
    },
    {
        navButton: 'Ruhebereich',
        image: ruhebereichShowcase,
        titleText: 'Ruhebereich',
        text: 'Unser Ruhebereich bietet den Kindern einen ruhigen Rückzugsort für Mittagsschlaf und Entspannung. Hier können die Kleinen neue Energie tanken und zur Ruhe kommen.',
        subText: [
            'Gemütliche Schlafplätze für jedes Kind',
            'Gedämpftes Licht und angenehme Atmosphäre',
            'Kuscheltiere und persönliche Gegenstände willkommen',
            'Individuelle Schlafgewohnheiten werden respektiert',
        ],
    },
];

export const impressions = [
    spielbereichKletterwand3,
    garderobe,
    spielbereichKletterwand2,
    spielbereichStuhl,
    spielbereichKletterwand,
    spielbereichBodenLava,
    essbereichKueche,
    essBereichTisch,
    kueche,
    wc1,
    wc2,
    wandbilder,
];
