// Kakao 지도 API 로드가 완료된 후 콜백 함수를 실행합니다.
// HTML에서 async 속성을 제거하거나 로드 관련 설정을 확인하세요.
kakao.maps.load(function() {
    // ==============================
    // 1. Home 지도 (map1) 초기화
    // ==============================
    var mapContainer1 = document.getElementById('map1'), 
        mapOption1 = { 
            // 실제 좌표로 변경해주세요
            center: new kakao.maps.LatLng(37.566826, 126.978656), // 서울 시청 임시 좌표
            level: 3 
        };

    var map1 = new kakao.maps.Map(mapContainer1, mapOption1); 

    var marker1 = new kakao.maps.Marker({ 
        position: map1.getCenter() 
    }); 
    marker1.setMap(map1);

    // 마커 클릭 이벤트 리스너는 필요에 따라 추가
    // ...

    // ==============================
    // 2. School 지도 (map2) 초기화
    // ==============================
    var mapContainer2 = document.getElementById('map2'), 
        mapOption2 = { 
            // 학교 실제 좌표로 변경해주세요
            center: new kakao.maps.LatLng(37.2911, 127.0084), 
            level: 3 
        };

    var map2 = new kakao.maps.Map(mapContainer2, mapOption2);

    var marker2 = new kakao.maps.Marker({ 
        position: map2.getCenter() 
    }); 
    marker2.setMap(map2);
});