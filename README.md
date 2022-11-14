# mogaco.next.ts

- 모가코는 웹 화상 학습플래너 사이트로서 p2p 방식으로 최대 10인까지 스트림미디어를 주고 받을 수 있습니다. <br/>
- 또한 오늘 했던 일들을 플래터의 캘린더 기능을 통해 메모, 목표 설정 및 학습량 등을 모두 체크할 수 있습니다. <br/>
- 기획 디자인 퍼블리싱 서버 인프라 a~z까지 혼자서 구현중인 프로젝트 <br/>
  <a href="https://mogaco.vercel.app/">개발현황미리보기</a>
```
TEST ID : 'test'
TEST PW : 'test'
```

## 개발 진행 이슈

#### next v13 (10.29)

- next 13버전 발표, SSR을 위한 fetch 사용법 변화, 주된 기능 변경 사항 없으므로 next 12버전으로 완료 후 마이그레이션 예정 <br/>
- 팀 공유 달력, 달력 기간 설정 기능 목록 추가 1차 배포 완료 시 향후 기능 추가 예정

## 개발 진행 현황

#### 1. 메인화면, 마이플래너페이지 레이아웃 완료 (10.25)

#### 2. 룸리스트 페이지 레이아웃 완료 (10.26)

#### 3. 룸리스트 페이지 디자인 리뉴얼 하여 재레이웃 완료 (10.27)

#### 4. 마이플래너 페이지 달력 기능 구현완료 (10.28)

#### 5. 로그인,회원가입 페이지 레이아웃 구현완료 (10.30)

#### 6. 다이렉트 메시지 페이지 레이아웃 구현완료 (10.31)

#### 7. 회원 정보 수정 모달 레이아웃 구현 (11.1)

#### 8. 시놀로지 나스 외부 접속 DNS 셋팅 및 시놀로지 도커 셋팅 (11.2)

#### 9. DBMS 설계 및 룸 페이지 사이드 레이아웃 구현 (11.4)

#### 10. 비디오 룸 페이지 채널 목록 & 비디오목록 레이아웃, 타이머 기능 구현 (11.7)

#### 11. 비디오 룸 페이지 신규 채팅 추가 시 스크롤 이벤트 구현 (11.7)

#### 12. 비디오 룸 풀 페이지 모달 레이아웃 구현완료 - 반응형 퍼블리싱 시작 (11.8)

#### 13. 공통 컴포넌트 개발시작, 필요 소켓 메시지 정리 (11.9)

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

#### 14. Mock API를 위한 nextJS API Route 작성, 유닛 테스트를 위한 라이브러리 설치 (11.10)
#### 15. 각 페이지 HOC 구현 및 로그인, 로그아웃 기능 구현 (11.14)
```
TEST ID : 'test'
TEST PW : 'test'
```
#### 16. 테스트 코드 확인 완료 TDD 코드 작성 시작 (11.14)

