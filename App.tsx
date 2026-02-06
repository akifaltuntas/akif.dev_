// App.tsx

import React from 'react';
import VisitorNotebook from './components/VisitorNotebook';
import LearningMap from './components/LearningMap';
import BackgroundParticles from './components/BackgroundParticles';
import Navbar from './components/Navbar';
import LearningModeSphere from './components/LearningModeSphere';
import StoryModal from './components/StoryModal';
import TimelineItem from './components/TimelineItem';
import ProjectCard from './components/ProjectCard';

const App: React.FC = () => {
  return (
    <div>
      <BackgroundParticles />
      <Navbar />
      <VisitorNotebook />
      <LearningMap />
      <LearningModeSphere />
      <StoryModal />
      <TimelineItem />
      <ProjectCard />
    </div>
  );
};

export default App;