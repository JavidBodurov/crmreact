import { useState } from 'react';
import { formData } from '../data/formData';
import { useNavigate } from 'react-router-dom';

const Form = ({onSubmit}) => {
    const [form, setForm] = useState({
        name: '',
        phone: '',
        email: '',
        product: 'course-html',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(form);
        navigate('/table');
    };

    const fillRandomData = () => {
        const random = formData[Math.floor(Math.random() * formData.length)];
        setForm(random);
    };


    return (
        <div className='radial-bg flex-center'>
            <div className='white-plate white-plate--payment'>
                <div className='container-fluid'>
                    <div className='white-plate__header text-center'>
                        <p className='white-plate__logo'>
                            <span>Форма</span> заявок
                        </p>
                    </div>

                    <div className='white-plate__line-between white-plate__line-between--main'></div>

                    <form onSubmit={handleSubmit} id='form'>
                        <label>Ваши данные:</label>

                        <div className='form-group'>
                            <input
                                id='name'
                                type='text'
                                name='name'
                                className='form-control'
                                placeholder='Имя и Фамилия'
                                value={form.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className='form-group'>
                            <input
                                id='phone'
                                type='text'
                                name='phone'
                                className='form-control'
                                placeholder='Телефон'
                                value={form.phone}
                                onChange={handleChange}
                            />
                        </div>

                        <div className='form-group'>
                            <input
                                id='email'
                                type='email'
                                name='email'
                                className='form-control'
                                placeholder='Email'
                                value={form.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className='form-group'>
                            <label htmlFor='product'>Продукт:</label>
                            <select
                                id='product'
                                name='product'
                                className='form-control'
                                value={form.product}
                                onChange={handleChange}
                            >
                                <option value='course-html'>Курс по верстке</option>
                                <option value='course-js'>Курс по JavaScript</option>
                                <option value='course-vue'>Курс по VUE JS</option>
                                <option value='course-php'>Курс по PHP</option>
                                <option value='course-wordpress'>Курс по WordPress</option>
                            </select>
                        </div>

                        <div className='form-group'>
                            <button
                                type='submit'
                                className='btn btn-lg btn-primary btn-block'
                            >
                                Оформить заявку
                            </button>
                        </div>

                        <div className='form-group text-center mt-2'>
                            <button
                                type='button'
                                className='btn btn-sm btn-outline-secondary'
                                onClick={fillRandomData}
                            >
                                Заполнить случайно
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Form;
