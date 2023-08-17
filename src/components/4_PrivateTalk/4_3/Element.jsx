import React from "react";
import { AndroidStatusBar } from "../../components/AndroidStatusBar";
import { GestureThree } from "../../components/GestureThree";
import "./style.css";

export const Element = () => {
  return (
    <div className="element">
      <div className="div-2">
        <div className="overlap">
          <div className="view" />
          <div className="div-3">
            <img className="img" alt="Rectangle" src="/img/rectangle-68.png" />
            <div className="text-wrapper-2">닉네임 1</div>
            <div className="frame">
              <p className="text-wrapper-3">그래요 나 난 꿈이 있었죠</p>
            </div>
            <div className="div-wrapper">
              <div className="text-wrapper-3">버려지고 찢겨 남루하여도~</div>
            </div>
          </div>
          <div className="group-wrapper">
            <div className="group">
              <div className="overlap-group">
                <div className="text-wrapper-4">2023년 8월 18일 금요일</div>
              </div>
            </div>
          </div>
          <div className="group-wrapper-2">
            <div className="group">
              <div className="overlap-group">
                <div className="text-wrapper-4">2023년 8월 18일 금요일</div>
              </div>
            </div>
          </div>
          <div className="div-4">
            <img className="img" alt="Rectangle" src="/img/rectangle-68.png" />
            <div className="text-wrapper-5">닉네임 1</div>
            <div className="frame">
              <p className="text-wrapper-3">내 가슴 깊숙히 보물과 같이</p>
            </div>
            <div className="frame-2">
              <div className="text-wrapper-3">간직했던 꿈~</div>
            </div>
          </div>
          <div className="div-wrapper-2">
            <p className="text-wrapper-3">혹 때론 누군가가~ 뜻 모를 비웃음</p>
          </div>
          <img className="image" alt="Image" src="/img/1.png" />
          <div className="overlap-wrapper">
            <div className="overlap-2">
              <div className="text-wrapper-6">닉네임1</div>
            </div>
          </div>
          <div className="frame-wrapper">
            <div className="frame-3">
              <div className="text-wrapper-7">나가기</div>
            </div>
          </div>
        </div>
        <img className="arrow-back-ios" alt="Arrow back ios" src="/img/arrow-back-ios.svg" />
        <div className="view-2">
          <img className="image-2" alt="Image" src="/img/2x.png" />
          <div className="div-5" />
          <div className="div-6" />
          <div className="union-wrapper">
            <img className="union-2" alt="Union" src="/img/union-3.svg" />
          </div>
          <p className="p">
            <span className="span">오팔</span>
            <span className="text-wrapper-8">청춘</span>
          </p>
          <div className="view-3">
            <div className="group-2">
              <div className="text-wrapper-9">가</div>
              <div className="text-wrapper-10">가</div>
              <div className="text-wrapper-11">가</div>
            </div>
          </div>
          <div className="div-7" />
        </div>
        <div className="view-4">
          <div className="div-7" />
          <div className="rectangle-2" />
          <img className="img-2" alt="Img" src="/img/image.svg" />
          <div className="view-5" />
          <img className="send" alt="Send" src="/img/send.svg" />
        </div>
        <div className="frame-wrapper-2">
          <div className="frame-4">
            <div className="view-6">
              <img className="img-3" alt="Search" src="/img/search.svg" />
              <div className="text-wrapper-12">친구찾기</div>
            </div>
            <div className="view-6">
              <div className="text-wrapper-12">친구목록</div>
              <img className="img-3" alt="Person" src="/img/person.svg" />
            </div>
            <div className="view-7">
              <div className="text-wrapper-13">오늘의 인연</div>
              <img className="auto-awesome" alt="Auto awesome" src="/img/auto-awesome.svg" />
            </div>
            <div className="div-8">
              <div className="text-wrapper-14">1:1 대화방</div>
              <div className="group-wrapper-3">
                <div className="overlap-group-wrapper">
                  <div className="overlap-group-2">
                    <img className="union-3" alt="Union" src="/img/union-2.svg" />
                    <img className="subtract" alt="Subtract" src="/img/subtract.svg" />
                  </div>
                </div>
              </div>
            </div>
            <img className="image-3" alt="Image" src="/img/image.png" />
          </div>
        </div>
        <div className="view-8">
          <div className="view-wrapper">
            <div className="view-9">
              <div className="view-10">
                <div className="overlap-group-3">
                  <div className="text-wrapper-15">네</div>
                </div>
              </div>
              <img className="image-4" alt="Image" src="/img/2x-2.png" />
              <div className="frame-5">
                <div className="text-wrapper-16">대화방을 나갈까요?</div>
                <div className="text-wrapper-17">대화기록이 삭제됩니다.</div>
              </div>
            </div>
          </div>
        </div>
        <GestureThree className="gesture-three-buttons" />
        <AndroidStatusBar className="android-status-bar-instance" darkMode={false} />
      </div>
    </div>
  );
};
