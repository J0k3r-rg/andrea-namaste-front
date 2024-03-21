import { CommentType } from "@/app/UI/data/types";


export default function CommentHome({item, hidden} : {item : CommentType, hidden : string | boolean}) {
    return(
        <div className={`${hidden} flex flex-col gap-4 transition-all duration-300 ease-in-out`}>
            <h3 className='font-bold text-xl'>{item.name}</h3>
            <p>
                {item.comment}
            </p>
            <h3 className='font-bold text-xl'>{item.service}</h3>
        </div>
    );
}