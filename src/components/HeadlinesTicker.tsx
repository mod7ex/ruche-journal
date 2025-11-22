import '~/assets/headlines-ticker.css'

const headlines = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    "consectetur adipisicing elit consectetur adipisicing elit",
    "Sequi veritatis, optio consectetur adipisicing elit",
    "dolorum corrupti et impedit tempora ea vel",
    "amet minima enim saepe alias"
]

export default function () {
    return (
        <div className="w-full bg-blue-800 text-white overflow-hidden">
            <div className="whitespace-nowrap flex items-center">
                <div className="ticker-animation ticker-paused flex gap-20 py-2 px-4">
                    {headlines.map((text, i) => (
                        <span key={i} className="font-semibold text-sm md:text-base">
                            🚨 {text}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};