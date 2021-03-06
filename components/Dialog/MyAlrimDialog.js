/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint import/no-cycle: [2, { maxDepth: 1 }] */

import { useEffect, useState } from 'react';
import DialogLayout from '../../layout/Dialog';
import {
  getAllowOnSiteList,
  setAllowSite,
  unsetAllowSite,
  getPuase,
  setPause,
  unsetPause,
} from '../../api';
import Toast from './Toast';

function Alrim({ site }) {
  const [allow, setAllow] = useState(true);
  var str = ``;
  var idx = 0;
  for (const i in site) {
    const val = site[i];
    if (i == 'id') continue;
    if (idx != 0) str += ` >`;
    str += ` ${val}`;
    idx++;
  }
  const toggle = () => {
    if (allow) {
      unsetAllowSite(site.id);
      setAllow(false);
    } else {
      setAllowSite(site.id);
      setAllow(true);
    }
  };

  return (
    <div className="alrim">
      {str}
      <div
        className="bell"
        onClick={() => {
          toggle();
        }}
      >
        {allow ? (
          <img className="fill" src="/img/on.png"></img>
        ) : (
          <img className="fill" src="/img/off.png"></img>
        )}
      </div>
    </div>
  );
}

const MyAlrimDialog = () => {
  const [update, setUpdate] = useState(false);

  const [data, setData] = useState([]);
  const [isPause, setIsPause] = useState(false);

  useEffect(() => {
    getAllowOnSiteList().then((res) => {
      setData(res.data);
    });
    getPuase().then((res) => {
      if (res.data.length) setIsPause(true);
    });
  }, []);

  function togglePause() {
    if (isPause) unsetPause();
    else setPause();
    setIsPause(!isPause);
  }

  return (
    <div className="my-alrim">
      {update ? (
        isPause ? (
          <div>
            <Toast message="전체알림이 해제되었습니다." />
          </div>
        ) : (
          <Toast message="전체알림이 허용되었습니다." />
        )
      ) : (
        ''
      )}
      {isPause ? <div className="board"></div> : ''}
      <div className="pause">
        <div className="text">알림 기능 중지</div>
        <label className="switch">
          <input
            type="checkbox"
            checked={isPause}
            onClick={() => {
              togglePause();
              setUpdate(true);
            }}
          />
          <span className="slider round"></span>
        </label>
      </div>
      {data.map((item) => {
        return <Alrim site={item} />;
      })}
    </div>
  );
};

export default DialogLayout({ Page: MyAlrimDialog });
