import Image from "next/image";

export default function Banner(): React.JSX.Element {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-6"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center ">
          {/* Left side - Text content */}
          {/* Right side - Character image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative top-10">
              <Image
                src="/assets/me.png"
                alt="Ibrahim Memon - Software Engineer and Designer"
                width={300}
                height={300}
                className=" max-w-md absolute"
                priority
              />
              <Image
                src="/assets/me-glow.png"
                alt="Ibrahim Memon - Software Engineer and Designer"
                width={300}
                height={300}
                className="max-w-md "
                priority
              />
            </div>
          </div>
          <div className="flex-1 space-y-6">
            <div className="relative inline-block">
              <Image
                src="/assets/arrow.png"
                alt="Book"
                width={100}
                height={100}
                className="absolute "
                style={{ left: "-100px", top: "-50px" }}
              />
              <div style={{ bottom: 40, position: "relative" }}>
                <p className="text-white text-lg">
                  Hello! I Am{" "}
                  <span className="text-purple-400">Ibrahim Memon</span>
                </p>
              </div>
              <div className="absolute -bottom-2 left-8 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white/10"></div>
            </div>
            <div className="">
              <p className="text-2xl"> A Designer who </p>
              <h1 className="text-5xl tracking-tight lg:text-7xl font-semibold text-white leading-tight">
                Judges a book
                <br /> by its{" "}
                <span className="relative inline-block">
                  <Image src="/assets/circle.png" alt="Circle" width={200} height={200} className="absolute mt-2" />
                  <span className="bg-gradient-to-r from-violet-600 via-violet-400 to-violet-600 bg-clip-text text-transparent">
                    cover
                  </span>
                </span>
                ...
              </h1>
              <p className="text-md text-white/80">
                Because if the cover does not impress you what else can?
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-3 pt-15">
          <p className="text-5xl text-white font-bold">
            I&apos;m a Software Engineer.|
          </p>
          <p className="text-xl text-white/90 tracking-wide flex items-center gap-2">
            Currently, I&apos;m a Software Engineer at{" "}
            <Image src="/assets/fb.png" alt="Facebook" width={20} height={20} />
            <span className="text-blue-400 font-semibold">Facebook,</span>
          </p>
          <p className="text-lg text-white/80 max-w-2xl mt-15">
            A self-taught UI/UX designer, functioning in the industry for 3+
            years now. I make meaningful and delightful digital products that
            create an equilibrium between user needs and business goals.
          </p>
        </div>
      </div>
    </section>
  );
}
