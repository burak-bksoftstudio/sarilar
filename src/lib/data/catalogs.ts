export interface Catalog {
  id: string;
  name: string;
  brand: string;
  file: string;
  thumbnail?: string;
}

export const catalogs: Catalog[] = [
  { id: '1', name: 'Alfor Plastik Katalog 1', brand: 'Alfor Plastik', file: 'https://cdn.sarilar.bksoftstudio.com/catalogs/alfor-plastik11070724251766489723.pdf' },
  { id: '2', name: 'Alfor Plastik Katalog 2', brand: 'Alfor Plastik', file: 'https://cdn.sarilar.bksoftstudio.com/catalogs/alfor-plastik12840456611766489714.pdf' },
  { id: '3', name: 'Alfor Plastik Katalog 3', brand: 'Alfor Plastik', file: 'https://cdn.sarilar.bksoftstudio.com/catalogs/alfor-plastik18289958651766489729.pdf' },
  { id: '4', name: 'Altın Çini Katalog', brand: 'Altın Çini', file: 'https://cdn.sarilar.bksoftstudio.com/catalogs/altin-cini-katalog.pdf' },
  { id: '5', name: 'Artemis Katalog 1', brand: 'Artemis', file: 'https://cdn.sarilar.bksoftstudio.com/catalogs/artemis10130200561758035818.pdf' },
  { id: '6', name: 'Artemis Katalog 2', brand: 'Artemis', file: 'https://cdn.sarilar.bksoftstudio.com/catalogs/artemis20556303951758035604.pdf' },
  { id: '7', name: 'Artemis Katalog 3', brand: 'Artemis', file: 'https://cdn.sarilar.bksoftstudio.com/catalogs/artemis2590061801758035845.pdf' },
  { id: '8', name: 'Dalsan Katalog', brand: 'Dalsan', file: 'https://cdn.sarilar.bksoftstudio.com/catalogs/dalsan6109000401757752163.pdf' },
  { id: '9', name: 'Duxxa Katalog', brand: 'Duxxa', file: 'https://cdn.sarilar.bksoftstudio.com/catalogs/duxxa16067577341764927000.pdf' },
  { id: '10', name: 'Emülzer Katalog', brand: 'Emülzer', file: 'https://cdn.sarilar.bksoftstudio.com/catalogs/emulzer12447971731740658973.pdf' },
  { id: '11', name: 'İdevit Katalog', brand: 'İdevit', file: 'https://cdn.sarilar.bksoftstudio.com/catalogs/idevit13079695271710579164.pdf' },
  { id: '12', name: 'Jotun Katalog', brand: 'Jotun', file: 'https://cdn.sarilar.bksoftstudio.com/catalogs/jotun10948135451752571040.pdf' },
  { id: '13', name: 'KYK Katalog', brand: 'KYK', file: 'https://cdn.sarilar.bksoftstudio.com/catalogs/kyk4800778411740660236.pdf' },
  { id: '14', name: 'Luxsera Katalog', brand: 'Luxsera', file: 'https://cdn.sarilar.bksoftstudio.com/catalogs/luxsera7587494811768631401.pdf' },
  { id: '15', name: 'NSK Katalog', brand: 'NSK', file: 'https://cdn.sarilar.bksoftstudio.com/catalogs/nsk19273343981740557086.pdf' },
  { id: '16', name: 'Orka Katalog 1', brand: 'Orka', file: 'https://cdn.sarilar.bksoftstudio.com/catalogs/orka21290659311756111986.pdf' },
  { id: '17', name: 'Orka Katalog 2', brand: 'Orka', file: 'https://cdn.sarilar.bksoftstudio.com/catalogs/orka372494921761046733.pdf' },
  { id: '18', name: 'Roca Katalog', brand: 'Roca', file: 'https://cdn.sarilar.bksoftstudio.com/catalogs/roca7211592731752567765.pdf' },
  { id: '19', name: 'Say Plastik Katalog', brand: 'Say Plastik', file: 'https://cdn.sarilar.bksoftstudio.com/catalogs/say-plastik8749380741766487374.pdf' },
  { id: '20', name: 'Smanni Katalog 1', brand: 'Smanni', file: 'https://cdn.sarilar.bksoftstudio.com/catalogs/smanni6824375151752567808.pdf' },
  { id: '21', name: 'Smanni Katalog 2', brand: 'Smanni', file: 'https://cdn.sarilar.bksoftstudio.com/catalogs/smanni8683621271685368455.pdf' },
  { id: '22', name: 'Yapaş Fırça Rulo Katalog', brand: 'Yapaş', file: 'https://cdn.sarilar.bksoftstudio.com/catalogs/yapas-firca-rulo14747224781699440352.pdf' },
  { id: '23', name: 'Yurtbay Seramik Katalog 1', brand: 'Yurtbay Seramik', file: 'https://cdn.sarilar.bksoftstudio.com/catalogs/yurtbay-seramik11206467861741159423.pdf' },
  { id: '24', name: 'Yurtbay Seramik Katalog 2', brand: 'Yurtbay Seramik', file: 'https://cdn.sarilar.bksoftstudio.com/catalogs/yurtbay-seramik11757243851741159399.pdf' },
  { id: '25', name: 'Yurtbay Seramik Katalog 3', brand: 'Yurtbay Seramik', file: 'https://cdn.sarilar.bksoftstudio.com/catalogs/yurtbay-seramik401173411719989364.pdf' },
  { id: '26', name: 'Yurtbay Seramik Katalog 4', brand: 'Yurtbay Seramik', file: 'https://cdn.sarilar.bksoftstudio.com/catalogs/yurtbay-seramik5270687271741159741.pdf' },
  { id: '27', name: 'Yurtbay Seramik Katalog 5', brand: 'Yurtbay Seramik', file: 'https://cdn.sarilar.bksoftstudio.com/catalogs/yurtbay-seramik654920061741159398.pdf' },
  { id: '28', name: 'Yurtbay Seramik Katalog 6', brand: 'Yurtbay Seramik', file: 'https://cdn.sarilar.bksoftstudio.com/catalogs/yurtbay-seramik9331415131741166439.pdf' },
  { id: '29', name: 'YYK Katalog 1', brand: 'YYK', file: 'https://cdn.sarilar.bksoftstudio.com/catalogs/yyk14477153341675406017.pdf' },
  { id: '30', name: 'YYK Katalog 2', brand: 'YYK', file: 'https://cdn.sarilar.bksoftstudio.com/catalogs/yyk9597986321720021879.pdf' },
];
