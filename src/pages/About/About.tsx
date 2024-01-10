import NavbarComponent from "../../components/Navbar/Navbar";
import AboutUs from "../../components/about/AboutUs";
import Hero from "../../components/hero/Hero";
import styles from "./about.module.scss";
import { aboutUsData, missionData } from "./demoData"

export default function About() {
    return (
        <div className={`${styles.about} container-fluid m-0 p-0 bg-pale w-100`}>
            <NavbarComponent />
            <Hero />
            <AboutUs reverseColumns={false} data={aboutUsData} />
            <AboutUs reverseColumns={true} data={missionData} />
        </div>
    )
}
