import store from '@/store'
type RootState = ReturnType<typeof store.getState>

interface Window{
    __REDUX_DEVTOOLS_EXTENSION__: function
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function
}