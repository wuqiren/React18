import Home from '@/views/Home'
import Page1 from '@/views/Page1'
import Page2 from '@/views/Page2'
import Login from '@/views/Login'
import Test from '@/views/Test'
import {Navigate} from 'react-router-dom'
const routes = [
    {
        path: '/',
        element:<Navigate to='/page1'/>
    },
    {
        path: '/login',
        element:<Test/>
    },
    {
        path: '/',
        element: <Home />,
        children: [
             {
                path: '/page1',
                element:<Page1/>
             },
            {
                path: '/page2',
                element:<Page2/>
            },
              {
                path: '/page3/page',
                element:<Page2/>
            },
                {
                path: '/page4/page',
                element:<Page2/>
            }
        ]
    },
    {
        path: '/home',
        element:<Home/>
    },
    {
        path: '*',
          element:<Navigate to="/page1" />
    }

]

export default routes