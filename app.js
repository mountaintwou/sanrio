const PAGE_SIZE = 12;
const FAV_KEY = "sanrio-favorites";
const LANG_KEY = "sanrio-lang";

const I18N = {
  ko: {
    title: "산리오 캐릭터 도감",
    subtitle: "90명의 산리오 캐릭터를 한눈에",
    search: "캐릭터 이름이나 특징을 검색해보세요 (예: 헬로키티, 시나모롤, 1974)",
    sortLabel: "정렬",
    sortName: "이름순",
    sortOld: "데뷔 연도 · 오래된 순",
    sortNew: "데뷔 연도 · 최신 순",
    all: "전체",
    fav: "즐겨찾기",
    gacha: "오늘의 산리오 친구는?",
    favTitle: "최애 캐릭터",
    empty: "검색 결과가 없어요. 다른 키워드를 입력해 보세요.",
    emptyFav: "아직 즐겨찾기한 캐릭터가 없어요. 하트를 눌러 모아보세요!",
    count: (n, total) => `${n}명 표시 · 전체 ${total}명`,
    species: "종족 / 모티브",
    gender: "성별",
    debut: "탄생 연도",
    traits: "성격 및 특징",
    bio: "상세 설명",
    gachaKicker: "오늘의 산리오 친구는?",
    detail: "자세히 보기",
    close: "닫기",
    footer: "All illustrations and photographs published on this site are copyrighted by SANRIO CO., LTD. Created by Lee San.",
    year: (y) => `${y}년 데뷔`,
  },
  en: {
    title: "Sanrio Character Encyclopedia",
    subtitle: "Meet all 90 friends at a glance",
    search: "Search by name or trait... (e.g. Hello Kitty, 1974)",
    sortLabel: "Sort",
    sortName: "Name A–Z",
    sortOld: "Debut year · oldest",
    sortNew: "Debut year · newest",
    all: "All",
    fav: "Favorites",
    gacha: "Today's Sanrio friend?",
    favTitle: "My favorites",
    empty: "No matches. Try another keyword.",
    emptyFav: "No favorites yet. Tap a heart to collect them!",
    count: (n, total) => `Showing ${n} of ${total}`,
    species: "Species / Motif",
    gender: "Gender",
    debut: "Debut year",
    traits: "Personality / Traits",
    bio: "Fun facts / Bio",
    gachaKicker: "Today's Sanrio friend?",
    detail: "See details",
    close: "Close",
    footer: "Sanrio Character Encyclopedia · fan-made guide · official characters matched",
    year: (y) => `Debuted ${y}`,
  },
};

const CHARACTERS = [
  // --- 스크린샷 1 (인기 상위) ---
  { id: 1, name: { ko: "헬로키티", en: "Hello Kitty" }, debutYear: 1974, species: { ko: "고양이", en: "Cat" }, gender: { ko: "여성", en: "Female" }, image: "images/헬로키티.png", traits: { ko: ["빨간 리본", "사과 파이", "상냥함"], en: ["Red bow", "Apple pie", "Kind"] }, bio: { ko: "런던에서 자란 밝고 마음 따뜻한 고양이 소녀입니다.", en: "A bright and warm-hearted white cat girl." } },
  { id: 2, name: { ko: "쿠로미", en: "Kuromi" }, debutYear: 2005, species: { ko: "토끼", en: "Rabbit" }, gender: { ko: "여성", en: "Female" }, image: "images/쿠로미.png", traits: { ko: ["해골 후드", "터프함", "일기 쓰기"], en: ["Skull hood", "Tough", "Diary"] }, bio: { ko: "검은 후드가 트레이드마크인 짓궂지만 다정한 토끼입니다.", en: "An edgy rabbit with a black skull hood." } },
  { id: 3, name: { ko: "포차코", en: "Pochacco" }, debutYear: 1989, species: { ko: "강아지", en: "Dog" }, gender: { ko: "남성", en: "Male" }, image: "images/포차코.png", traits: { ko: ["축구", "산책", "바나나 아이스크림"], en: ["Soccer", "Strolls", "Banana ice cream"] }, bio: { ko: "스포츠와 산책을 좋아하는 하얀 강아지입니다.", en: "A sporty white puppy who loves walks." } },
  { id: 4, name: { ko: "폼폼푸린", en: "Pompompurin" }, debutYear: 1996, species: { ko: "골든 리트리버", en: "Golden Retriever" }, gender: { ko: "남성", en: "Male" }, image: "images/폼폼푸린.png", traits: { ko: ["갈색 베레모", "푸딩 사랑", "낮잠"], en: ["Brown beret", "Loves pudding", "Naps"] }, bio: { ko: "푸딩과 낮잠을 좋아하는 골든 리트리버 강아지입니다.", en: "A golden retriever puppy who adores pudding." } },
  { id: 5, name: { ko: "시나모롤", en: "Cinnamoroll" }, debutYear: 2001, species: { ko: "강아지", en: "Puppy" }, gender: { ko: "남성", en: "Male" }, image: "images/시나모롤.png", traits: { ko: ["하늘색 귀", "하늘 날기", "카페 마스코트"], en: ["Sky-blue ears", "Flies", "Cafe mascot"] }, bio: { ko: "큰 귀로 하늘을 날아다니는 하얀 강아지입니다.", en: "A white puppy who flies with his big ears." } },
  { id: 6, name: { ko: "민나노타보", en: "Minna no Tabo" }, debutYear: 1984, species: { ko: "소년", en: "Human boy" }, gender: { ko: "남성", en: "Male" }, image: "images/tabo.png", traits: { ko: ["솔직함", "밝음", "배꼽 포인트"], en: ["Honest", "Bright", "Belly button"] }, bio: { ko: "언제나 구김살 없이 밝고 솔직한 소년입니다.", en: "An honest and bright little boy." } },

  // --- 스크린샷 2 ---
  { id: 7, name: { ko: "포쿄쿠텐", en: "Pokkyokuten" }, debutYear: 2021, species: { ko: "북극곰", en: "Polar bear" }, gender: { ko: "남성", en: "Male" }, image: "images/pokkyokuten.png", traits: { ko: ["포근함", "겨울", "북극"], en: ["Cozy", "Winter", "North Pole"] }, bio: { ko: "추운 북쪽에서 온 마음 포근한 북극곰입니다.", en: "A warm-hearted polar bear from the North Pole." } },
  { id: 8, name: { ko: "료로매닉", en: "Lloromannic" }, debutYear: 2007, species: { ko: "악마 토끼", en: "Demon rabbit" }, gender: { ko: "혼성", en: "Mixed" }, image: "images/lloromannic.png", traits: { ko: ["고딕", "장난", "쿠로미 친구"], en: ["Gothic", "Mischievous", "Kuromi's pals"] }, bio: { ko: "거울 저편의 세계에서 온 고스풍 토끼 콤비입니다.", en: "A gothic rabbit duo from behind the mirror." } },
  { id: 9, name: { ko: "디어 다니엘", en: "Dear Daniel" }, debutYear: 1999, species: { ko: "고양이", en: "Cat" }, gender: { ko: "남성", en: "Male" }, image: "images/daniel.png", traits: { ko: ["헬로키티 소꿉친구", "댄스", "사진"], en: ["Hello Kitty's pal", "Dance", "Photo"] }, bio: { ko: "헬로키티의 소꿉친구이자 다정한 남자친구입니다.", en: "Hello Kitty's childhood friend and boyfriend." } },
  { id: 10, name: { ko: "슈가버니즈", en: "Sugarbunnies" }, debutYear: 2004, species: { ko: "토끼", en: "Rabbit" }, gender: { ko: "혼성", en: "Mixed" }, image: "images/sugarbunnies.png", traits: { ko: ["파티시에", "과자 만들기", "쌍둥이"], en: ["Pastry chef", "Baking", "Twins"] }, bio: { ko: "맛있는 과자를 만드는 쌍둥이 토끼 파티시에입니다.", en: "Twin rabbit pastry chefs who bake sweets." } },
  { id: 11, name: { ko: "헬로미미", en: "Hello Mimmy" }, debutYear: 1974, species: { ko: "고양이", en: "Cat" }, gender: { ko: "여성", en: "Female" }, image: "images/헬로미미.png", traits: { ko: ["노란 리본", "헬로키티 쌍둥이", "차분함"], en: ["Yellow bow", "Hello Kitty's twin", "Calm"] }, bio: { ko: "헬로키티의 쌍둥이 동생. 노란 리본이 포인트입니다.", en: "Hello Kitty's twin sister with a yellow bow." } },
  { id: 12, name: { ko: "요시키티", en: "Yoshikitty" }, debutYear: 2009, species: { ko: "고양이/록스타", en: "Cat / Rocker" }, gender: { ko: "남성", en: "Male" }, image: "images/요시키티.png", traits: { ko: ["X JAPAN YOSHIKI", "록 감성", "보라색 머리"], en: ["Rock style", "Purple hair", "Cool"] }, bio: { ko: "록 밴드 YOSHIKI를 모티브로 탄생한 스페셜 키티입니다.", en: "A special rock-styled Kitty inspired by YOSHIKI." } },
  { id: 13, name: { ko: "가부키냥타로", en: "Kabukinyantaro" }, debutYear: 2017, species: { ko: "삼색고양이", en: "Calico cat" }, gender: { ko: "남성", en: "Male" }, image: "images/가부키냥타로.png", traits: { ko: ["가부키", "행운", "삼색냥"], en: ["Kabuki", "Lucky", "Calico"] }, bio: { ko: "가부키 무대 뒤에 사는 행복을 부르는 고양이입니다.", en: "A lucky calico cat living in the kabuki theater." } },
  { id: 14, name: { ko: "챠미키티", en: "Charmmy Kitty" }, debutYear: 2004, species: { ko: "페르시안 고양이", en: "Persian cat" }, gender: { ko: "여성", en: "Female" }, color: "#f7d6ea", image: "images/챠미키티.png", traits: { ko: ["헬로키티 반려묘", "보석 열쇠", "우아함"], en: ["Hello Kitty's pet", "Jewel key", "Elegant"] }, bio: { ko: "헬로키티가 선물 받은 우아한 페르시안 고양이입니다.", en: "Hello Kitty's elegant Persian pet cat." } },
  { id: 15, name: { ko: "쇼바이락!", en: "Show By Rock!" }, debutYear: 2012, species: { ko: "뮤지션", en: "Musician" }, gender: { ko: "혼성", en: "Mixed" }, image: "images/쇼바이락.png", traits: { ko: ["밴드", "음악", "록"], en: ["Band", "Music", "Rock"] }, bio: { ko: "음악 도시 미디시티를 무대로 활동하는 록 밴드들입니다.", en: "Cool rock band characters fighting with music." } },
  { id: 16, name: { ko: "초코캣", en: "Chococat" }, debutYear: 1996, species: { ko: "고양이", en: "Cat" }, gender: { ko: "남성", en: "Male" }, image: "images/초코캣.png", traits: { ko: ["안테나 수염", "정보통", "초콜릿 코"], en: ["Antenna whiskers", "Smart", "Chocolate nose"] }, bio: { ko: "수염으로 트렌디한 소식을 캐치하는 초콜릿색 고양이입니다.", en: "A smart cat whose whiskers detect the latest news." } },
  { id: 17, name: { ko: "마론크림", en: "Marroncream" }, debutYear: 1985, species: { ko: "토끼", en: "Rabbit" }, gender: { ko: "여성", en: "Female" }, image: "images/마론크림.png", traits: { ko: ["파리 감성", "제과제빵", "바느질"], en: ["French style", "Baking", "Sewing"] }, bio: { ko: "프랑스 근교에서 태어난 손재주 좋은 토끼 소녀입니다.", en: "A talented French rabbit girl who loves baking." } },
  { id: 18, name: { ko: "딩구리데이즈 (모프)", en: "Marumofubiyori (Moppu)" }, debutYear: 2017, species: { ko: "북극곰", en: "Polar bear" }, gender: { ko: "남성", en: "Male" }, image: "images/딩구리데이즈 (모프).png", traits: { ko: ["담요 사랑", "집돌이", "느긋함"], en: ["Loves blankets", "Homebody", "Lazy"] }, bio: { ko: "늘 담요를 두르고 방구석에 누워있기 좋아하는 곰입니다.", en: "A lazy polar bear who loves wrapping up in blankets." } },
  { id: 19, name: { ko: "키리미짱", en: "Kirimi-chan" }, debutYear: 2014, species: { ko: "연어 필레", en: "Salmon fillet" }, gender: { ko: "여성", en: "Female" }, image: "images/키리미짱.png", traits: { ko: ["맛있는 초밥", "생선 슬라이스", "긍정"], en: ["Sushi dream", "Fish fillet", "Positive"] }, bio: { ko: "맛있게 조리되기를 꿈꾸는 밝은 연어 조각입니다.", en: "A cheerful salmon slice dreaming of delicious food." } },
  { id: 20, name: { ko: "코로코로쿠리린", en: "Corocorokuririn" }, debutYear: 1999, species: { ko: "햄스터", en: "Hamster" }, gender: { ko: "남성", en: "Male" }, image: "images/코로코로쿠리린.png", traits: { ko: ["해바라기씨", "모자", "호기심"], en: ["Sunflower seeds", "Hat", "Curious"] }, bio: { ko: "모자를 즐겨 쓰는 호기심 많은 햄스터 친구입니다.", en: "A cute, curious hamster wearing a little cap." } },
  { id: 21, name: { ko: "가오파워루", en: "GAOPOWERROO" }, debutYear: 2022, species: { ko: "공룡", en: "Dinosaur" }, gender: { ko: "남성", en: "Male" }, image: "images/GAOPOWERROO.png", traits: { ko: ["어린 공룡", "에너지", "평화"], en: ["Baby dino", "Energy", "Peaceful"] }, bio: { ko: "공룡 섬에서 온 마음 따뜻하고 평화로운 공룡입니다.", en: "A energetic, peace-loving baby dinosaur." } },
  { id: 22, name: { ko: "마이스위트피아노", en: "My Sweet Piano" }, debutYear: 2005, species: { ko: "양", en: "Sheep" }, gender: { ko: "여성", en: "Female" }, image: "images/마이스위트피아노.png", traits: { ko: ["복슬복슬", "연분홍", "마이멜로디 친구"], en: ["Fluffy", "Soft pink", "My Melody's friend"] }, bio: { ko: "마이멜로디의 단짝인 부드러운 아기 양입니다.", en: "My Melody's soft, fluffy sheep best friend." } },
  { id: 23, name: { ko: "우사하나", en: "Usahana" }, debutYear: 2003, species: { ko: "토끼", en: "Rabbit" }, gender: { ko: "여성", en: "Female" }, image: "images/우사하나.png", traits: { ko: ["알록달록", "발레", "무지개 마을"], en: ["Colorful", "Ballet", "Rainbow Town"] }, bio: { ko: "무지개 마을에서 발레를 추는 활발한 알록달록 토끼입니다.", en: "A colorful, energetic rabbit who loves ballet." } },
  { id: 24, name: { ko: "구데타마", en: "Gudetama" }, debutYear: 2013, species: { ko: "계란 노른자", en: "Egg yolk" }, gender: { ko: "불명", en: "Unknown" }, image: "images/구데타마.png", traits: { ko: ["의욕 없음", "귀차니즘", "베이컨 이불"], en: ["Unmotivated", "Lazy", "Bacon blanket"] }, bio: { ko: "어떻게 조리되든 아무런 의욕이 없는 계란 노른자입니다.", en: "A lazy egg yolk with zero motivation." } },
  { id: 25, name: { ko: "위시미멜", en: "Wish me mell" }, debutYear: 2010, species: { ko: "토끼", en: "Rabbit" }, gender: { ko: "여성", en: "Female" }, image: "images/위시미멜.png", traits: { ko: ["무지개 숲", "마음 전달", "파스텔"], en: ["Rainbow forest", "Sharing feelings", "Pastel"] }, bio: { ko: "친구들에게 예쁜 마음을 편지로 전하는 토끼입니다.", en: "A sweet rabbit who passes messages of kindness." } },
  { id: 26, name: { ko: "케로케로케로피", en: "Keroppi" }, debutYear: 1988, species: { ko: "개구리", en: "Frog" }, gender: { ko: "남성", en: "Male" }, image: "images/케로케로케로피.png", traits: { ko: ["돈부리 연못", "수영 천재", "활기참"], en: ["Donut Pond", "Swimmer", "Energetic"] }, bio: { ko: "돈부리 연못의 모험을 사랑하는 명랑한 개구리입니다.", en: "A lively frog who loves swimming in Donut Pond." } },
  { id: 27, name: { ko: "코기뮹", en: "Cogimyun" }, debutYear: 2017, species: { ko: "밀가루 요정", en: "Flour fairy" }, gender: { ko: "여성", en: "Female" }, image: "images/코기뮹.png", traits: { ko: ["여린 마음", "주먹밥 꿈", "말랑말랑"], en: ["Fragile", "Rice ball dream", "Soft"] }, bio: { ko: "쉽게 바스러지지만 주먹밥을 꿈꾸는 밀가루 요정입니다.", en: "A fragile flour fairy dreaming of becoming a rice ball." } },
  { id: 28, name: { ko: "하나마루오바케", en: "Hanamaruobake" }, debutYear: 2022, species: { ko: "유령", en: "Ghost" }, gender: { ko: "불명", en: "Unknown" }, image: "images/하나마루오바케.png", traits: { ko: ["참 잘했어요", "칭찬", "동글 유령"], en: ["Good job", "Praise", "Round ghost"] }, bio: { ko: "당신의 잘한 일에 '참 잘했어요' 꽃도장을 찍어주는 유령입니다.", en: "A sweet ghost giving 'good job' stamps to everyone." } },
  { id: 29, name: { ko: "배드바츠마루", en: "Badtz-Maru" }, debutYear: 1993, species: { ko: "펭귄", en: "Penguin" }, gender: { ko: "남성", en: "Male" }, image: "images/배드바츠마루.png", traits: { ko: ["삐죽 머리", "악동", "악어 포치"], en: ["Spiky hair", "Rebel", "Pet croc"] }, bio: { ko: "짓궂은 장난을 좋아하지만 속정 깊은 악동 펭귄입니다.", en: "A rebellious little penguin who acts tough." } },
  { id: 30, name: { ko: "아히루노페클", en: "Pekkle" }, debutYear: 1990, species: { ko: "오리", en: "Duck" }, gender: { ko: "남성", en: "Male" }, image: "images/아히루노페클.png", traits: { ko: ["탭댄스", "노란 오리", "노래"], en: ["Tap dance", "Yellow duck", "Singing"] }, bio: { ko: "노래와 탭댄스를 즐기는 순박하고 착한 오리입니다.", en: "A kind duck who loves singing and tap dancing." } },
  { id: 31, name: { ko: "턱시도샘", en: "Tuxedo Sam" }, debutYear: 1979, species: { ko: "펭귄", en: "Penguin" }, gender: { ko: "남성", en: "Male" }, image: "images/턱시도샘.png", traits: { ko: ["세일러 모자", "보타이", "식도락"], en: ["Sailor hat", "Bowtie", "Foodie"] }, bio: { ko: "남극에서 온 365벌의 옷을 가진 멋쟁이 펭귄입니다.", en: "A fashionable penguin with a huge wardrobe." } },
  { id: 32, name: { ko: "한교동", en: "Hangyodon" }, debutYear: 1985, species: { ko: "반인반어", en: "Half-fish" }, gender: { ko: "남성", en: "Male" }, image: "images/한교동.png", traits: { ko: ["개그맨 지망생", "문어 사유리", "외로움"], en: ["Comedian", "Octopus friend", "Lonely"] }, bio: { ko: "모두를 웃기고 싶지만 외로움을 잘 타는 물고기입니다.", en: "A funny half-fish fellow trying to make friends laugh." } },
  { id: 33, name: { ko: "리틀트윈스타", en: "Little Twin Stars" }, debutYear: 1975, species: { ko: "별나라 아이", en: "Star child" }, gender: { ko: "혼성", en: "Mixed" }, image: "images/리틀트윈스타.png", traits: { ko: ["키키 라라", "파란/분홍 머리", "꿈"], en: ["Kiki & Lala", "Blue/Pink hair", "Dreams"] }, bio: { ko: "별나라에서 온 귀여운 쌍둥이 남매 키키와 라라입니다.", en: "Twin star siblings bringing hope and dreams." } },
  { id: 34, name: { ko: "마이멜로디", en: "My Melody" }, debutYear: 1975, species: { ko: "토끼", en: "Rabbit" }, gender: { ko: "여성", en: "Female" }, image: "images/마이멜로디.png", traits: { ko: ["분홍 후드", "상냥함", "할머니 선물"], en: ["Pink hood", "Sweet", "Grandma's hood"] }, bio: { ko: "할머니가 만들어준 분홍 후드가 보물인 상냥한 토끼입니다.", en: "A sweet rabbit girl with a cherished pink hood." } },

  // --- 스크린샷 3 ---
  { id: 35, name: { ko: "카시와왕코모치", en: "Kashiwankomochi" }, debutYear: 2013, species: { ko: "떡 강아지", en: "Rice cake dog" }, gender: { ko: "남성", en: "Male" }, image: "images/kashiwankomochi.png", traits: { ko: ["떡", "쫀득함", "귀여움"], en: ["Mochi", "Squishy", "Cute"] }, bio: { ko: "나뭇잎을 두른 쫀득하고 말랑한 떡 강아지입니다.", en: "A squishy mochi puppy wrapped in a leaf." } },
  { id: 36, name: { ko: "멜로튠", en: "Mellotune" }, debutYear: 1982, species: { ko: "음악 요정", en: "Music fairy" }, gender: { ko: "여성", en: "Female" }, image: "images/mellotune.png", traits: { ko: ["음악", "멜로디", "클래식"], en: ["Music", "Melody", "Classic"] }, bio: { ko: "감미로운 음악 멜로디를 전해주는 감성 캐릭터입니다.", en: "A vintage musical character sharing sweet melodies." } },
  { id: 37, name: { ko: "푸와와", en: "Puwawa" }, debutYear: 2021, species: { ko: "구름 요정", en: "Cloud fairy" }, gender: { ko: "불명", en: "Unknown" }, image: "images/puwawa.png", traits: { ko: ["폭신폭신", "구름", "하늘"], en: ["Fluffy", "Cloud", "Sky"] }, bio: { ko: "하늘을 둥둥 떠다니는 폭신한 구름 요정입니다.", en: "A soft fluffy cloud creature floating in the sky." } },
  { id: 38, name: { ko: "프레시펀치", en: "Fresh Punch" }, debutYear: 1979, species: { ko: "캔디 패턴", en: "Candy pattern" }, gender: { ko: "여성", en: "Female" }, image: "images/freshpunch.png", traits: { ko: ["레트로", "파스텔 팝", "80년대"], en: ["Retro", "Pastel pop", "80s"] }, bio: { ko: "레트로하고 달콤한 파스텔 감성의 클래식 아이콘입니다.", en: "A retro 80s pastel pattern character." } },
  { id: 39, name: { ko: "자시키부타", en: "Zashikibuta" }, debutYear: 1984, species: { ko: "돼지", en: "Pig" }, gender: { ko: "남성", en: "Male" }, image: "images/zashikibuta.png", traits: { ko: ["방구석", "느긋함", "분홍 돼지"], en: ["Homebody", "Relaxed", "Pink pig"] }, bio: { ko: "방 안에서 뒹굴거리기를 좋아하는 유쾌한 돼지입니다.", en: "A relaxed pink pig who loves chilling at home." } },
  { id: 40, name: { ko: "스트로베리킹", en: "Strawberry King" }, debutYear: 1975, species: { ko: "딸기 국왕", en: "Strawberry King" }, gender: { ko: "남성", en: "Male" }, image: "images/strawberryking.png", traits: { ko: ["왕관", "평화", "딸기 왕국"], en: ["Crown", "Peace", "Strawberry Realm"] }, bio: { ko: "딸기 왕국에서 모두의 평화를 지키는 따뜻한 국왕입니다.", en: "The peaceful king of the Strawberry Kingdom." } },
  { id: 41, name: { ko: "비트캣츠", en: "Beatcats" }, debutYear: 2020, species: { ko: "댄스 고양이", en: "Dance cat group" }, gender: { ko: "여성", en: "Female" }, image: "images/beatcats.png", traits: { ko: ["비트", "댄스", "컬러풀"], en: ["Beat", "Dance", "Colorful"] }, bio: { ko: "음악과 댄스로 하트 시그널을 보내는 댄스 캣 그룹입니다.", en: "A stylish dance cat team sending heart beats." } },
  { id: 42, name: { ko: "허밍민트", en: "Hummingmint" }, debutYear: 2014, species: { ko: "아기 사슴", en: "Baby deer" }, gender: { ko: "여성", en: "Female" }, image: "images/hummingmint.png", traits: { ko: ["민트색", "북유럽", "자연"], en: ["Mint green", "Nordic", "Nature"] }, bio: { ko: "북유럽 숲속에서 노래를 즐기는 사랑스러운 아기 사슴입니다.", en: "A Nordic baby deer who loves singing in the forest." } },
  { id: 43, name: { ko: "스위트코론", en: "Sweetcoron" }, debutYear: 2009, species: { ko: "꿀벌", en: "Bee" }, gender: { ko: "남성", en: "Male" }, image: "images/sweetcoron.png", traits: { ko: ["꿀벌", "달콤함", "작은 날개"], en: ["Bee", "Sweet", "Tiny wings"] }, bio: { ko: "달콤한 꿀을 모으는 귀여운 아기 꿀벌 캐릭터입니다.", en: "A sweet little bee gathering delicious honey." } },
  { id: 44, name: { ko: "하구루만스타일", en: "Hagurumanstyle" }, debutYear: 2015, species: { ko: "톱니바퀴", en: "Gear fellow" }, gender: { ko: "남성", en: "Male" }, image: "images/hagurumanstyle.png", traits: { ko: ["직장인", "톱니바퀴", "열정"], en: ["Office worker", "Gear", "Passionate"] }, bio: { ko: "사회생활에 최선을 다하는 성실한 톱니바퀴 직장인입니다.", en: "Hardworking gear characters striving in daily life." } },
  { id: 45, name: { ko: "노라네코랜드", en: "Noranekoland" }, debutYear: 1987, species: { ko: "길고양이 삼형제", en: "Stray cats" }, gender: { ko: "남성", en: "Male" }, image: "images/noranekoland.png", traits: { ko: ["삼형제", "모험", "자유"], en: ["Three brothers", "Adventure", "Free"] }, bio: { ko: "자유롭게 모험을 즐기는 기분파 길고양이 삼형제입니다.", en: "Three adventurous stray cat brothers." } },
  { id: 46, name: { ko: "뮤클드리미", en: "Mewkledreamy" }, debutYear: 2017, species: { ko: "고양이 인형", en: "Kitten plush" }, gender: { ko: "여성", en: "Female" }, image: "images/mewkledreamy.png", traits: { ko: ["보라색 고양이", "꿈속 모험", "별"], en: ["Purple kitten", "Dream world", "Stars"] }, bio: { ko: "꿈속에 들어가 함께 모험할 수 있는 신비한 고양이 인형입니다.", en: "A magical plush kitten who enters the dream world." } },
  { id: 47, name: { ko: "파타파타페피", en: "Patapatapeppy" }, debutYear: 1992, species: { ko: "부엉이", en: "Owl" }, gender: { ko: "남성", en: "Male" }, image: "images/patapatapeppy.png", traits: { ko: ["호기심", "날개짓", "숲"], en: ["Curious", "Flapping", "Forest"] }, bio: { ko: "날개를 파타파타 치며 호기심이 넘치는 꼬마 부엉이입니다.", en: "A curious baby owl constantly flapping his wings." } },
  { id: 48, name: { ko: "고로피카돈", en: "Goropikadon" }, debutYear: 1982, species: { ko: "천둥 도깨비 삼형제", en: "Thunder imps" }, gender: { ko: "남성", en: "Male" }, image: "images/goropikadon.png", traits: { ko: ["삼형제", "번개", "알록달록 머리"], en: ["Triplets", "Thunder", "Colorful hair"] }, bio: { ko: "번개 나라에서 온 장난기 많은 꼬마 도깨비 삼형제입니다.", en: "Three playful thunder imps from the Cloud Kingdom." } },
  { id: 49, name: { ko: "포피포", en: "Paupipo" }, debutYear: 1988, species: { ko: "아기 기린", en: "Giraffe" }, gender: { ko: "남성", en: "Male" }, image: "images/paupipo.png", traits: { ko: ["분홍 기린", "꿈나라", "순수함"], en: ["Pink giraffe", "Dreamland", "Pure"] }, bio: { ko: "꿈나라 별에서 온 순수한 분홍색 꼬마 기린입니다.", en: "A sweet pink baby giraffe from the star realm." } },
  { id: 50, name: { ko: "마이마이마이고엔", en: "Maimaimaigoen" }, debutYear: 2021, species: { ko: "아이들", en: "Kids group" }, gender: { ko: "혼성", en: "Mixed" }, image: "images/maimaimaigoen.png", traits: { ko: ["유치원", "모험", "유기적 스토리"], en: ["Kindergarten", "Adventure", "Story"] }, bio: { ko: "테마파크에 길을 잃은 아이들의 성장과 모험 이야기입니다.", en: "Children exploring and growing in a mysterious park." } },
  { id: 51, name: { ko: "페타페타미니리안", en: "Petapetaminilian" }, debutYear: 2021, species: { ko: "외계인", en: "Alien" }, gender: { ko: "불명", en: "Unknown" }, image: "images/petapetaminilian.png", traits: { ko: ["우주인", "지구 침략", "귀여움"], en: ["Space alien", "Earth visit", "Cute"] }, bio: { ko: "지구를 탐험하러 찾아온 작고 귀여운 우주인들입니다.", en: "Cute tiny aliens exploring planet Earth." } },
  { id: 52, name: { ko: "치어리첨스", en: "Cheery Chums" }, debutYear: 1979, species: { ko: "숲속 동물들", en: "Forest animals" }, gender: { ko: "혼성", en: "Mixed" }, image: "images/cheerychums.png", traits: { ko: ["응원", "파티", "빨간 리본"], en: ["Cheer", "Party", "Red bow"] }, bio: { ko: "언제나 서로를 응원하며 신나게 파티를 즐기는 동물들입니다.", en: "Cheerful animal friends who love house parties." } },
  { id: 53, name: { ko: "패티앤지미", en: "Patty & Jimmy" }, debutYear: 1974, species: { ko: "소년 소녀", en: "Boy & Girl" }, gender: { ko: "혼성", en: "Mixed" }, image: "images/pattyandjimmy.png", traits: { ko: ["미국 감성", "스포츠", "소꿉친구"], en: ["US style", "Sports", "Best friends"] }, bio: { ko: "캔자스 출신의 운동을 사랑하는 친한 소꿉친구입니다.", en: "Best friends from Kansas who love sports and fun." } },
  { id: 54, name: { ko: "몽키치", en: "Monkichi" }, debutYear: 1991, species: { ko: "원숭이", en: "Monkey" }, gender: { ko: "남성", en: "Male" }, image: "images/monkichi.png", traits: { ko: ["바나나", "장난꾸러기", "낙천적"], en: ["Bananas", "Joker", "Optimistic"] }, bio: { ko: "바나나 먹기와 농담하기를 세상에서 제일 좋아하는 원숭이입니다.", en: "A merry monkey who adores eating bananas." } },
  { id: 55, name: { ko: "리틀포레스트펠로", en: "Little Forest Fellow" }, debutYear: 2015, species: { ko: "다람쥐", en: "Squirrel" }, gender: { ko: "남성", en: "Male" }, image: "images/littleforestfellow.png", traits: { ko: ["빨간 후드", "마이멜로디 사촌", "메로"], en: ["Red hood", "My Melody's cousin", "Mello"] }, bio: { ko: "마이멜로디를 매우 좋아하는 다정한 다람쥐 친구입니다.", en: "My Melody's cousin who cherishes his red hood." } },
  { id: 56, name: { ko: "마슈마로미타이나후와후와냥코", en: "Masyumaro" }, debutYear: 2006, species: { ko: "마시멜로 고양이", en: "Marshmallow cat" }, gender: { ko: "남성", en: "Male" }, image: "images/masyumaro.png", traits: { ko: ["마시멜로", "말랑함", "파리 파티시에"], en: ["Marshmallow", "Squishy", "Paris"] }, bio: { ko: "마시멜로처럼 부드럽고 말랑말랑한 하얀 고양이입니다.", en: "A cat as soft and squishy as a marshmallow." } },
  { id: 57, name: { ko: "캐릭터40", en: "Character 40" }, debutYear: 1980, species: { ko: "클래식 캐릭터", en: "Classic Character" }, gender: { ko: "혼성", en: "Mixed" }, image: "images/characters_40.png", traits: { ko: ["빈티지", "추억", "산리오 아트"], en: ["Vintage", "Memories", "Sanrio Art"] }, bio: { ko: "산리오의 역사와 함께해 온 레트로 감성 친구입니다.", en: "Classic vintage Sanrio heritage artwork." } },
  { id: 58, name: { ko: "쥬얼펫", en: "Jewelpet" }, debutYear: 2008, species: { ko: "보석 동물", en: "Jewel pets" }, gender: { ko: "여성", en: "Female" }, image: "images/jewelpet.png", traits: { ko: ["눈 보석", "마법", "루비"], en: ["Jewel eyes", "Magic", "Ruby"] }, bio: { ko: "눈에 보석을 품고 특별한 마법을 사용하는 동물 친구들입니다.", en: "Magical animals with sparkling gemstone eyes." } },
  { id: 59, name: { ko: "냐니뉴뇨뇨", en: "Nyanyinyunyonyon" }, debutYear: 1984, species: { ko: "아기 고양이 5형제", en: "Five kittens" }, gender: { ko: "혼성", en: "Mixed" }, image: "images/nyaninyunyenyon.png", traits: { ko: ["5형제", "우유 사랑", "장난꾸러기"], en: ["5 baby kittens", "Loves milk", "Playful"] }, bio: { ko: "우유를 정말 좋아하는 장난꾸러기 아기 고양이 5형제입니다.", en: "Five mischievous baby kittens who love milk." }, },
  { id: 60, name: { ko: "봉봉리본", en: "Bonbonribbon" }, debutYear: 2012, species: { ko: "강아지", en: "Puppy" }, gender: { ko: "여성", en: "Female" }, image: "images/bonbonribbon.png", traits: { ko: ["분홍 리본", "패션디자이너", "핑크"], en: ["Pink ribbon", "Designer", "Pink"] }, bio: { ko: "예쁜 리본 만들기를 좋아하는 멋쟁이 분홍 강아지입니다.", en: "A stylish pink puppy who loves making ribbons." } },
  { id: 61, name: { ko: "어그레시브 렛츠코", en: "Aggretsuko" }, debutYear: 2015, species: { ko: "레서판다", en: "Red panda" }, gender: { ko: "여성", en: "Female" }, image: "images/retsuko.png", traits: { ko: ["회계사", "데스메탈", "스트레스 해소"], en: ["Accountant", "Death metal", "Stress relief"] }, bio: { ko: "스트레스를 받으면 노래방에서 데스메탈을 부르는 직장인입니다.", en: "An accountant who vents daily stress with death metal." } },
  { id: 62, name: { ko: "아도로자토루마리", en: "Adorozatorumary" }, debutYear: 2022, species: { ko: "푸른 장미 산리오", en: "Blue rose cat" }, gender: { ko: "여성", en: "Female" }, image: "images/adorozatorumary.png", traits: { ko: ["Ado 콜라보", "파란 장미", "다크 팝"], en: ["Ado collab", "Blue rose", "Dark pop"] }, bio: { ko: "우타이테 Ado와 콜라보하여 태어난 신비로운 푸른 고양이입니다.", en: "A cool blue rose character collaborated with singer Ado." } },

  // --- 스크린샷 4 ---
  { id: 63, name: { ko: "스포팅베어스", en: "Sporting Bears" }, debutYear: 1992, species: { ko: "곰", en: "Bear" }, gender: { ko: "남성", en: "Male" }, image: "images/sportingbears.png", traits: { ko: ["스포츠", "열정", "곰"], en: ["Sports", "Passion", "Bear"] }, bio: { ko: "스포츠 경기를 열정적으로 즐기는 클래식 곰 캐릭터입니다.", en: "Classic bear pals who love playing and watching sports." } },
  { id: 64, name: { ko: "판나피타", en: "Pannapitta" }, debutYear: 2003, species: { ko: "아기 판다", en: "Baby panda" }, gender: { ko: "남성", en: "Male" }, image: "images/pannapitta.png", traits: { ko: ["에너지", "달리기", "아기 판다"], en: ["Energy", "Running", "Baby panda"] }, bio: { ko: "잠시도 쉬지 않고 똥글똥글 뛰어다니는 아기 판다입니다.", en: "A hyperactive baby panda who loves running around." } },
  { id: 65, name: { ko: "리수루", en: "Risuru" }, debutYear: 2018, species: { ko: "다람쥐", en: "Squirrel" }, gender: { ko: "여성", en: "Female" }, image: "images/risuru.png", traits: { ko: ["도토리", "숲속", "귀여움"], en: ["Acorn", "Forest", "Cute"] }, bio: { ko: "숲속에서 볼이 터지게 도토리를 모으는 다람쥐입니다.", en: "A cute forest squirrel gathering acorns." } },
  { id: 66, name: { ko: "신칸센", en: "Shinkansen (SSD)" }, debutYear: 1999, species: { ko: "고속열차", en: "Bullet train" }, gender: { ko: "남성", en: "Male" }, image: "images/ssd.png", traits: { ko: ["기차", "스피드", "여행"], en: ["Train", "Speed", "Travel"] }, bio: { ko: "씽씽 신나게 달리는 멋진 고속열차 캐릭터입니다.", en: "Cool bullet train characters racing on tracks." } },
  { id: 67, name: { ko: "런어바웃츠", en: "Runabouts" }, debutYear: 1984, species: { ko: "자동차", en: "Cars" }, gender: { ko: "남성", en: "Male" }, image: "images/runabouts.png", traits: { ko: ["탈것", "자동차", "신남"], en: ["Vehicles", "Cars", "Exciting"] }, bio: { ko: "알록달록 도로 위를 달리는 장난감 자동차 친구들입니다.", en: "Fun vehicle characters driving on colorful roads." } },
  { id: 68, name: { ko: "버디에디", en: "Buddyeddy" }, debutYear: 1991, species: { ko: "영어 친구들", en: "English pal" }, gender: { ko: "남성", en: "Male" }, image: "images/buddyeddy.png", traits: { ko: ["영어", "배움", "친구"], en: ["English", "Learning", "Friends"] }, bio: { ko: "즐겁게 언어를 배우며 만나는 친근한 유치원 친구입니다.", en: "Friendly characters helping children learn languages." } },
  { id: 69, name: { ko: "보사노바 애니멀", en: "Bosanimal" }, debutYear: 2021, species: { ko: "부스스한 동물", en: "Fluffy animal" }, gender: { ko: "불명", en: "Unknown" }, image: "images/bosanimal.png", traits: { ko: ["부스스함", "자연스러움", "힐링"], en: ["Messy hair", "Natural", "Healing"] }, bio: { ko: "자다 깨어 머리가 부스스해도 그대로가 매력인 동물들입니다.", en: "Charming animals embracing their natural messy fur." } },
  { id: 70, name: { ko: "버니앤매티", en: "Bunny & Matty" }, debutYear: 1973, species: { ko: "토끼와 쥐", en: "Bunny & Mouse" }, gender: { ko: "혼성", en: "Mixed" }, image: "images/bunnyandmatty.png", traits: { ko: ["초창기 아트", "우정", "클래식"], en: ["Early art", "Friendship", "Classic"] }, bio: { ko: "산리오 초기 탄생한 유서 깊은 토끼와 생쥐 단짝입니다.", en: "One of Sanrio's earliest classic character duos." } },
  { id: 71, name: { ko: "디노소어스", en: "Dinosaurs" }, debutYear: 1992, species: { ko: "공룡들", en: "Dinosaurs" }, gender: { ko: "남성", en: "Male" }, image: "images/dinosaurs.png", traits: { ko: ["공룡", "태고", "탐험"], en: ["Dino", "Prehistoric", "Explore"] }, bio: { ko: "지구 옛날 시대를 살아가는 늠름하고 귀여운 공룡입니다.", en: "Cute prehistoric dinosaur pals." } },
  { id: 72, name: { ko: "뇨키앤펜네", en: "Nyokki & Penne" }, debutYear: 2009, species: { ko: "고양이 콤비", en: "Cat duo" }, gender: { ko: "혼성", en: "Mixed" }, image: "images/nyokkiandpenne.png", traits: { ko: ["이탈리안 감성", "파스타", "코미디"], en: ["Italian vibe", "Pasta", "Comedy"] }, bio: { ko: "유쾌한 호흡을 자랑하는 고양이 듀오 캐릭터입니다.", en: "A comical duo of Italian-inspired cats." } },
  { id: 73, name: { ko: "타이니포엠", en: "Tiny Poem" }, debutYear: 1975, species: { ko: "숲속 소녀", en: "Forest girl" }, gender: { ko: "여성", en: "Female" }, image: "images/tinypoem.png", traits: { ko: ["자연", "민들레", "서정적"], en: ["Nature", "Dandelion", "Poetic"] }, bio: { ko: "바람을 타고 민들레 홀씨와 함께 노니는 서정적 소녀입니다.", en: "A poetic green-garbed girl living in nature." } },
  { id: 74, name: { ko: "심해조크", en: "Shinkaizoku" }, debutYear: 2014, species: { ko: "심해 생물", en: "Deep sea creatures" }, gender: { ko: "남성", en: "Male" }, image: "images/shinkaizoku.png", traits: { ko: ["심해", "멘다코", "바다 탐험"], en: ["Deep sea", "Dumbo octopus", "Ocean"] }, bio: { ko: "깊은 바닷속 신비로운 심해 생물 친구들입니다.", en: "Mysterious, cute deep-sea creature characters." } },
  { id: 75, name: { ko: "루루루학원", en: "Rururugakuen" }, debutYear: 1989, species: { ko: "여고생들", en: "High school girls" }, gender: { ko: "여성", en: "Female" }, image: "images/rururugakuen.png", traits: { ko: ["학창시절", "낙서 아트", "상큼함"], en: ["School life", "Doodle art", "Fresh"] }, bio: { ko: "낙서 같은 스타일로 그려진 즐거운 학교 생활 친구들입니다.", en: "Playful high school girls rendered in doodle style." } },
  { id: 76, name: { ko: "랜드리", en: "Landry" }, debutYear: 1999, species: { ko: "너구리", en: "Racoon" }, gender: { ko: "남성", en: "Male" }, image: "images/landry.png", traits: { ko: ["세탁", "대야", "깨끗함"], en: ["Washing", "Washbasin", "Clean"] }, bio: { ko: "무엇이든 씻기를 좋아하는 깨끗하고 귀여운 너구리입니다.", en: "A tiny boy raccoon who loves washing everything." } },
  { id: 77, name: { ko: "테노리쿠마", en: "Tenorikuma" }, debutYear: 2005, species: { ko: "손바닥 곰", en: "Palm-sized bear" }, gender: { ko: "남성", en: "Male" }, image: "images/tenorikuma.png", traits: { ko: ["손바닥 크기", "카페", "커피"], en: ["Tiny bear", "Cafe", "Coffee"] }, bio: { ko: "손바닥만큼 작지만 근사한 카페를 운영하는 곰입니다.", en: "A tiny bear running a cozy coffee shop." } },
  { id: 78, name: { ko: "우메야", en: "Umeya" }, debutYear: 1987, species: { ko: "할머니", en: "Grandma" }, gender: { ko: "여성", en: "Female" }, image: "images/umeya.png", traits: { ko: ["전통", "다정함", "과자점"], en: ["Traditional", "Warm", "Sweets shop"] }, bio: { ko: "손주들에게 맛있는 음식을 챙겨주는 정겨운 할머니입니다.", en: "A warm, traditional Japanese grandma character." } },
  { id: 79, name: { ko: "보드빌듀오", en: "Vaudeville Duo" }, debutYear: 1983, species: { ko: "공연 콤비", en: "Performance duo" }, gender: { ko: "혼성", en: "Mixed" }, image: "images/vaudevilleduo.png", traits: { ko: ["클래식 탭댄스", "무대", "쇼"], en: ["Classic tap", "Stage", "Show"] }, bio: { ko: "무대 위에서 멋진 연주와 춤을 선보이는 명콤비입니다.", en: "A classic show business performance duo." } },
  { id: 80, name: { ko: "후쿠타로", en: "Fukutaro" }, debutYear: 1998, species: { ko: "복 부엉이", en: "Lucky owl" }, gender: { ko: "남성", en: "Male" }, image: "images/fukutaro.png", traits: { ko: ["행운", "부엉이", "복"], en: ["Luck", "Owl", "Fortune"] }, bio: { ko: "모두에게 행복과 복을 가져다주는 신비한 부엉이입니다.", en: "A lucky owl character bringing good fortune." } },
  { id: 81, name: { ko: "리루리루페어리루", en: "Rilu Rilu Fairilu" }, debutYear: 2015, species: { ko: "꽃 요정", en: "Flower fairy" }, gender: { ko: "여성", en: "Female" }, image: "images/rilurilufairilu.png", traits: { ko: ["씨앗 열쇠", "꽃 요정", "마법"], en: ["Seed key", "Flower fairy", "Magic"] }, bio: { ko: "페어리루 씨앗에서 태어나 마법의 문을 여는 요정입니다.", en: "Magical flower fairies born from Fairilu seeds." } },
  { id: 82, name: { ko: "윈키핑키", en: "Winkipinki" }, debutYear: 1989, species: { ko: "고양이", en: "Cat" }, gender: { ko: "여성", en: "Female" }, image: "images/winkipinki.png", traits: { ko: ["꽃 좋아함", "음악", "바이올린"], en: ["Loves flowers", "Music", "Violin"] }, bio: { ko: "바이올린 켜는 것을 즐기는 낭만적인 고양이 소녀입니다.", en: "A romantic cat girl who loves playing violin." } },
  { id: 83, name: { ko: "쿠마밀렌", en: "Kumamilen" }, debutYear: 2002, species: { ko: "우주 곰", en: "Space bear" }, gender: { ko: "남성", en: "Male" }, image: "images/kumamilen.png", traits: { ko: ["우주선", "행성 탐험", "미래"], en: ["Spaceship", "Planet", "Future"] }, bio: { ko: "우주선을 타고 별자리를 탐험하는 우주 곰입니다.", en: "A futuristic bear exploring space and stars." } },
  { id: 84, name: { ko: "이치고맨", en: "Ichigoman" }, debutYear: 2011, species: { ko: "히어로 키티", en: "Hero Kitty" }, gender: { ko: "여성", en: "Female" }, image: "images/ichigoman.png", traits: { ko: ["히어로", "딸기 귀 스마트폰", "변신"], en: ["Hero", "Strawberry phone", "Transform"] }, bio: { ko: "평화를 지키기 위해 딸기 스마트폰으로 변신하는 히어로입니다.", en: "A superheroine transformed to protect peace." } },
  { id: 85, name: { ko: "포코폰", en: "Pokopon" }, debutYear: 1986, species: { ko: "너구리", en: "Raccoon dog" }, gender: { ko: "남성", en: "Male" }, image: "images/pokopon.png", traits: { ko: ["변신 나뭇잎", "에도 시대", "장난"], en: ["Magic leaf", "Edo era", "Mischief"] }, bio: { ko: "머리에 나뭇잎을 얹고 변신술을 연습하는 꼬마 너구리입니다.", en: "A cute tanuki practicing transformation magic." } },
  { id: 86, name: { ko: "팬더플", en: "Pandapple" }, debutYear: 2002, species: { ko: "사과 판다", en: "Apple panda" }, gender: { ko: "남성", en: "Male" }, image: "images/pandapple.png", traits: { ko: ["사과 모자", "달콤함", "순함"], en: ["Apple hat", "Sweet", "Gentle"] }, bio: { ko: "머리에 언제나 싱싱한 사과를 얹고 다니는 판다입니다.", en: "A friendly panda wearing a fresh red apple on his head." } },
  { id: 87, name: { ko: "체리나체리네", en: "Cherina Cherine" }, debutYear: 2008, species: { ko: "체리 토끼", en: "Cherry bunnies" }, gender: { ko: "여성", en: "Female" }, image: "images/cherinacherine.png", traits: { ko: ["체리", "쌍둥이 토끼", "상큼함"], en: ["Cherry", "Twin rabbits", "Fresh"] }, bio: { ko: "체리 열매처럼 달콤하고 상큼한 쌍둥이 토끼 자매입니다.", en: "Twin rabbit sisters sweet like fresh cherries." } },
  { id: 88, name: { ko: "슈가미뉴에트", en: "Sugarminuet" }, debutYear: 2008, species: { ko: "발레리나 토끼", en: "Ballet bunnies" }, gender: { ko: "여성", en: "Female" }, image: "images/sugarminuet.png", traits: { ko: ["발레", "우아함", "리본 스커트"], en: ["Ballet", "Elegant", "Ribbon skirt"] }, bio: { ko: "우아하게 미뉴에트 춤을 추는 발레리나 토끼 자매입니다.", en: "Elegant ballerina twin rabbits dancing minuet." } },
  { id: 89, name: { ko: "판쿤치", en: "Pankunchi" }, debutYear: 2015, species: { ko: "식빵 팬더", en: "Bread panda" }, gender: { ko: "남성", en: "Male" }, image: "images/pankunchi.png", traits: { ko: ["식빵", "고소함", "베이커리"], en: ["White bread", "Warm", "Bakery"] }, bio: { ko: "갓 구운 노릇노릇한 식빵 모자를 쓴 아기 판다입니다.", en: "A soft baby panda wearing a slice of warm white bread." } },
  { id: 90, name: { ko: "카리바디스", en: "Caribadix" }, debutYear: 2017, species: { ko: "록 곰", en: "Rock bear" }, gender: { ko: "남성", en: "Male" }, image: "images/caribadix.png", traits: { ko: ["록 음악", "스트리트", "쿨함"], en: ["Rock music", "Street", "Cool"] }, bio: { ko: "스트리트 무대에서 멋진 록 퍼포먼스를 선보이는 캐릭터입니다.", en: "Cool street rock characters performing on stage." } }
];

const state = {
  lang: localStorage.getItem(LANG_KEY) || "ko",
  query: "",
  sort: "name",
  view: "all",
  page: 1,
  favorites: JSON.parse(localStorage.getItem(FAV_KEY) || "[]"),
  modalId: null,
  gachaId: null,
};

function t() {
  return I18N[state.lang];
}

function byId(id) {
  return CHARACTERS.find((c) => c.id === id);
}

function saveFav() {
  localStorage.setItem(FAV_KEY, JSON.stringify(state.favorites));
}

function isFav(id) {
  return state.favorites.includes(id);
}

function toggleFav(id) {
  if (isFav(id)) state.favorites = state.favorites.filter((x) => x !== id);
  else state.favorites.push(id);
  saveFav();
  render();
  if (state.modalId) fillModal(byId(state.modalId));
}

// 실제 저장된 이미지 파일(<img>)을 표시해 주는 렌더링 함수
function avatarSVG(c, size = 160) {
  return `<img src="${c.image}" alt="${c.name.en}" width="${size}" height="${size}" style="width: 85%; height: 85%; object-fit: contain; display: block; margin: auto;" onError="this.onerror=null; this.src='https://via.placeholder.com/150?text=Sanrio';" />`;
}

function filtered() {
  const q = state.query.trim().toLowerCase();
  let list = CHARACTERS.slice();
  if (state.view === "fav") list = list.filter((c) => isFav(c.id));
  if (q) {
    list = list.filter((c) => {
      const blob = [
        c.name.ko,
        c.name.en,
        c.debutYear,
        c.species.ko,
        c.species.en,
        c.gender.ko,
        c.gender.en,
        ...c.traits.ko,
        ...c.traits.en,
        c.bio.ko,
        c.bio.en,
      ]
        .join(" ")
        .toLowerCase();
      return blob.includes(q);
    });
  }
  list.sort((a, b) => {
    if (state.sort === "year-asc") return a.debutYear - b.debutYear || a.id - b.id;
    if (state.sort === "year-desc") return b.debutYear - a.debutYear || a.id - b.id;
    const key = state.lang === "ko" ? "ko" : "en";
    return a.name[key].localeCompare(b.name[key], key === "ko" ? "ko" : "en");
  });
  return list;
}

function applyI18n() {
  const i = t();
  document.documentElement.lang = state.lang;
  document.title = i.title;
  document.getElementById("site-title").textContent = i.title;
  document.getElementById("site-subtitle").textContent = i.subtitle;
  document.getElementById("search-input").placeholder = i.search;
  document.getElementById("sort-label-text").textContent = i.sortLabel;
  const select = document.getElementById("sort-select");
  select.options[0].text = i.sortName;
  select.options[1].text = i.sortOld;
  select.options[2].text = i.sortNew;
  document.getElementById("tab-all").textContent = i.all;
  document.getElementById("tab-fav").textContent = i.fav;
  document.getElementById("gacha-btn").textContent = i.gacha;
  document.getElementById("favorites-title").textContent = i.favTitle;
  document.getElementById("label-species").textContent = i.species;
  document.getElementById("label-gender").textContent = i.gender;
  document.getElementById("label-debut").textContent = i.debut;
  document.getElementById("label-traits").textContent = i.traits;
  document.getElementById("label-bio").textContent = i.bio;
  document.getElementById("gacha-kicker").textContent = i.gachaKicker;
  document.getElementById("gacha-open").textContent = i.detail;
  document.getElementById("gacha-close").textContent = i.close;
  document.getElementById("footer-text").textContent = i.footer;
  document.querySelectorAll("[data-lang-label]").forEach((el) => {
    el.classList.toggle("is-active", el.dataset.langLabel === state.lang);
  });
}

function renderFavoritesStrip() {
  const strip = document.getElementById("favorites-strip");
  const row = document.getElementById("favorites-row");
  if (!state.favorites.length) {
    strip.classList.add("hidden");
    row.innerHTML = "";
    return;
  }
  strip.classList.remove("hidden");
  row.innerHTML = state.favorites
    .map((id) => byId(id))
    .filter(Boolean)
    .map(
      (c) => `<button type="button" class="fav-chip" data-open="${c.id}">
        <span class="mini-avatar">${avatarSVG(c, 36)}</span>
        <span>${c.name[state.lang]}</span>
      </button>`
    )
    .join("");
}

function renderGallery() {
  const list = filtered();
  const totalPages = Math.max(1, Math.ceil(list.length / PAGE_SIZE));
  if (state.page > totalPages) state.page = totalPages;
  const start = (state.page - 1) * PAGE_SIZE;
  const pageItems = list.slice(start, start + PAGE_SIZE);
  const gallery = document.getElementById("gallery");
  const empty = document.getElementById("empty-state");
  const count = document.getElementById("result-count");
  count.textContent = t().count(list.length, CHARACTERS.length);
  if (!pageItems.length) {
    gallery.innerHTML = "";
    empty.classList.remove("hidden");
    empty.textContent = state.view === "fav" && !state.query ? t().emptyFav : t().empty;
  } else {
    empty.classList.add("hidden");
    gallery.innerHTML = pageItems
      .map(
        (c) => `<article class="card" data-open="${c.id}">
          <button type="button" class="card-fav ${isFav(c.id) ? "is-on" : ""}" data-fav="${c.id}" aria-label="favorite">${isFav(c.id) ? "♥" : "♡"}</button>
          <div class="card-avatar">${avatarSVG(c)}</div>
          <h3>${c.name[state.lang]}</h3>
          <p class="en-name">${state.lang === "ko" ? c.name.en : c.name.ko}</p>
          <span class="tag">${t().year(c.debutYear)}</span>
        </article>`
      )
      .join("");
  }
  const nav = document.getElementById("pagination");
  if (totalPages <= 1) {
    nav.innerHTML = "";
    return;
  }
  nav.innerHTML = Array.from({ length: totalPages }, (_, i) => {
    const p = i + 1;
    return `<button type="button" class="page-btn ${p === state.page ? "is-active" : ""}" data-page="${p}">${p}</button>`;
  }).join("");
}

function fillModal(c) {
  document.getElementById("modal-avatar").innerHTML = avatarSVG(c, 200);
  document.getElementById("modal-year").textContent = t().year(c.debutYear);
  document.getElementById("modal-name").textContent = c.name[state.lang];
  document.getElementById("modal-subname").textContent = state.lang === "ko" ? c.name.en : c.name.ko;
  document.getElementById("modal-species").textContent = c.species[state.lang];
  document.getElementById("modal-gender").textContent = c.gender[state.lang];
  document.getElementById("modal-debut").textContent = String(c.debutYear);
  document.getElementById("modal-traits").innerHTML = c.traits[state.lang].map((x) => `<li>${x}</li>`).join("");
  document.getElementById("modal-bio").textContent = c.bio[state.lang];
  const fav = document.getElementById("modal-fav");
  fav.classList.toggle("is-on", isFav(c.id));
  fav.textContent = isFav(c.id) ? "♥" : "♡";
  fav.dataset.fav = String(c.id);
}

function openModal(id) {
  const c = byId(id);
  if (!c) return;
  state.modalId = id;
  fillModal(c);
  document.getElementById("modal-overlay").classList.remove("hidden");
}

function closeModal() {
  state.modalId = null;
  document.getElementById("modal-overlay").classList.add("hidden");
}

function openGacha() {
  const c = CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
  state.gachaId = c.id;
  document.getElementById("gacha-avatar").innerHTML = avatarSVG(c, 180);
  document.getElementById("gacha-name").textContent = c.name[state.lang];
  document.getElementById("gacha-year").textContent = t().year(c.debutYear);
  document.getElementById("gacha-overlay").classList.remove("hidden");
}

function closeGacha() {
  document.getElementById("gacha-overlay").classList.add("hidden");
}

function render() {
  applyI18n();
  renderFavoritesStrip();
  renderGallery();
}

document.getElementById("lang-toggle").addEventListener("click", () => {
  state.lang = state.lang === "ko" ? "en" : "ko";
  localStorage.setItem(LANG_KEY, state.lang);
  render();
  if (state.modalId) fillModal(byId(state.modalId));
});

document.getElementById("search-input").addEventListener("input", (e) => {
  state.query = e.target.value;
  state.page = 1;
  renderGallery();
});

document.getElementById("sort-select").addEventListener("change", (e) => {
  state.sort = e.target.value;
  state.page = 1;
  renderGallery();
});

document.querySelectorAll(".tab").forEach((btn) => {
  btn.addEventListener("click", () => {
    state.view = btn.dataset.view;
    state.page = 1;
    document.querySelectorAll(".tab").forEach((b) => b.classList.toggle("is-active", b === btn));
    renderGallery();
  });
});

document.getElementById("gacha-btn").addEventListener("click", openGacha);
document.getElementById("gacha-close").addEventListener("click", closeGacha);
document.getElementById("gacha-open").addEventListener("click", () => {
  const id = state.gachaId;
  closeGacha();
  openModal(id);
});
document.getElementById("modal-close").addEventListener("click", closeModal);
document.getElementById("modal-overlay").addEventListener("click", (e) => {
  if (e.target.id === "modal-overlay") closeModal();
});
document.getElementById("gacha-overlay").addEventListener("click", (e) => {
  if (e.target.id === "gacha-overlay") closeGacha();
});
document.getElementById("modal-fav").addEventListener("click", (e) => {
  toggleFav(Number(e.currentTarget.dataset.fav));
});

document.addEventListener("click", (e) => {
  const favBtn = e.target.closest("[data-fav]");
  if (favBtn && favBtn.id !== "modal-fav") {
    e.stopPropagation();
    toggleFav(Number(favBtn.dataset.fav));
    return;
  }
  const openEl = e.target.closest("[data-open]");
  if (openEl) openModal(Number(openEl.dataset.open));
  const pageBtn = e.target.closest("[data-page]");
  if (pageBtn) {
    state.page = Number(pageBtn.dataset.page);
    renderGallery();
    document.getElementById("gallery").scrollIntoView({ behavior: "smooth", block: "start" });
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
    closeGacha();
  }
});

render();