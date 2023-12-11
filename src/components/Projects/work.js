import Tilt from "react-parallax-tilt";
export default function work({ title, desc, tags, link, code, img }) {
  return (
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 45000,
      }}
      className="bg-[#0b212d]  rounded-2xl max-w-[362px]  h-full bg-gradient-to-r from-green-700 to-pink-800 p-[1px]"
    >
      <div className="bg-[#0b212d] w-full h-full rounded-2xl p-4 flex flex-col justify-between">
        <div>
          <div className="relative w-full rounded-2xl">
            <img
              src={img}
              alt={title}
              className="w-full h-full max-h-[200px] min-h-[200px] rounded-[10px] object-cover border-[1px] border-secondary"
            />
            <div className="absolute inset-0 flex justify-end m-3 ">
              <div
                onClick={() => window.open(code, "_blank")}
                className="bg-slate-800 w-9 h-9 rounded-full border-[1px] border-secondary flex items-center justify-center cursor-pointer "
              >
                <img
                  src={require("../../images/github.webp")}
                  alt={"github"}
                  className="w-4/5 h-4/5 object-contain"
                />
              </div>
              { link ?               <div
                onClick={() => window.open(link, "_blank")}
                className="bg-slate-800 w-9 h-9 rounded-full border-[1px] border-secondary flex items-center justify-center cursor-pointer "
              >
                <img
                  src={require("../../images/gotosite.webp")}
                  alt={"github"}
                  className="w-4/5 h-4/5 object-contain"
                />
              </div> : null}
            </div>
          </div>
          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{title}</h3>
            <p className="mt-2 text-secondary text-[14px]">{desc}</p>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2 text-[14px]">
          {tags.map((tag) => (
            <p
              key={tag.name}
              className={`font-medium text-${tag.color} py-0.5 px-1 bg-slate-800 rounded-sm shadow`}
            >
              {tag.name}
            </p>
          ))}
        </div>
      </div>
    </Tilt>
  );
}
