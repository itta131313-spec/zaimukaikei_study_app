import type { GlossaryTerm } from '../types'

export const glossary: GlossaryTerm[] = [
  // 起債
  {
    term: '地方債',
    reading: 'ちほうさい',
    categoryId: 'kisai',
    description:
      '地方公共団体が行う借金のこと。1年度を超えて返済するもので、学校や道路など長く使う施設の建設費などに充てます。',
  },
  {
    term: '起債',
    reading: 'きさい',
    categoryId: 'kisai',
    description: '地方債を発行して(借り入れて)資金を調達すること。「債(借金)を起こす」という意味です。',
  },
  {
    term: '適債事業',
    reading: 'てきさいじぎょう',
    categoryId: 'kisai',
    description:
      '地方債を財源にしてよい事業のこと。地方財政法第5条で、公共施設の建設事業費や災害復旧事業費などに限られています。職員の給料など毎年かかる経費には、原則として使えません。',
  },
  {
    term: '建設公債主義',
    reading: 'けんせつこうさいしゅぎ',
    categoryId: 'kisai',
    description:
      '借金は、将来の住民も利用する施設の建設などに限って使う、という考え方。施設を使う将来の世代にも返済を負担してもらうことで、世代間の負担を公平にします。',
  },
  {
    term: '償還',
    reading: 'しょうかん',
    categoryId: 'kisai',
    description: '借りたお金(元金)と利息を返していくこと。',
  },
  {
    term: '元利償還金',
    reading: 'がんりしょうかんきん',
    categoryId: 'kisai',
    description: '地方債の返済額のうち、元金と利息を合わせた金額のこと。',
  },
  {
    term: '据置期間',
    reading: 'すえおききかん',
    categoryId: 'kisai',
    description:
      '借りてからしばらくの間、元金の返済をせず利息だけを払う期間。施設が完成して使い始めるまでの負担を軽くするために設けます。',
  },
  {
    term: '元利均等償還',
    reading: 'がんりきんとうしょうかん',
    categoryId: 'kisai',
    description:
      '毎回の返済額(元金+利息)が同じになる返済方法。住宅ローンでよく使われる方法と同じ考え方です。',
  },
  {
    term: '元金均等償還',
    reading: 'がんきんきんとうしょうかん',
    categoryId: 'kisai',
    description:
      '毎回返す元金の額が同じになる返済方法。利息は残高が減るにつれて少なくなるので、返済額は最初が一番多く、だんだん減っていきます。',
  },
  {
    term: '繰上償還',
    reading: 'くりあげしょうかん',
    categoryId: 'kisai',
    description:
      '返済期限より前に借金を返すこと。将来の利息を減らせますが、借入先によっては補償金が必要になることがあります。',
  },
  {
    term: '借換債',
    reading: 'かりかえさい',
    categoryId: 'kisai',
    description: '以前に借りた地方債を返すためのお金を調達するために、新たに発行する地方債。',
  },
  {
    term: '公的資金',
    reading: 'こうてきしきん',
    categoryId: 'kisai',
    description:
      '国の財政融資資金や、地方公共団体金融機構の資金など、公的な機関から借りるお金のこと。長期・低利で借りられるのが特徴です。',
  },
  {
    term: '民間等資金',
    reading: 'みんかんとうしきん',
    categoryId: 'kisai',
    description:
      '銀行など民間の金融機関から借りるお金(銀行等引受資金、いわゆる縁故債)や、債券を発行して市場から集めるお金(市場公募資金)のこと。',
  },
  {
    term: '証書借入',
    reading: 'しょうしょかりいれ',
    categoryId: 'kisai',
    description:
      '金融機関に借用証書を差し入れてお金を借りる方法。市町村の地方債の多くはこの方法です。債券を発行する方法は「証券発行」といいます。',
  },
  {
    term: '協議制',
    reading: 'きょうぎせい',
    categoryId: 'kisai',
    description:
      '地方債を発行する前に、総務大臣(都道府県・指定都市)または都道府県知事(市町村)と話し合う(協議する)仕組み。平成18年度から、それまでの許可制に代わって原則となりました。',
  },
  {
    term: '届出制',
    reading: 'とどけでせい',
    categoryId: 'kisai',
    description:
      '財政状況が良い団体が民間等資金を借りる場合などに、協議の代わりに事前に届け出るだけで地方債を発行できる仕組み。平成24年度から導入されました。',
  },
  {
    term: '許可制',
    reading: 'きょかせい',
    categoryId: 'kisai',
    description:
      '実質公債費比率が18%以上になるなど財政状況が悪い団体は、地方債を発行するのに総務大臣または都道府県知事の許可が必要になります。',
  },
  {
    term: '交付税措置',
    reading: 'こうふぜいそち',
    categoryId: 'kisai',
    description:
      '特定の地方債について、返済額の一部を後の年度の地方交付税の計算(基準財政需要額)に上乗せしてもらえる仕組み。実質的な返済負担が軽くなります。',
  },
  {
    term: '充当率',
    reading: 'じゅうとうりつ',
    categoryId: 'kisai',
    description:
      '事業費のうち、地方債でまかなってよい割合。例えば充当率90%なら、1,000万円の事業のうち900万円まで地方債を充てられます。',
  },
  {
    term: '臨時財政対策債',
    reading: 'りんじざいせいたいさくさい',
    categoryId: 'kisai',
    description:
      '国が配る地方交付税のお金が足りない分を、地方公共団体が代わりに借りておく特別な地方債。使い道は自由で、返済額の全額が後年度の交付税の計算に算入されます。略して「臨財債」。',
  },
  {
    term: '過疎対策事業債',
    reading: 'かそたいさくじぎょうさい',
    categoryId: 'kisai',
    description:
      '過疎地域の市町村が、計画に基づいて行う事業に使える地方債。返済額の70%が後年度の交付税の計算に算入される、有利な地方債です。略して「過疎債」。',
  },
  {
    term: '実質公債費比率',
    reading: 'じっしつこうさいひひりつ',
    categoryId: 'kisai',
    description:
      '収入の規模に対して、借金の返済がどのくらいの重さになっているかを示す割合(3年間の平均)。18%以上で地方債の発行に許可が必要になり、25%以上で早期健全化基準に該当します。',
  },
  {
    term: '将来負担比率',
    reading: 'しょうらいふたんひりつ',
    categoryId: 'kisai',
    description:
      '地方債の残高や将来払う退職手当など、これから負担しなければならない借金の総額が、収入の規模に対してどのくらいあるかを示す割合。',
  },
  {
    term: '一時借入金',
    reading: 'いちじかりいれきん',
    categoryId: 'kisai',
    description:
      '支払いのための現金が一時的に足りないときに借りるお金。その年度のうちに返さなければならず、地方債とは違って歳入にはなりません。借りられる上限額は予算で定めます。',
  },
  {
    term: '公債費',
    reading: 'こうさいひ',
    categoryId: 'kisai',
    description: '地方債の元金・利息の返済や、一時借入金の利息に使う歳出のこと。',
  },
  {
    term: '地方債計画',
    reading: 'ちほうさいけいかく',
    categoryId: 'kisai',
    description:
      '総務省が毎年度つくる、全国の地方債の発行予定額や、どの資金からどのくらい借りるかをまとめた計画。',
  },

  // 予算関係
  {
    term: '会計年度',
    reading: 'かいけいねんど',
    categoryId: 'yosan',
    description: 'お金の出入りを区切って整理する期間。地方公共団体では4月1日から翌年3月31日までです。',
  },
  {
    term: '会計年度独立の原則',
    reading: 'かいけいねんどどくりつのげんそく',
    categoryId: 'yosan',
    description:
      'その年度の支出は、その年度の収入でまかなうという原則。繰越明許費や事故繰越しなどは、この原則の例外です。',
  },
  {
    term: '総計予算主義',
    reading: 'そうけいよさんしゅぎ',
    categoryId: 'yosan',
    description:
      '1年間のすべての収入とすべての支出を、予算に計上しなければならないという原則。収入と支出を差し引きして一部だけ載せることはできません。',
  },
  {
    term: '歳入・歳出',
    reading: 'さいにゅう・さいしゅつ',
    categoryId: 'yosan',
    description: '1会計年度のすべての収入を「歳入」、すべての支出を「歳出」といいます。',
  },
  {
    term: '一般会計',
    reading: 'いっぱんかいけい',
    categoryId: 'yosan',
    description: '税金などを主な財源として、福祉・教育・道路など基本的な行政サービスのお金を管理する中心的な会計。',
  },
  {
    term: '特別会計',
    reading: 'とくべつかいけい',
    categoryId: 'yosan',
    description:
      '国民健康保険や下水道など、特定の事業のお金を一般会計と分けて管理する会計。条例で設置します。',
  },
  {
    term: '当初予算',
    reading: 'とうしょよさん',
    categoryId: 'yosan',
    description: '年度が始まる前に議会で議決される、その年度1年間の基本となる予算。',
  },
  {
    term: '補正予算',
    reading: 'ほせいよさん',
    categoryId: 'yosan',
    description: '年度の途中で、予算を追加したり変更したりするために作る予算。',
  },
  {
    term: '暫定予算',
    reading: 'ざんていよさん',
    categoryId: 'yosan',
    description:
      '年度が始まるまでに当初予算が成立しないときに、成立するまでのつなぎとして必要な経費だけを計上する予算。',
  },
  {
    term: '骨格予算',
    reading: 'こっかくよさん',
    categoryId: 'yosan',
    description:
      '首長の選挙がある年などに、人件費などどうしても必要な経費を中心に組む当初予算。新しい政策の経費は、選挙後に補正予算(肉付け予算)で追加します。',
  },
  {
    term: '款・項・目・節',
    reading: 'かん・こう・もく・せつ',
    categoryId: 'yosan',
    description:
      '予算の分類の単位。大きい順に「款」「項」「目」「節」です。住所の「都道府県・市・町・番地」のように、段階的に細かく分けていきます。',
  },
  {
    term: '議決科目・執行科目',
    reading: 'ぎけつかもく・しっこうかもく',
    categoryId: 'yosan',
    description:
      '歳出予算の「款」と「項」は議会の議決の対象(議決科目)、「目」と「節」は執行のための区分(執行科目)です。',
  },
  {
    term: '流用',
    reading: 'りゅうよう',
    categoryId: 'yosan',
    description:
      '予算の科目の間でお金を移し替えること。「款」の間の流用はできません。「項」の間は予算で定めた場合に限り可能で、「目」「節」の間は規則などに従って長の権限で行います。',
  },
  {
    term: '予備費',
    reading: 'よびひ',
    categoryId: 'yosan',
    description:
      '予想できなかった支出に備えて、あらかじめ予算に計上しておくお金。予備費を他の経費に使うことを「充用」といいます。議会が否決した経費には使えません。',
  },
  {
    term: '継続費',
    reading: 'けいぞくひ',
    categoryId: 'yosan',
    description:
      '完成まで何年もかかる工事などについて、総額と年度ごとの支出予定額(年割額)をまとめて予算で決めておく仕組み。',
  },
  {
    term: '繰越明許費',
    reading: 'くりこしめいきょひ',
    categoryId: 'yosan',
    description:
      '年度内に使い切れない見込みの経費を、あらかじめ予算で定めておくことで、翌年度に繰り越して使えるようにする仕組み。繰り越せるのは翌年度までです。',
  },
  {
    term: '事故繰越し',
    reading: 'じこくりこし',
    categoryId: 'yosan',
    description:
      '年度内に契約などをしたものの、避けられない事故のために年度内に支払いが終わらなかった経費を、翌年度に繰り越すこと。',
  },
  {
    term: '債務負担行為',
    reading: 'さいむふたんこうい',
    categoryId: 'yosan',
    description:
      '複数年度にわたる契約など、翌年度以降に支払う約束をするときに、その期間と限度額をあらかじめ予算で決めておくもの。',
  },
  {
    term: '一般財源',
    reading: 'いっぱんざいげん',
    categoryId: 'yosan',
    description: '地方税や地方交付税など、使い道が決まっておらず、どんな経費にも使えるお金。',
  },
  {
    term: '特定財源',
    reading: 'とくていざいげん',
    categoryId: 'yosan',
    description: '国庫支出金や地方債など、使い道が決められているお金。',
  },
  {
    term: '義務的経費',
    reading: 'ぎむてきけいひ',
    categoryId: 'yosan',
    description:
      '人件費・扶助費(福祉の給付など)・公債費のように、支払いが義務付けられていて簡単には減らせない経費。',
  },
  {
    term: '投資的経費',
    reading: 'とうしてきけいひ',
    categoryId: 'yosan',
    description: '道路や学校などの施設をつくるための経費。普通建設事業費や災害復旧事業費などです。',
  },
  {
    term: '地方交付税',
    reading: 'ちほうこうふぜい',
    categoryId: 'yosan',
    description:
      'どの地域でも一定水準の行政サービスができるよう、国が集めた税金の一部を財源の不足する団体に配るお金。総額の94%が普通交付税、6%が特別交付税です。',
  },
  {
    term: '基準財政需要額',
    reading: 'きじゅんざいせいじゅようがく',
    categoryId: 'yosan',
    description: '人口や面積などをもとに計算した、その団体が標準的な行政サービスを行うのに必要な金額。',
  },
  {
    term: '基準財政収入額',
    reading: 'きじゅんざいせいしゅうにゅうがく',
    categoryId: 'yosan',
    description:
      'その団体に標準的に入ると見込まれる税収などの額。原則として標準的な税収入の75%などで計算します。基準財政需要額より少ない分(財源不足額)が、普通交付税として交付されます。',
  },
  {
    term: '国庫支出金',
    reading: 'こっこししゅつきん',
    categoryId: 'yosan',
    description: '国が特定の事業のために地方公共団体に出すお金。国庫負担金・国庫補助金・国庫委託金があります。',
  },
  {
    term: '予算の配当',
    reading: 'よさんのはいとう',
    categoryId: 'yosan',
    description: '議会で決まった予算を、長が各部署に「この範囲で使ってよい」と割り当てること。',
  },
  {
    term: '支出負担行為',
    reading: 'ししゅつふたんこうい',
    categoryId: 'yosan',
    description:
      '契約を結ぶ、補助金の交付を決定するなど、お金を払う原因となる行為のこと。予算の範囲内で行わなければなりません。',
  },
  {
    term: '支出命令',
    reading: 'ししゅつめいれい',
    categoryId: 'yosan',
    description: '長(または任された職員)が会計管理者に対して「支払ってください」と命じること。',
  },
  {
    term: '会計管理者',
    reading: 'かいけいかんりしゃ',
    categoryId: 'yosan',
    description:
      '現金の出し入れや保管、決算の調製などを担当する責任者。長の支出命令がなければ支払えず、支払前に内容が適正かを確認します。',
  },
  {
    term: '調定',
    reading: 'ちょうてい',
    categoryId: 'yosan',
    description:
      'お金を受け取る前に、「誰から・何の理由で・いくら受け取るか」を調べて決定すること。歳入の事務の出発点です。',
  },
  {
    term: '概算払',
    reading: 'がいさんばらい',
    categoryId: 'yosan',
    description: '支払う金額がまだ確定していないときに、見込みの金額で先に支払い、後で精算する方法。旅費などで使います。',
  },
  {
    term: '前金払',
    reading: 'まえきんばらい',
    categoryId: 'yosan',
    description:
      '金額は確定しているが、相手の仕事が終わる前や支払日が来る前に支払う方法。公共工事の前払金などで使います。',
  },
  {
    term: '専決処分',
    reading: 'せんけつしょぶん',
    categoryId: 'yosan',
    description:
      '議会を開く時間がないときなどに、本来は議会が決めることを長が代わりに決めること。後で議会に報告して承認を求めます。',
  },

  // 決算
  {
    term: '決算',
    reading: 'けっさん',
    categoryId: 'kessan',
    description: '1年間(1会計年度)に実際にいくら収入があり、いくら支出したかをまとめたもの。',
  },
  {
    term: '出納整理期間',
    reading: 'すいとうせいりきかん',
    categoryId: 'kessan',
    description:
      '年度が終わった後の4月1日から5月31日までの期間。3月31日までに決まっていた収入・支出のお金のやり取りを済ませるための期間で、新しい契約などはできません。',
  },
  {
    term: '出納閉鎖',
    reading: 'すいとうへいさ',
    categoryId: 'kessan',
    description: '前年度のお金の出し入れを締め切ること。5月31日に行われます。',
  },
  {
    term: '決算の調製',
    reading: 'けっさんのちょうせい',
    categoryId: 'kessan',
    description:
      '決算書を作ること。会計管理者が作成し、出納閉鎖後3か月以内(8月31日まで)に長に提出します。',
  },
  {
    term: '決算審査',
    reading: 'けっさんしんさ',
    categoryId: 'kessan',
    description:
      '監査委員が決算の数字が正しいか、予算が適正に使われたかなどを調べること。審査の結果は意見書として長に提出されます。',
  },
  {
    term: '決算の認定',
    reading: 'けっさんのにんてい',
    categoryId: 'kessan',
    description:
      '議会が決算の内容を確認し、了承すること。認定されなくても、すでに行われた収入・支出が無効になるわけではありません。',
  },
  {
    term: '主要な施策の成果説明書',
    reading: 'しゅようなしさくのせいかせつめいしょ',
    categoryId: 'kessan',
    description: '決算を議会に出すときに一緒に提出する、その年度の主な事業でどんな成果があったかを説明する書類。',
  },
  {
    term: '形式収支',
    reading: 'けいしきしゅうし',
    categoryId: 'kessan',
    description: '歳入の合計から歳出の合計を単純に引いた金額。',
  },
  {
    term: '実質収支',
    reading: 'じっしつしゅうし',
    categoryId: 'kessan',
    description:
      '形式収支から、翌年度に繰り越した事業に使うお金を差し引いたもの。その年度の本当の黒字・赤字を表します。',
  },
  {
    term: '単年度収支',
    reading: 'たんねんどしゅうし',
    categoryId: 'kessan',
    description:
      '今年度の実質収支から前年度の実質収支を引いたもの。前年度から持ち越した黒字の影響を除いた、その年度だけの収支です。',
  },
  {
    term: '実質単年度収支',
    reading: 'じっしつたんねんどしゅうし',
    categoryId: 'kessan',
    description:
      '単年度収支に、貯金(財政調整基金)への積立てや借金の繰上償還の額を足し、貯金の取崩し額を引いたもの。貯金の出し入れで見かけの黒字をつくっていないかが分かります。',
  },
  {
    term: '歳計剰余金',
    reading: 'さいけいじょうよきん',
    categoryId: 'kessan',
    description:
      '決算で残ったお金。原則として翌年度の歳入に入れます。地方財政法により、その2分の1以上を積立てや借金の繰上償還に充てる必要があります。',
  },
  {
    term: '繰上充用',
    reading: 'くりあげじゅうよう',
    categoryId: 'kessan',
    description:
      '決算で赤字(歳入不足)になったとき、翌年度の歳入を前倒しして不足分に充てる処理。',
  },
  {
    term: '不納欠損',
    reading: 'ふのうけっそん',
    categoryId: 'kessan',
    description: '時効などにより、もう受け取ることができなくなった収入を、帳簿上で整理すること。',
  },
  {
    term: '収入未済',
    reading: 'しゅうにゅうみさい',
    categoryId: 'kessan',
    description: '受け取るべき金額(調定額)のうち、出納閉鎖までに受け取れていない金額。いわゆる滞納分です。',
  },
  {
    term: '予算現額',
    reading: 'よさんげんがく',
    categoryId: 'kessan',
    description:
      '当初予算に、補正予算・前年度からの繰越し・予備費の充用・流用などを反映した、その年度に実際に使える予算の額。',
  },
  {
    term: '不用額',
    reading: 'ふようがく',
    categoryId: 'kessan',
    description: '予算現額のうち、使わず、翌年度にも繰り越さずに残った金額。',
  },
  {
    term: '過年度収入',
    reading: 'かねんどしゅうにゅう',
    categoryId: 'kessan',
    description: '出納閉鎖の後に入ってきた、前年度以前の分の収入。今年度の歳入として扱います。',
  },
  {
    term: '健全化判断比率',
    reading: 'けんぜんかはんだんひりつ',
    categoryId: 'kessan',
    description:
      '財政健全化法で、毎年の決算をもとに計算・公表が義務付けられている4つの指標。実質赤字比率・連結実質赤字比率・実質公債費比率・将来負担比率です。',
  },
  {
    term: '実質赤字比率',
    reading: 'じっしつあかじひりつ',
    categoryId: 'kessan',
    description: '一般会計などの赤字が、収入の規模(標準財政規模)に対してどのくらいあるかを示す割合。',
  },
  {
    term: '連結実質赤字比率',
    reading: 'れんけつじっしつあかじひりつ',
    categoryId: 'kessan',
    description:
      '一般会計だけでなく、特別会計や公営企業会計も含めたすべての会計を合わせた赤字が、収入の規模に対してどのくらいあるかを示す割合。',
  },
  {
    term: '早期健全化基準',
    reading: 'そうきけんぜんかきじゅん',
    categoryId: 'kessan',
    description:
      '健全化判断比率がこの基準以上になると、「財政健全化計画」を作って自ら立て直しに取り組む必要があります。いわば「イエローカード」です。',
  },
  {
    term: '財政再生基準',
    reading: 'ざいせいさいせいきじゅん',
    categoryId: 'kessan',
    description:
      '早期健全化基準よりさらに悪い状態の基準。この基準以上になると「財政再生計画」を作る必要があり、国の関与も強まります。いわば「レッドカード」です。',
  },
  {
    term: '資金不足比率',
    reading: 'しきんぶそくひりつ',
    categoryId: 'kessan',
    description: '水道や病院などの公営企業ごとに、事業の規模に対してお金がどのくらい足りないかを示す割合。',
  },
  {
    term: '標準財政規模',
    reading: 'ひょうじゅんざいせいきぼ',
    categoryId: 'kessan',
    description:
      'その団体が標準的な状態で毎年入ってくると見込まれる、使い道が自由なお金(一般財源)の規模。各種の財政指標で「分母」として使われます。',
  },
  {
    term: '経常収支比率',
    reading: 'けいじょうしゅうしひりつ',
    categoryId: 'kessan',
    description:
      '毎年必ず入る自由なお金のうち、人件費など毎年必ずかかる経費に使われている割合。高いほど、新しい事業に使えるお金の余裕が少ないことを示します。',
  },
  {
    term: '財政力指数',
    reading: 'ざいせいりょくしすう',
    categoryId: 'kessan',
    description:
      '基準財政収入額を基準財政需要額で割った値の3年間の平均。1に近い(または超える)ほど、自前の財源に余裕があることを示します。',
  },
  {
    term: '決算統計',
    reading: 'けっさんとうけい',
    categoryId: 'kessan',
    description:
      '総務省が全国の地方公共団体に対して毎年行う、共通のルールで決算を集計する調査。正式には「地方財政状況調査」といいます。',
  },
  {
    term: '普通会計',
    reading: 'ふつうかいけい',
    categoryId: 'kessan',
    description:
      '団体ごとに特別会計の設け方が違っても比べられるよう、決算統計で使う共通の会計の範囲。一般会計に一部の特別会計を合わせたものです。',
  },
  {
    term: '財政調整基金',
    reading: 'ざいせいちょうせいききん',
    categoryId: 'kessan',
    description:
      '税収が落ち込んだ年や災害などに備えて、お金に余裕がある年に積み立てておく貯金。',
  },
  {
    term: '減債基金',
    reading: 'げんさいききん',
    categoryId: 'kessan',
    description: '地方債(借金)の返済に備えて積み立てておく貯金。',
  },
  {
    term: '財務書類4表',
    reading: 'ざいむしょるいよんひょう',
    categoryId: 'kessan',
    description:
      '企業会計の考え方を取り入れた地方公会計で作る、貸借対照表・行政コスト計算書・純資産変動計算書・資金収支計算書の4つの書類。建物などの資産や将来の負債の状況が分かります。',
  },
]
