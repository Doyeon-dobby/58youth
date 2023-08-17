import React from "react";
import { AndroidStatusBar } from "../../components/AndroidStatusBar";
import { GestureThree } from "../../components/GestureThree";
import "./style.css";

export const Element = () => {
  return (
    <div className="element">
      <div className="div-2">
        <div className="overlap">
          <div className="overlap-group-wrapper">
            <div className="overlap-group">
              <div className="text-wrapper-2">닉네임</div>
              <img className="img" alt="Rectangle" src="/img/rectangle-68.png" />
              <div className="view">
                <div className="frame">
                  <div className="text-wrapper-3">차단해제</div>
                </div>
              </div>
            </div>
          </div>
          <div className="overlap-wrapper">
            <div className="overlap-group">
              <div className="text-wrapper-2">닉네임</div>
              <img className="img" alt="Rectangle" src="/img/rectangle-68.png" />
              <div className="view">
                <div className="frame">
                  <div className="text-wrapper-3">차단해제</div>
                </div>
              </div>
            </div>
          </div>
          <div className="div-wrapper">
            <div className="overlap-group">
              <div className="text-wrapper-2">닉네임</div>
              <img className="img" alt="Rectangle" src="/img/rectangle-68.png" />
              <div className="view">
                <div className="frame">
                  <div className="text-wrapper-3">차단해제</div>
                </div>
              </div>
            </div>
          </div>
          <div className="overlap-wrapper-2">
            <div className="overlap-group">
              <div className="text-wrapper-2">닉네임</div>
              <img className="img" alt="Rectangle" src="/img/rectangle-68.png" />
              <div className="view">
                <div className="frame">
                  <div className="text-wrapper-3">차단해제</div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-wrapper">
            <div className="frame-2">
              <div className="text-wrapper-4">차단 친구</div>
            </div>
          </div>
          <div className="view-2">
            <div className="overlap-2">
              <div className="group">
                <div className="view-3">
                  <div className="view-4">
                    <div className="overlap-group-2">
                      <div className="text-wrapper-5">네</div>
                    </div>
                  </div>
                  <img className="image" alt="Image" src="/img/2x.png" />
                </div>
              </div>
              <p className="p">닉네임 님을 차단 해제 할까요?</p>
            </div>
          </div>
        </div>
        <div className="view-5">
          <div className="overlap-3">
            <div className="union-wrapper">
              <img className="union-2" alt="Union" src="/img/union-3.svg" />
            </div>
            <p className="div-3">
              <span className="span">오팔</span>
              <span className="text-wrapper-6">청춘</span>
            </p>
            <div className="group-wrapper">
              <div className="group-2">
                <div className="text-wrapper-7">가</div>
                <div className="text-wrapper-8">가</div>
                <div className="text-wrapper-9">가</div>
              </div>
            </div>
            <img className="arrow-back-ios" alt="Arrow back ios" src="/img/arrow-back-ios.svg" />
          </div>
          <div className="div-4" />
          <div className="div-5" />
        </div>
        <div className="div-6">
          <div className="overlap-4">
            <div className="frame-3">
              <div className="view-6">
                <img className="img-2" alt="Search" src="/img/search.svg" />
                <div className="text-wrapper-10">친구찾기</div>
              </div>
              <div className="view-6">
                <div className="text-wrapper-10">친구목록</div>
                <img className="img-2" alt="Person" src="/img/person.svg" />
              </div>
              <div className="view-7">
                <div className="text-wrapper-11">오늘의 인연</div>
                <img className="auto-awesome" alt="Auto awesome" src="/img/auto-awesome.svg" />
              </div>
              <div className="div-7">
                <div className="text-wrapper-12">1:1 대화방</div>
                <div className="group-wrapper-2">
                  <div className="group-3">
                    <div className="overlap-group-3">
                      <img className="union-3" alt="Union" src="/img/union-2.svg" />
                      <img className="subtract" alt="Subtract" src="/img/subtract.svg" />
                    </div>
                  </div>
                </div>
              </div>
              <img className="image-2" alt="Image" src="/img/image.png" />
            </div>
          </div>
          <div className="rectangle-2" />
        </div>
        <GestureThree className="gesture-three-buttons" />
        <AndroidStatusBar className="android-status-bar-instance" darkMode={false} />
      </div>
    </div>
  );
};
