/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint import/no-cycle: [2, { maxDepth: 1 }] */

import { NoticeList } from '../Notice'
import DialogLayout from '../../layout/Dialog'

const NoticeListDialog = () => {
  return (
    <div className="notice-list-dialog">
      <NoticeList />
    </div>
  )
}

export default DialogLayout(NoticeListDialog)
