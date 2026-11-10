/* ===== 제4회 TU 게임챌린지 2026 — 데이터 & 렌더 ===== */

/* ---------- 데이터 ---------- */
const TIMELINE = [
  { phase:'pre',  date:'2026.09.07(월) ~ 09.10(목) 17:00', title:'작품 접수', desc:'개인 클라우드 다운로드 링크를 접수 사이트(MS Forms)에 제출' },
  { phase:'main', date:'2026.09.14(월)', title:'예선 결과 발표', desc:'제출 작품 심사 후 본선 진출작 발표' },
  { phase:'main', date:'2026.09.18(금)', title:'본선 발표회', desc:'예선 수상자 프레젠테이션 후 심사 결과 발표' },
  { phase:'main', date:'2026.09.21(월)~23(수) · 10.12(월)~16(금)', title:'전문가 자문 (1·2차)', desc:'게임업계 전문가의 작품 자문 및 멘토링' },
  { phase:'post', date:'2026.10.23(금) 10:00~12:00', title:'시상식 및 성과발표회', desc:'대학본관 106호 — 트랙별 수상작 시상 및 성과 공유' },
  { phase:'post', date:'2026.10.23(금) ~ 10.28(수)', title:'수상작 교내 전시', desc:'코팅워크스페이스에서 수상작 전시' },
  { phase:'future', date:'2026.11.19(목) ~ 22(일)', title:'G-STAR 2026 전시', desc:'부산 벡스코 동명대학교 부스에서 수상작 특별 전시', tag:'향후' },
];

const TRACKS = [
  { num:'TRACK 1-A', title:'게임시스템 부문', who:'동명대 게임학부 재학생', desc:'PC·모바일·VR 등 플레이 가능한 게임 콘텐츠 시스템', prize:'250만원', fund:'RISE 사업비' },
  { num:'TRACK 1-B', title:'게임그래픽 콘텐츠 부문', who:'동명대 게임학부 재학생', desc:'게임 캐릭터·배경 디자인 및 애니메이션 등 그래픽 리소스', prize:'220만원', fund:'RISE 사업비' },
  { num:'TRACK 2', title:'게임시스템 부문 (IEEE)', who:'게임학부 외 부울경 대학생', desc:'IEEE 부산섹션 공동 트랙 — 플레이 가능한 게임 콘텐츠', prize:'200만원', fund:'IEEE 부산섹션' },
];

const WINNERS = {
  '1-A': {
    label:'Track 1-A · 게임시스템 부문 (14작품)',
    items:[
      { medal:'대상', title:'롤렛전사 김전사', team:'이효근·조성민·이성빈·서한결·박시은·양지훈',
        intent:'대학 팀 프로젝트에서 만나기 어려운 "판타지 로그라이트" 장르에 직접 도전한 작품. "그렇다면, 내가 직접 한번 만들어 보자"는 단순하지만 도전적인 생각에서 출발했습니다.' },
      { medal:'최우수상', title:'성검을 얻었는데 몸이 약하다', team:'김주안·조예린·조하늘·이정우·김희경·김여준',
        intent:'강력한 무기를 가지고도 제한된 횟수만큼만 사용할 수 있다면? 주변 환경과 몬스터의 행동을 관찰·판단해 다양한 기믹을 연쇄적으로 활용하는, 창의적 문제 해결의 성취감을 지향했습니다.' },
      { medal:'우수상', title:'호접지몽', team:'박서진·박성영',
        intent:'비극적 운명 속에서 무너진 "비운의 왕세자" 서사를 K-다크 판타지 액션으로 구현. 오염된 무의식 세계를 탐험하며 결핍된 기억을 복원하는 서사적 카타르시스를 담았습니다.' },
      { medal:'우수상', title:'GetYaDice', team:'김도훈·강다현', intent:'동아리 게임잼에서 출발한 주사위 기반 액션 게임.' },
      { medal:'우수상', title:'리치앤플라이', team:'김겸',
        intent:'탄막을 피하는 동안 다음 마법을 선택한다 — 슈팅의 손맛과 마작 패 조합의 판단의 재미를 함께 제공하고자 했습니다.' },
      { medal:'우수상', title:'Tolv', team:'이주현',
        intent:'모든 공격을 주사위로 판정하는 턴제 RPG. 데미지 계산이 쉬워 답이 정해지는 기존 턴제 게임의 문제를 해결하고자 했습니다.' },
      { medal:'장려상', title:'냥냥대난투', team:'김겸·유현수·장하늘은빈',
        intent:'"적이 쳐들어오고, 고양이가 막는다"는 단순한 구도 위에, 반복해도 질리지 않는 전략적 깊이를 더한 타워 디펜스.' },
      { medal:'장려상', title:'ALCOHOL FREE', team:'장하늘은빈·유현수·최정윤',
        intent:'플레이어가 바텐더처럼 직접 잔을 고르고 재료를 따르고 흔들어 칵테일을 완성하는, "만드는 행위"를 중심에 둔 비주얼 노벨.' },
      { medal:'장려상', title:'쿡타워', team:'김주안',
        intent:'100층짜리 미식 타워에서 끝없이 이어지는 주문 — 손님의 돌려 말하는 주문을 해석하며 성장하는 요리 게임.' },
      { medal:'장려상', title:'Grave shot', team:'조예린',
        intent:'적을 처치해 얻은 자원을 공격 강화와 방어 시설 유지에 활용하는, 슈팅의 타격감과 전략적 자원 관리를 결합한 작품.' },
      { medal:'장려상', title:'Chipmunk TD', team:'이형욱·김준현',
        intent:'무작위 소환 시스템에 성장·조합 요소를 결합해, 매번 달라지는 상황 속 자신만의 전략을 구성하는 타워 디펜스.' },
      { medal:'장려상', title:'내 정원에 좀비가 찾아왔다', team:'양하윤·문나영·이신영·이예지',
        intent:'식물의 배치에 따라 적의 이동 경로가 달라지는 "동적 디펜스". 경로 유도와 성장 자원 운용을 결합한 전략적 재미를 담았습니다.' },
      { medal:'장려상', title:'KeyStone', team:'조예린',
        intent:'생태계에 큰 영향을 미치는 "핵심종" 개념을 게임으로 전달 — 생태적 상호작용과 균형의 중요성을 쉽고 재미있게.' },
      { medal:'장려상', title:'광산 타워 디펜스', team:'조예린·김나영',
        intent:'침략자가 방어자가 되는 역전된 구도 — 제한된 공간에 타워를 전략적으로 배치해 적의 공격에 대응하는 재미.' },
    ]
  },
  '1-B': {
    label:'Track 1-B · 게임그래픽 콘텐츠 부문 (10작품)',
    items:[
      { medal:'대상', title:'구름 위의 정원', team:'최지원·김희경',
        intent:'식물학자 주인공의 직업성과 "탐사와 기록"의 경험을 그래픽과 함께 연결. 특수 카메라로 길과 단서를 발견하고 기록·인화 퍼즐을 해결하는 관찰과 발견의 재미.' },
      { medal:'최우수상', title:'Among The Stars', team:'플레소프스키흐 예카테리나',
        intent:'매력적인 SF 세계관을 바탕으로 다양한 캐릭터의 갈등과 선택을 체험하는 3D 턴제 오픈월드 RPG. 캐릭터 수집·전투의 재미를 극대화했습니다.' },
      { medal:'우수상', title:'뉴로포리아: 환상통증치료소', team:'김겸·장하늘은빈·김나영',
        intent:'차갑고 두려운 병원·의료 기구를 과일·젤리·시럽 등 달콤한 소재와 결합해 재해석. 화사하지만 상실과 희생이 공존하는 이중적 분위기를 담았습니다.' },
      { medal:'우수상', title:'케프리', team:'박찬비',
        intent:'곤충의 독특한 생태와 특징을 전략 게임에 접목해, 플레이어가 다양한 곤충 종의 역할과 특성을 자연스럽게 이해하도록 기획.' },
      { medal:'우수상', title:'스카이 스텝', team:'강다현',
        intent:'플랫포머 게임의 물리 연산을 최대한 활용하는 퍼즐 시스템에, 따뜻한 스토리라인을 결합해 재미를 극대화.' },
      { medal:'우수상', title:'낙인의 종막 / Stigmata Finale', team:'이재훈',
        intent:'신앙과 믿음의 자유를 존중하면서도, 인간의 운명을 결정하는 것은 스스로의 선택과 의지라는 가치를 전달하는 다크 판타지.' },
      { medal:'장려상', title:'레벨리어스', team:'강다현',
        intent:'리듬 게임에 스토리가 있으면 좋겠다는 생각에서 출발. 인간의 심리 상태를 의인화한 스토리라인을 제작했습니다.' },
      { medal:'장려상', title:'Milky Way', team:'김서현',
        intent:'엘프·드래곤·요정이 등장하는 정통 판타지극. 플레이어가 스스로 설정을 만들어 게임 세계관에 녹아들도록 여지를 남긴 작품.' },
      { medal:'장려상', title:'After EDEN', team:'차민서',
        intent:'환경에 대한 메시지를 서브컬처풍 아트 스타일로 친근하게 전달. 식생을 수집·육성하며 자연의 소중함을 자연스럽게 느끼도록.' },
      { medal:'장려상', title:'온고지신', team:'조예린',
        intent:'"옛것을 익혀 새것을 안다"는 의미를 게임으로 재해석. 한국 전통문화와 역사 속 위인을 현대적 액션 디펜스로 결합했습니다.' },
    ]
  },
  '2': {
    label:'Track 2 · 게임시스템 부문 (IEEE 부산섹션 공동 트랙, 4작품)',
    items:[
      { medal:'대상', title:'렛루프 (Rat Loop)', team:'김도훈·권령우·조근호',
        intent:'쥐가 치즈를 찾아가는 여정을 퍼즐 게임으로. 자신의 행동을 기록하고 이를 따라 하는 동료 쥐를 소환해, 혼자서는 풀 수 없는 문제를 해결하는 재미를 구현.' },
      { medal:'최우수상', title:'Codexia', team:'황지수·김민재',
        intent:'덱빌딩 로그라이크에 확률을 예측하고 위험을 감수하는 재미를 결합. 주어진 확률을 직접 판단·선택해 전투 결과에 영향을 주도록 설계했습니다.' },
      { medal:'우수상', title:'Marlin', team:'백민승',
        intent:'핵심 기능 하나를 정하고 이를 최대한 살리는 방향으로 기획 — 한정된 규모에서도 완성도 있는 경험을 목표로 제작.' },
      { medal:'우수상', title:'Ever Check', team:'유현수',
        intent:'체스 기물마다 다른 이동 규칙과 역할을 활용해, 구름에 가려진 지역을 개척하며 끝없이 이어지는 공세에 맞서는 로그라이크 방어 전략 게임.' },
    ]
  }
};

/* 갤러리 이미지 목록 */
/* 사진은 페이지 전체에서 중복 없이 한 곳에만 사용 */
const GAL = {
  ceremony:{ label:'시상식', dir:'assets/img/ceremony/', files:['ceremony-2','ceremony-1','ceremony-5','ceremony-7','ceremony-4'] },
  award:{ label:'수상 장면', dir:'assets/img/award/', files:['award-9','award-5','award-20','award-3','award-6','award-8','award-16','award-18','award-23','award-26','award-1','award-15'] },
  venue:{ label:'발표 · 전시 현장', dir:'', files:[
      'assets/img/venue/venue-2','assets/img/venue/venue-3','assets/img/venue/venue-4',
      'assets/img/venue/venue-7','assets/img/venue/venue-9','assets/img/venue/venue-10','assets/img/venue/venue-11',
      'assets/img/venue/venue-1','assets/img/venue/venue-5','assets/img/exhibit/exhibit-1'] },
};

/* 첫 화면 하이라이트(정장·시상식 장면) — 서로 다른 4장 (ceremony-3·8은 11·2와 중복이라 제외) */
const HIGHLIGHT = ['assets/img/ceremony/ceremony-11','assets/img/ceremony/ceremony-6',
  'assets/img/ceremony/ceremony-9','assets/img/ceremony/ceremony-10'];

/* G-STAR 향후 전시 섹션 비주얼 — 부스 디자인 시안 + 전시 현장 */
const FUTURE_IMGS = ['assets/img/booth-1','assets/img/booth-2',
  'assets/img/exhibit/exhibit-3','assets/img/exhibit/exhibit-4'];

/* 수상작 작품 스크린샷 (PDF 결과보고서에서 추출, 수상 순서와 일치) */
const WORK_SLUGS = {
  '1-A':['1a-01-rulletwarrior','1a-02-weakbody','1a-03-hojeob','1a-04-getyadice','1a-05-richnfly','1a-06-tolv',
         '1a-07-nyangnyang','1a-08-alcoholfree','1a-09-cooktower','1a-10-graveshot','1a-11-chipmunktd','1a-12-gardenzombie',
         '1a-13-keystone','1a-14-gwangsantd'],
  '1-B':['1b-01-cloudgarden','1b-02-amongstars','1b-03-neuroporia','1b-04-khepri','1b-05-skystep','1b-06-stigmata',
         '1b-07-rebellious','1b-08-milkyway','1b-09-aftereden','1b-10-ongojisin'],
  '2':['2-01-ratloop','2-02-codexia','2-03-marlin','2-04-evercheck'],
};

/* ---------- 렌더 ---------- */
const $ = (s,el=document)=>el.querySelector(s);
const el = (t,c,h)=>{const e=document.createElement(t);if(c)e.className=c;if(h!=null)e.innerHTML=h;return e;};

/* 타임라인 */
const tl=$('#timeline-list');
TIMELINE.forEach(t=>{
  const item=el('div',`tl-item ${t.phase}`);
  item.innerHTML=`<div class="tl-date">${t.date}</div>
    <div class="tl-card"><h4>${t.title}${t.tag?`<span class="tl-tag">${t.tag}</span>`:''}</h4><p>${t.desc}</p></div>`;
  tl.appendChild(item);
});

/* 트랙 */
const tr=$('#tracks-list');
TRACKS.forEach(t=>{
  const c=el('div','track reveal');
  c.innerHTML=`<div class="tnum">${t.num}</div><h3>${t.title}</h3><div class="who">${t.who}</div>
    <div class="desc">${t.desc}</div>
    <div class="prize"><b class="grad-text">${t.prize}</b><span>${t.fund}</span></div>`;
  tr.appendChild(c);
});

/* 수상작 탭 */
const tabsEl=$('#winner-tabs'), wrap=$('#winners-wrap');
const trackKeys=['1-A','1-B','2']; // 명시적 순서 (객체 키 '2'는 정수 취급되어 정렬이 바뀌므로)
const tabNames={'1-A':'Track 1-A','1-B':'Track 1-B','2':'Track 2 (IEEE)'};
trackKeys.forEach((k,i)=>{
  const b=el('button',`tab${i===0?' active':''}`,tabNames[k]);
  b.onclick=()=>{document.querySelectorAll('#winner-tabs .tab').forEach(x=>x.classList.remove('active'));
    b.classList.add('active');
    document.querySelectorAll('#winners-wrap .trackgroup').forEach(g=>g.classList.remove('show'));
    $('#g-'+k).classList.add('show');};
  tabsEl.appendChild(b);
});
trackKeys.forEach((k,i)=>{
  const g=el('div',`trackgroup${i===0?' show':''}`);g.id='g-'+k;
  const data=WINNERS[k];
  g.appendChild(el('div','group-label',data.label));
  const grid=el('div','winners');
  data.items.forEach((w,wi)=>{
    const feat = (w.medal==='대상'||w.medal==='최우수상');
    const card=el('div',`wcard${feat?' feat':''}`);
    const medalHtml=`<span class="medal m-${w.medal}">${w.medal==='대상'?'🏆 ':w.medal==='최우수상'?'🥈 ':''}${w.medal}</span>`;
    const slug=WORK_SLUGS[k][wi];
    const shot=`assets/img/works/${slug}.jpg`;
    const shotHtml=`<a class="wshot"><img loading="lazy" src="${shot}" alt="${w.title} 작품 이미지" data-full="${shot}"></a>`;
    const bodyHtml=`<div class="wbody">${medalHtml}<h4>${w.title}</h4><div class="team">${w.team}</div>
        ${w.intent?`<div class="intent">${w.intent}</div>`:''}</div>`;
    card.innerHTML=shotHtml+bodyHtml;
    grid.appendChild(card);
  });
  g.appendChild(grid);
  wrap.appendChild(g);
});

/* 갤러리 */
function imgTag(src,alt){const i=el('img');i.loading='lazy';i.src=src+'.jpg';i.alt=alt;i.dataset.full=src+'.jpg';return i;}
// 하이라이트 스트립
const hs=$('#highlightStrip');
HIGHLIGHT.forEach((f,i)=>hs.appendChild(imgTag(f,`시상식 현장 ${i+1}`)));
// future visual
const fv=$('#future-visual');
FUTURE_IMGS.forEach((f,i)=>fv.appendChild(imgTag(f,`G-STAR 전시 관련 ${i+1}`)));

// 갤러리 탭
const galTabs=$('#gal-tabs'), galWrap=$('#gallery-wrap');
Object.entries(GAL).forEach(([k,g],i)=>{
  const b=el('button',`tab${i===0?' active':''}`,g.label);
  b.onclick=()=>{document.querySelectorAll('#gal-tabs .tab').forEach(x=>x.classList.remove('active'));
    b.classList.add('active');
    document.querySelectorAll('#gallery-wrap .galgroup').forEach(x=>x.classList.remove('show'));
    $('#gal-'+k).classList.add('show');};
  galTabs.appendChild(b);
  const group=el('div',`galgroup${i===0?' show':''}`);group.id='gal-'+k;
  const m=el('div','masonry');
  g.files.forEach((f,idx)=>{
    const src=g.dir?g.dir+f:f;
    m.appendChild(imgTag(src,`${g.label} ${idx+1}`));
  });
  group.appendChild(m);
  galWrap.appendChild(group);
});

/* ---------- 라이트박스 ---------- */
const lb=$('#lightbox'), lbImg=$('#lbImg');
let galleryList=[], curIdx=0;
document.addEventListener('click',e=>{
  if(e.target.tagName==='IMG'&&e.target.dataset.full){
    const scope=e.target.closest('.masonry, .future-visual');
    galleryList=scope?[...scope.querySelectorAll('img')].map(i=>i.dataset.full):[e.target.dataset.full];
    curIdx=galleryList.indexOf(e.target.dataset.full);
    show();
    lb.classList.add('open');
  }
});
function show(){lbImg.src=galleryList[curIdx];}
$('#lbClose').onclick=()=>lb.classList.remove('open');
$('#lbPrev').onclick=e=>{e.stopPropagation();curIdx=(curIdx-1+galleryList.length)%galleryList.length;show();};
$('#lbNext').onclick=e=>{e.stopPropagation();curIdx=(curIdx+1)%galleryList.length;show();};
lb.onclick=e=>{if(e.target===lb)lb.classList.remove('open');};
document.addEventListener('keydown',e=>{
  if(!lb.classList.contains('open'))return;
  if(e.key==='Escape')lb.classList.remove('open');
  if(e.key==='ArrowLeft')$('#lbPrev').click();
  if(e.key==='ArrowRight')$('#lbNext').click();
});

/* ---------- 네비 / 스크롤 효과 ---------- */
const nav=$('#nav');
addEventListener('scroll',()=>nav.classList.toggle('scrolled',scrollY>30));
$('#navToggle').onclick=()=>$('#navLinks').classList.toggle('open');
document.querySelectorAll('#navLinks a').forEach(a=>a.onclick=()=>$('#navLinks').classList.remove('open'));

/* reveal on scroll */
const io=new IntersectionObserver(es=>es.forEach(en=>{if(en.isIntersecting){en.target.classList.add('in');io.unobserve(en.target);}}),{threshold:.12});
document.querySelectorAll('.reveal, .about-card, .track, .stat').forEach(e=>{e.classList.add('reveal');io.observe(e);});
