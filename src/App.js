import { VscMail } from "react-icons/vsc";
import './App.css';

/**
 * 首页页面
 * @author inoro
 */
function App() {
  return (
    <div className="App">
      {/* 主体 */}
      <div className='w-full bg-[#f1f1f1] bg-[url("/src/assets/images/top-1.jpg")] bg-right-top bg-contain bg-no-repeat'>
        {/* 横栏 */}
        <div className='mx-14 my-6 flex items-center justify-between'>
          <div className='h-9 w-9 bg-sky-400 rounded-full bg-[url("/src/assets/images/logo.jpg")] bg-center bg-cover bg-no-repeat' ></div>
          <div className='flex items-center'>
              <div className='mr-8 text-xs text-slate-600 cursor-pointer hover:text-slate-700'>诗词</div>
              <div className='mr-8 text-xs text-slate-600 cursor-pointer hover:text-slate-700'>文章</div>
              <div className='transition-all duration-700 rounded border border-slate-300  hover:border-slate-400 hover:shadow px-5 py-1.5 text-xs text-slate-600 hover:text-slate-700 cursor-pointer flex items-center'>
                <VscMail className="text-lg mr-2 text-slate-600"/>
                联系我们
              </div>
          </div>
        </div>
        {/* 展示巨型诗词区域 */}
        <div className='p-10 flex items-center flex-col justify-center mt-20'>
          <div className="text-left text-gray-900">
            <h1 className='text-4xl subpixel-antialiased font-thin mb-4 relative'>
              旋开旋落旋成空，白发多情人更惜。
            </h1>
            <h1 className='text-4xl subpixel-antialiased font-thin mb-14 relative'>
              黄昏把酒祝东风，且从容。
            </h1>
            <p className="text-sm text-right text-gray-400">南宋 · 陆游《过南京弗鲁国平》</p>
          </div>
          
        </div>
        
      </div>


    </div>
  );
}

export default App;
