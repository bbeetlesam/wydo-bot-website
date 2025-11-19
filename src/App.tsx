import { Route, Routes } from 'react-router-dom';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header'
import Home from './components/layout/Home'
import { LangProvider } from './context/LangContext';

function App() {
  return (
    <div className="max-w-[110rem] mx-auto px-16 min-h-screen flex flex-col overflow-hidden">
      <LangProvider>
        <Header />
        <div className="px-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/predict" element={<Home />} />
            <Route path="/about" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </LangProvider>
    </div>
  )
}

export default App;
