// COMPONENT
import { Timeline } from "antd";
import React, { Fragment } from "react";

// ASSETS
import { staticIcons } from "@/assets/icons";

const TimeLineSection = () => {
  return (
    <Fragment>
      <Timeline>
        <Timeline.Item
          color="#174AFF"
          dot={<img src={staticIcons.ACTIVE_DOT_ICON} alt={"Active State Icon"} />}
        >
          Sale Pending
          <span className="font-bold">In Progress</span>
        </Timeline.Item>

        <Timeline.Item
          color="#174AFF"
          dot={<img src={staticIcons.DOT_ICON} alt={"Dot Icon"} />}
        >
          Sale Live
        </Timeline.Item>

        <Timeline.Item
          color="#174AFF"
          dot={<img src={staticIcons.DOT_ICON} alt={"Dot Icon"} />}
        >
          Sale Completed
        </Timeline.Item>

        <Timeline.Item
          color="#174AFF"
          dot={<img src={staticIcons.DOT_ICON} alt={"Dot Icon"} />}
        >
          Vesting Started
        </Timeline.Item>

        <Timeline.Item
          color="#174AFF"
          dot={<img src={staticIcons.DOT_ICON} alt={"Dot Icon"} />}
        >
          EXX Launched
        </Timeline.Item>
      </Timeline>
    </Fragment>
  );
};

export { TimeLineSection as default };
