import { Theme } from "@radix-ui/themes";
import "../assets/CSS/index.css";
// import DarkMode from '../Components/Features/DarkMode';
import { useState } from "react";
// import Navbar from '../Components/Layout/Navbar';
import Header from "../Components/Layout/Header";
import TextSlide from "../Components/UI/TextSlide";
// import Members from '../Components/Features/Members';
import Button from "../Components/UI/MemberButton";
import TextEffect from "../Components/UI/TextEffect";
import Menu from "../Components/Layout/Menu";
import Welcomemsg from "../Components/Layout/Welcomemsg";
import ScalingLogo from "../Components/UI/ScalingLogo";
import Navbar2 from "../Components/Layout/Navbar2";
import Footer from "../Components/Layout/Footer";
import EventSlider from "../Components/Features/EventSlider";
import TeacherCard from "./../Components/UI/TeacherCard";
import ImageSlide from "../Components/Features/Imageslide";
import RaihanSir from "../assets/images/pooto/M. Raihan.jpg";
import InzamamSir from "../assets/images/pooto/Md. Inzamam-Ul-Hossain.jpg";
import PeyaMaam from "../assets/images/pooto/Zahrul Jannat Peya.jpg";
import GradientBackground from "../Components/UI/GradientBackground";
import AnimatedBG from "../Components/UI/AnimatedBG";
import CoreMembers from "../Components/Features/CoreMembers";
// import { Divide } from 'lucide-react';
import { Divider } from "@heroui/divider";
import SideMenu from "../Components/Features/SideMenu";
import Recent from "../Components/Features/Recent";

const HomePage = () => {
  const [className, setClassName] = useState("");


  const updateClassName = (newClass) => {
    setClassName(newClass);
  };

  const contents = [
    {
      img: [RaihanSir],
      name: "M. Raihan",
      position: "Advisor",
      url: {
        facebook: "https://www.facebook.com/memraihan",
        linkedin: "https://www.linkedin.com/in/mraihanme/?original_referer=https%3A%2F%2Fwww.mraihan.me%2F",
        github: "https://github.com/memraihan",
      },
    },

    {
      img: [InzamamSir],
      name: "Md. Inzamam-Ul-Hossain",
      position: "Moderator",
      url: {
        facebook: "",
      },
    },

    {
      img: [PeyaMaam],
      name: "Zahrul Jannat Peya",
      position: "Moderator",
      url: {
        facebook: "",
      },
    },
  ];

  return (
    <div className="bg-gray-800">
      <Theme appearance={className}>
        <Header></Header>
        {/* <Navbar></Navbar> */}
        <Navbar2></Navbar2>
        {/* <DarkMode updateClassName={updateClassName}></DarkMode> */}
        <TextSlide></TextSlide>
        {/* <Menu></Menu> */}
        <div className="absolute fixed translate-y-8 z-3">
          {/* <SideMenu></SideMenu> */}
        </div>
        <TextEffect></TextEffect>
        <Welcomemsg></Welcomemsg>
        <h1 className=" recent font-bold py-5 text-5xl text-[#15A6E1] ">Recent Activity</h1>
        {/* <EventSlider></EventSlider> */}
        <Recent></Recent>
        <ImageSlide></ImageSlide>
        <div className="flex justify-center">
          <hr className="my-12 w-[1525px] h-[0.3px] border-t-0 bg-gray-800 opacity-100 dark:opacity-50" />
        </div>
        <h1 className="flex justify-center text-4xl font-bold text-[#15A6E1] underline underline-offset-7">
          Advisory Board
        </h1>
        <div className="flex teacher justify-center gap-7 ">
          <TeacherCard cont={contents[0]}></TeacherCard>
          <TeacherCard cont={contents[1]}></TeacherCard>
          <TeacherCard cont={contents[2]}></TeacherCard>
        </div>
        <h2 className="flex mt-[5rem] justify-center text-4xl text-[#15A6E1] font-bold underline underline-offset-6">
          Our Elected Members
        </h2>
        {/* <Members></Members> */}
        <CoreMembers></CoreMembers>
        <Button></Button>
        <div className="flex justify-center">
          <hr className="my-10 w-[1525px] h-[0.3px] border-t-0 bg-gray-800 opacity-100 dark:opacity-50" />
        </div>
        <div className="flex justify-center">
          <hr className="my-10 w-[1525px] h-[0.3px] border-t-0 bg-gray-800 opacity-100 dark:opacity-50" />
        </div>
        <ScalingLogo></ScalingLogo>
        <GradientBackground></GradientBackground>
        <AnimatedBG></AnimatedBG>
        <Footer></Footer>
      </Theme>
    </div>
  );
};

export default HomePage;
