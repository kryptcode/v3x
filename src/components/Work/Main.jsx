import { useRecoilValue } from 'recoil'
import { darkModeState } from '../../atoms'
import data from '../../data.json'

const Main = () => {
  const darkMode = useRecoilValue(darkModeState)

  return (
    <div className={`${darkMode ? 'bg-[#111] text-white/80' : 'bg-white'}  flex-[6] flex items-center pb-11`}>
        <div className='flex-1'>
          <img src="https://i.ibb.co/WDxj7HX/Screenshot-2023-03-15-at-23-23-38-Arch-Studio-Home.png" alt="" />
        </div>

        <div className='flex-1 pt-10 px-12 divide-y-2'>
          <h5 className='text-7xl font-bold space-span'>WORK</h5>

          <div className='space-y-4 divide-y'>
            {
              data.map(item => (
                <div key={item.id} className='p-2 text-lg font-semibold'>
                  {item.name}
                </div>
              ))
            } 
          </div>
      </div>
    </div>
  )
}

export default Main