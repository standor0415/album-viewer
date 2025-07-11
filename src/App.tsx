import { BrowserRouter, Routes, Route } from 'react-router-dom';
// 페이지 컴포넌트
import MainPage from '@pages/index/index';
import { RecoilRoot } from 'recoil';
import BookmarkPage from '@pages/bookmark/index';

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<MainPage />} />
          <Route path="/search/:id" element={<MainPage />} />
          <Route path="/bookmark" element={<BookmarkPage />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
