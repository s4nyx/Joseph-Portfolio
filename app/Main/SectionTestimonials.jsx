/* eslint-disable react/jsx-key */
import { useCallback, useEffect, useRef, useState, memo } from "react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./Carousel/EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import { Send } from "lucide-react";
import Image from "next/image";

gsap.registerPlugin(SplitText, ScrollTrigger);

const SectionTestimonials = () => {
  const subheadlineBoxRef = useRef();
  const titleRef = useRef();
  const emblaWrapperRef = useRef();

  // GSAP ANIMATIONS

  useEffect(() => {
    // subheadline box animation
    gsap.to(subheadlineBoxRef.current, {
      opacity: 1,
      overwrite: true,
      filter: "blur(0px)",
      duration: 0.5,
      ease: "power1",
      scrollTrigger: { trigger: subheadlineBoxRef.current, start: "top 95%" },
    });

    // headline text animation
    const titleSplit = new SplitText(titleRef.current, { type: "words" });
    gsap.fromTo(
      titleSplit.words,
      {
        "will-change": "opacity, transform",
        filter: "blur(8px)",
        opacity: 0,
        yPercent: 50,
      },
      {
        opacity: 1,
        filter: "blur(0px)",
        overwrite: true,
        yPercent: 0,
        stagger: 0.05,
        duration: 0.75,
        ease: "power2",
        scrollTrigger: { trigger: titleRef.current, start: "top 95%" },
      }
    );

    // embla wrapper animation
    gsap.to(emblaWrapperRef.current, {
      opacity: 1,
      filter: "blur(0px)",
      duration: 0.5,
      ease: "power1",
      overwrite: true,
      scrollTrigger: { trigger: emblaWrapperRef.current, start: "top 95%" },
    });
  }, []);

  // EMBLA CAROUSEL

  const [emblaRef, emblaApi] = useEmblaCarousel({ dragFree: true });
  const [scrollProgress, setScrollProgress] = useState(0);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const onScroll = useCallback((emblaApi) => {
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
    setScrollProgress(progress * 100);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onScroll(emblaApi);
    emblaApi
      .on("reInit", onScroll)
      .on("scroll", onScroll)
      .on("slideFocus", onScroll);
  }, [emblaApi, onScroll]);

  return (
    <section className="testimonials">
      <div className="testimonials-content">
        {/* <div className="textbox testimonials-content-textbox">
          <div className="subheadline-box opacity-blur" ref={subheadlineBoxRef}>
            <Send className="subheadline-box-icon" />
            <h2 className="small-description grey">Testimonials</h2>
          </div>
          <div className="titlebox">
            <div className="titlebox-big-gradient" />
            <h1 className="subheadline white" ref={titleRef}>
              Don&apos;t Take Our Word For It! <br className="hide-on-mobile" />
              Hear It From Our Partners.
            </h1>
          </div>
        </div> */}
        <div className="text-white text-center text-7xl font-bold mb-12">
          My Previous Projects
        </div>
        <div className="opacity-blur" ref={emblaWrapperRef}>
          <div className="testimonials-carousel" ref={emblaRef}>
            <div className="testimonials-carousel-row">
              <div className="testimonials-item-padding" />
              <div className="testimonials-item">
                <div className="testimonials-item-content">
                  <div className="w-full h-full flex flex-col justify-between">
                    <Image
                      src="/images/pfp1.png"
                      width={1200}
                      height={1200}
                      className="w-full rounded-xl"
                      alt=""
                    />
                    <div className="flex w-full justify-center items-center  text-white text-2xl">
                      <a
                        href="https://www.sporesjourney.com/"
                        className="text-zinc-400 hover:text-zinc-50"
                        target="_blank"
                      >
                        Visit
                      </a>
                    </div>
                  </div>
                </div>
                <div className="testimonials-item-grid" />
              </div>
              <div className="testimonials-item">
                <div className="testimonials-item-content">
                  <div className="w-full h-full flex flex-col justify-between">
                    <Image
                      src="/images/personio.png"
                      width={1200}
                      height={1200}
                      className="w-full rounded-xl"
                      alt=""
                    />
                    <div className="flex w-full justify-center items-center  text-white text-2xl">
                      <a
                        href="https://earn.brewlabs.info/"
                        className="text-zinc-400 hover:text-zinc-50"
                        target="_blank"
                      >
                        Visit
                      </a>
                    </div>
                  </div>
                </div>
                <div className="testimonials-item-grid" />
              </div>
              <div className="testimonials-item">
                <div className="testimonials-item-content">
                  <div className="w-full h-full flex flex-col justify-between">
                    <Image
                      src="/images/pfp3.png"
                      width={1200}
                      height={1200}
                      className="w-full rounded-xl"
                      alt=""
                    />
                    <div className="flex w-full justify-center items-center  text-white text-2xl">
                      <a
                        href="https://earn.brewlabs.info/"
                        className="text-zinc-400 hover:text-zinc-50"
                        target="_blank"
                      >
                        Visit
                      </a>
                    </div>
                  </div>
                </div>
                <div className="testimonials-item-grid" />
              </div>
              <div className="testimonials-item">
                <div className="testimonials-item-content">
                  <div className="w-full h-full flex flex-col justify-between">
                    <Image
                      src="/images/pfp4.png"
                      width={1200}
                      height={1200}
                      className="w-full rounded-xl"
                      alt=""
                    />
                    <div className="flex w-full justify-center items-center  text-white text-2xl">
                      <a
                        href="https://program.crademaster.com/trade"
                        className="text-zinc-400 hover:text-zinc-50"
                        target="_blank"
                      >
                        Visit
                      </a>
                    </div>
                  </div>
                </div>
                <div className="testimonials-item-grid" />
              </div>

              <div className="testimonials-item-padding" />
            </div>
          </div>
        </div>

        <div className="testimonials-content-bottom">
          <div className="testimonials-content-bottom-buttons">
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />
          </div>
          <div className="embla__progress">
            <div
              className="embla__progress__bar"
              style={{ transform: `translate3d(${scrollProgress}%,0px,0px)` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(SectionTestimonials);
