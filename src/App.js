import React, { useEffect, useState } from 'react';
import './App.css';

const One = () => {
  const images = ['./보석.png', './은고시.png', './당밀시.png', './노메이.png']; // 추가 이미지 경로들
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 6600);

    return () => {
      clearInterval(intervalId); // 컴포넌트 언마운트 시 인터벌 정리
    };
  }, [images.length]);

  return (
    <div className="one">
      <div
        className="media"
        style={{ backgroundImage: `url(${images[currentImageIndex]})`, transition: 'background-image 1s ease-in-out' }}
      ></div>
    </div>
  );
};

/* 레이아웃 맨 위 화이트 블럭 */
const White = () => {
  return (
    <div className="white">
    </div>
  );
};

const Layer1 = () => {
  return (
    <div className="layer_1">
      <div className="lay1_image"></div>
      <div className="fixed_text">あなたのそばを守ります。</div>
      <div className="fixed_text_2">今年4月、寮で起きた放火事件で多くの学生が被害を受けました。<p>学生の安全のため、そして親御さんの安心のために、</p>YOLO AIで火災時の早期発見ができるよう最善を尽くします。</div>
    </div>
  );
};

const Layer2 = () => {
  return (
    <div className="layer_2">
      <div className="video_container">
        <Video_1 />
        <Video_2 />
        <Video_3 />
      </div>
    </div>
  );
};

const Layer3 = () => {
  return (
    <div className="layer_3">
      <div className="lay3_image">
        <div id="image1"></div>
        <div id="image2"></div>
        <div id="image3"></div>
      </div>
    </div>
  );
};

const Layer4 = () => {
  return (
    <div className="layer_4">
      <div className="lay4_image">
        <div className="fixed_text_3">開発者、デザイナー紹介</div>
        <div className="fixed_text_4">
          ホン・ギヒョク - 監督、ソフトウェア開発者
          <p>キム・ミンス - AI開発者</p>
          <p>イム・ジョンウン - フロントエンド開発者</p>
          <p>パク・ジュンヨン - ハードウェア開発者</p>
          オム・ジウン - プランニングおよびサポート
        </div>
      </div>
    </div>
  );
};
const Video_1 = () => {
  const youtubeEmbedUrl = 'https://www.youtube.com/embed/VIDEO_ID';

  return (
    <div className="Video_1">
      <iframe
        width="100%"
        height="100%"
        src={youtubeEmbedUrl}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <p className="video_cm_1">
        学生寮1館
      </p>
      <p className="video_cm_2">
        調理室の廊下
      </p>
    </div>
  );
};

const Video_2 = () => {
  const youtubeEmbedUrl = 'https://www.youtube.com/embed/VIDEO_ID';

  return (
    <div className="Video_2">
      <iframe
        width="100%"
        height="100%"
        src={youtubeEmbedUrl}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <p className="video_cm_1">
        学生寮2館
      </p>
      <p className="video_cm_2">
        ランドリー 内部
      </p>
    </div>
  );
};

const Video_3 = () => {
  const youtubeEmbedUrl = 'https://www.youtube.com/embed/VIDEO_ID';

  return (
    <div className="Video_3">
      <iframe
        width="100%"
        height="100%"
        src={youtubeEmbedUrl}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <p className="video_cm_1">
        学生寮8館
      </p>
      <p className="video_cm_2">
        セミナー室の内部
      </p>
    </div>
  );
};

const ResponsiveExample = () => {
  return (
    <div id="wrap">
      <One />
      <Layer1 />
      <Layer2 />
      <Layer3 />
      <Layer4 />
      <White />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <ResponsiveExample />
    </div>
  );
}

export default App;
