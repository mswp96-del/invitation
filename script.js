/* =========================================================
   환갑잔치 초대장 - 설정
   아래 값만 바꾸면 초대장 내용이 반영됩니다.
   ========================================================= */
const CONFIG = {
  // 장소
  venueName: '하루일식',
  address: '강원특별자치도 춘천시 후석로 12 풍강빌딩 5층',

  // 지도 좌표 (카카오맵 기준 위도/경도) — 하루일식(춘천 후석로 12)
  lat: 37.8561361,
  lng: 127.7395058,

  // 참석 여부(RSVP) 연락처
  rsvpPhone: '010-2603-9217',
  // 문자 버튼을 누르면 자동으로 채워지는 내용
  rsvpMessage: '[원정숙 님 환갑] 참석 여부를 회신드립니다.\n· 성함 : \n· 참석 인원 : 명',
};

/* =========================================================
   1) 안내 정보 채우기
   ========================================================= */
(function fillInfo() {
  const addr = document.getElementById('venue-address');
  if (addr) addr.textContent = CONFIG.address;

  // 카카오맵 길찾기(장소) 링크
  const link = document.getElementById('map-link');
  if (link) {
    link.href = 'https://map.kakao.com/link/to/' +
      encodeURIComponent(CONFIG.venueName) + ',' + CONFIG.lat + ',' + CONFIG.lng;
  }

  // 전화 / 참석 여부 문자 링크
  const tel = document.getElementById('tel-link');
  if (tel) tel.href = 'tel:' + CONFIG.rsvpPhone;

  const sms = document.getElementById('sms-link');
  if (sms) {
    // iOS/Android 모두에서 본문이 채워지도록 body 파라미터 사용
    sms.href = 'sms:' + CONFIG.rsvpPhone + '?body=' + encodeURIComponent(CONFIG.rsvpMessage);
  }
})();
