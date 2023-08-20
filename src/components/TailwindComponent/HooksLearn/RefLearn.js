import React, { useEffect, useRef, useState } from "react";

const RefLearn = () => {
    let x = 0;
    const [y, setY] = useState(0);
    const z = useRef(0);

    //   console.log({ x, y, z });

    /***
    const ref = useRef(initialValue)
    ref not behave like: ref = 0
    ref behave like or it comes with object with current key as hardcoded and value will be initial value
    ref = {
        current: initial value
    }
    */
    // here i act like local temporary variable which hold the value between states
    const i = useRef(null);
    useEffect(() => {
        i.current = setInterval(() => {
            console.log("testing interval", Math.random());
        }, 1000);
        return () => clearInterval(i.current);
    }, []);

    //   let i;
    //   useEffect(() => {
    //     i = setInterval(() => {
    //       console.log("testing interval", Math.random());
    //     }, 1000);
    //     return () => clearInterval(i);
    //   }, []);

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div
                className={ ` border w-6/12 h-96 p-2 rounded-lg shadow-lg bg-slate-200
       `}
            >
                <h1 className="text-xl font-mono self-end">Ref</h1>

                <div>
                    <button
                        className="px-3 m-2 py-2 bg-orange-500 rounded-lg"
                        onClick={ () => {
                            x = x + 1;
                            console.log("x=" + x);
                            //   x is not rerender
                        } }
                    >
                        increase
                    </button>
                    <span className="font-bold text-xl">Let = { x }</span>
                </div>
                <div>
                    <button
                        className="px-3 m-2 py-2 bg-orange-500 rounded-lg"
                        onClick={ () => {
                            setY(y + 1);
                            console.log("y=" + y);
                            //   y is rerender
                        } }
                    >
                        increase
                    </button>
                    <span className="font-bold text-xl">State = { y }</span>
                </div>
                <div>
                    <button
                        className="px-3 m-2 py-2 bg-orange-300 rounded-lg"
                        onClick={ () => {
                            //   z = z + 1;
                            z.current = z.current + 1;
                            console.log("z=" + z.current);
                            //   z is not rerender
                        } }
                    >
                        increaseRef
                    </button>
                    <span className="font-bold text-xl">Ref = { z.current }</span>
                </div>
                <button
                    className="m-3 p-3 bg-red-900 text-white rounded-lg"
                    onClick={ () => {
                        clearInterval(i.current);
                    } }
                >
                    Stop testing
                </button>
            </div>
        </div>
    );
};

export default RefLearn;
