import React, { useState } from "react";
import { teams, orderedYears } from "../data/team"; 
import TeamSection from "../components/team/TeamSection";

const Teams: React.FC = () => {
  const [activeYear, setActiveYear] = useState(orderedYears[0]);
  const activeTeam = teams[activeYear];

  return (
    <section className="bg-[#0f1f3d] min-h-screen pt-32 pb-16 px-6">
      {/* Removed "Our Team" heading as requested */}

      <div className="mt-16">
        <TeamSection
          facultyAdvisors={activeTeam.facultyAdvisors}
          founder={activeTeam.founder}
          coreCommittee={activeTeam.coreCommittee}
          showFaculty={true}
          years={orderedYears}
          activeYear={activeYear}
          onYearChange={setActiveYear}
        />
      </div>
    </section>
  );
};

export default Teams;
