import React from 'react';
import './ProjectCard';
import './ProjectsTitle';
import ProjectsTitle from './ProjectsTitle';
import ProjectCard from './ProjectCard';
import './styles.css'
import TicTrackerPhoto from '../../assets/TicTracker.svg'
import GarageDoorOpener from '../../assets/GarageDoor.svg'
import CloudPantry from '../../assets/CloudPantry.svg'

function Projects() {
  return (
    <div className="projects flex column">
      <ProjectsTitle />
      <div className="row space-evenly flex">
        <ProjectCard
          title="Tic Tracker"
          projectName="Embedded Software Project"
          img={TicTrackerPhoto}
          location="Calgary, AB"
          date="May 2019"
          tags={["C++", "Python", "ESP-32", "Accelerometers", "PCB Design", "CAD", "Pitch Comp"]}>
          <div className="project-card-body">
            Currently movement disorder specialists have very little to quantify the effectiveness of their treatments.
            Our device records movements with an accelerometer and stores it into an SD card on a mobile battery powered microcontroller.
            Tic Tracker started with a competition called{' '}
          <a href="https://www.neuro-nexus.ca/" target="_blank" rel="noopener noreferrer">Neuro Nexus</a>
          , where our team won first in the research category. Our next step is to get some test results from patients! 
        </div>
        </ProjectCard>

        <ProjectCard
          title="Garage Door Opener"
          projectName="Embedded / Mobile Software Project"
          img={GarageDoorOpener}
          location="Calgary, AB"
          date="March 2019"
          tags={["C++", "JavaScript", "React Native", "ESP-32", "Accelerometers", "Sensors"]}>
          <div className="project-card-body">
            My family felt like we needed to be able to open our garage from our phones. So we took an ESP-32, ultrasonic, temperature, and light sensors to create a smart garage door opener. Using a custom React-Native application I wrote sitting on top of an App called Blynk, we could control it through our phones!
        </div>
        </ProjectCard>

        <ProjectCard
          title="Cloud Pantry"
          projectName="Mobile Software Project"
          img={CloudPantry}
          location="Calgary, AB"
          date="January 2019"
          tags={["TypeScript", "Python", "Raspberry Pi", "React Native", "AWS", "System Design", "Sensors"]}>
          <div className="project-card-body">
            Cloud Pantry was a project to upload the food items in your house to the cloud for ease of tracking. 
            Our system consisted of a weight scale, barcode scanner, arduino, raspberry pi, and a react native application. Once scanned and weighed, the item would be sent through our raspberry pi to AWS Lambda which would store it in DynamoDB.
        </div>
        </ProjectCard>
      </div>
    </div>
  );
}

export default Projects;