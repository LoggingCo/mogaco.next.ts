# mogaco.next.ts

- 모가코는 웹 화상 학습플래너 사이트로서 p2p 방식으로 최대 10인까지 스트림미디어를 주고 받을 수 있습니다. <br/>
- 또한 오늘 했던 일들을 플래터의 캘린더 기능을 통해 메모, 목표 설정 및 학습량 등을 모두 체크할 수 있습니다. <br/>
- 기획 디자인 퍼블리싱 서버 인프라 a~z까지 혼자서 구현중인 프로젝트 <br/>
- 배포링크 <a href="https://mogaco.vercel.app/">개발현황미리보기</a>

```
TEST ID : 'test'
TEST PW : 'test'
```

## 개발 순서

#### 1. 페이지 퍼블리싱 (o)

#### 2. 온프레미스 docker 셋팅 api 서버 및 소켓 서버 준비 (o)

#### 3. mock data, msw를 활용 api 목킹, hoc (o)

#### 4. storybook 적용 및 msw, storybook 연동 (o)

#### 5. 유닛 테스트 단위 페이지 랜더링 확인 및 유틸 함수 test code 작성 (...ing)

#### 6. api목킹을 활용한 통합테스트 TDD testcode 작성 (...ing)

#### 7. focs 해결, varcel 유료계정, 도메인 구매, https , mock API기반 CI 준비

#### 8. Circle CI를 통한 CI 적용

#### 9. test 코드를 기반으로 한 mockAPI 연결

#### 10. 백엔드 api 및 소켓 메시지 개발 (...ing)

#### 11. 백엔드 api 서버 및 소켓 서버 온프레미스 환경에서 https 배포

#### 12. 소켓 서버 기반 https 환경에서 stream peerconnection

#### 13. 소켓 채팅 및 실제 api 서버와 프론트엔드 http message 교환

#### 14. cypress를 활용한 e2e 테스트 작성

#### 15. 센트리를 사용한 프론트엔드 에러 로깅, sitemap.xml과 robots.txt를 활용한 SEO 

## 개발 진행 이슈

#### next v13 (10.29)

- next 13버전 발표, SSR을 위한 fetch 사용법 변화, 주된 기능 변경 사항 없으므로 next 12버전으로 완료 후 마이그레이션 예정 <br/>

#### 추가기능 관련 (11.03)

- 팀 공유 달력, 달력 기간 설정 기능 목록 추가 1차 배포 완료 시 향후 기능 추가 예정

#### 반응형 관련 이슈 (11.10)

- 비디오를 공유해야하는 사이트 특성상, 반응형은 완전히 개로운 UI를 필요로함 따라서 웹 페이지 개발 후 모바일 페이지 개발 예정
- 대표적으로 구글미트와 같은 타 비디오 공유 애플리케이션 역시 모바일 페이지 혹은 앱이 따로 있는 것을 확인하였음


## 개발 진행 현황

#### 1. 메인화면, 마이플래너페이지 레이아웃 완료 

#### 2. 룸리스트 페이지 레이아웃 완료

#### 3. 룸리스트 페이지 디자인 리뉴얼 하여 재레이웃 완료

#### 4. 마이플래너 페이지 달력 기능 구현완료 

#### 5. 로그인,회원가입 페이지 레이아웃 구현완료 

#### 6. 다이렉트 메시지 페이지 레이아웃 구현완료

#### 7. 회원 정보 수정 모달 레이아웃 구현

#### 8. 시놀로지 나스 외부 접속 DNS 셋팅 및 시놀로지 도커 셋팅

#### 9. DBMS 설계 및 룸 페이지 사이드 레이아웃 구현

#### 10. 비디오 룸 페이지 채널 목록 & 비디오목록 레이아웃, 타이머 기능 구현

#### 11. 비디오 룸 페이지 신규 채팅 추가 시 스크롤 이벤트 구현

#### 12. 비디오 룸 풀 페이지 모달 레이아웃 구현완료 - 반응형 퍼블리싱 시작 

#### 13. 공통 컴포넌트 개발시작, 필요 소켓 메시지 정리

```
소켓 메시지
 emit
 on

[다이렉트 메시지]

 - 입장 -
  io.emit("user-connected" roomId, userName, userLevel, socketId)
  io.on("connect", roomId, userName, userLevel, socketId)

 - 채팅 -
 io.emit("user-direct", socketId, userName, messsage, useLevel)
 io.on ("direct, socketId, useName, message, useLevel)


[화상 채팅]

 - 입장 -
 io.emit("user-connected", roomId, userName, 고유id, userLevel, socketId, vedio)
  -- 입장했을 때 내가 누군지 방안에 사람들한테 알림

 io.emit("connected-asnwer", userName, userLevel, socketId, video)
  -- user-connected를 받았을 시 내 비디오 상태의 유무와 내 정보를 보냄

 io.on("connect", 고유id, userName, userLevel, socketId, video)
  -- 입장 후 현재 방안에 있는 상대방의 정보를 받아오고 video가 true라면 비디오를 요청함


 - 화상 캠 -
 io.emit("user-video", roomId, 고유id, description)
  -- 내가 직접 화면을 켰을 때 방안의 모든 사용자에게 내 화면을 보냄

 io.emit("user-answer", 고유id, description)
  -- 신규로 방에 들어온 사람이 있다면 그 사람에게만 내 화면을 보냄

 io.on("video", 고유id, description)
  -- 내가 상대방의 캠을 받았을 떄

 - 화질 조정 -
 io.emit("video-call", targetSocketId, videoQuality, 고유id) -- 최적화를 위한 화질조정

 - peer 서버 영상 교환-
 io.emit("user-candidate", 고유id, candidate)
 io.on("candidate", 고유id, candidate)

 - 화상 캠채팅 -
 io.emit("user-room", roomId, targetSocketId, userName, messsage, useLevel)
 io.on("room", roomId, targetSocketId, useName, message, useLevel)

```

#### 14. api 목킹을 위한 msw 및 , 유닛 테스트를 위한 라이브러리 설치 (11.10)

#### 15. 각 페이지 HOC 구현 및 로그인, 로그아웃 기능 구현 (11.14)

```
TEST ID : 'test'
TEST PW : 'test'
```

#### 16. 유닛 test code 작성 완료, msw 통합 테스를 통한 TDD 개발 시작
#### 17. msw mocking api 작성 완료 및 로그인 테스트 구현 
#### 18. roomlist 폰트 및 style layout 수정
#### 18. TDD 개발 및 통합 테스트 구현 시작 
#### 19. 시놀로지 나스 백엔드 API 개발 시작


