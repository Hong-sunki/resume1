
# Resume

개인 Resume Page : https://hong-sunki.github.io/resume1/


## 목차

1. 제작 기간 
2. 사용 기술
3. 핵심 기능
4. 트러블 슈팅


### 1. 제작기간 
+ 2021년 03월 16 ~ 2021년 03월 22일
+ 홍선기 (프론트엔드)




### 2. 사용기술
+ Html
+ Css
+ Javascript
+ CubeSlide





### 3. 핵심 기능

#### 3.1 처음 로딩페이지에서 우측에 메뉴 버튼클릭시 해당 화면으로 큐브 슬라이드 이동

#### 3.2 메인페이지에 canvas속성을 사용





### 4. 핵심 트러블 슈팅

큐브 슬라이드 형식으로 인해 6개의 면을 균형있게 맞추는데 있어서 문제가 발생
translateZ, perspective를 이용하여 균형있는 도형으로 제작
````css
.scene { position: absolute; top: 20px; right: 12%; width: 800px; height: 800px;  margin: 80px; perspective: 8000px; border-radius: 50px; overflow: hidden; }
  
  .cube { width: 800px; height: 800px; position: relative; transform-style: preserve-3d; transform: translateZ(-100px); transition: transform 1s; border-radius: 50px;  }
  
  .cube.show-front  { transform: translateZ(-400px) rotateY(   0deg); }
  .cube.show-right  { transform: translateZ(-400px) rotateY( -90deg); }
  .cube.show-back   { transform: translateZ(-400px) rotateY(-180deg); }
  .cube.show-left   { transform: translateZ(-400px) rotateY(  90deg); }
  .cube.show-top    { transform: translateZ(-400px) rotateX( -90deg); }
  .cube.show-bottom { transform: translateZ(-400px) rotateX(  90deg); }
  
````
