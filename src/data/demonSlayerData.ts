import { Character, VideoItem, BreathingStyleDetail } from '../types';

import giyuPortrait from '../assets/images/giyu_tomioka_portrait_1787825224650.jpg';
import tengenPortrait from '../assets/images/tengen_uzui_portrait_1787825241696.jpg';
import muichiroPortrait from '../assets/images/muichiro_tokito_portrait_1787825255930.jpg';
import mitsuriPortrait from '../assets/images/mitsuri_kanroji_portrait_1787825268247.jpg';
import obanaiPortrait from '../assets/images/obanai_iguro_portrait_1787825282874.jpg';
import sanemiPortrait from '../assets/images/sanemi_shinazugawa_portrait_1787825301709.jpg';
import gyomeiPortrait from '../assets/images/gyomei_himejima_portrait_1787825316023.jpg';
import kanaoPortrait from '../assets/images/kanao_tsuyuri_portrait_1787825454978.jpg';
import genyaPortrait from '../assets/images/genya_shinazugawa_portrait_1787825471631.jpg';
import yoriichiPortrait from '../assets/images/yoriichi_tsugikuni_portrait_1787825485776.jpg';

import muzanPortrait from '../assets/images/muzan_kibutsuji_portrait_1787825329009.jpg';
import kokushiboPortrait from '../assets/images/kokushibo_upper_one_1787825342944.jpg';
import domaPortrait from '../assets/images/doma_upper_two_1787825358028.jpg';
import akazaPortrait from '../assets/images/akaza_upper_three_1787825371831.jpg';
import zohakutenPortrait from '../assets/images/zohakuten_upper_four_1787825385577.jpg';
import gyokkoPortrait from '../assets/images/gyokko_upper_five_1787825415739.jpg';
import gyutaroDakiPortrait from '../assets/images/gyutaro_daki_six_1787825398848.jpg';
import enmuPortrait from '../assets/images/enmu_lower_one_1787825427013.jpg';
import ruiPortrait from '../assets/images/rui_lower_five_1787825441401.jpg';
import kyogaiPortrait from '../assets/images/kyogai_tsuzumi_demon_1787825497952.jpg';

export const SLAYER_CORPS_LOGO = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBFEOh3hexcHeBiy2tFSHi1ZsjrrAiEsMw2s0LrGTp2UpGR9SC2TzR2M2Ao6ULKXqX0r5S-YuJNbItxcm97tE7eJd0BfRjvwgUJF84ALJ-_IULRBM-gfrlun_0lG7DvxsPGDoEa7X_rQSC04YnlkdKDaAzOf3fCA3AJrgAhTy5lLUAUk2cFj-B5CIAzflrf4B6Snoqk-2QLRTI7dYifbY1bVFEg7UPX1m7VF5l9YaGCGWPqTM0bHske';
export const HOME_HERO_BG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUdAhNnZhTeaafzO_F-l0Zip5zHPDGfzwuxJDCIyRRVxuVUcrAEXnFntjiKNASZJV1cIrqEyzcMY4Ghe6ds7I80MSKQ19l9Yv3N69wAWKj75ItpLEKeI7qNwmjD9NMtDGc8pYkEk0x23aowAcQv1uMTWNuP2xmNC3Xij_JQoXUdarlzrx84-AhcBRspmR9BCPG9dPX1Sa6hwMvHiays9lrV55CRqppmfgCHzOISEau_T863NlwFL5V';
export const INK_BG_TEXTURE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5MA0pZT5t_xHJYkBPI0a3ApBXf7-BZnIItsK6yK6ZtyPMWX3AYN-8r-bHjc88n-dCk1RjU2rg_ndxaxcHOTZyERRCORjkquqqxHu7t4VR4TuXMBPkha2YEk4mANNqkZUCnA0Zs9PSVMmIp9bpZXjgW0zEzXkpKa5r5-tGjdF1cjJmwbs27QsVFa1qQ9IPE9fNoYq0VkYkd_5lHwsYbf1MIv5oVn_Vwp_JJ_Znn1wQxDIn7cp5eNY4';
export const INK_SPLASH_MASK = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBu5-n6e3vQuLp6xwX9mlYVDIyvECKqVs6-34nk0SfgurWHeO6sWz7-PPHPxSu2KanlXK1gtNBI8KhWz33sVozIMMF2lMFzxN73PCqPqYl-nYWDptLwi1VcgbgtNA9yHwjg9jvbd_7UWjFIGEjnTO11ZdoQpjVLXdj-NFCl7a5RcfwWQcIQZ3iqG-ZZfdNbXwx8_AmR_HRfVEiKBRZCHVmKOjzByIcdVOaNNHafMZ2TDQlNQoNvZtPQ';
export const WATER_WAVES_TEXTURE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuA25Tu7m9PdNLpQX7pC6zs--OmIvHWBoBVRD6IPFxbqa4kI8iQwKa2M-1YTvYqZqWaXHHtsbWaAMzRCh03-OGNfMUMSLfq0u12ayY-sPBMB2bSZ2a1ZiYm1mIjgOCpAovCd9HHir3LMWKklgrXtDv6gEdCb9ol147HFi3KRzuyZdnfgueBwbT2N6ywAUE2FZ6ZTbunOGPn9XVrYabj6gChRUJuaxHZTPLAjgWqteoU4QoGz8jcxXu--';

export const CHARACTERS: Character[] = [
  // ==========================================
  // 1. PRIMARY SQUAD
  // ==========================================
  {
    id: 'tanjiro',
    name: 'Tanjiro Kamado',
    japaneseName: '竈門 炭治郎',
    rank: 'Kanoe',
    rankKanji: '丁',
    breathingStyle: 'Water / Sun (Hinokami Kagura)',
    category: 'primary',
    quote: '"I will swear it! I will never yield. I will keep moving forward. I will become a Demon Slayer and find a way to turn Nezuko back!"',
    bioColumns: [
      'A boy with a remarkably kind heart and an unyielding will. Following the tragic slaughter of his family and the demonification of his sister Nezuko, Tanjiro joined the Demon Slayer Corps with a singular goal: to cure her.',
      'He possesses an extraordinary sense of smell, allowing him to perceive the "opening thread" in battle—a momentary gap in an opponent\'s defense. This sensory advantage, combined with rigorous training under Sakonji Urokodaki, makes him a formidable swordsman.',
      'While initially mastering Water Breathing, his lineage ties him to the legendary Hinokami Kagura (Dance of the Fire God), a technique that pushes his physical limits but grants immense destructive power against high-ranking demons.'
    ],
    traits: ['Enhanced Sense of Smell', 'Opening Thread Perception', 'Unwavering Empathy', 'Rock-Hard Forehead'],
    combatMetrics: {
      power: 88,
      speed: 82,
      technique: 92,
      stamina: 86,
      note: 'Hinokami Kagura usage exponentially increases Power and Blade Temperature, turning the Nichirin blade crimson.'
    },
    cardImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCgxSbwe9tM_v0gSOHP6jz84W5wOjnIHTeSYsVgQJQXBDZjEGA2YTjUGOEgTynksMQjrsMUT3Zht-qMolwcer8s13xQzHicLoTSsC9KG8NX8yDazX8YK1DBKJNRKu4fM__kyba5CkDEaJ5r2RJ2idz6J1wDCOo8tbiCqogHc0BW5lpg7rGjY2OsLpkA5_V8oiKp31HaWQgNpSb3CsOeOHcjCL5GzUzswHhAZepGBqjV63EwYmMGoeXc',
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmoJ8BOQVXtfnnuP-KjEFXXokrztPBJvnwoNIsMJqQ0u8BLJYH-KhTcjPf4qhKzdGMtDU0pXEb67aB6fSUC4JkZuoJVbKGik7VTKtY1YwCTYMaCMJ5wtGrbegCZP3L9k1v0c3HbLCC-XCMkGl80C9dZfjrghAaNIgedIOeIw1urcALNcOIRSd7o4wXbRBBftq9j4QWdWPW_r8yBNx3j00ahbmE5JdoH7mF41NrM-qfxAbNTtqk5dga',
    accentColor: '#ff535b',
    badgeColor: '#9ecfd1',
    masteredFormsCount: 12,
    breathingForms: [
      {
        num: 'FIRST FORM',
        title: 'WATER SURFACE SLASH',
        japaneseTitle: '壱ノ型 水面斬り',
        desc: 'The swordsman generates enough momentum to create a powerful single concentrated slash. Tanjiro used this technique to cleanly sever the neck of the Hand Demon during Final Selection.'
      },
      {
        num: 'SECOND FORM',
        title: 'WATER WHEEL',
        japaneseTitle: '弐ノ型 水車',
        desc: 'The swordsman leaps and vertically spins forward in the air while releasing a flowing attack in a circular motion to slice defenses from above.'
      },
      {
        num: 'TENTH FORM',
        title: 'CONSTANT FLUX',
        japaneseTitle: '拾ノ型 生生流転',
        desc: 'A continuous attack that increases in power with each rotation, creating a roaring dragon of concentrated water pressure to shatter impenetrable barriers.'
      },
      {
        num: 'SUN BREATHING',
        title: 'HINOKAMI KAGURA: DANCE',
        japaneseTitle: 'ヒノカミ神楽 円舞',
        desc: 'A single high-powered vertical slash ignited with solar heat, capable of severing Upper Moon flesh and halting demonic regeneration.'
      }
    ]
  },
  {
    id: 'nezuko',
    name: 'Nezuko Kamado',
    japaneseName: '竈門 禰豆子',
    rank: 'Demon Ally',
    rankKanji: '鬼',
    breathingStyle: 'Blood Demon Art: Exploding Blood',
    category: 'primary',
    isDemon: true,
    threatLevel: 'Ally',
    bloodDemonArt: 'Exploding Blood (爆血)',
    quote: '"Humans are to be protected and saved... I will never hurt them!"',
    bioColumns: [
      'Tanjiro\'s younger sister who was transformed into a demon following Muzan Kibutsuji\'s assault. Uniquely retaining her human emotions and protective consciousness, she fights alongside the Demon Slayer Corps.',
      'Instead of consuming human flesh, Nezuko regains her stamina and strength by sleeping for extended durations. Her bamboo muzzle prevents accidental biting and shields her demonic fangs.',
      'Her awakened form grants formidable physical power, hyper-regeneration that rivals Upper Rank demons, and the potent Blood Demon Art "Exploding Blood" which burns only demons and demon poison while leaving humans unharmed.'
    ],
    traits: ['Awakened Demon Transformation', 'Rapid Sleep Regeneration', 'Demon Poison Cleansing', 'Sunlight Conquering Physiology'],
    combatMetrics: {
      power: 88,
      speed: 84,
      technique: 72,
      stamina: 96,
      note: 'Exploding Blood art incinerates demon flesh and nullifies enemy venom with extraordinary efficiency.'
    },
    cardImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJx-MPz-AB9Ib8JZPVH5fmplM9cFPenoYRRQIJSHsq0Br2faV3BVineWEOt8Fq1zQX-ZNwSGy-4p7S-cgXN-EukKZpPAd6lH-vsE9H3cMlHNeZkXNtAzVIXIPR8g0feEyQj23j3ljSvPoV0YY6DtuqiB7NZBNExrlD2GWWwwouSSDuz9MQiJCquL2zQIO9JuQNyUexcaElsBnEMhrJs8dy4GVj2x0FwytuoAncpdZam2ZndyZ09sSo',
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJx-MPz-AB9Ib8JZPVH5fmplM9cFPenoYRRQIJSHsq0Br2faV3BVineWEOt8Fq1zQX-ZNwSGy-4p7S-cgXN-EukKZpPAd6lH-vsE9H3cMlHNeZkXNtAzVIXIPR8g0feEyQj23j3ljSvPoV0YY6DtuqiB7NZBNExrlD2GWWwwouSSDuz9MQiJCquL2zQIO9JuQNyUexcaElsBnEMhrJs8dy4GVj2x0FwytuoAncpdZam2ZndyZ09sSo',
    accentColor: '#ffb4ab',
    badgeColor: '#ff535b',
    masteredFormsCount: 4,
    breathingForms: [
      {
        num: 'BLOOD ART I',
        title: 'EXPLODING BLOOD (BAKKETSU)',
        japaneseTitle: '血鬼術 爆血',
        desc: 'Ignites her spilled blood into brilliant crimson-pink flames that inflict excruciating burns on demons and burn away demonic venom.'
      },
      {
        num: 'BLOOD ART II',
        title: 'CRIMSON NICHIRIN ENCHANTMENT',
        japaneseTitle: '日輪刀 紅蓮化',
        desc: 'Coats a Nichirin blade in burning blood, turning the blade bright crimson red and drastically increasing its demon-slaying potency.'
      }
    ]
  },
  {
    id: 'zenitsu',
    name: 'Zenitsu Agatsuma',
    japaneseName: '我妻 善逸',
    rank: 'Kanoe',
    rankKanji: '丁',
    breathingStyle: 'Thunder Breathing',
    category: 'primary',
    quote: '"If you can only do one thing, hone it to perfection. Hone it to the utmost limit!"',
    bioColumns: [
      'A cowardly slayer who was struck by natural lightning during his training under former Roaring Thunder Hashira Jigoro Kuwajima. When overwhelmed by fear, he falls unconscious into a hypnotic state.',
      'In his subconscious sleep-state, Zenitsu acts on pure instinct, executing Thunder Breathing techniques at unfathomable velocities that outpace the human eye.',
      'Though he initially only mastered the First Form, he honed that single strike to perfection, developing Six Fold, Eight Fold, God Speed, and eventually creating his own legendary Seventh Form: Honoikazuchi no Kami.'
    ],
    traits: ['Hyper-Acute Hearing', 'Sleep Combat Trance', 'God Speed Velocity', 'Subconscious Iaido Instinct'],
    combatMetrics: {
      power: 80,
      speed: 98,
      technique: 86,
      stamina: 74,
      note: 'Speed reaches near-instantaneous bursts. God Speed form can only be sustained twice per encounter before legs fracture.'
    },
    cardImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAvEqivtG4jYDPUsVH6qm3obF7HtD3N9H7qx95yucfU7WHjzTtlp5c-7fZvOcLUJI803Z0u_VekXepuOlvHoibws1rwJoRscR1lYHlvqkK46w1aVGo-9yT5KOI0iFuEiNK_PbQmfUm4sF93VyhfEz5VzoA1PA4_-WQEgQMuKl5sD7Xrfkm6KNTYG-80TCWIdxHe_75OOv7jNKz94eFY8GBcORjnrdCaaxn_9QmCWpSAR_UdG6zo3u3A',
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCTuT0QWNQ-BsHCHzYKi5QwTp4KPeeGj0vfSpZR8n7zBD8pAlJ4coWGwIc_-Td5nHa-RlZNRxqieEn2pepvVPKK3L8kJZsixPBl1Ue8y05bGYoWvyYIN8LAKLVdEdahUH_RZogJEl6s9R5qwypANqYuuDh_Q-YdhJcUCr9VhNH8RCmhq4wv2LJJ2LdAFU53vGLAWo2G9FaAex0dc_VnZFRINf18hWzTLXcDGCXXfHam5Vk87IbBmOJu',
    accentColor: '#f9a826',
    badgeColor: '#facc15',
    masteredFormsCount: 7,
    breathingForms: [
      {
        num: 'FIRST FORM',
        title: 'THUNDERCLAP AND FLASH',
        japaneseTitle: '壱ノ型 霹靂一閃',
        desc: 'The user unsheathes their blade, dashes forward at lightning speed and decapitates the opponent in the blink of an eye.'
      },
      {
        num: 'SIX FOLD',
        title: 'THUNDERCLAP: SIX FOLD',
        japaneseTitle: '霹靂一閃 六連',
        desc: 'An extension of the First Form that executes six consecutive lightning dashes while ricocheting off surrounding walls and terrain.'
      },
      {
        num: 'SEVENTH FORM',
        title: 'HONOIKAZUCHI NO KAMI',
        japaneseTitle: '漆ノ型 火雷神',
        desc: 'A personal creation by Zenitsu that summons a colossal dragon-shaped yellow lightning strike, striking so quickly the sound barrier shatters.'
      }
    ]
  },
  {
    id: 'inosuke',
    name: 'Inosuke Hashibira',
    japaneseName: '嘴平 伊之助',
    rank: 'Kanoe',
    rankKanji: '丁',
    breathingStyle: 'Beast Breathing',
    category: 'primary',
    quote: '"Coming through! Coming through! Make way for the King of the Mountain, Inosuke-sama!"',
    bioColumns: [
      'Raised by wild boars in the rugged mountains after being abandoned as an infant. He self-taught his own primal sword fighting style known as Beast Breathing, using two chipped serrated Nichirin blades.',
      'His sense of touch is so sensitive that he can perceive subtle air vibrations across an entire mountain, locating hidden demons and allies with pinpoint accuracy.',
      'Possessing incredible flexibility, he can dislocate any joint in his body at will, dodging otherwise lethal attacks and striking from impossible angles.'
    ],
    traits: ['Spatial Vibration Awareness', 'Joint Dislocation Flexibility', 'Dual Serrated Katanas', 'High Poison Resistance'],
    combatMetrics: {
      power: 86,
      speed: 82,
      technique: 80,
      stamina: 92,
      note: 'Extremely aggressive frontline berserker with high resistance to poison and physical blunt force.'
    },
    cardImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBaVv6YghUFY5pPjR0LjLZnwXwxsvYTgoyj3y-sDT_PACijUsVKep_BltVY7DXJ_CAp8FI82n1kHMbgder-lftPvrgOZIBKDQGy3ANl43vYQQY6cgkKquBQRY0anR8ywSlVk-TPVAYy7LJylCSj6cYvXDVm7rYCrootB7uuvAV0CapLMtS4FexD4rJTLZ1iXSlAT2OXblZ9p94nelSTS8rbtVlJj3l8r36R2ryXXjBcfyInwaSilosy',
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBzpY1k5A4NoF9MqsB8-k0tbp62m7W2wOF2ZEtilrIuaQdgJ8ejxDS6Q81bMo-BERbP0EY8MyEr-UCOh5wACE89b2uLz4CkjBXgUahd-SxqhbYUZTmILRSzXluLhs9J8Vi0E4nZFwuYWSGqFHPCJbRTGtn-uu5n4E8ai_9I17dSj2hRwPori-Mae-hsXj5JqAfEg9CXbfEbK1YX-YaGQp1YIdVGOL1s2zJR_gdLTu4bv73lnOXV80B7',
    accentColor: '#98cdf2',
    badgeColor: '#9ecfd1',
    masteredFormsCount: 11,
    breathingForms: [
      {
        num: 'FIRST FANG',
        title: 'PIERCE',
        japaneseTitle: '壱ノ牙 穿ち抜き',
        desc: 'The user stabs the target\'s neck simultaneously with both blades.'
      },
      {
        num: 'FIFTH FANG',
        title: 'CRAZY CUTTING',
        japaneseTitle: '伍ノ牙 狂い裂き',
        desc: 'The swordsman slashes everything in all directions while in midair, deflecting projectiles and shredding enemy limbs.'
      },
      {
        num: 'SEVENTH FANG',
        title: 'SPATIAL AWARENESS',
        japaneseTitle: '漆ノ型 空間識知',
        desc: 'The user extends their arms and plants their twin swords into the earth, identifying any demon or vibration within a massive radius.'
      }
    ]
  },
  {
    id: 'kanao',
    name: 'Kanao Tsuyuri',
    japaneseName: '栗花落 カナヲ',
    rank: 'Tsuchinoto (Tsuguko)',
    rankKanji: '己',
    breathingStyle: 'Flower Breathing',
    category: 'primary',
    quote: '"I will decide for myself. I will fight with all my heart to protect the people I care about!"',
    bioColumns: [
      'The designated Tsuguko (successor) to the Insect Hashira Shinobu Kocho and former Flower Hashira Kanae Kocho. Rescued from enslavement as a child, she was trained to superhuman physical standards.',
      'Possesses extraordinary kinetic vision, allowing her to anticipate an opponent\'s muscle contractions and trajectory micro-seconds before they strike.',
      'In the battle against Upper Rank 2 Doma, she demonstrated the pinnacle of Flower Breathing, sacrificing vision in one eye to unleash the Final Form: Equinoctial Vermilion Eye.'
    ],
    traits: ['Extraordinary Kinetic Vision', 'Acrobatic Precision', 'Flower Breathing Mastery', 'Butterfly Hairpin Heirloom'],
    combatMetrics: {
      power: 80,
      speed: 94,
      technique: 95,
      stamina: 88,
      note: 'Equinoctial Vermilion Eye accelerates dynamic visual acuity to the point where the world appears in slow motion.'
    },
    cardImage: kanaoPortrait,
    heroImage: kanaoPortrait,
    accentColor: '#f472b6',
    badgeColor: '#fbcfe8',
    masteredFormsCount: 7,
    breathingForms: [
      {
        num: 'SECOND FORM',
        title: 'HONORABLE SHADOW PLUM',
        japaneseTitle: '弐ノ型 御影梅',
        desc: 'Several defensive rotational slashes that deflect and parry incoming physical strikes and Blood Demon projectiles.'
      },
      {
        num: 'FINAL FORM',
        title: 'EQUINOCTIAL VERMILION EYE',
        japaneseTitle: '終ノ型 彼岸朱眼',
        desc: 'A focus technique that boosts kinetic vision to its maximum limit, allowing the user to perceive the world in extreme slow motion at the cost of ocular blood vessel rupture.'
      }
    ]
  },
  {
    id: 'genya',
    name: 'Genya Shinazugawa',
    japaneseName: '不死川 玄弥',
    rank: 'Shooting Combatant',
    rankKanji: '丁',
    breathingStyle: 'Demonic Flesh Ingestion / Repetitive Action',
    category: 'primary',
    quote: '"Even if I can\'t use Breathing Styles, I can still fight! I will become strong enough to protect my brother!"',
    bioColumns: [
      'The younger brother of Wind Hashira Sanemi Shinazugawa. Unlike other slayers, Genya cannot generate breathing styles due to unique physiological traits.',
      'To compensate, he possesses a rare digestive system and biting strength capable of consuming demonic flesh, temporarily gaining demon strength, regeneration, and Blood Demon Arts.',
      'He utilizes a customized Western double-barrel shotgun firing Nichirin bullets, backed by a Nichirin wakizashi sword for close-quarters execution.'
    ],
    traits: ['Demonic Flesh Assimilation', 'Double-Barrel Nichirin Shotgun', 'Repetitive Action Focus', 'Hyper Regeneration under Assimilation'],
    combatMetrics: {
      power: 90,
      speed: 76,
      technique: 78,
      stamina: 94,
      note: 'Strength scales directly with the rank of the demon flesh consumed. Ingesting Upper Moon flesh grants wood-manipulation Blood Demon Arts.'
    },
    cardImage: genyaPortrait,
    heroImage: genyaPortrait,
    accentColor: '#a855f7',
    badgeColor: '#d8b4fe',
    masteredFormsCount: 3,
    breathingForms: [
      {
        num: 'TECHNIQUE I',
        title: 'REPETITIVE ACTION (AMIDA SUTRA)',
        japaneseTitle: '反復動作',
        desc: 'Chants Buddhist sutras and recalls intense emotional trauma to open all five senses and achieve Total Concentration equivalent focus without breathing styles.'
      },
      {
        num: 'TECHNIQUE II',
        title: 'DEMONIC FLESH ASSIMILATION',
        japaneseTitle: '鬼喰い 体質変化',
        desc: 'Ingests demon organs to gain superhuman speed, muscle mass, and regenerative flesh capable of surviving bisecting wounds.'
      }
    ]
  },

  // ==========================================
  // 2. THE 9 HASHIRAS (PILLARS OF THE CORPS)
  // ==========================================
  {
    id: 'giyu',
    name: 'Giyu Tomioka',
    japaneseName: '冨岡 義勇',
    rank: 'Water Hashira',
    rankKanji: '水柱',
    breathingStyle: 'Water Breathing',
    category: 'hashira',
    quote: '"Don\'t cry. Don\'t despair. Now is not the time for that. You must fight!"',
    bioColumns: [
      'The stoic Water Hashira who spared Nezuko and directed Tanjiro to Sakonji Urokodaki. A quiet, disciplined master swordsman who wears a split-pattern haori commemorating his deceased sister Tsutako and friend Sabito.',
      'He created his own Eleventh Form: Dead Calm (Nagi), a technique that renders incoming enemy attacks null and void by ceasing all bodily motion and deflecting strikes at imperceptible speeds.',
      'Together with Tanjiro, he fought against Upper Rank 3 Akaza in the Infinity Castle, demonstrating the peak of Water Breathing defense and adaptability.'
    ],
    traits: ['Created 11th Form: Dead Calm', 'Split Haori of Sabito & Tsutako', 'Immovable Composure', 'Demon Slayer Mark Awakened'],
    combatMetrics: {
      power: 90,
      speed: 94,
      technique: 99,
      stamina: 92,
      note: 'Dead Calm can neutralize high-density multi-layered attacks within a single heartbeat.'
    },
    cardImage: giyuPortrait,
    heroImage: giyuPortrait,
    accentColor: '#9ecfd1',
    badgeColor: '#b9ecee',
    masteredFormsCount: 11,
    breathingForms: [
      {
        num: 'ELEVENTH FORM',
        title: 'DEAD CALM (NAGI)',
        japaneseTitle: '拾壱ノ型 凪',
        desc: 'Personal creation by Giyu. Ceases all body movement and enters a state of complete tranquility, deflecting and nullifying any attack at blinding speed.'
      },
      {
        num: 'SECOND FORM',
        title: 'WATER WHEEL',
        japaneseTitle: '弐ノ型 水車',
        desc: 'Spins vertically in mid-air to slice clean through enemy torsos and heavy demonic limbs.'
      },
      {
        num: 'FOURTH FORM',
        title: 'STRIKING TIDE',
        japaneseTitle: '肆ノ型 打ち潮',
        desc: 'Multiple consecutive slashes executed in a flowing rhythm while twisting around incoming blows.'
      }
    ]
  },
  {
    id: 'shinobu',
    name: 'Shinobu Kocho',
    japaneseName: '胡蝶 しのぶ',
    rank: 'Insect Hashira',
    rankKanji: '蟲柱',
    breathingStyle: 'Insect Breathing',
    category: 'hashira',
    quote: '"I might be the only swordswoman among the Hashira who can\'t cut off a demon\'s head, but as long as I can create poison that can kill demons, I can fight."',
    bioColumns: [
      'The Insect Hashira and head of the Butterfly Mansion. Due to her smaller physical stature, she compensates by coating her specialized needle-like stinger blade with lethal Wisteria-based poisons.',
      'Her movements mimic the flutter of butterflies and the strike of wasps, darting around opponents with blinding speed to inject neurotoxins directly into pressure points.',
      'She is a brilliant pharmacologist whose research has saved hundreds of slayers from deadly demonic venoms and proved instrumental in weakening Upper Rank 2 Doma.'
    ],
    traits: ['Wisteria Poison Formulation', 'Extreme Thrust Velocity', 'Medical Sanctuary Host', 'Body Saturated with Wisteria Toxin'],
    combatMetrics: {
      power: 68,
      speed: 97,
      technique: 98,
      stamina: 82,
      note: 'Thrusting speed exceeds even Water Breathing thrusts, delivering lethal poison within milliseconds.'
    },
    cardImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9rMk6QbHlF43lpV6SqfV8kGS6nH4QtFy815vqvzrAaWibVAKdZqhPkn-9hOmVdl1yiFBSSRaJKI5HFmO6jmApkCVCuQ-Xs1PdRXBhcE1_6NKrHzWHCIjBO5wF1GADwul4iMR_XTXZ7VUyiWl1Kp0lX3CQC32kNS5bqykS8C1bvw8HzDWKwPIXAiXnJKjpwWeCvX1KwzgtLOg7PjrKfu_gptkl4iqX-fPcCzOjd4ibWwVC9ozQm8j2',
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9rMk6QbHlF43lpV6SqfV8kGS6nH4QtFy815vqvzrAaWibVAKdZqhPkn-9hOmVdl1yiFBSSRaJKI5HFmO6jmApkCVCuQ-Xs1PdRXBhcE1_6NKrHzWHCIjBO5wF1GADwul4iMR_XTXZ7VUyiWl1Kp0lX3CQC32kNS5bqykS8C1bvw8HzDWKwPIXAiXnJKjpwWeCvX1KwzgtLOg7PjrKfu_gptkl4iqX-fPcCzOjd4ibWwVC9ozQm8j2',
    accentColor: '#a855f7',
    badgeColor: '#c7e7ff',
    masteredFormsCount: 4,
    breathingForms: [
      {
        num: 'DANCE OF THE BUTTERFLY',
        title: 'CAPRICE (TAWAMURE)',
        japaneseTitle: '蝶ノ舞 戯れ',
        desc: 'Leaps into the air and charges towards the opponent, stinging them multiple times with her poisoned blade like fluttering butterfly wings.'
      },
      {
        num: 'DANCE OF THE CENTIPEDE',
        title: 'HUNDRED-LEGGED ZIGZAG',
        japaneseTitle: '百足ノ舞 百足蛇腹',
        desc: 'A maximum speed zigzag dash that destroys the floor to inject a massive dosage of lethal Wisteria toxin.'
      }
    ]
  },
  {
    id: 'rengoku',
    name: 'Kyojuro Rengoku',
    japaneseName: '煉獄 杏寿郎',
    rank: 'Flame Hashira',
    rankKanji: '炎柱',
    breathingStyle: 'Flame Breathing',
    category: 'hashira',
    quote: '"Set your heart ablaze! Stand tall and live with pride. No matter how weak or unworthy you feel, keep your fire burning!"',
    bioColumns: [
      'The vibrant and honorable Flame Hashira of the Demon Slayer Corps. Known for his cheerful optimism, booming voice, and peerless swordsmanship inherited through generations of the Rengoku lineage.',
      'During the Mugen Train incident, he single-handedly protected 200 passengers without allowing a single casualty, before engaging in a catastrophic clash against Upper Rank 3 Akaza.',
      'His final technique, the Ninth Form: Rengoku (Purgatory), unleashed a devastating flaming strike of blinding spirit that immortalized his name among all Demon Slayers.'
    ],
    traits: ['Blazing Fighting Spirit', 'Master Tactician', 'Unshakable Morality', 'Massive Destructive Shockwaves'],
    combatMetrics: {
      power: 96,
      speed: 92,
      technique: 95,
      stamina: 94,
      note: 'Mastery of Flame Breathing allowed him to defend entire railway carriages with explosive thermal shockwaves.'
    },
    cardImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrcz9TW72MNDtfGVOMPuhtN-8GyU96mGDEX1FjWG56YXSasG1S_qy8qJpfcjIpCV4UYkOxcpdxYFFYco42qK4DL7aDKG0gD8CAnUyO-eN2uFd7oCJMXxKN9bkLjJkoslhXqbniZk_DA17l6AZO5iQ5sWT1CWBpywRpz9Wx_dlsiC0n4CvTgIbko_0tQJDYwS4h-dnoyRKze960EO-IsdAaYSOTfxpTOc-z9gSfmKqLkfH6hQmYoJzH',
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrcz9TW72MNDtfGVOMPuhtN-8GyU96mGDEX1FjWG56YXSasG1S_qy8qJpfcjIpCV4UYkOxcpdxYFFYco42qK4DL7aDKG0gD8CAnUyO-eN2uFd7oCJMXxKN9bkLjJkoslhXqbniZk_DA17l6AZO5iQ5sWT1CWBpywRpz9Wx_dlsiC0n4CvTgIbko_0tQJDYwS4h-dnoyRKze960EO-IsdAaYSOTfxpTOc-z9gSfmKqLkfH6hQmYoJzH',
    accentColor: '#ff535b',
    badgeColor: '#ffdad8',
    masteredFormsCount: 9,
    breathingForms: [
      {
        num: 'FIRST FORM',
        title: 'UNKNOWING FIRE',
        japaneseTitle: '壱ノ型 不知火',
        desc: 'Charges at high speed towards the opponent and decapitates them in a single fierce flaming slash.'
      },
      {
        num: 'FIFTH FORM',
        title: 'FLAME TIGER',
        japaneseTitle: '伍ノ型 炎虎',
        desc: 'Unleashes a series of sword slashes that take the form of a ferocious flaming tiger rushing towards the opponent.'
      },
      {
        num: 'NINTH FORM',
        title: 'RENGOKU (PURGATORY)',
        japaneseTitle: '玖ノ型 煉獄',
        desc: 'The ultimate form of Flame Breathing. A devastating dash that carves a deep crater in the ground and erupts into a draconic inferno.'
      }
    ]
  },
  {
    id: 'tengen',
    name: 'Tengen Uzui',
    japaneseName: '宇髄 天元',
    rank: 'Sound Hashira',
    rankKanji: '音柱',
    breathingStyle: 'Sound Breathing',
    category: 'hashira',
    quote: '"Starting now, things are gonna get real flashy! I\'m the god of festivals and flashiness!"',
    bioColumns: [
      'The flamboyant and muscular Sound Hashira, formerly a shinobi (ninja) from a secretive shinobi clan. Wields twin massive cleaver-like Nichirin blades connected by a durable chain.',
      'He developed the "Musical Score" technique—a battle analysis method that reads the rhythm of enemy attacks like sheet music, allowing him to anticipate and counter every strike automatically.',
      'During the Entertainment District Arc, he fought against Upper Rank 6 Gyutaro and Daki, surviving lethal poison through sheer physical fortitude and shinobi poison resistance.'
    ],
    traits: ['Musical Score Battle Analysis', 'Echolocation Hearing', 'Dual Chained Nichirin Cleavers', 'Shinobi Poison Resistance'],
    combatMetrics: {
      power: 94,
      speed: 96,
      technique: 92,
      stamina: 95,
      note: 'Fastest runner among the Hashira. Completing the Musical Score formula makes enemy offense completely predictable.'
    },
    cardImage: tengenPortrait,
    heroImage: tengenPortrait,
    accentColor: '#eab308',
    badgeColor: '#fef08a',
    masteredFormsCount: 5,
    breathingForms: [
      {
        num: 'FIRST FORM',
        title: 'ROAR',
        japaneseTitle: '壱ノ型 轟',
        desc: 'Brings down twin blades with colossal force, detonating special gunpowder bombs to create deafening thunderous explosions.'
      },
      {
        num: 'FOURTH FORM',
        title: 'CONSTANT RESOUNDING SLASHES',
        japaneseTitle: '肆ノ型 響斬無間',
        desc: 'Spins twin chained cleavers like spinning helicopter rotors, creating a dome of explosive blades that shreds everything nearby.'
      },
      {
        num: 'FIFTH FORM',
        title: 'STRING PERFORMANCE',
        japaneseTitle: '伍ノ型 鳴弦奏々',
        desc: 'Spins one blade by its chain while slashing with the other, unleashing continuous bomb explosions while advancing.'
      }
    ]
  },
  {
    id: 'muichiro',
    name: 'Muichiro Tokito',
    japaneseName: '時透 無一郎',
    rank: 'Mist Hashira',
    rankKanji: '霞柱',
    breathingStyle: 'Mist Breathing',
    category: 'hashira',
    quote: '"I am the descendant of the Sun Breathing swordsman. You cannot comprehend the depths of my mist."',
    bioColumns: [
      'The youngest prodigy of the Demon Slayer Corps, becoming a Hashira just two months after picking up a sword. He is a direct descendant of the legendary Tsugikuni bloodline.',
      'He utilizes Mist Breathing to manipulate spatial awareness, using baggy robes and fluctuating footwork tempo to create optical illusions that make him appear like thick shrouds of fog.',
      'He created his own Seventh Form: Obscuring Clouds (Haboro), single-handedly soloing and decapitating Upper Rank 5 Gyokko in the Swordsmith Village.'
    ],
    traits: ['Prodigy Tsugikuni Lineage', 'Created 7th Form: Obscuring Clouds', 'Transparent World Perception', 'Slayer Mark Awakened'],
    combatMetrics: {
      power: 86,
      speed: 98,
      technique: 99,
      stamina: 85,
      note: 'Tempo fluctuations in Obscuring Clouds completely break opponent depth perception.'
    },
    cardImage: muichiroPortrait,
    heroImage: muichiroPortrait,
    accentColor: '#9ecfd1',
    badgeColor: '#ccfbf1',
    masteredFormsCount: 7,
    breathingForms: [
      {
        num: 'FIRST FORM',
        title: 'LOW CLOUDS, DISTANT HAZE',
        japaneseTitle: '壱ノ型 垂天遠霞',
        desc: 'A straightforward thrusting attack that pierces straight through demon armor.'
      },
      {
        num: 'FOURTH FORM',
        title: 'SHIFTING FLOW SLASH',
        japaneseTitle: '肆ノ型 移流斬り',
        desc: 'A quick slash from the scabbard reminiscent of an Iaido technique.'
      },
      {
        num: 'SEVENTH FORM',
        title: 'OBSCURING CLOUDS (HABORO)',
        japaneseTitle: '漆ノ型 朧',
        desc: 'Muichiro\'s personal creation. Drastically changes tempo between slow tortoise movements and lightning dashes, rendering him completely invisible inside a veil of mist.'
      }
    ]
  },
  {
    id: 'mitsuri',
    name: 'Mitsuri Kanroji',
    japaneseName: '甘露寺 蜜璃',
    rank: 'Love Hashira',
    rankKanji: '恋柱',
    breathingStyle: 'Love Breathing',
    category: 'hashira',
    quote: '"I will protect everyone! No matter what happens, I will never let innocent people get hurt!"',
    bioColumns: [
      'The cheerful and compassionate Love Hashira. Born with an extraordinarily dense muscle mass eight times denser than a regular human, giving her immense physical strength without losing agility.',
      'She wields a unique, ultra-flexible ribbon-like Nichirin katana crafted by the legendary swordsmith Tecchin Tecchikawanahara, which she whips around at blinding speed.',
      'She branched off Flame Breathing to create Love Breathing, executing whip-like slashes that bend around defenses at speeds rivaling Tengen Uzui.'
    ],
    traits: ['8x Muscle Density Composition', 'Flexible Ribbon Katana Mastery', 'Immense Joint Flexibility', 'Slayer Mark Awakened'],
    combatMetrics: {
      power: 95,
      speed: 94,
      technique: 93,
      stamina: 91,
      note: 'Whip-like strikes possess greater attack range and unpredictable trajectory than standard katanas.'
    },
    cardImage: mitsuriPortrait,
    heroImage: mitsuriPortrait,
    accentColor: '#ec4899',
    badgeColor: '#fbcfe8',
    masteredFormsCount: 6,
    breathingForms: [
      {
        num: 'FIRST FORM',
        title: 'SHIVERS OF FIRST LOVE',
        japaneseTitle: '壱ノ型 初恋のわななき',
        desc: 'Dashes forward with a series of extended whip-slashes that wind around the target.'
      },
      {
        num: 'SECOND FORM',
        title: 'LOVE PANGS',
        japaneseTitle: '弐ノ型 懊悩巡る恋',
        desc: 'Unleashes an extended winding whip-slash that surrounds the user and defends from all incoming attacks.'
      },
      {
        num: 'FIFTH FORM',
        title: 'SWAYING LOVE, WILDFIRE CLAW',
        japaneseTitle: '伍ノ型 揺らめく恋情・乱れ爪',
        desc: 'Somersaults backwards in the air, creating a long whip of slashes that cuts through colossal wooden dragons.'
      }
    ]
  },
  {
    id: 'obanai',
    name: 'Obanai Iguro',
    japaneseName: '伊黒 小芭内',
    rank: 'Serpent Hashira',
    rankKanji: '蛇柱',
    breathingStyle: 'Serpent Breathing',
    category: 'hashira',
    quote: '"I will carve up every single demon until there is nothing left. I will die protecting those I love."',
    bioColumns: [
      'The strict and mysterious Serpent Hashira who was born into a cursed clan that worshipped a Snake Demon. Accompanied everywhere by his white snake Kaburamaru, who assists his vision in combat.',
      'He wields a uniquely twisted, wavy Kris-like Nichirin katana that slithers through microscopic gaps in enemy defenses like a serpent striking its prey.',
      'In the final clash against Muzan Kibutsuji, Obanai awakened the Transparent World and turned his blade bright Crimson Red through pure grip strength despite being blinded.'
    ],
    traits: ['Kaburamaru Combat Sensory Link', 'Wavy Slithering Katana', 'Transparent World Perception', 'Crimson Red Nichirin Awakening'],
    combatMetrics: {
      power: 87,
      speed: 96,
      technique: 99,
      stamina: 89,
      note: 'Slithering sword strikes curve around physical barriers to decapitate targets from impossible angles.'
    },
    cardImage: obanaiPortrait,
    heroImage: obanaiPortrait,
    accentColor: '#0ea5e9',
    badgeColor: '#bae6fd',
    masteredFormsCount: 5,
    breathingForms: [
      {
        num: 'FIRST FORM',
        title: 'WINDING SERPENT SLASH',
        japaneseTitle: '壱ノ型 委蛇斬り',
        desc: 'Moves like a slithering snake and releases several winding slashes in a fluid circular pattern.'
      },
      {
        num: 'SECOND FORM',
        title: 'VENOM FANGS OF THE NARROW HEAD',
        japaneseTitle: '弐ノ型 狭頭の毒牙',
        desc: 'Dashes behind the opponent at blinding speed and lops off their head from behind.'
      },
      {
        num: 'FIFTH FORM',
        title: 'SLITHERING SERPENT',
        japaneseTitle: '伍ノ型 蜿蜿長蛇',
        desc: 'Curves his sword in wide arcs from left to right at extreme velocity, decapitating multiple targets at once.'
      }
    ]
  },
  {
    id: 'sanemi',
    name: 'Sanemi Shinazugawa',
    japaneseName: '不死川 実弥',
    rank: 'Wind Hashira',
    rankKanji: '風柱',
    breathingStyle: 'Wind Breathing',
    category: 'hashira',
    quote: '"Demon scum like you should all be shredded to pieces! I won\'t rest until every last one is dead!"',
    bioColumns: [
      'The ferocious and battle-scarred Wind Hashira. Renowned for his violent temperament, unyielding aggression, and deep protective love for his younger brother Genya.',
      'Possesses extremely rare "Marechi" (intoxicating blood) that makes demons dizzy and lose focus as if intoxicated when smelling even a single drop.',
      'Master of Wind Breathing, creating raging cyclones of gale-force wind shear that slice through demonic flesh and deflect incoming projectile barrages.'
    ],
    traits: ['Intoxicating Marechi Blood', 'Relentless Berserker Combat', 'Cyclone Wind Slashes', 'Slayer Mark Awakened'],
    combatMetrics: {
      power: 96,
      speed: 97,
      technique: 95,
      stamina: 96,
      note: 'Marechi blood severely impairs demonic motor coordination and concentration upon exposure.'
    },
    cardImage: sanemiPortrait,
    heroImage: sanemiPortrait,
    accentColor: '#22c55e',
    badgeColor: '#bbf7d0',
    masteredFormsCount: 9,
    breathingForms: [
      {
        num: 'FIRST FORM',
        title: 'DUST WHIRLWIND CUTTER',
        japaneseTitle: '壱ノ型 塵旋風・削ぎ',
        desc: 'Dashes forward at blinding speeds and slashes continuously in a horizontal cyclone pattern.'
      },
      {
        num: 'FIFTH FORM',
        title: 'COLD MOUNTAIN WIND',
        japaneseTitle: '伍ノ型 木枯らし颪',
        desc: 'Unleashes several slashing wind shear attacks from above, descending onto the target like a raging storm.'
      },
      {
        num: 'SEVENTH FORM',
        title: 'GALE, SUDDEN GUSTS',
        japaneseTitle: '漆ノ型 頸春・天狗風',
        desc: 'Leaps into the air and swings his blade to create sweeping gale force winds that shred everything in its path.'
      }
    ]
  },
  {
    id: 'gyomei',
    name: 'Gyomei Himejima',
    japaneseName: '悲鳴嶼 行冥',
    rank: 'Stone Hashira (Pillar Leader)',
    rankKanji: '岩柱',
    breathingStyle: 'Stone Breathing',
    category: 'hashira',
    quote: '"Namu Amida Butsu... We must eradicate demons with all the strength our bodies possess."',
    bioColumns: [
      'The acknowledged strongest Hashira of the Demon Slayer Corps. A blind giant monk who possesses immense physical strength and acute spatial hearing that compensates for his lack of sight.',
      'Unlike other slayers who use katanas, Gyomei wields a colossal chained broad axe and spiked flail forged from pure Sunlight Iron, swinging it with earthquake-level destructive power.',
      'During the battle against Upper Rank 1 Kokushibo, Gyomei unlocked the Transparent World and Demon Slayer Mark, earning Kokushibo\'s praise as the greatest physical warrior in three centuries.'
    ],
    traits: ['Strongest Hashira of Current Era', 'Echolocation Spatial Hearing', 'Chained Axe & Spiked Flail', 'Transparent World Perception'],
    combatMetrics: {
      power: 100,
      speed: 93,
      technique: 98,
      stamina: 99,
      note: 'Physical strength and weapon mass can pulverize demon bone and flesh beyond instantaneous regeneration.'
    },
    cardImage: gyomeiPortrait,
    heroImage: gyomeiPortrait,
    accentColor: '#9ca3af',
    badgeColor: '#e5e7eb',
    masteredFormsCount: 5,
    breathingForms: [
      {
        num: 'FIRST FORM',
        title: 'SERPENTINITE BIPOLAR',
        japaneseTitle: '壱ノ型 蛇紋岩・双極',
        desc: 'Throws both his spiked flail and broad axe simultaneously, rotating them to shred targets from both flanks.'
      },
      {
        num: 'SECOND FORM',
        title: 'UPPER SMASH',
        japaneseTitle: '弐ノ型 天面砕き',
        desc: 'Hurls his spiked flail into the sky before stomping on the chain to drive the flail directly down onto the opponent\'s skull.'
      },
      {
        num: 'FOURTH FORM',
        title: 'VOLCANIC ROCK, RAPID CONQUEST',
        japaneseTitle: '肆ノ型 流紋岩・速征',
        desc: 'Swings the axe and flail in a continuous, wide storm of heavy blunt and cutting strikes that deflecting all attacks.'
      }
    ]
  },
  {
    id: 'yoriichi',
    name: 'Yoriichi Tsugikuni',
    japaneseName: '継国 縁壱',
    rank: 'Primordial Sun Originator',
    rankKanji: '始祖',
    breathingStyle: 'Sun Breathing (Origin of All Styles)',
    category: 'corps',
    quote: '"All things born into this world will eventually reach their culmination. We are not anything special."',
    bioColumns: [
      'The legendary samurai born during the Sengoku era who created Sun Breathing, the primordial source from which all other breathing styles were derived.',
      'Born with the Demon Slayer Mark, the Transparent World, and the Selfless State, he defeated Muzan Kibutsuji in a single clash, forcing the Demon King to hide in terror for centuries.',
      'His swordsmanship reached divine perfection. Even at age 85, he nearly killed his demonified twin brother Kokushibo in a single strike before passing away standing on his feet.'
    ],
    traits: ['Creator of All Breathing Styles', 'Selfless State (No Fighting Spirit)', 'Born with Transparent World', 'Crimson Red Blade Master'],
    combatMetrics: {
      power: 100,
      speed: 100,
      technique: 100,
      stamina: 100,
      note: 'The undisputed strongest warrior in history. Slashed Muzan over 1,500 times in the span of a single second.'
    },
    cardImage: yoriichiPortrait,
    heroImage: yoriichiPortrait,
    accentColor: '#ff535b',
    badgeColor: '#fee2e2',
    masteredFormsCount: 13,
    breathingForms: [
      {
        num: 'THIRTEENTH FORM',
        title: 'SUN BREATHING 13TH FORM LOOP',
        japaneseTitle: '日の呼吸 拾参ノ型',
        desc: 'Continuously performs all 12 forms of Sun Breathing in a fluid endless loop to simultaneously strike all twelve vital organs of Muzan Kibutsuji.'
      },
      {
        num: 'ORIGIN FORM',
        title: 'SOLAR HALO DRAGON DANCE',
        japaneseTitle: '日暈の龍 頭舞い',
        desc: 'A continuous flaming dragon slash moving with sun-like brilliance that completely burns demon cells at the molecular level.'
      }
    ]
  },

  // ==========================================
  // 3. THE DEMONS (THE TWELVE KIZUKI & DEMON KING)
  // ==========================================
  {
    id: 'muzan',
    name: 'Muzan Kibutsuji',
    japaneseName: '鬼舞辻 無惨',
    rank: 'The Demon King (Progenitor)',
    rankKanji: '鬼王',
    breathingStyle: 'Biokinesis / Flesh Manipulation / Black Blood',
    category: 'demon',
    isDemon: true,
    threatLevel: 'Calamity',
    bloodDemonArt: 'Black Blood & Flesh Whip Anatomy',
    quote: '"I am a living natural disaster. Do not compare me to humans. I am perfection itself."',
    bioColumns: [
      'The progenitor and supreme king of all demons, surviving for over a millennium since the Heian era. Muzan created every existing demon by sharing his blood.',
      'Possesses seven hearts, five brains, and an anatomy capable of instantaneous cellular shapeshifting, sprouting bladed spine-whips and massive tooth-lined mouths across his body.',
      'His singular eternal obsession is locating the Blue Spider Lily or conquering the sun to achieve absolute biological immortality.'
    ],
    traits: ['Progenitor of All Demon Kind', '7 Hearts & 5 Brains', 'Instantaneous Cellular Shapeshifting', 'Telepathic Cellular Curse Control'],
    combatMetrics: {
      power: 100,
      speed: 100,
      technique: 98,
      stamina: 100,
      note: 'Can regenerate severed limbs in less than a microsecond. Bladed whip attacks inject concentrated demonic blood that destroys human cells on contact.'
    },
    cardImage: muzanPortrait,
    heroImage: muzanPortrait,
    accentColor: '#dc2626',
    badgeColor: '#fecaca',
    masteredFormsCount: 6,
    breathingForms: [
      {
        num: 'BLOOD ART I',
        title: 'BLACK BLOOD: BRAMBLES',
        japaneseTitle: '黒血枳棘',
        desc: 'Transforms his flesh into thorny barbed barbed-wire tentacles that entangle and rip through armies of slayers.'
      },
      {
        num: 'BLOOD ART II',
        title: 'PLAGUE BLOOD SHOCKWAVE',
        japaneseTitle: '衝撃波',
        desc: 'Releases a massive telekinetic scream and electrical bio-shockwave that paralyzes nervous systems and shatters internal organs.'
      }
    ]
  },
  {
    id: 'kokushibo',
    name: 'Kokushibo (Michikatsu Tsugikuni)',
    japaneseName: '黒死牟 (継国 巌勝)',
    rank: 'Upper Rank One',
    rankKanji: '上弦 壱',
    breathingStyle: 'Moon Breathing (月の呼吸)',
    category: 'upper-moon',
    isDemon: true,
    threatLevel: 'Calamity',
    bloodDemonArt: 'Crescent Moon Flesh Blades',
    quote: '"You have opened the path... yet you shall never reach my heights. Witness the eternal Moon."',
    bioColumns: [
      'The strongest member of the Twelve Kizuki, holding the position of Upper Rank One for over four centuries. He is the twin brother of Yoriichi Tsugikuni and former Sengoku samurai.',
      'Combines high-tier demon flesh manipulation with his formidable Moon Breathing, wielding a fleshy katana that spawns hundreds of chaotic crescent-shaped blades with every swing.',
      'Possesses six glowing demon eyes that grant him permanent Transparent World vision, anticipating every muscle contraction and blood flow in his opponents.'
    ],
    traits: ['Permanent Transparent World Vision', 'Flesh Katana with Eye Markings', 'Chaotic Crescent Blades', 'Sengoku Era Samurai Mastery'],
    combatMetrics: {
      power: 99,
      speed: 99,
      technique: 100,
      stamina: 100,
      note: 'Moon Breathing slashes constantly alter size and trajectory via surrounding micro-crescent blades, making defense nearly impossible.'
    },
    cardImage: kokushiboPortrait,
    heroImage: kokushiboPortrait,
    accentColor: '#7c3aed',
    badgeColor: '#ddd6fe',
    masteredFormsCount: 16,
    breathingForms: [
      {
        num: 'FIRST FORM',
        title: 'DARK MOON, EVENING PALACE',
        japaneseTitle: '壱ノ型 闇月・宵の宮',
        desc: 'Unsheathes his katana with blinding Iaido speed, creating a horizontal slash surrounded by dozens of chaotic crescent blades.'
      },
      {
        num: 'SIXTH FORM',
        title: 'PERPETUAL NIGHT, LONELY MOON',
        japaneseTitle: '陸ノ型 常夜孤月・無間',
        desc: 'Releases a wild storm of slashes extending several meters ahead, slicing through everything in front of him.'
      },
      {
        num: 'FOURTEENTH FORM',
        title: 'CATACLYSM, TENMAN CRESCENT MOON',
        japaneseTitle: '拾肆ノ型 兇変・天満繊月',
        desc: 'Swings his enlarged flesh sword to release a colossal vortex of multi-layered moon crescents that annihilates entire castle chambers.'
      }
    ]
  },
  {
    id: 'doma',
    name: 'Doma',
    japaneseName: '童磨',
    rank: 'Upper Rank Two',
    rankKanji: '上弦 弐',
    breathingStyle: 'Cryokinesis / Frozen Lotus Ice Art',
    category: 'upper-moon',
    isDemon: true,
    threatLevel: 'Extreme',
    bloodDemonArt: 'Cryokinesis & Frozen Bodhisattva',
    quote: '"I feel nothing at all... no sadness, no anger, no joy. That\'s why I want to save all of you by eating you!"',
    bioColumns: [
      'The charismatic and nihilistic Upper Rank Two demon who leads the Eternal Paradise Faith cult. Wields a pair of razor-sharp golden war fans.',
      'His Blood Demon Art generates pulverizing frost and micro-crystals of powdered ice from his blood. Inhaling these ice crystals instantly freezes and necroses human lungs, shutting down Breathing Styles.',
      'He killed former Flower Hashira Kanae Kocho and Shinobu Kocho, before succumbing to Shinobu\'s 37kg concentrated Wisteria sacrifice in the Infinity Castle.'
    ],
    traits: ['Pulmonary Ice Crystal Spores', 'Emotionless Psychopathy', 'Twin Golden Tessen War Fans', 'Rime Water Lily Bodhisattva Summon'],
    combatMetrics: {
      power: 96,
      speed: 97,
      technique: 97,
      stamina: 99,
      note: 'Inhaling his frosty mist prevents slayers from using Total Concentration Breathing by freezing lung alveoli.'
    },
    cardImage: domaPortrait,
    heroImage: domaPortrait,
    accentColor: '#38bdf8',
    badgeColor: '#e0f2fe',
    masteredFormsCount: 8,
    breathingForms: [
      {
        num: 'BLOOD ART I',
        title: 'FROZEN LOTUS (KANRENGE)',
        japaneseTitle: '蓮葉氷',
        desc: 'Swings his fans to create blizzard lotuses made of razor ice that slice and freeze the surrounding area.'
      },
      {
        num: 'BLOOD ART II',
        title: 'COLD WHITE MAIDENS',
        japaneseTitle: '凍て曇',
        desc: 'Summons miniature ice maidens that exhale freezing gusts of ice dust to freeze targets solid.'
      },
      {
        num: 'ULTIMATE ART',
        title: 'RIME WATER LILY BODHISATTVA',
        japaneseTitle: '霧氷・睡蓮菩薩',
        desc: 'Creates a colossal ice statue of Buddha capable of unleashing blizzard storms that freeze entire arenas within seconds.'
      }
    ]
  },
  {
    id: 'akaza',
    name: 'Akaza (Hakuji)',
    japaneseName: '猗窩座 (狛治)',
    rank: 'Upper Rank Three',
    rankKanji: '上弦 参',
    breathingStyle: 'Destructive Death (破壊殺)',
    category: 'upper-moon',
    isDemon: true,
    threatLevel: 'Extreme',
    bloodDemonArt: 'Compass Needle & Destructive Shockwaves',
    quote: '"Become a demon, Kyojuro! If you don\'t, you\'ll grow old and die! Become a demon and train for eternity!"',
    bioColumns: [
      'The martial artist Upper Rank Three demon who values pure combat strength above all else. Refuses to eat or kill women, retaining a trace of his human past as Hakuji.',
      'His Blood Demon Art "Destructive Death" deploys a snowflake-shaped Compass Needle that detects the opponent\'s "Fighting Spirit" (battle intent), magnetically guiding his strikes directly to their blind spots.',
      'He killed Flame Hashira Kyojuro Rengoku at the Mugen Train and fought Tanjiro and Giyu in a titanic deathmatch in the Infinity Castle.'
    ],
    traits: ['Fighting Spirit Compass Detection', 'Soryu Martial Arts Master', 'Shockwave Punches & Kicks', 'Head Regrowth via Willpower'],
    combatMetrics: {
      power: 98,
      speed: 98,
      technique: 99,
      stamina: 100,
      note: 'The stronger an opponent\'s fighting spirit, the more accurate and lethal his Compass Needle counterattacks become.'
    },
    cardImage: akazaPortrait,
    heroImage: akazaPortrait,
    accentColor: '#f43f5e',
    badgeColor: '#ffe4e6',
    masteredFormsCount: 7,
    breathingForms: [
      {
        num: 'COMPASS NEEDLE',
        title: 'DESTRUCTIVE DEATH: COMPASS NEEDLE',
        japaneseTitle: '破壊殺・羅針',
        desc: 'Deploys a blue snowflake compass underfoot, reading the opponent\'s battle intent and magnetizing his strikes to their weak points.'
      },
      {
        num: 'DISORDER',
        title: 'DESTRUCTIVE DEATH: DISORDER',
        japaneseTitle: '破壊殺・乱式',
        desc: 'Punches forward at blinding speed to unleash a barrage of dense concussive shockwaves.'
      },
      {
        num: 'ANNIHILATION',
        title: 'DESTRUCTIVE DEATH: ANNIHILATION TYPE',
        japaneseTitle: '破壊殺・滅式',
        desc: 'Akaza\'s most powerful strike. A single explosive punch that pierces clean through the opponent\'s torso.'
      }
    ]
  },
  {
    id: 'hantengu',
    name: 'Hantengu / Zohakuten',
    japaneseName: '半天狗 / 憎珀天',
    rank: 'Upper Rank Four',
    rankKanji: '上弦 肆',
    breathingStyle: 'Emotion Avatar Clones & Wood Dragons',
    category: 'upper-moon',
    isDemon: true,
    threatLevel: 'High',
    bloodDemonArt: 'Emotional Clones (Sekido, Karaku, Aizetsu, Urogi, Zohakuten)',
    quote: '"You bullies! Picking on the weak and helpless! You deserve to be crushed for tormenting me!"',
    bioColumns: [
      'Upper Rank Four demon who appears as a cowardly, weeping old man who believes he is always innocent and victimized.',
      'When beheaded, his body splits into multiple distinct emotion clones representing Anger (Sekido), Joy (Karaku), Sorrow (Aizetsu), and Pleasure (Urogi), each possessing unique elemental powers.',
      'His ultimate form, Zohakuten (Hatred), fuses all clones into a demonic youthful commander who controls gigantic multi-headed wooden dragons and thunder drums.'
    ],
    traits: ['Decapitation Split Division', 'Hatred Clone Zohakuten', 'Colossal Wood Dragon Summon', 'Miniature Core Heart Concealment'],
    combatMetrics: {
      power: 95,
      speed: 91,
      technique: 94,
      stamina: 97,
      note: 'Cutting his head does not kill him; slayers must locate his microscopic original body hiding inside the heart of his clones.'
    },
    cardImage: zohakutenPortrait,
    heroImage: zohakutenPortrait,
    accentColor: '#eab308',
    badgeColor: '#fef9c3',
    masteredFormsCount: 5,
    breathingForms: [
      {
        num: 'HATRED ART',
        title: 'COUNTLESS STRIKING WOODEN DRAGONS',
        japaneseTitle: '無間業樹',
        desc: 'Summons five colossal wooden dragons that roar and smash through entire forests to swallow opponents.'
      },
      {
        num: 'THUNDER ART',
        title: 'THUNDERCLAP COMPRESSION',
        japaneseTitle: '狂鳴雷殺',
        desc: 'Strikes the drums on his back to release sonic screams and lightning bolts that rupture human eardrums.'
      }
    ]
  },
  {
    id: 'gyokko',
    name: 'Gyokko',
    japaneseName: '玉壺',
    rank: 'Upper Rank Five',
    rankKanji: '上弦 伍',
    breathingStyle: 'Porcelain Pot Transmutation & Aquatic Beasts',
    category: 'upper-moon',
    isDemon: true,
    threatLevel: 'High',
    bloodDemonArt: 'Porcelain Vase Transmutation & Water Prison Pot',
    quote: '"My art is supreme! You cannot comprehend the sublime beauty of my porcelain masterpieces!"',
    bioColumns: [
      'Upper Rank Five demon who dwells inside ornate ceramic porcelain pots. Grotesque in appearance with mouths where his eyes should be and infant hands covering his body.',
      'He can teleport instantly between any ceramic pots he places and summon poisonous aquatic beasts, flesh-melting acid, and suffocating water prisons.',
      'In his true molted form, his hands possess the ability to transmute anything they touch into living fish.'
    ],
    traits: ['Pot-to-Pot Instant Teleportation', 'Water Prison Suffocation', 'Fish Transmutation Touch', 'Molted Armor Carapace'],
    combatMetrics: {
      power: 90,
      speed: 92,
      technique: 94,
      stamina: 93,
      note: 'Water Prison Pot traps swordsmen in dense oxygen-deprived spheres that nullify breathing techniques.'
    },
    cardImage: gyokkoPortrait,
    heroImage: gyokkoPortrait,
    accentColor: '#06b6d4',
    badgeColor: '#cffafe',
    masteredFormsCount: 5,
    breathingForms: [
      {
        num: 'BLOOD ART I',
        title: 'WATER PRISON POT',
        japaneseTitle: '水獄鉢',
        desc: 'Traps the opponent inside a sphere of heavy pressurized water, preventing breathing and suffocating them.'
      },
      {
        num: 'BLOOD ART II',
        title: 'KILLER FISH SCALE CLOUD',
        japaneseTitle: '陣殺魚鱗',
        desc: 'Swims through the air at supersonic speeds, utilizing molted slippery scales to strike unpredictably.'
      }
    ]
  },
  {
    id: 'daki-gyutaro',
    name: 'Daki & Gyutaro',
    japaneseName: '堕姫 & 妓夫太郎',
    rank: 'Upper Rank Six',
    rankKanji: '上弦 陸',
    breathingStyle: 'Flying Blood Sickles & Flesh Obi Sashes',
    category: 'upper-moon',
    isDemon: true,
    threatLevel: 'High',
    bloodDemonArt: 'Dual Body Life-Link & Lethal Poison Blood Sickles',
    quote: '"We are two in one! No matter how many times you cut our heads off, you can never kill us unless you do it at the exact same time!"',
    bioColumns: [
      'The sibling demons who rule the Yoshiwara Entertainment District. Daki disguises herself as an Oiran while Gyutaro hides inside her body until called.',
      'Gyutaro wields twin flesh sickles coated in a lethal necrotic poison that kills normal humans within seconds. Daki controls miles of razor-sharp flesh obi sashes.',
      'They share a unique biological life-link: neither can die unless both of their heads are severed simultaneously.'
    ],
    traits: ['Simultaneous Decapitation Condition', 'Lethal Necrotic Blood Sickle Poison', 'Flexible Razor Obi Sashes', 'Shared Sensory Vision Eye'],
    combatMetrics: {
      power: 93,
      speed: 93,
      technique: 92,
      stamina: 96,
      note: 'A single scratch from Gyutaro\'s sickles delivers poison that incapacitates even Hashiras unless cleansed.'
    },
    cardImage: gyutaroDakiPortrait,
    heroImage: gyutaroDakiPortrait,
    accentColor: '#f43f5e',
    badgeColor: '#fecdd3',
    masteredFormsCount: 6,
    breathingForms: [
      {
        num: 'BLOOD ART I',
        title: 'FLYING BLOOD SICKLES',
        japaneseTitle: '飛び血鎌',
        desc: 'Releases crescent-shaped blades of hardened blood that track the opponent through the air under Gyutaro\'s mental command.'
      },
      {
        num: 'BLOOD ART II',
        title: 'EIGHT-LAYERED OBI SLASH',
        japaneseTitle: '八重帯斬り',
        desc: 'Daki unleashes dozens of flexible razor sashes that wrap around buildings to slice opponents to ribbons.'
      }
    ]
  },
  {
    id: 'enmu',
    name: 'Enmu',
    japaneseName: '魘夢',
    rank: 'Lower Rank One',
    rankKanji: '下弦 壱',
    breathingStyle: 'Sleep & Dream Hypnosis Art',
    category: 'lower-moon',
    isDemon: true,
    threatLevel: 'Moderate',
    bloodDemonArt: 'Forced Slumber & Dream Core Manipulation',
    quote: '"To die while having a sweet dream... isn\'t that the greatest bliss a human could ask for?"',
    bioColumns: [
      'Lower Rank One demon who received a massive dose of blood from Muzan after the purge of the Lower Moons.',
      'His Blood Demon Art allows him to hypnotize anyone who hears his voice or looks at his tickets into deep, irresistible slumber, trapping them inside customized dreams.',
      'He fused his entire body into the Mugen Train locomotive, turning the 200 passengers into hostages and hostages for his demonic biomass.'
    ],
    traits: ['Mugen Train Locomotive Fusion', 'Subconscious Dream Core Destruction', 'Spoken Voice Sleep Spell', 'Whispering Sleep Eyes'],
    combatMetrics: {
      power: 84,
      speed: 80,
      technique: 91,
      stamina: 90,
      note: 'Waking up from his sleep requires the target to sever their own neck within the dream world.'
    },
    cardImage: enmuPortrait,
    heroImage: enmuPortrait,
    accentColor: '#c084fc',
    badgeColor: '#f3e8ff',
    masteredFormsCount: 4,
    breathingForms: [
      {
        num: 'BLOOD ART I',
        title: 'FORCED SLUMBER: WHISPER OF DESPAIR',
        japaneseTitle: '強制昏倒睡眠の囁き',
        desc: 'Speaks through mouths on his hand to force anyone within auditory range into immediate deep sleep.'
      },
      {
        num: 'BLOOD ART II',
        title: 'EYES OF FORCED UNCONSCIOUSNESS',
        japaneseTitle: '強制昏倒催眠の眼',
        desc: 'Flesh eyes sprout across train surfaces; meeting their gaze instantly casts sleep hypnosis over and over.'
      }
    ]
  },
  {
    id: 'rui',
    name: 'Rui',
    japaneseName: '累',
    rank: 'Lower Rank Five',
    rankKanji: '下弦 伍',
    breathingStyle: 'Steel Spiderweb Threads Art',
    category: 'lower-moon',
    isDemon: true,
    threatLevel: 'Moderate',
    bloodDemonArt: 'Steel Spider Threads & Puppet Family',
    quote: '"Our family bond is real! Anyone who tries to break our bond will be chopped into tiny pieces!"',
    bioColumns: [
      'Lower Rank Five demon who ruled Mount Natagumo. A sickly human child transformed by Muzan, who desperately sought to recreate a "family" through fear and violence.',
      'Controls razor-sharp spider threads spun from his blood, hardening them to exceed the density of steel katanas.',
      'He was so favored by Muzan that he was allowed to share his blood with other demons to create his artificial Spider Family.'
    ],
    traits: ['Steel Density Spider Threads', 'Natagumo Spider Family Leader', 'Severable Head Trap', 'Blood Cage Prison'],
    combatMetrics: {
      power: 82,
      speed: 84,
      technique: 88,
      stamina: 87,
      note: 'His crimson blood threads cleanly severed Tanjiro\'s Water Katana before Tanjiro awakened Hinokami Kagura.'
    },
    cardImage: ruiPortrait,
    heroImage: ruiPortrait,
    accentColor: '#f43f5e',
    badgeColor: '#ffe4e6',
    masteredFormsCount: 4,
    breathingForms: [
      {
        num: 'BLOOD ART I',
        title: 'CRUEL STRING PRISON',
        japaneseTitle: '刻糸牢',
        desc: 'Weaves a tight sphere of razor-sharp glowing crimson spider threads around the target to slice them into cubes.'
      },
      {
        num: 'BLOOD ART II',
        title: 'KILLING EYE DRUM WHEEL',
        japaneseTitle: '殺目篭',
        desc: 'Creates a cage of blood threads that contracts rapidly to crush and decapitate opponents.'
      }
    ]
  },
  {
    id: 'kyogai',
    name: 'Kyogai',
    japaneseName: '響凱',
    rank: 'Former Lower Rank Six',
    rankKanji: '元下弦 陸',
    breathingStyle: 'Tsuzumi Drum Room Rotation Art',
    category: 'demon',
    isDemon: true,
    threatLevel: 'Moderate',
    bloodDemonArt: 'Tsuzumi Drum Room Rotation & Claw Slash',
    quote: '"My writing had value! My drums were not useless! You recognized my manuscript!"',
    bioColumns: [
      'The former Lower Rank Six "Tsuzumi Demon" who was stripped of his rank by Muzan due to his inability to consume enough human flesh.',
      'Possesses six traditional Japanese Tsuzumi drums embedded in his body. Striking different drums rotates rooms 90 degrees, flips them upside down, or unleashes invisible claw strikes across the room.',
      'Before his demise, Tanjiro avoided stepping on Kyogai\'s discarded literary manuscripts, granting him peace in his final moments.'
    ],
    traits: ['6 Embedded Tsuzumi Drums', 'Mansion Room Gravity Rotation', 'Airborne Telekinetic Claw Slashes', 'Marechi Child Tracker'],
    combatMetrics: {
      power: 76,
      speed: 78,
      technique: 84,
      stamina: 80,
      note: 'Rapid continuous drum tempo causes disorienting gravitational shifts that disbalance swordsmen.'
    },
    cardImage: kyogaiPortrait,
    heroImage: kyogaiPortrait,
    accentColor: '#a16207',
    badgeColor: '#fef08a',
    masteredFormsCount: 3,
    breathingForms: [
      {
        num: 'BLOOD ART I',
        title: 'RAPID DRUM ROTATION',
        japaneseTitle: '鼓打ち 空間転移',
        desc: 'Striking drums on his shoulders and chest instantly rotates the room clockwise, counterclockwise, or flips gravity upside down.'
      },
      {
        num: 'BLOOD ART II',
        title: 'TRIPLE CLAW STRIKE',
        japaneseTitle: '三連爪痕',
        desc: 'Striking his stomach drum releases three invisible slashing claw shockwaves through the air.'
      }
    ]
  }
];

export const VIDEOS: VideoItem[] = [
  {
    id: 'dance-fire-god',
    title: 'Dance of the Fire God',
    subtitle: 'Hinokami Kagura Origin Showcase',
    duration: '14:23',
    views: '1.4M Views',
    category: 'featured',
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDnMMVgjN1xyR_acFBW8krFFJchlZIS7INzKSdER_69pR3ElaKd2uSPOYyw7ERPSraZHmMrAs1rgU59uKzMNmCHGk0airrUIwpHv0mvtFEKJ0E0N6nF9ltrvLr2tBxMkrd7b3JXORg-DU9-WbenVck3dGzHmE54HGDEQLU4LkG30pMXfekM9ojP_FmpEbiZ3FEEShYA3yZL6T5BxQhGuGsuq3ZslQ-YzU8fQKggzoSk_UgoEnaVXhqg',
    description: 'Master the fundamental movements of the legendary Sun Breathing style. This exclusive footage captures the precise footwork and explosive sword techniques required to harness the true power of the Hinokami Kagura.',
    themeColor: '#ff535b',
    videoType: 'sun'
  },
  {
    id: 'mugen-train-clash',
    title: 'Clash at Mugen Train',
    subtitle: 'Flame Hashira vs Upper Rank 3 Akaza',
    duration: '08:45',
    category: 'epic-battles',
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrcz9TW72MNDtfGVOMPuhtN-8GyU96mGDEX1FjWG56YXSasG1S_qy8qJpfcjIpCV4UYkOxcpdxYFFYco42qK4DL7aDKG0gD8CAnUyO-eN2uFd7oCJMXxKN9bkLjJkoslhXqbniZk_DA17l6AZO5iQ5sWT1CWBpywRpz9Wx_dlsiC0n4CvTgIbko_0tQJDYwS4h-dnoyRKze960EO-IsdAaYSOTfxpTOc-z9gSfmKqLkfH6hQmYoJzH',
    description: 'Kyojuro Rengoku unleashes the entirety of Flame Breathing against Akaza, defending the railway in a legendary duel of blazing spirits.',
    themeColor: '#ff535b',
    videoType: 'flame'
  },
  {
    id: 'entertainment-district-clash',
    title: 'Entertainment District Climax',
    subtitle: 'Tengen Uzui & Tanjiro vs Upper Rank 6',
    duration: '11:20',
    category: 'epic-battles',
    thumbnail: tengenPortrait,
    description: 'Sound Hashira Tengen Uzui completes his Musical Score analysis in the flaming Yoshiwara streets, clashing blade for blade with Gyutaro.',
    themeColor: '#eab308',
    videoType: 'thunder'
  },
  {
    id: 'swordsmith-village-mist',
    title: 'Mist vs Porcelain Pots',
    subtitle: 'Muichiro Tokito vs Upper Rank 5 Gyokko',
    duration: '09:15',
    category: 'epic-battles',
    thumbnail: muichiroPortrait,
    description: 'Muichiro awakens the Demon Slayer Mark and his 7th Form: Obscuring Clouds, outmaneuvering Gyokko\'s true molted form.',
    themeColor: '#9ecfd1',
    videoType: 'water'
  },
  {
    id: 'thunderclap-sixfold',
    title: 'Thunderclap and Flash',
    subtitle: 'Six Fold Strike in Natagumo',
    duration: '03:12',
    category: 'epic-battles',
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCTuT0QWNQ-BsHCHzYKi5QwTp4KPeeGj0vfSpZR8n7zBD8pAlJ4coWGwIc_-Td5nHa-RlZNRxqieEn2pepvVPKK3L8kJZsixPBl1Ue8y05bGYoWvyYIN8LAKLVdEdahUH_RZogJEl6s9R5qwypANqYuuDh_Q-YdhJcUCr9VhNH8RCmhq4wv2LJJ2LdAFU53vGLAWo2G9FaAex0dc_VnZFRINf18hWzTLXcDGCXXfHam5Vk87IbBmOJu',
    description: 'Zenitsu Agatsuma awakens in the Natagumo Mountain forest, shattering the night air with continuous supersonic strikes.',
    themeColor: '#facc15',
    videoType: 'thunder'
  },
  {
    id: 'beast-fang-5',
    title: 'Beast Breathing Fang 5',
    subtitle: 'Crazy Cutting in the Woods',
    duration: '05:30',
    category: 'epic-battles',
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBzpY1k5A4NoF9MqsB8-k0tbp62m7W2wOF2ZEtilrIuaQdgJ8ejxDS6Q81bMo-BERbP0EY8MyEr-UCOh5wACE89b2uLz4CkjBXgUahd-SxqhbYUZTmILRSzXluLhs9J8Vi0E4nZFwuYWSGqFHPCJbRTGtn-uu5n4E8ai_9I17dSj2hRwPori-Mae-hsXj5JqAfEg9CXbfEbK1YX-YaGQp1YIdVGOL1s2zJR_gdLTu4bv73lnOXV80B7',
    description: 'Inosuke Hashibira tears through demonic puppets with dual serrated katanas in an erratic midair slaughter.',
    themeColor: '#9ecfd1',
    videoType: 'beast'
  },
  {
    id: 'tutorial-water-surface',
    title: 'Water Surface Slash',
    subtitle: 'Form I Fundamental Horizontal Strike',
    duration: '02:45',
    category: 'breathing-tutorials',
    formTag: 'Form I',
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBa70i1ZpBpa6Ag3IEGbzdKQjDkEEfVF5bNTyDo6NtpS9ireXADumAD6khyLU0dNrxIiNKvFc6mjCwTaycmaA5cQRPw8G2g9rlrd5TG9D19_ebqiZBCnR2wIAefDyifWqEOdhdKhZzoiAEUhheJOO89i3y-9G94y3oktuGt5sy-VqtSa6Jn3AI--LmEu3eaut13OS-UElfvhbKjmjoBJJeuKpqatJvK4Qf8rdiMsaAdkhjwqpKiMlJI',
    description: 'The fundamental horizontal strike of the Water style. Clean footwork and focused blade alignment.',
    themeColor: '#98cdf2',
    videoType: 'water'
  },
  {
    id: 'tutorial-butterfly-dance',
    title: 'Butterfly Dance: Caprice',
    subtitle: 'Insect Breathing Stinger Thrusts',
    duration: '02:50',
    category: 'breathing-tutorials',
    formTag: 'Form IV',
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9rMk6QbHlF43lpV6SqfV8kGS6nH4QtFy815vqvzrAaWibVAKdZqhPkn-9hOmVdl1yiFBSSRaJKI5HFmO6jmApkCVCuQ-Xs1PdRXBhcE1_6NKrHzWHCIjBO5wF1GADwul4iMR_XTXZ7VUyiWl1Kp0lX3CQC32kNS5bqykS8C1bvw8HzDWKwPIXAiXnJKjpwWeCvX1KwzgtLOg7PjrKfu_gptkl4iqX-fPcCzOjd4ibWwVC9ozQm8j2',
    description: 'High-speed, multi-hit piercing strikes that deliver high concentrations of lethal Wisteria toxin.',
    themeColor: '#a855f7',
    videoType: 'insect'
  }
];

export const TOP_HASHIRA = [
  { rank: '01', name: 'Gyomei Himejima', style: 'Stone Breathing', icon: 'landscape', id: 'gyomei' },
  { rank: '02', name: 'Sanemi Shinazugawa', style: 'Wind Breathing', icon: 'air', id: 'sanemi' },
  { rank: '03', name: 'Muichiro Tokito', style: 'Mist Breathing', icon: 'cloud', id: 'muichiro' },
  { rank: '04', name: 'Giyu Tomioka', style: 'Water Breathing', icon: 'water_drop', id: 'giyu' }
];

export const BREATHING_STYLES: BreathingStyleDetail[] = [
  {
    id: 'sun',
    name: 'Sun Breathing (Hinokami Kagura)',
    japanese: '日の呼吸 (ヒノカミ神楽)',
    color: '#ff535b',
    description: 'The legendary primordial breathing style created by Yoriichi Tsugikuni. All other breathing styles are branches derived from this supreme source.',
    notableUsers: ['Yoriichi Tsugikuni', 'Tanjiro Kamado', 'Tanjuro Kamado', 'Sumiyoshi'],
    keyForms: [
      { formNum: 'Dance (Enbu)', name: 'Dance', effect: 'A single high-powered vertical slash that mimics the sun.' },
      { formNum: 'Clear Blue Sky', name: 'Clear Blue Sky', effect: 'Spins 360 degrees horizontally to release an all-encompassing slash.' },
      { formNum: 'Solar Halo Dragon Dance', name: 'Dragon Head Dance', effect: 'Fluid continuous flaming strikes moving like a dragon.' },
      { formNum: 'Thirteenth Form', name: '13th Form Loop', effect: 'Continuously performs all 12 forms in succession to strike all vital organs.' }
    ]
  },
  {
    id: 'moon',
    name: 'Moon Breathing',
    japanese: '月の呼吸',
    parentStyle: 'Sun Breathing',
    color: '#7c3aed',
    description: 'Developed by Kokushibo (Michikatsu Tsugikuni) during the Sengoku era. Generates chaotic crescent-shaped blades that alter size and path with every swing.',
    notableUsers: ['Kokushibo (Upper Rank One)'],
    keyForms: [
      { formNum: '1st Form', name: 'Dark Moon, Evening Palace', effect: 'Iaido horizontal slash surrounded by crescent blades.' },
      { formNum: '6th Form', name: 'Perpetual Night, Lonely Moon', effect: 'Storm of slashes advancing several meters.' },
      { formNum: '14th Form', name: 'Cataclysm, Tenman Crescent Moon', effect: 'Gigantic multi-layered vortex of crescent energy.' }
    ]
  },
  {
    id: 'water',
    name: 'Water Breathing',
    japanese: '水の呼吸',
    parentStyle: 'Sun Breathing',
    color: '#9ecfd1',
    description: 'One of the five main breathing styles. Emphasizes flexibility, adaptability, and fluid footwork to counter any opponent stance.',
    notableUsers: ['Giyu Tomioka', 'Tanjiro Kamado', 'Sakonji Urokodaki', 'Sabito', 'Makomo'],
    keyForms: [
      { formNum: '1st Form', name: 'Water Surface Slash', effect: 'Single concentrated horizontal wave slash.' },
      { formNum: '2nd Form', name: 'Water Wheel', effect: 'Vertical airborne circular spinning attack.' },
      { formNum: '10th Form', name: 'Constant Flux', effect: 'Roaring water dragon that accumulates momentum.' },
      { formNum: '11th Form', name: 'Dead Calm (Nagi)', effect: 'Giyu\'s unique absolute defense.' }
    ]
  },
  {
    id: 'flame',
    name: 'Flame Breathing',
    japanese: '炎の呼吸',
    parentStyle: 'Sun Breathing',
    color: '#ff535b',
    description: 'A direct descendant of Sun Breathing characterized by explosive bursts of energy, singular focused strikes, and unshakable fortitude.',
    notableUsers: ['Kyojuro Rengoku', 'Shinjuro Rengoku'],
    keyForms: [
      { formNum: '1st Form', name: 'Unknowing Fire', effect: 'Blazing forward dash decapitation.' },
      { formNum: '5th Form', name: 'Flame Tiger', effect: 'Draconic/tiger flaming shockwaves.' },
      { formNum: '9th Form', name: 'Rengoku (Purgatory)', effect: 'Devastating fiery dash carving terrain.' }
    ]
  },
  {
    id: 'thunder',
    name: 'Thunder Breathing',
    japanese: '雷の呼吸',
    parentStyle: 'Sun Breathing',
    color: '#facc15',
    description: 'Focuses on immense speed and explosive leg muscle contraction to strike faster than lightning itself.',
    notableUsers: ['Zenitsu Agatsuma', 'Jigoro Kuwajima', 'Kaigaku'],
    keyForms: [
      { formNum: '1st Form', name: 'Thunderclap and Flash', effect: 'Supersonic single-draw iaido dash.' },
      { formNum: 'Six Fold', name: 'Six Fold Strike', effect: 'Omni-directional ricocheting lightning dash.' },
      { formNum: '7th Form', name: 'Honoikazuchi no Kami', effect: 'Zenitsu\'s legendary flaming thunder god.' }
    ]
  },
  {
    id: 'wind',
    name: 'Wind Breathing',
    japanese: '風の呼吸',
    parentStyle: 'Sun Breathing',
    color: '#86efac',
    description: 'Uses erratic, gale-force whirlwind slashes to lacerate enemies from unpredictable angles.',
    notableUsers: ['Sanemi Shinazugawa'],
    keyForms: [
      { formNum: '1st Form', name: 'Dust Whirlwind Cutter', effect: 'Dashes forward creating a cyclone of slashes.' },
      { formNum: '7th Form', name: 'Gale - Sudden Gusts', effect: 'Leaps into the air unleashing wind shear.' }
    ]
  },
  {
    id: 'stone',
    name: 'Stone Breathing',
    japanese: '岩の呼吸',
    parentStyle: 'Sun Breathing',
    color: '#9ca3af',
    description: 'The heaviest and most physically demanding style, channeling earth-shattering strikes with spiked flails and broad axes.',
    notableUsers: ['Gyomei Himejima'],
    keyForms: [
      { formNum: '1st Form', name: 'Serpentinite Bipolar', effect: 'Throws axe and flail in unison.' },
      { formNum: '4th Form', name: 'Volcanic Rock - Rapid Conquest', effect: 'Continuous swinging creating a storm of stone.' }
    ]
  },
  {
    id: 'sound',
    name: 'Sound Breathing',
    japanese: '音の呼吸',
    parentStyle: 'Thunder Breathing',
    color: '#eab308',
    description: 'Branched from Thunder Breathing by Tengen Uzui. Combines explosive gunpowder bombs and musical score rhythm analysis.',
    notableUsers: ['Tengen Uzui'],
    keyForms: [
      { formNum: '1st Form', name: 'Roar', effect: 'Detonates bombs with twin cleavers.' },
      { formNum: '4th Form', name: 'Constant Resounding Slashes', effect: 'Spinning shield of explosive blades.' },
      { formNum: '5th Form', name: 'String Performance', effect: 'Continuous advance of detonating chained strikes.' }
    ]
  },
  {
    id: 'mist',
    name: 'Mist Breathing',
    japanese: '霞の呼吸',
    parentStyle: 'Wind Breathing',
    color: '#9ecfd1',
    description: 'Branched from Wind Breathing. Uses confusing tempo shifts and visual obstruction to create the illusion of an impenetrable fog.',
    notableUsers: ['Muichiro Tokito'],
    keyForms: [
      { formNum: '1st Form', name: 'Low Clouds, Distant Haze', effect: 'Direct thrusting strike.' },
      { formNum: '7th Form', name: 'Obscuring Clouds (Haboro)', effect: 'Muichiro\'s phantom invisibility speed.' }
    ]
  },
  {
    id: 'love',
    name: 'Love Breathing',
    japanese: '恋の呼吸',
    parentStyle: 'Flame Breathing',
    color: '#ec4899',
    description: 'Branched from Flame Breathing by Mitsuri Kanroji. Uses a flexible ribbon sword with whip-like multi-angle slashes.',
    notableUsers: ['Mitsuri Kanroji'],
    keyForms: [
      { formNum: '1st Form', name: 'Shivers of First Love', effect: 'Extended winding whip slashes.' },
      { formNum: '5th Form', name: 'Swaying Love, Wildfire Claw', effect: 'Somersaulting aerial whip barrier.' }
    ]
  },
  {
    id: 'serpent',
    name: 'Serpent Breathing',
    japanese: '蛇の呼吸',
    parentStyle: 'Water Breathing',
    color: '#0ea5e9',
    description: 'Branched from Water Breathing. Focuses on slithering, curving sword strikes that bend around barriers like a snake.',
    notableUsers: ['Obanai Iguro'],
    keyForms: [
      { formNum: '1st Form', name: 'Winding Serpent Slash', effect: 'Slithering circular horizontal slash.' },
      { formNum: '5th Form', name: 'Slithering Serpent', effect: 'Wide sweeping arcs decapitating groups.' }
    ]
  },
  {
    id: 'insect',
    name: 'Insect Breathing',
    japanese: '蟲の呼吸',
    parentStyle: 'Water Breathing',
    color: '#a855f7',
    description: 'Branched from Water Breathing by Shinobu Kocho. Uses shallow needle thrusts to inject lethal doses of Wisteria venom.',
    notableUsers: ['Shinobu Kocho'],
    keyForms: [
      { formNum: 'Butterfly Dance', name: 'Caprice', effect: 'Fluttering multi-hit poison injection.' },
      { formNum: 'Centipede Dance', name: 'Hundred-Legged Zigzag', effect: 'Maximum speed ground-breaking thrust.' }
    ]
  },
  {
    id: 'flower',
    name: 'Flower Breathing',
    japanese: '花の呼吸',
    parentStyle: 'Water Breathing',
    color: '#f472b6',
    description: 'Branched from Water Breathing. Emphasizes graceful, floral sword deflections and extreme kinetic vision.',
    notableUsers: ['Kanae Kocho', 'Kanao Tsuyuri'],
    keyForms: [
      { formNum: '2nd Form', name: 'Honorable Shadow Plum', effect: 'Defensive flower petal rotational deflections.' },
      { formNum: 'Final Form', name: 'Equinoctial Vermilion Eye', effect: 'Accelerates vision to extreme slow motion.' }
    ]
  },
  {
    id: 'beast',
    name: 'Beast Breathing',
    japanese: '獣の呼吸',
    parentStyle: 'Wind Breathing (Self-taught)',
    color: '#38bdf8',
    description: 'Primal, self-taught sword fighting style created by Inosuke Hashibira using dual chipped serrated blades.',
    notableUsers: ['Inosuke Hashibira'],
    keyForms: [
      { formNum: '1st Fang', name: 'Pierce', effect: 'Twin blade neck stab.' },
      { formNum: '5th Fang', name: 'Crazy Cutting', effect: 'Mid-air omnidirectional shredding.' },
      { formNum: '7th Fang', name: 'Spatial Awareness', effect: 'Vibration-based sensory detection.' }
    ]
  }
];
