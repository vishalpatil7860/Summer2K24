import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaArchway, FaCity, FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import prs from "../public/prs.png";
import kets from "../public/kets.png";
import adas from "../public/adas.png";
import qas from "../public/qas.png";
import had from "../public/had.png";
import ccfd from "../public/ccfd.png";
import hdc from "../public/hdc.jpg";
import mri from "../public/mri.png";
import netflix from "../public/Netflix.png";
import archrock from "../public/archrock.png"
import fort from "../public/fort.png"
import downtown from "../public/downtown.png"
import windermere from "../public/windermere.png"
import biketrail from "../public/lake huron bike trail.png"
import { GiDutchBike } from "react-icons/gi";
import { WiSunset } from "react-icons/wi";
import { MdTimeToLeave } from "react-icons/md";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  // {
  //   name: "About",
  //   hash: "#about",
  // },
  {
    name: "Things To Do",
    hash: "#thingstodo",
  },
  // {
  //   name: "Skills",
  //   hash: "#skills",
  // },
  {
    name: "Itinerary",
    hash: "#experience",
  },
  // {
  //   name: "Leaving Note",
  //   hash: "#contact",
  // },
] as const;

export const experiencesData = [
  {
    title: "Arch Rock & Windermere Point",
    // location: "PrismGen AI",
    description:
      "Check-in at hotel/Airbnb, rent out bikes and travel to visit the Arch Rock and Windermere Point. Lunch at some cafe/restaurant on the way.",
    icon: React.createElement(FaArchway),
    date: "6th May",
  },
  {
    title: "Sunset at Beach",
    // location: "University of Michigan-Dearborn",
    description:
      "After the arch rock, we can go for a walk/bike ride to a beach and enjoy sunset with some food, then return to hotel/Airbnb, freshen up and go for stargazing if the sky is clear or could have a bonfire if available.",
    icon: React.createElement(WiSunset ),
    date: "6th May",
  },
  {
    title: "Circling Mackinac Island",
    // location: " Pune, India",
    description:
      "It's gonna be a long bike ride, we can start late morning, with light lunch and pack some food, visit beaches, forests, caves, forest trails on the way and circle the island.",
    icon: React.createElement(GiDutchBike),
    date: "7th May",
  },
  {
    title: "Downtown",
    // location: " Pune, India",
    description:
      "On the way we can visit downtown late afternoon for some shopping or have some local cuisine.",
    icon: React.createElement(FaCity  ),
    date: "7th May",
  },
  {
    title: "Sunset at Beach",
    // location: " Pune, India",
    description:
      "On the way back to our hotel/Airbnb, we can go for a walk/bike ride to a beach and enjoy sunset with some food, then probably rest after some bonfire/bakchodi/food.",
    icon: React.createElement(WiSunset ),
    date: "7th May",
  },
  {
    title: "Check-out & Departure",
    // location: "Pune, India",
    description:
      "Probably gonna be sad as the trip comes to an end...but might see some other spots on our way back to the boring Dearborn :)",
    icon: React.createElement(MdTimeToLeave ),
    date: "8th May",
  },
  
] as const;

export const projectsData = [
  {
    title: "Arch Rock",
    description:
      "This natural limestone arch is a must-see attraction on the island, offering breathtaking views of Lake Huron.",
    tags: ["Scenic View", "Arch", "Beach", "Forest"],
    link: "https://www.mackinacisland.org/activities/arch-rock/",
    imageUrl: archrock,
  },
  {
    title: "Fort Mackinac",
    description:
      "Learn about the island's military history at this well-preserved fort, which offers stunning views of the surrounding area.      ",
    tags: ["Fort", "istorical Monument", "History"],
    link: "https://www.mackinacparks.com/parks-and-attractions/fort-mackinac/",
    imageUrl: fort,
  },
  {
    title: "Downtown",
    description:
      "Filled with unique shopping destinations, great dining, and the bustling activity of a waterfront town, Mackinac’s downtown is a flurry of horses, bicycles and shoppers. Go in and out of fudge shops, explore the docks, and watch the water. Participate in an architectural walking tour or begin to journey through time at the island’s many historic sites.",
    tags: ["City", "Shopping", "Shops"],
    link: "https://www.mackinacisland.org/blog/downtown-mackinac-something-everyone/",
    imageUrl: downtown,
  },
  {
    title: "WINDERMERE POINT",
    description:
    "Windermere Point is a green scape where the art of stone skipping is practiced every day. You will find some perfect skipping rocks there or you be like the professionals that gather at Windermere Point every July 4th for the W.T. Rabe Stone Skipping Competition.",
    tags: ["Beach", "Shore", "Stone Skipping", "Scenic"],
    link: "https://www.mackinacisland.org/blog/best-spots-for-stoneskipping-on-mackinac-island/",
    imageUrl: windermere,
  },
  {
    title: "Circling Mackinac Island",
    description:
      "Circling Mackinac Island on the M-185 is the ultimate easygoing bike ride. You spend most of your ride inside Mackinac Island State Park, which protects 80% of the island. Forests and beaches are your constant companions.",
    tags: ["Bike Trails", "Forests", "Beaches", "Scenic Views"],
    link: "https://trailsandtravel.com/circling-mackinac-island/",
    imageUrl: biketrail,
  },
  
  
] as const;

export const skillsData = [
  "Python",
  "R",
  "SQL",
  "TensorFlow",
  "Keras",
  "Matplotlib",
  "NumPy",
  "Pandas",
  "Scikit-learn",
  "Microsoft Power BI",
  "Tableau",
  "R-Studio",
  "Microsoft Excel",
  "Git",
  "Jira",
  "Azure Data Studio",
  "Jupyter Notebook",
  "Creativity",
  "Time Management",
  "Internet Research Skills",
  "Integrity",
  "Data Cleaning",
  "Prompt Engineering",
  "Applied Regression Analysis",
] as const;

