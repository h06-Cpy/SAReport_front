import { Link } from "react-scroll";
import React from "react";

const Sidebar = ({ props }) => {
  //서버에서 가져온 토픽 만큼 탭이 추가되야 함

  return (
    <aside className="w-full sm:w-1/3 md:w-1/4 px-2 rounded-xl bg-white mx-auto">
      <div className="sticky top-0 p-4 w-full">
        <Link to="total_topic_analysis" smooth={true} duration={500}>
          <p className="bg-lightgreen hover:bg-lightgreen_hover font-bold mx-auto py-1 rounded-2xl text-white text-xl text-center space-x-4 h-10 my-3">
            전체 토픽 분석
          </p>
        </Link>

        <Link to="analysisPerTopic" smooth={true} duration={500}>
          <p className="bg-lightgreen hover:bg-lightgreen_hover font-bold mx-auto py-1 rounded-2xl text-white text-xl text-center space-x-4 h-10">
            토픽별 감성 분석
          </p>
        </Link>

        <ul className="flex flex-col overflow-hidden">
          {props.datas.map((topicData, index) => {
            return (
              <Link
                to={topicData.topic_name}
                smooth={true}
                duration={500}
                key={index}
              >
                <li className="bg-lightlightgreen hover:bg-lightgreen_hover mx-auto py-2 rounded-2xl text-base text-white text-center space-x-4 h-10 my-2">
                  {topicData.topic_name}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
