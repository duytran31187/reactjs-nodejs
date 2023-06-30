import { Form, NavLink, useRouteLoaderData } from 'react-router-dom'

import classes from './MainNagivation.module.css'
import { React } from 'react'
function MainNavigation () {
  const token = useRouteLoaderData('rootRouter')
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to="/"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            end
            >Home</NavLink>
          </li>
          <li>
            <NavLink to="/foods"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            >Foods order</NavLink>
          </li>
          <li>
            <NavLink to="/products"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            >Products</NavLink>
          </li>
          <li>
            <NavLink to="/users"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            >Customers</NavLink>
          </li>
          <li>
            <NavLink to="/events"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            >Events</NavLink>
          </li>
          {
            !token && <li>
              <NavLink
                to="/auth?mode=login"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Authentication
              </NavLink>
            </li>
          }

          {
            token && <li>
              <Form action="/logout" method="post">
                <button>Logout</button>
              </Form>
            </li>
          }

        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation
