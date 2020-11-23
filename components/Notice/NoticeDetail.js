import { useEffect, useState } from 'react';
import dateFormat from '../../common/dateFormat';
import '../../styles/Notice/notice.scss';
import { getNotice } from '../../api';

const NoticeDetail = ({ noticeId }) => {
  const [notice, setNotice] = useState({});
  useEffect(() => {
    getNotice({ noticeId }).then((res) => {
      setNotice(res.data);
    });
    window.ga('set', 'page', '/article/' + noticeId);
    window.ga('send', 'pageview');
  }, []);

  const openLink = () => {
    window.open(notice.url);
  };
  return (
    <div className="notice-detail">
      <div className="title">
        <div>{notice.title}</div>
      </div>
      <div className="date">
        <div>{dateFormat(notice.date)}</div>
      </div>
      <div
        className="contents"
        dangerouslySetInnerHTML={{ __html: notice.contents }}
      />
      <div className="info">
        자세한 내용 및 첨부파일은 <a onClick={openLink}>본문</a>에서 확인
      </div>
    </div>
  );
};

export default NoticeDetail;
