import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/Routes/Routes';
import 'react-photo-view/dist/react-photo-view.css';

function App() {
  return (
    <div className='md:w-[85%] mx-auto'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
