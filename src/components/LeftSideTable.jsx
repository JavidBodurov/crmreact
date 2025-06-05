import avatar from '../img/avatar-128.jpg';

const LeftSideTable = ({data, setStatusFilter}) => {

    const countByStatus = (status) => data.filter((item) => item.status === status).length;
  return (
      <div className='left-panel blue-skin'>
          <div className='left-panel__logo'>
              <div className='left-panel__logo-title'>CRM заявки</div>
              <div className='left-panel__logo-subtitle'>учебный проект</div>
          </div>

          <div className='left-panel__user clearfix'>
              <div className='left-panel__user-photo'>
                  <img src={avatar} alt='Avatar' />
              </div>
              <div className='left-panel__user-name'>
                  Петр <br /> Васильевич
              </div>
          </div>

          <div className='left-panel__navigation'>
              <div className='left-panel__navigation-title'>Заявки</div>
              <ul>
                  <li>
                      <a
                          href='#'
                          onClick={() => setStatusFilter('all')}
                          className='active'
                      >
                          Все вместе
                      </a>
                  </li>
                  <li>
                      <a href='#' onClick={() => setStatusFilter('new')}>
                          Новые
                          <div className='badge' id='badge-new'>
                              {countByStatus('new')}
                          </div>
                      </a>
                  </li>
                  <li>
                      <a href='#' onClick={() => setStatusFilter('inwork')}>
                          В работе
                          <div className='badge' id='badge-inwork'>
                              {countByStatus('inwork')}
                          </div>
                      </a>
                  </li>
                  <li>
                      <a href='#' onClick={() => setStatusFilter('complete')}>
                          Завершенные
                          <div className='badge' id='badge-complete'>
                              {countByStatus('complete')}
                          </div>
                      </a>
                  </li>
              </ul>
          </div>
      </div>
  );
}

export default LeftSideTable