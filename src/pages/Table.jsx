import { useState } from 'react';
import { Link } from 'react-router-dom';
import LeftSideTable from '../components/LeftSideTable';



const Table = ({data}) => {
    const [statusFilter, setStatusFilter] = useState('all');
    const [productFilter, setProductFilter] = useState('all');

    

    const filtered = data.filter((item) => {
        const statusOk = statusFilter === 'all' || item.status === statusFilter;
        const productOk =
            productFilter === 'all' || item.product === productFilter;
        return statusOk && productOk;
    });

    return (
        <div className='with-nav body--dashboard'>
            <LeftSideTable data={data} setStatusFilter={setStatusFilter} />

            <div className='main-wrapper'>
                <div className='container-fluid'>
                    <div className='admin-heading-1'>Все заявки</div>

                    <div className='row mb-3 justify-content-between'>
                        <div className='col'>
                            <div className='btn-group' role='group'>
                                <button
                                    className='btn btn-light'
                                    onClick={() => setStatusFilter('all')}
                                >
                                    Все
                                </button>
                                <button
                                    className='btn btn-light'
                                    onClick={() => setStatusFilter('new')}
                                >
                                    Новые
                                </button>
                                <button
                                    className='btn btn-light'
                                    onClick={() => setStatusFilter('inwork')}
                                >
                                    В работе
                                </button>
                                <button
                                    className='btn btn-light'
                                    onClick={() => setStatusFilter('complete')}
                                >
                                    Завершенные
                                </button>
                            </div>
                        </div>
                        <div className='col'>
                            <select
                                className='custom-select'
                                onChange={(e) =>
                                    setProductFilter(e.target.value)
                                }
                            >
                                <option value='all'>Все продукты</option>
                                <option value='course-html'>Курс по верстке</option>
                                <option value='course-js'>Курс по JavaScript</option>
                                <option value='course-vue'>Курс по VUE JS</option>
                                <option value='course-php'>Курс по PHP</option>
                                <option value='course-wordpress'>Курс по WordPress</option>
                            </select>
                        </div>
                    </div>

                    <table className='table fs-14'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>дата</th>
                                <th>продукт</th>
                                <th>имя</th>
                                <th>email</th>
                                <th>телефон</th>
                                <th>статус</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.date}</td>
                                    <td>{item.product}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                    <td>
                                        <div
                                            className={`badge badge-pill ${
                                                item.status === 'new'
                                                    ? 'badge-danger'
                                                    : item.status === 'inwork'
                                                    ? 'badge-warning'
                                                    : 'badge-success'
                                            }`}
                                        >
                                            {item.status === 'new'
                                                ? 'Новая'
                                                : item.status === 'inwork'
                                                ? 'В работе'
                                                : 'Завершена'}
                                        </div>
                                    </td>
                                    <td>
                                        <Link to={`/edit/${item.id}`}>
                                            Редактировать
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Table;
