import { Link } from "react-scroll";
import React from "react";

const Sidebar = ({ props }) => {
  // 나중에 phind 검색한거 보고 바로 개발ㄱㄱ

  //서버에서 가져온 토픽 만큼 탭이 추가되야 함

  return (
    <aside className="w-full sm:w-1/3 md:w-1/4 px-2 rounded-xl bg-white mx-auto">
      <div className="sticky top-0 p-4 w-full">
        <Link to="analysisPerTopic" smooth={true} duration={500}>
          <p>토픽별 감성 분석</p>
        </Link>

        <ul className="flex flex-col overflow-hidden">
          {props.datas.map((topicData) => {
            return (
              <Link to={topicData.topicname} smooth={true} duration={500}>
                <li>{topicData.topicname}</li>
              </Link>
            );
          })}
        </ul>
        <Link to="totalTopicAnalysis" smooth={true} duration={500}>
          <p>상관 관계 분석</p>
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
