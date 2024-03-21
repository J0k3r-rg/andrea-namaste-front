'use client'
import { comments } from '@/app/UI/data/comments';
import CommentHome from './CommentHome';
import { useState } from 'react';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
export default function CarrouselComments() {

    const [current, setCurrent] = useState(0);

    const next = () => {
        setCurrent(current === comments.length - 1 ? 0 : current + 1);
    }

    const prev = () => {
        setCurrent(current === 0 ? comments.length - 1 : current - 1);
    }

    return (
        <div className='flex flex-row items-center relative'>
            <div className='absolute'>
            <MdNavigateBefore
                    className={`text-6xl text-[#E0C043] cursor-pointer ${current === 0 && 'hidden'}`}
                    onClick={prev}
                />
            </div>
            <div className='uppercase bg-[#D9D9D9] bg-opacity-50 flex flex-col gap-4 py-8 text-center px-4 lg:px-36 md:px-14'>
                {
                    comments.map((comment, index) => 
                        <CommentHome key={index} item={comment} hidden={current != index ? 'hidden' : ''}/>
                    )
                }
            </div>
            <div className='absolute right-0'>
            <MdNavigateNext
                    className={`text-6xl text-[#E0C043] cursor-pointer ${current === comments.length-1 && 'hidden'}`}
                    onClick={next}
                />
            </div>
        </div>
    )
}