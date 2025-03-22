const GeminiChatBar = () => {
    return (
        <div className="bg-zinc-800 h-full rounded-xl mx-auto w-full px-3 py-1">
            <div className="my-5 flex lg:w-4xl flex-col justify-start rounded-3xl border-1 border-amber-50 h-30 p-2 w-full mx-auto ">
                <div className="text-xl font-small text-gray-400 mx-4 my-2">
                    <input
                        placeholder="Ask Gemini"
                        className="bg-transparent w-full text-gray-200 focus:outline-none"
                    ></input>
                </div>
                <div className="mb-2 text-sm mt-1 flex items-center justify-between sm:mt-4">
                    <div className="flex gap-x-1.5 text-token-text-primary text-gray-300">
                        <div className="bg-zinc-700 rounded-full content-center flex items-center justify-center">
                            <button className="flex items-center justify-center">
                                <svg
                                    className="fill-gray-400 h-6 w-9"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 -960 960 960"
                                    fill="#e3e3e3"
                                >
                                    <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
                                </svg>
                            </button>
                        </div>
                        <div className="bg-zinc-700 rounded-full p-2 px-3">
                            Deep Research
                        </div>
                        <div className="bg-zinc-700 rounded-full p-2 px-3 ">
                            Canvas
                        </div>
                    </div>

                    <div className=" items-end">
                        <button className="p-2 flex items-center justify-center">
                            <svg
                                className="fill-gray-100 font-bold h-5 w-5"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 -960 960 960"
                            >
                                <path d="M480-400q-50 0-85-35t-35-85v-240q0-50 35-85t85-35q50 0 85 35t35 85v240q0 50-35 85t-85 35Zm0-240Zm-40 520v-123q-104-14-172-93t-68-184h80q0 83 58.5 141.5T480-320q83 0 141.5-58.5T680-520h80q0 105-68 184t-172 93v123h-80Zm40-360q17 0 28.5-11.5T520-520v-240q0-17-11.5-28.5T480-800q-17 0-28.5 11.5T440-760v240q0 17 11.5 28.5T480-480Z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GeminiChatBar;
