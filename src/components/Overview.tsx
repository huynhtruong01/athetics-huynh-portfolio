import { MdWavingHand } from 'react-icons/md'
import avatar from '../assets/images/bg-human.jpg'
import { ButtonScrollDown } from './common'

export interface OverviewProps {}

export function Overview(props: OverviewProps) {
    return (
        <section id="overview" className="w-full h-[calc(100vh_-_68px)] py-10">
            <div className="container m-auto h-full px-4 relative">
                <div className="overview__main flex items-center justify-center gap-10">
                    <div className="overview__content flex-1">
                        <h1 className="overview__title text-5xl font-bold text-gray-800 leading-15 mb-3">
                            Hi <MdWavingHand className="inline-block text-yellow-400" />
                            <br />
                            I'm Athetics Huynh
                        </h1>
                        <p className="overview__detail text-gray-800 mb-6 w-[500px]">
                            I'm{' '}
                            <span className="text-[#3F3B6C] font-bold">
                                Fullstack Developer
                            </span>
                            , I'm come from Vietnam. I'm very passionate and dedicated to
                            my work.
                        </p>

                        <a
                            className="inline-block"
                            href="https://github.com/huynhtruong01"
                            target="_blank"
                        >
                            <button className="flex items-center gap-2 bg-[#404258] text-white rounded-2xl font-medium py-3 px-4 hover:bg-[#393E46] duration-300 ease-in-out">
                                My resume
                            </button>
                        </a>
                    </div>
                    <div className="overview__img flex-1">
                        <div className="w-[80%] rounded-xl overflow-hidden m-auto">
                            <img src={avatar} alt="Athetics Huynh" />
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 w-full">
                    <ButtonScrollDown />
                </div>
            </div>
        </section>
    )
}
