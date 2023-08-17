import React from "react";
import { AndroidStatusBar } from "../../components/AndroidStatusBar";
import { GestureThree } from "../../components/GestureThree";
import "./style.css";

export const Element = () => {
  return (
    <div className="element">
      <div className="div-2">
        <img className="arrow-back-ios" alt="Arrow back ios" src="/img/arrow-back-ios.svg" />
        <div className="view">
          <div className="frame">
            <div className="text-wrapper-2">1대1 대화방</div>
          </div>
        </div>
        <div className="overlap">
          <div className="view-2">
            <div className="div-3">
              <div className="div-3">
                <div className="overlap-group">
                  <div className="text-wrapper-3">닉네임</div>
                  <div className="text-wrapper-4">,XX세</div>
                  <img className="img" alt="Rectangle" src="/img/rectangle-68.png" />
                  <div className="text-wrapper-5">오늘 뭐하십니까</div>
                </div>
              </div>
              <div className="div-4" />
            </div>
            <div className="overlap-wrapper">
              <div className="overlap-group">
                <div className="text-wrapper-3">닉네임</div>
                <div className="text-wrapper-4">,XX세</div>
                <img className="img" alt="Rectangle" src="/img/rectangle-68.png" />
                <div className="text-wrapper-5">좋네요^^</div>
              </div>
            </div>
            <div className="overlap-group-wrapper">
              <div className="overlap-group">
                <div className="text-wrapper-3">닉네임</div>
                <div className="text-wrapper-4">,XX세</div>
                <img className="img" alt="Rectangle" src="/img/rectangle-68.png" />
                <div className="text-wrapper-5">(사진)</div>
              </div>
            </div>
            <div className="div-wrapper">
              <div className="overlap-group">
                <div className="text-wrapper-3">닉네임</div>
                <div className="text-wrapper-4">,XX세</div>
                <img className="img" alt="Rectangle" src="/img/rectangle-68.png" />
                <div className="text-wrapper-5">기분 상하셨다면 미안합니다.</div>
              </div>
            </div>
            <div className="div-5" />
            <div className="div-6" />
            <div className="div-7" />
            <div className="div-8" />
          </div>
          <div className="view-3">
            <div className="overlap-2">
              <div className="text-wrapper-6">1</div>
            </div>
          </div>
          <div className="view-4">
            <div className="overlap-2">
              <div className="text-wrapper-7">3</div>
            </div>
          </div>
          <div className="text-wrapper-8">어제</div>
          <div className="text-wrapper-9">어제</div>
          <div className="text-wrapper-10">3일 전</div>
          <div className="text-wrapper-11">4시간 전</div>
        </div>
        <div className="view-5">
          <img className="image" alt="Image" src="/img/2x.png" />
          <div className="div-9" />
          <div className="union-wrapper">
            <img className="union-2" alt="Union" src="/img/union-3.svg" />
          </div>
          <p className="p">
            <span className="span">오팔</span>
            <span className="text-wrapper-12">청춘</span>
          </p>
          <div className="group-wrapper">
            <div className="group">
              <div className="text-wrapper-13">가</div>
              <div className="text-wrapper-14">가</div>
              <div className="text-wrapper-15">가</div>
            </div>
          </div>
          <div className="div-10" />
        </div>
        <div className="view-6">
          <div className="div-10" />
          <div className="rectangle-2" />
          <img className="img-2" alt="Img" src="/img/image.svg" />
          <div className="view-7" />
          <img className="send" alt="Send" src="/img/send.svg" />
        </div>
        <div className="frame-wrapper">
          <div className="frame-2">
            <div className="view-8">
              <img className="img-3" alt="Search" src="/img/search.svg" />
              <div className="text-wrapper-16">친구찾기</div>
            </div>
            <div className="view-8">
              <div className="text-wrapper-16">친구목록</div>
              <img className="img-3" alt="Person" src="/img/person.svg" />
            </div>
            <div className="view-9">
              <div className="text-wrapper-17">오늘의 인연</div>
              <img className="auto-awesome" alt="Auto awesome" src="/img/auto-awesome.svg" />
            </div>
            <div className="div-11">
              <div className="text-wrapper-18">1:1 대화방</div>
              <div className="group-wrapper-2">
                <div className="group-2">
                  <div className="overlap-group-2">
                    <img className="union-3" alt="Union" src="/img/union-2.svg" />
                    <img className="subtract" alt="Subtract" src="/img/subtract.svg" />
                  </div>
                </div>
              </div>
            </div>
            <img className="image-2" alt="Image" src="/img/image.png" />
          </div>
        </div>
        <GestureThree className="gesture-three-buttons" />
        <AndroidStatusBar className="android-status-bar-instance" darkMode={false} />
      </div>
    </div>
  );
};
