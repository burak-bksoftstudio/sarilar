export interface Category {
  id: string;
  slug: string;
  name: {
    tr: string;
    en: string;
  };
  image: string;
  brands: Brand[];
}

export interface Brand {
  id: string;
  slug: string;
  name: string;
  logo: string;
  products: Product[];
  catalogs?: string[];
}

export interface Product {
  id: string;
  name: string;
  image: string;
}

export const categories: Category[] = [
  {
    id: '4',
    slug: 'granit-seramik-mozaik',
    name: {
      tr: 'Granit, Seramik & Mozaik',
      en: 'Granite, Ceramic & Mosaic',
    },
    image: '/images/categories/granitbrseramik-mozaik8139533391587233896.jpg',
    brands: [
      {
        id: 'saremica',
        slug: 'saremica',
        name: 'Saremica Granitte',
        logo: '/images/solution_partners/saremica9365088201586773670.jpg',
        products: [
          { id: 's1', name: 'Saremica 1', image: '/images/products/saremica8444708721586512174.jpg' },
          { id: 's2', name: 'Saremica 2', image: '/images/products/saremica6820910201586512173.jpg' },
          { id: 's3', name: 'Saremica 3', image: '/images/products/saremica4845868211586512173.jpg' },
          { id: 's4', name: 'Saremica 4', image: '/images/products/saremica2977856981586512173.jpg' },
          { id: 's5', name: 'Saremica 5', image: '/images/products/saremica2566586051586512173.jpg' },
          { id: 's6', name: 'Saremica 6', image: '/images/products/saremica2264492761586512173.jpg' },
        ],
      },
      {
        id: 'luxsera',
        slug: 'luxsera',
        name: 'Luxsera',
        logo: '/images/solution_partners/luxsera4989740421592037693.jpg',
        products: [
          { id: 'l1', name: 'Luxsera 1', image: '/images/products/luxsera8620380891588230695.jpg' },
          { id: 'l2', name: 'Luxsera 2', image: '/images/products/luxsera5927137611588230693.jpg' },
          { id: 'l3', name: 'Luxsera 3', image: '/images/products/luxsera4426434331588230677.jpg' },
          { id: 'l4', name: 'Luxsera 4', image: '/images/products/luxsera4249463561588230678.jpg' },
          { id: 'l5', name: 'Luxsera 5', image: '/images/products/luxsera3890133651588230684.jpg' },
          { id: 'l6', name: 'Luxsera 6', image: '/images/products/luxsera2105787111588230679.jpg' },
          { id: 'l7', name: 'Luxsera 7', image: '/images/products/luxsera1978303351588230695.jpg' },
          { id: 'l8', name: 'Luxsera 8', image: '/images/products/luxsera18382618901588230687.jpg' },
        ],
        catalogs: ['https://cdn.sarilar.bksoftstudio.com/catalogs/luxsera7587494811768631401.pdf'],
      },
      {
        id: 'yurtbay-seramik',
        slug: 'yurtbay-seramik',
        name: 'Yurtbay Seramik',
        logo: '/images/solution_partners/yurtbay-seramik3333421501676356809.png',
        products: [
          { id: 'y1', name: 'Yurtbay 1', image: '/images/products/yurtbay-seramik6713439911674647037.jpg' },
          { id: 'y2', name: 'Yurtbay 2', image: '/images/products/yurtbay-seramik606181361674647267.jpg' },
          { id: 'y3', name: 'Yurtbay 3', image: '/images/products/yurtbay-seramik5127966061674647253.jpg' },
          { id: 'y4', name: 'Yurtbay 4', image: '/images/products/yurtbay-seramik4244892571674647268.jpg' },
          { id: 'y5', name: 'Yurtbay 5', image: '/images/products/yurtbay-seramik2252580011674647707.jpg' },
          { id: 'y6', name: 'Yurtbay 6', image: '/images/products/yurtbay-seramik21032529591674647684.jpg' },
        ],
        catalogs: ['https://cdn.sarilar.bksoftstudio.com/catalogs/yurtbay-seramik11206467861741159423.pdf', 'https://cdn.sarilar.bksoftstudio.com/catalogs/yurtbay-seramik11757243851741159399.pdf'],
      },
      {
        id: 'ege-seramik',
        slug: 'ege-seramik',
        name: 'Ege Seramik',
        logo: '/images/solution_partners/termal-seramik4675877511676356970.jpg',
        products: [
          { id: 'e1', name: 'Ege Seramik 1', image: '/images/products/ege-seramik13339759931768053084.jpg' },
          { id: 'e2', name: 'Ege Seramik 2', image: '/images/products/ege-seramik16904173471768053128.jpg' },
          { id: 'e3', name: 'Ege Seramik 3', image: '/images/products/ege-seramik2383537501768053133.jpg' },
          { id: 'e4', name: 'Ege Seramik 4', image: '/images/products/ege-seramik7391979591768053141.jpg' },
          { id: 'e5', name: 'Ege Seramik 5', image: '/images/products/ege-seramik7474254931768053150.jpg' },
        ],
      },
      {
        id: 'altin-cini-seramik',
        slug: 'altin-cini-seramik',
        name: 'Altın Çini Seramik',
        logo: '/images/solution_partners/kutahya-seramik12311399701586773615.jpg',
        products: [
          { id: 'a1', name: 'Altın Çini 1', image: '/images/products/altin-cini-seramik11038022111681279928.jpg' },
          { id: 'a2', name: 'Altın Çini 2', image: '/images/products/altin-cini-seramik1376240421681279922.jpg' },
          { id: 'a3', name: 'Altın Çini 3', image: '/images/products/altin-cini-seramik14166552281681279932.jpg' },
          { id: 'a4', name: 'Altın Çini 4', image: '/images/products/altin-cini-seramik15037910601681279938.jpg' },
          { id: 'a5', name: 'Altın Çini 5', image: '/images/products/altin-cini-seramik18010146901681279916.jpg' },
          { id: 'a6', name: 'Altın Çini 6', image: '/images/products/altin-cini-seramik8545574281681279910.jpg' },
        ],
        catalogs: ['https://cdn.sarilar.bksoftstudio.com/catalogs/altin-cini-katalog.pdf'],
      },
      {
        id: 'ng-kutahya',
        slug: 'ng-kutahya',
        name: 'NG Kütahya',
        logo: '/images/solution_partners/kutahya-seramik12311399701586773615.jpg',
        products: [
          { id: 'n1', name: 'NG Kütahya 1', image: '/images/products/ng-kutahya6388549951586512137.jpg' },
          { id: 'n2', name: 'NG Kütahya 2', image: '/images/products/ng-kutahya20750100441586512137.jpg' },
          { id: 'n3', name: 'NG Kütahya 3', image: '/images/products/ng-kutahya18525203091586512137.jpg' },
          { id: 'n4', name: 'NG Kütahya 4', image: '/images/products/ng-kutahya13090779541586512136.jpg' },
          { id: 'n5', name: 'NG Kütahya 5', image: '/images/products/ng-kutahya12122375291586512137.jpg' },
          { id: 'n6', name: 'NG Kütahya 6', image: '/images/products/ng-kutahya10971802411586512136.jpg' },
        ],
      },
      {
        id: 'saremica-mosaica',
        slug: 'saremica-mosaica',
        name: 'Saremica Mosaica',
        logo: '/images/solution_partners/saremica9365088201586773670.jpg',
        products: [
          { id: 'sm1', name: 'Mosaica 1', image: '/images/products/saremica-mosaica9703434311588231913.jpg' },
          { id: 'sm2', name: 'Mosaica 2', image: '/images/products/saremica-mosaica9228509331587491068.jpg' },
          { id: 'sm3', name: 'Mosaica 3', image: '/images/products/saremica-mosaica8891499171588231910.jpg' },
          { id: 'sm4', name: 'Mosaica 4', image: '/images/products/saremica-mosaica7411046131587491067.jpg' },
          { id: 'sm5', name: 'Mosaica 5', image: '/images/products/saremica-mosaica6180800241587491068.jpg' },
          { id: 'sm6', name: 'Mosaica 6', image: '/images/products/saremica-mosaica4818166331588231909.jpg' },
        ],
      },
    ],
  },
  {
    id: '1',
    slug: 'vitrifiye-armatur',
    name: {
      tr: 'Vitrifiye & Armatür',
      en: 'Vitrified & Faucets',
    },
    image: '/images/categories/vitrifiye-armatur2578396171587233915.jpg',
    brands: [
      {
        id: 'roca',
        slug: 'roca',
        name: 'Roca',
        logo: '/images/solution_partners/roca19980511571673965063.jpg',
        products: [
          { id: 'r1', name: 'Roca 1', image: '/images/products/roca227405931663679588.jpg' },
          { id: 'r2', name: 'Roca 2', image: '/images/products/roca20080795611663679589.jpg' },
          { id: 'r3', name: 'Roca 3', image: '/images/products/roca17496503981663679610.jpg' },
        ],
        catalogs: ['https://cdn.sarilar.bksoftstudio.com/catalogs/roca7211592731752567765.pdf'],
      },
      {
        id: 'ideal-standard',
        slug: 'ideal-standard',
        name: 'İdeal Standard',
        logo: '/images/solution_partners/ideal-standard4526376801586772885.jpg',
        products: [
          { id: 'is1', name: 'İdeal Standard 1', image: '/images/products/ideal-standard10067931271586511962.jpg' },
          { id: 'is2', name: 'İdeal Standard 2', image: '/images/products/ideal-standard1989142911586511962.jpg' },
          { id: 'is3', name: 'İdeal Standard 3', image: '/images/products/ideal-standard6034991831586511962.jpg' },
          { id: 'is4', name: 'İdeal Standard 4', image: '/images/products/ideal-standard794130031586511961.jpg' },
          { id: 'is5', name: 'İdeal Standard 5', image: '/images/products/ideal-standard9952654281586511962.jpg' },
        ],
      },
      {
        id: 'idevit',
        slug: 'idevit',
        name: 'İdevit',
        logo: '/images/solution_partners/idevit4750233911586772896.jpg',
        products: [
          { id: 'id1', name: 'İdevit 1', image: '/images/products/idevit9973043951586512006.jpg' },
          { id: 'id2', name: 'İdevit 2', image: '/images/products/idevit7757592651586512005.jpg' },
          { id: 'id3', name: 'İdevit 3', image: '/images/products/idevit4229920191586512005.jpg' },
        ],
        catalogs: ['https://cdn.sarilar.bksoftstudio.com/catalogs/idevit13079695271710579164.pdf'],
      },
      {
        id: 'nsk',
        slug: 'nsk',
        name: 'NSK',
        logo: '/images/solution_partners/nsk1968534181586773651.jpg',
        products: [
          { id: 'nsk1', name: 'NSK 1', image: '/images/products/nsk8991322121587235452.jpg' },
          { id: 'nsk2', name: 'NSK 2', image: '/images/products/nsk7413622151587235452.jpg' },
          { id: 'nsk3', name: 'NSK 3', image: '/images/products/nsk6704161361587733489.jpg' },
          { id: 'nsk4', name: 'NSK 4', image: '/images/products/nsk6493770931587235452.jpg' },
          { id: 'nsk5', name: 'NSK 5', image: '/images/products/nsk5815700991587235452.jpg' },
          { id: 'nsk6', name: 'NSK 6', image: '/images/products/nsk4810571111587235452.jpg' },
        ],
        catalogs: ['https://cdn.sarilar.bksoftstudio.com/catalogs/nsk19273343981740557086.pdf'],
      },
      {
        id: 'smanni',
        slug: 'smanni',
        name: 'Smanni',
        logo: '/images/solution_partners/smanni6239740291605878689.jpg',
        products: [],
        catalogs: ['https://cdn.sarilar.bksoftstudio.com/catalogs/smanni6824375151752567808.pdf', 'https://cdn.sarilar.bksoftstudio.com/catalogs/smanni8683621271685368455.pdf'],
      },
    ],
  },
  {
    id: '6',
    slug: 'kuvet-kabinler',
    name: {
      tr: 'Küvet & Kabinler',
      en: 'Bathtubs & Cabins',
    },
    image: '/images/categories/kuvet-kabinler12418458931760705371.jpg',
    brands: [
      {
        id: 'artemis',
        slug: 'artemis',
        name: 'Artemis',
        logo: '/images/solution_partners/artemis20240405041586772495.jpg',
        products: [
          { id: 'ar1', name: 'Artemis 1', image: '/images/products/artemis12086906141586511880.jpg' },
          { id: 'ar2', name: 'Artemis 2', image: '/images/products/artemis17771110481586511880.jpg' },
          { id: 'ar3', name: 'Artemis 3', image: '/images/products/artemis17790345981586511879.jpg' },
          { id: 'ar4', name: 'Artemis 4', image: '/images/products/artemis3595433911586511881.jpg' },
          { id: 'ar5', name: 'Artemis 5', image: '/images/products/artemis3663360901586511880.jpg' },
          { id: 'ar6', name: 'Artemis 6', image: '/images/products/artemis8736908091586511880.jpg' },
        ],
        catalogs: ['https://cdn.sarilar.bksoftstudio.com/catalogs/artemis10130200561758035818.pdf', 'https://cdn.sarilar.bksoftstudio.com/catalogs/artemis20556303951758035604.pdf', 'https://cdn.sarilar.bksoftstudio.com/catalogs/artemis2590061801758035845.pdf'],
      },
      {
        id: 'kardus',
        slug: 'kardus',
        name: 'Karduş',
        logo: '/images/solution_partners/kardus13462931551586773602.jpg',
        products: [
          { id: 'k1', name: 'Karduş 1', image: '/images/products/kardus9790622161587733788.jpg' },
          { id: 'k2', name: 'Karduş 2', image: '/images/products/kardus826972901587733779.jpg' },
          { id: 'k3', name: 'Karduş 3', image: '/images/products/kardus6951292081587733782.jpg' },
          { id: 'k4', name: 'Karduş 4', image: '/images/products/kardus44436401587733780.jpg' },
          { id: 'k5', name: 'Karduş 5', image: '/images/products/kardus1861252511587733779.jpg' },
          { id: 'k6', name: 'Karduş 6', image: '/images/products/kardus17116853651587733786.jpg' },
        ],
      },
    ],
  },
  {
    id: '3',
    slug: 'banyo-dolaplari',
    name: {
      tr: 'Banyo Dolapları',
      en: 'Bathroom Cabinets',
    },
    image: '/images/categories/banyo-dolaplari8471635531760705250.jpg',
    brands: [
      {
        id: 'orka',
        slug: 'orka',
        name: 'Orka',
        logo: '/images/solution_partners/orka7843009091586773660.jpg',
        products: [
          { id: 'o1', name: 'Orka 1', image: '/images/products/orka7687532551587732934.jpg' },
          { id: 'o2', name: 'Orka 2', image: '/images/products/orka5332961851586512156.jpg' },
          { id: 'o3', name: 'Orka 3', image: '/images/products/orka326936151586512156.jpg' },
          { id: 'o4', name: 'Orka 4', image: '/images/products/orka2861162421586512156.jpg' },
          { id: 'o5', name: 'Orka 5', image: '/images/products/orka21086582661587732975.jpg' },
          { id: 'o6', name: 'Orka 6', image: '/images/products/orka19376911691587732851.jpg' },
        ],
        catalogs: ['https://cdn.sarilar.bksoftstudio.com/catalogs/orka21290659311756111986.pdf', 'https://cdn.sarilar.bksoftstudio.com/catalogs/orka372494921761046733.pdf'],
      },
    ],
  },
  {
    id: '5',
    slug: 'parke',
    name: {
      tr: 'Parke',
      en: 'Parquet',
    },
    image: '/images/categories/parke1687029361587233876.jpg',
    brands: [
      {
        id: 'agt',
        slug: 'agt',
        name: 'AGT',
        logo: '/images/solution_partners/agt16435188121586772546.jpg',
        products: [
          { id: 'agt1', name: 'AGT 1', image: '/images/products/agt15595548701586511705.jpg' },
          { id: 'agt2', name: 'AGT 2', image: '/images/products/agt17094757671586511705.jpg' },
          { id: 'agt3', name: 'AGT 3', image: '/images/products/agt21206459211586511705.jpg' },
          { id: 'agt4', name: 'AGT 4', image: '/images/products/agt6236828841586511705.jpg' },
          { id: 'agt5', name: 'AGT 5', image: '/images/products/agt6359388811586511706.jpg' },
          { id: 'agt6', name: 'AGT 6', image: '/images/products/agt8615595711586511706.jpg' },
        ],
      },
    ],
  },
  {
    id: '7',
    slug: 'boya',
    name: {
      tr: 'Boya',
      en: 'Paint',
    },
    image: '/images/categories/boya11711151681587233859.jpg',
    brands: [
      {
        id: 'jotun',
        slug: 'jotun',
        name: 'Jotun',
        logo: '/images/solution_partners/jotun13705290941586772905.jpg',
        products: [
          { id: 'j1', name: 'Jotun 1', image: '/images/products/jotun9571379571586512060.jpg' },
          { id: 'j2', name: 'Jotun 2', image: '/images/products/jotun4307355991586512060.jpg' },
          { id: 'j3', name: 'Jotun 3', image: '/images/products/jotun19888364251586512060.jpg' },
          { id: 'j4', name: 'Jotun 4', image: '/images/products/jotun18920760551586512060.jpg' },
          { id: 'j5', name: 'Jotun 5', image: '/images/products/jotun18031749161586512060.jpg' },
          { id: 'j6', name: 'Jotun 6', image: '/images/products/jotun10002485201586512060.jpg' },
        ],
        catalogs: ['https://cdn.sarilar.bksoftstudio.com/catalogs/jotun10948135451752571040.pdf'],
      },
    ],
  },
  {
    id: '2',
    slug: 'alci-ve-levhalar',
    name: {
      tr: 'Alçı ve Levhalar',
      en: 'Plaster and Boards',
    },
    image: '/images/categories/alci-ve-levhalar21266725981587233841.jpg',
    brands: [
      {
        id: 'dalsan',
        slug: 'dalsan',
        name: 'Dalsan',
        logo: '/images/solution_partners/dalsan11911800361586772873.jpg',
        products: [
          { id: 'd1', name: 'Dalsan 1', image: '/images/products/dalsan16139891271588229024.jpg' },
          { id: 'd2', name: 'Dalsan 2', image: '/images/products/dalsan17484204091588229027.jpg' },
          { id: 'd3', name: 'Dalsan 3', image: '/images/products/dalsan19419614531588229027.jpg' },
          { id: 'd4', name: 'Dalsan 4', image: '/images/products/dalsan19795674791588229024.jpg' },
          { id: 'd5', name: 'Dalsan 5', image: '/images/products/dalsan20955966521588229026.jpg' },
          { id: 'd6', name: 'Dalsan 6', image: '/images/products/dalsan3660103601588229028.jpg' },
        ],
        catalogs: ['https://cdn.sarilar.bksoftstudio.com/catalogs/dalsan6109000401757752163.pdf'],
      },
    ],
  },
  {
    id: '10',
    slug: 'alci-ve-seramik-profilleri',
    name: {
      tr: 'Alçı ve Seramik Profilleri',
      en: 'Plaster and Ceramic Profiles',
    },
    image: '/images/categories/alci-ve-seramik-profilleri5899855301766489544.png',
    brands: [
      {
        id: 'alfor-plastik',
        slug: 'alfor-plastik',
        name: 'Alfor Plastik',
        logo: '/images/solution_partners/alfor-plastik16674016741766567232.jpg',
        products: [
          { id: 'af1', name: 'Alfor 1', image: '/images/products/alfor-plastik10738392481766500690.jpg' },
          { id: 'af2', name: 'Alfor 2', image: '/images/products/alfor-plastik1094303111766500665.jpg' },
          { id: 'af3', name: 'Alfor 3', image: '/images/products/alfor-plastik1275633051766500759.jpg' },
          { id: 'af4', name: 'Alfor 4', image: '/images/products/alfor-plastik15574594631766500710.jpg' },
          { id: 'af5', name: 'Alfor 5', image: '/images/products/alfor-plastik18484724481766500725.jpg' },
          { id: 'af6', name: 'Alfor 6', image: '/images/products/alfor-plastik19532783931766501061.jpg' },
        ],
        catalogs: ['https://cdn.sarilar.bksoftstudio.com/catalogs/alfor-plastik11070724251766489723.pdf', 'https://cdn.sarilar.bksoftstudio.com/catalogs/alfor-plastik12840456611766489714.pdf', 'https://cdn.sarilar.bksoftstudio.com/catalogs/alfor-plastik18289958651766489729.pdf'],
      },
      {
        id: 'say-plastik',
        slug: 'say-plastik',
        name: 'Say Plastik',
        logo: '/images/solution_partners/say10681553031586773678.jpg',
        products: [
          { id: 'sp1', name: 'Say 1', image: '/images/products/say-plastik21457464851766487373.jpg' },
          { id: 'sp2', name: 'Say 2', image: '/images/products/say-plastik16874236741766487373.jpg' },
          { id: 'sp3', name: 'Say 3', image: '/images/products/say-plastik1664222351766487374.jpg' },
          { id: 'sp4', name: 'Say 4', image: '/images/products/say-plastik16333087131766487373.jpg' },
          { id: 'sp5', name: 'Say 5', image: '/images/products/say-plastik14955560711766487373.jpg' },
          { id: 'sp6', name: 'Say 6', image: '/images/products/say-plastik14441031751766487373.jpg' },
        ],
        catalogs: ['https://cdn.sarilar.bksoftstudio.com/catalogs/say-plastik8749380741766487374.pdf'],
      },
    ],
  },
  {
    id: '8',
    slug: 'yapi-kimyasallari',
    name: {
      tr: 'Yapı Kimyasalları',
      en: 'Construction Chemicals',
    },
    image: '/images/categories/yapi-kimyasallari20127654861585031009.jpg',
    brands: [
      {
        id: 'kyk',
        slug: 'kyk',
        name: 'KYK',
        logo: '/images/solution_partners/kyk-yapi-kimyasallari4993769441586773628.jpg',
        products: [
          { id: 'kyk1', name: 'KYK 1', image: '/images/products/kyk8284846651586512098.jpg' },
          { id: 'kyk2', name: 'KYK 2', image: '/images/products/kyk5080689721586512098.jpg' },
          { id: 'kyk3', name: 'KYK 3', image: '/images/products/kyk2674759701586512098.jpg' },
          { id: 'kyk4', name: 'KYK 4', image: '/images/products/kyk16124120671586512098.jpg' },
          { id: 'kyk5', name: 'KYK 5', image: '/images/products/kyk14840361681586512098.jpg' },
          { id: 'kyk6', name: 'KYK 6', image: '/images/products/kyk14579011211586512098.jpg' },
        ],
        catalogs: ['https://cdn.sarilar.bksoftstudio.com/catalogs/kyk4800778411740660236.pdf'],
      },
      {
        id: 'yyk',
        slug: 'yyk',
        name: 'YYK',
        logo: '/images/solution_partners/yurtbay-yapi-kimyasallari19446257251676357297.png',
        products: [
          { id: 'yyk1', name: 'YYK 1', image: '/images/products/yyk9332611751675405454.png' },
          { id: 'yyk2', name: 'YYK 2', image: '/images/products/yyk9097786201675405443.png' },
          { id: 'yyk3', name: 'YYK 3', image: '/images/products/yyk6545940161675405427.png' },
          { id: 'yyk4', name: 'YYK 4', image: '/images/products/yyk5001708731675405449.png' },
          { id: 'yyk5', name: 'YYK 5', image: '/images/products/yyk4596473481675405491.png' },
          { id: 'yyk6', name: 'YYK 6', image: '/images/products/yyk19830782811675405544.png' },
        ],
        catalogs: ['https://cdn.sarilar.bksoftstudio.com/catalogs/yyk14477153341675406017.pdf', 'https://cdn.sarilar.bksoftstudio.com/catalogs/yyk9597986321720021879.pdf'],
      },
    ],
  },
  {
    id: '9',
    slug: 'yardimci-urunler',
    name: {
      tr: 'Yardımcı Ürünler',
      en: 'Auxiliary Products',
    },
    image: '/images/categories/yapi-kimyasallari20127654861585031009.jpg',
    brands: [
      {
        id: 'duxxa',
        slug: 'duxxa',
        name: 'Duxxa',
        logo: '/images/solution_partners/duxxa4014470791605878900.jpg',
        products: [],
        catalogs: ['https://cdn.sarilar.bksoftstudio.com/catalogs/duxxa16067577341764927000.pdf'],
      },
      {
        id: 'yapas',
        slug: 'yapas-firca-rulo',
        name: 'Yapaş Fırça Rulo',
        logo: '/images/solution_partners/yapas14408165591586773687.jpg',
        products: [
          { id: 'yf1', name: 'Yapaş 1', image: '/images/products/yapas-firca-rulo10621380571593428133.jpg' },
          { id: 'yf2', name: 'Yapaş 2', image: '/images/products/yapas-firca-rulo13261115761593428133.jpg' },
          { id: 'yf3', name: 'Yapaş 3', image: '/images/products/yapas-firca-rulo1565217551593428133.jpg' },
          { id: 'yf4', name: 'Yapaş 4', image: '/images/products/yapas-firca-rulo3073102311593428133.jpg' },
        ],
        catalogs: ['https://cdn.sarilar.bksoftstudio.com/catalogs/yapas-firca-rulo14747224781699440352.pdf'],
      },
      {
        id: 'emulzer',
        slug: 'emulzer',
        name: 'Emülzer',
        logo: '/images/solution_partners/yapas14408165591586773687.jpg',
        products: [],
        catalogs: ['https://cdn.sarilar.bksoftstudio.com/catalogs/emulzer12447971731740658973.pdf'],
      },
    ],
  },
];

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find((cat) => cat.slug === slug);
};

export const getBrandBySlug = (categorySlug: string, brandSlug: string): Brand | undefined => {
  const category = getCategoryBySlug(categorySlug);
  return category?.brands.find((brand) => brand.slug === brandSlug);
};
