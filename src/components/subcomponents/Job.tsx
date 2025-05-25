import React from 'react';

export const Job: React.FC<CVPositionProps> = ({ id, tasks, context, environement }) => {
    return (
        <div className='relative' key={id}>
            <p className='my-3'><strong>Context: </strong>{context}</p>
            <div className='ml-5'>
                {tasks.map((task, index) => (
                    <>
                        <p className='my-3' key={index}>{task}</p>
                    </>
                ))}
            </div>
            <>
                <p className='mt-4'><strong>Techincal Environemnt</strong></p>
                <div className='mx-3'>
                    {environement.map((env, index) => (
                        <>
                            <p className='my-3' key={index}>{env}</p>
                        </>
                    ))}
                </div>
            </>
        </div>
    )
}
