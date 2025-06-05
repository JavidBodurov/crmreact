import { useState } from 'react';
import { Link } from 'react-router-dom';
import LeftSideTable from '../components/LeftSideTable';



const Table = ({data}) => {
    const [statusFilter, setStatusFilter] = useState('all');
    const [productFilter, setProductFilter] = useState('all');

    // const data = [
    //     {
    //         id: 0,
    //         date: '31.01.2022',
    //         product: 'Курс по JavaScript',
    //         name: 'Иван Фролов',
    //         email: 'frolov@gmail.com',
    //         phone: '420772551797',
    //         status: 'new',
    //     },
    //     {
    //         id: 1,
    //         date: '31.01.2022',
    //         product: 'Курс по Vue JS',
    //         name: 'Василий Пупкин',
    //         email: 'pupkin@mail.ru',
    //         phone: '420772555787',
    //         status: 'new',
    //     },
    //     {
    //         id: 2,
    //         date: '31.01.2022',
    //         product: 'Курс по JavaScript',
    //         name: 'Елена Иванова',
    //         email: 'ivanova@seznam.cz',
    //         phone: '420772551797',
    //         status: 'new',
    //     },
    //     {
    //         id: 3,
    //         date: '31.01.2022',
    //         product: 'Курс по PHP',
    //         name: 'Екатерина Похоменко',
    //         email: 'pochomenko@mail.ru',
    //         phone: '420777554717',
    //         status: 'new',
    //     },
    //     {
    //         id: 4,
    //         date: '31.01.2022',
    //         product: 'Курс по JavaScript',
    //         name: 'Елена Иванова',
    //         email: 'ivanova@seznam.cz',
    //         phone: '420772551797',
    //         status: 'new',
    //     },
    // ];

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
                                <option value='Курс по JavaScript'>
                                    Курс по JavaScript
                                </option>
                                <option value='Курс по Vue JS'>
                                    Курс по Vue JS
                                </option>
                                <option value='Курс по PHP'>Курс по PHP</option>
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
