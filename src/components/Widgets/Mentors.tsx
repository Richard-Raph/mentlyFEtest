import Avatar from "../Avatar";

export default function Mentors() {
    return (
        <div className="p-2 space-y-3">
            <div className="grid gap-3">
                <div className="flex items-center py-2 xl:py-0.5 2xl:py-2 justify-between border-b border-[#F3F3F3]">
                    <div className="flex items-center gap-2">
                        <Avatar
                            size="md"
                            images={[{ src: "/profile3.webp", alt: "Maxwell Smith", tooltip: "Maxwell Smith" }]}
                        />
                        <div className="grid content-between">
                            <p className="text-[#4F4F4F] font-bold text-[14px]">Maxwell Smith</p>
                            <span className="text-[#7D8DA6] font-[400] text-[10px]">Product Designer</span>
                        </div>
                    </div>
                    <button className="bg-[#6F01D0] py-1 px-3 text-[#F1EEFF] font-normal text-[16px] rounded-2xl cursor-pointer">Message</button>
                </div>
                <div className="flex items-center py-2 xl:py-0.5 2xl:py-2 justify-between border-b border-[#F3F3F3]">
                    <div className="flex items-center gap-2">
                        <Avatar
                            size="md"
                            images={[{ src: "/profile7.webp", alt: "Adeati Samuel", tooltip: "Adeati Samuel" }]}
                        />
                        <div className="grid content-between">
                            <p className="text-[#4F4F4F] font-bold text-[14px]">Adeati Samuel</p>
                            <span className="text-[#7D8DA6] font-[400] text-[10px]">Product Designer</span>
                        </div>
                    </div>
                    <button className="bg-[#6F01D0] py-1 px-3 text-[#F1EEFF] font-normal text-[16px] rounded-2xl cursor-pointer">Message</button>
                </div>
            </div>
            <button className="bg-[#DDD6FB] text-[#6F01D0] text-[16px] cursor-pointer w-full h-11 xl:h-10 2xl:h-11 py-1 px-3 rounded-3xl">See all</button>
        </div>
    );
}
