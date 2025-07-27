import React from 'react';
import { Container, Logo, LogoutBtn } from '../index';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTheme } from '../../ThemeContext';

function Header() {
  const authStatus = useSelector((state) => state.auth?.status);
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { name: 'Home', slug: '/', active: true },
    { name: 'Login', slug: '/login', active: !authStatus },
    { name: 'Signup', slug: '/signup', active: !authStatus },
    { name: 'All Posts', slug: '/all-posts', active: authStatus },
    { name: 'Add Post', slug: '/add-post', active: authStatus },
  ];

 
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md dark:bg-gray-900 dark:shadow-lg transition-colors duration-300">
      <Container>
        <nav className="flex items-center justify-between py-4">
          
          <div className="flex items-center space-x-2">
            <Link to="/">
              <Logo width="60px" />
            </Link>
          </div>

       
          <div className="flex items-center space-x-4">
            <ul className="flex items-center space-x-2">
              {navItems.map(
                (item) =>
                  item.active && (
                    <li key={item.name}>
                      <button
                        onClick={() => navigate(item.slug)}
                        className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-100 rounded-full transition dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-blue-900"
                      >
                        {item.name}
                      </button>
                    </li>
                  )
              )}
              {authStatus && (
                <li>
                  <LogoutBtn />
                </li>
              )}
            </ul>

            
            <button
              onClick={toggleTheme}  
              className="ml-2 px-3 py-1 text-sm bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 transition"
              title="Toggle Dark Mode"
            >
              🌓
            </button>

          </div>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
