import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Edit = ({ data, setData }) => {
    const { id } = useParams();
    const navigate = useNavigate();

    const current = data.find((item) => item.id === parseInt(id));

    const template = {
        id: 999,
        name: 'Liam Johnson',
        email: 'liam.johnson@example.ca',
        phone: '4035551234',
        product: 'course-html',
        status: 'new',
    };

    const isTemplate = !current;

    const [formData, setForm] = useState(template);

    useEffect(() => {
        if (current) {
            setForm(current);
        }
    }, [current]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!current) return; 

        const updated = data.map((item) =>
            item.id === parseInt(id) ? { ...item, ...formData } : item
        );
        setData(updated);
        navigate('/table');
    };

    return (
        <div className='form-wrapper mt-5'>
            <div className='container-fluid'>
                <div className='row justify-content-between align-items-center'>
                    <div className='col'>
                        <div className='admin-heading-1 pt-3'>
                            {isTemplate
                                ? 'Шаблон заявки (пример)'
                                : `Работа с заявкой #${+id + 1}`}
                        </div>
                    </div>
                    <div className='col text-right'>
                        <a href='/' className='btn btn-link'>
                            Вернуться назад
                        </a>
                    </div>
                </div>

                <div className='row'>
                    <div className='col'>
                        <form onSubmit={handleSubmit}>
                            <div className='card mb-4'>
                                <div className='card-header'>
                                    Данные о заявке
                                </div>
                                <div className='card-body'>
                                    <div className='row mb-3'>
                                        <div className='col-md-2'>
                                            <strong>ID:</strong>
                                        </div>
                                        <div className='col'>
                                            Заявка №{isTemplate ? 0 : +id + 1}
                                        </div>
                                    </div>

                                    <div className='row mb-3'>
                                        <div className='col-md-2'>
                                            <strong>Продукт:</strong>
                                        </div>
                                        <div className='col'>
                                            <select
                                                className='custom-select'
                                                name='product'
                                                value={formData.product}
                                                onChange={handleChange}
                                                disabled={isTemplate}
                                            >
                                                <option value='course-html'>
                                                    Курс по верстке
                                                </option>
                                                <option value='course-js'>
                                                    Курс по JavaScript
                                                </option>
                                                <option value='course-vue'>
                                                    Курс по VUE JS
                                                </option>
                                                <option value='course-php'>
                                                    Курс по PHP
                                                </option>
                                                <option value='course-wordpress'>
                                                    Курс по WordPress
                                                </option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className='row mb-3'>
                                        <div className='col-md-2'>
                                            <strong>Имя:</strong>
                                        </div>
                                        <div className='col'>
                                            <input
                                                type='text'
                                                name='name'
                                                className='form-control'
                                                value={formData.name}
                                                onChange={handleChange}
                                                disabled={isTemplate}
                                            />
                                        </div>
                                    </div>

                                    <div className='row mb-3'>
                                        <div className='col-md-2'>
                                            <strong>Email:</strong>
                                        </div>
                                        <div className='col'>
                                            <input
                                                type='email'
                                                name='email'
                                                className='form-control'
                                                value={formData.email}
                                                onChange={handleChange}
                                                disabled={isTemplate}
                                            />
                                        </div>
                                    </div>

                                    <div className='row mb-3'>
                                        <div className='col-md-2'>
                                            <strong>Телефон:</strong>
                                        </div>
                                        <div className='col'>
                                            <input
                                                type='text'
                                                name='phone'
                                                className='form-control'
                                                value={formData.phone}
                                                onChange={handleChange}
                                                disabled={isTemplate}
                                            />
                                        </div>
                                    </div>

                                    <div className='row mb-3'>
                                        <div className='col-md-2'>
                                            <strong>Статус заявки:</strong>
                                        </div>
                                        <div className='col'>
                                            <select
                                                className='custom-select'
                                                name='status'
                                                value={formData.status}
                                                onChange={handleChange}
                                                disabled={isTemplate}
                                            >
                                                <option value='new'>
                                                    Новая
                                                </option>
                                                <option value='inwork'>
                                                    В работе
                                                </option>
                                                <option value='complete'>
                                                    Завершена
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {!isTemplate && (
                                <div className='row justify-content-end'>
                                    <div className='col text-right'>
                                        <button
                                            type='submit'
                                            className='btn btn-primary'
                                        >
                                            Сохранить изменения
                                        </button>
                                    </div>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Edit;
