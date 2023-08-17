import React from "react";
import { AndroidStatusBar } from "../../components/AndroidStatusBar";
import { GestureThree } from "../../components/GestureThree";
import "./style.css";

export const Element = () => {
  return (
    <div className="element">
      <div className="div-2">
        <img className="image" alt="Image" src="/img/2x.png" />
        <div className="view">
          <div className="overlap-group">
            <div className="frame-wrapper">
              <div className="frame">
                <div className="text-wrapper-2">한 줄 소개</div>
              </div>
            </div>
            <div className="text-wrapper-3">(25자 내외)</div>
            <p className="p">식물을 좋아하는 철물점 사장님입니다. ^^</p>
          </div>
        </div>
        <div className="overlap-wrapper">
          <div className="overlap">
            <div className="div-3">
              <div className="div-wrapper">
                <div className="text-wrapper-4">다정한</div>
              </div>
              <div className="frame-2">
                <div className="text-wrapper-4">원예</div>
              </div>
              <div className="frame-3">
                <div className="text-wrapper-4">동네친구</div>
              </div>
            </div>
            <div className="frame-4">
              <div className="text-wrapper-5">닉네임,</div>
              <div className="text-wrapper-5">XX세</div>
            </div>
            <div className="frame-5">
              <div className="text-wrapper-6">돌싱</div>
              <div className="rectangle-2" />
              <div className="text-wrapper-7">자녀있음</div>
            </div>
            <div className="text-wrapper-8">서울시 광진구 거주</div>
          </div>
        </div>
        <img className="img" alt="Image" src="/img/image.png" />
        <div className="overlap-2">
          <div className="view-2">
            <img className="img-2" alt="Element" src="/img/1.svg" />
            <div className="div-4" />
            <div className="div-5" />
            <div className="div-6" />
            <div className="div-7" />
            <div className="div-8" />
          </div>
          <div className="view-3">
            <div className="frame">
              <div className="text-wrapper-2">변경하기</div>
            </div>
          </div>
          <div className="view-4">
            <div className="frame">
              <div className="text-wrapper-2">관리하기</div>
            </div>
          </div>
          <div className="frame-6">
            <div className="text-wrapper-9">활동지역</div>
          </div>
          <div className="frame-7">
            <div className="text-wrapper-10">차단친구</div>
          </div>
          <div className="frame-8">
            <div className="text-wrapper-9">지원</div>
          </div>
          <div className="frame-9">
            <div className="text-wrapper-9">약관</div>
          </div>
          <div className="frame-10">
            <div className="text-wrapper-9">계정관리</div>
          </div>
          <div className="div-wrapper-2">
            <div className="text-wrapper-11">2명</div>
          </div>
          <div className="view-5">
            <div className="frame-11">
              <div className="text-wrapper-12">서울시 광진구</div>
            </div>
            <img className="location-pin" alt="Location pin" src="/img/location-pin.svg" />
          </div>
          <div className="view-6">
            <div className="frame-12">
              <div className="text-wrapper-10">환경설정</div>
            </div>
            <img className="settings" alt="Settings" src="/img/settings.svg" />
          </div>
        </div>
        <div className="view-7">
          <div className="overlap-3">
            <div className="union-wrapper">
              <img className="union-2" alt="Union" src="/img/union-3.svg" />
            </div>
            <p className="div-9">
              <span className="span">오팔</span>
              <span className="text-wrapper-13">청춘</span>
            </p>
            <div className="group-wrapper">
              <div className="group">
                <div className="text-wrapper-14">가</div>
                <div className="text-wrapper-15">가</div>
                <div className="text-wrapper-16">가</div>
              </div>
            </div>
            <img className="arrow-back-ios" alt="Arrow back ios" src="/img/arrow-back-ios.svg" />
          </div>
          <div className="div-10" />
          <div className="div-11" />
        </div>
        <div className="div-12">
          <div className="overlap-4">
            <div className="frame-13">
              <div className="view-8">
                <img className="img-3" alt="Search" src="/img/search.svg" />
                <div className="text-wrapper-17">친구찾기</div>
              </div>
              <div className="view-8">
                <div className="text-wrapper-17">친구목록</div>
                <img className="img-3" alt="Person" src="/img/person.svg" />
              </div>
              <div className="view-9">
                <div className="text-wrapper-18">오늘의 인연</div>
                <img className="auto-awesome" alt="Auto awesome" src="/img/auto-awesome.svg" />
              </div>
              <div className="div-13">
                <div className="text-wrapper-19">1:1 대화방</div>
                <div className="group-wrapper-2">
                  <div className="overlap-group-wrapper">
                    <div className="overlap-group-2">
                      <img className="union-3" alt="Union" src="/img/union-2.svg" />
                      <img className="subtract" alt="Subtract" src="/img/subtract.svg" />
                    </div>
                  </div>
                </div>
              </div>
              <img className="image-2" alt="Image" src="/img/2x-2.png" />
            </div>
          </div>
          <div className="rectangle-3" />
        </div>
        <GestureThree className="gesture-three-buttons" />
        <AndroidStatusBar className="android-status-bar-instance" darkMode={false} />
      </div>
    </div>
  );
};
