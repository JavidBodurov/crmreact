import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className='project-nav'>
            <div className='project-nav__links-wrapper'>
                <NavLink
                    to='/'
                    className={({ isActive }) =>
                        isActive ? 'active nav-link' : 'nav-link'
                    }
                >
                    Форма добавления заявок
                </NavLink>

                <NavLink
                    to='/table'
                    className={({ isActive }) =>
                        isActive ? 'active nav-link' : 'nav-link'
                    }
                >
                    Таблица с заявками
                </NavLink>

                <NavLink
                    to='/edit/1'
                    className={({ isActive }) =>
                        isActive ? 'active nav-link' : 'nav-link'
                    }
                >
                    Редактирование заявки
                </NavLink>
            </div>
        </nav>
    );
}
