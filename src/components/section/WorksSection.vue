<template>
  <section class="works">
    <h2>Work Experiences</h2>

    <div>
      <h5>
        Hobor Intelligence, <span class="font__gray">2021. 05. 10. ~ing</span>
      </h5>
    </div>

    <div>
      <h5>
        Gyeongsang National University,
        <span class="font__gray">2015. 02. ~ 2021. 08.</span>
      </h5>
      <div class="works__item">
        <div class="works__container">
          <img src="@/assets/thumbnail/gardening.jpeg" alt="gardening" />
        </div>

        <div class="works__description">
          <div>
            <label>Title</label>
            <p>아두이노를 이용한 빌트인 홈 가드닝 키트</p>
          </div>

          <div>
            <label>Description</label>
            <p>
              스마트 홈 가드닝 키트 개발의 조장으로 참여하여 소프트웨어 개발을
              맡았습니다. arduino의 WIFI 모듈을 사용, firebase, python과
              연동하여 온,습도, 토양 수분, 조도 등의 기상 데이터를 수집하고 이에
              따라 자동 관수를 실시하도록 하였습니다. 하드웨어인 화분 디자인까지
              조원들과 직접 하여 의미가 깊었습니다.
            </p>
          </div>

          <div>
            <label>Github</label>
            <p>
              <a
                href="https://github.com/mahns1201/SmartHomeGardening"
                target="_blank"
                ><span>https://github.com/mahns1201/SmartHomeGardening</span></a
              >
            </p>
          </div>

          <div>
            <label>Awards</label>
            <p>교내 캡스톤 디자인 대회 금상 (총장상)</p>
          </div>
        </div>
      </div>

      <hr class="works-hr" />

      <div class="works__item">
        <div class="works__container">
          <img src="@/assets/thumbnail/ponding.jpeg" alt="ponding" />
        </div>

        <div class="works__description">
          <div>
            <label>Title</label>
            <p>머신러닝 기법을 이용한 논 담수심 추정 시험 연구</p>
          </div>

          <div>
            <label>Description</label>
            <p>
              관개배수시스템공학연구실 소속으로 담수심 추정 시험 연구를
              실시하였습니다. 경남 사천시 소재에 기상 관측소를 설치하여 2년간
              데이터를 수집하였습니다. 이후 선형회귀, 비선형회귀 (2차형) 그리고
              랜덤포레스트, SVM 등을 활용하여 기상 인자가 담수심 변화량에 미치는
              영향에 대해 연구하였습니다. 1저자로 참여한데다가 상까지 받아 더욱
              의미가 깊었습니다.
            </p>
          </div>

          <div>
            <label>Github</label>
            <p>
              <a
                href="https://github.com/mahns1201/ponding_depth_prediction"
                target="_blank"
                ><span
                  >https://github.com/mahns1201/ponding_depth_prediction</span
                ></a
              >
            </p>
          </div>

          <div>
            <label>Awards</label>
            <p>한국농공학회 학술발표대회 우수논문발표상</p>
          </div>
        </div>
      </div>
    </div>

    <div>
      <h5>Side Project</h5>

      <div class="works__item">
        <div class="works__container">
          <img src="@/assets/thumbnail/youtube.png" alt="youtube" />
        </div>

        <div class="works__description">
          <div>
            <label>Title</label>
            <p>유튜브 클론 코딩</p>
          </div>

          <div>
            <label>Description</label>
            <p>
              유튜브 클론 코딩입니다. node.js로 벡앤드를 구성하였고 pug를
              뷰템플릿으로 사용하였습니다. 서버 사이드 랜더링을 기반으로 하고
              있고 SCSS로 퍼블리싱 작업을 하였습니다. 끝으로 해로쿠에
              배포하였습니다.
            </p>
          </div>

          <div>
            <label>Deploy</label>
            <p>
              <a href="https://mahns-youtube.herokuapp.com/" target="_blank"
                ><span>https://mahns-youtube.herokuapp.com/</span></a
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style></style>
