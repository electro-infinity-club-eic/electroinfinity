import React from "react";
import TeamCard from "./TeamCard";
import { Member } from "../../data/team/types";
import YearTabs from "./YearTabs";

type Props = {
  facultyAdvisors?: Member[];
  founder?: Member[];
  coreCommittee: Member[];
  showFaculty?: boolean;
  years: string[];
  activeYear: string;
  onYearChange: (year: string) => void;
};

// Helper to chunk array into groups of n
function chunkArray<T>(arr: T[], size: number): T[][] {
  return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );
}

const TeamSection: React.FC<Props> = ({
  facultyAdvisors = [],
  founder = [],
  coreCommittee,
  showFaculty = true,
  years,
  activeYear,
  onYearChange,
}) => {
  const leaders = coreCommittee.slice(0, 2);
  const otherMembers = coreCommittee.slice(2);
  const otherChunks = chunkArray(otherMembers, 3);

  return (
    <div className="space-y-16 -mt-4">
      {/* Faculty Advisors */}
      {showFaculty && facultyAdvisors.length > 0 && (
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-cyan-300 mb-8">
            Faculty Advisors
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {facultyAdvisors.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      )}

      {/* Founder */}
      {founder.length > 0 && (
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-cyan-300 mb-8">
            Founder
          </h2>
          <div className="flex justify-center gap-8 flex-wrap">
            {founder.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      )}

      {/* Core Committee */}
      {coreCommittee.length > 0 && (
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-cyan-300 mb-6">
            Core Committee
          </h2>

          {/* Year Buttons (Moved Here) */}
          <div className="text-center mb-8">
            <YearTabs years={years} activeYear={activeYear} onChange={onYearChange} />
          </div>

          {/* Leaders */}
          <div className="flex justify-center gap-8 mt-8 flex-wrap">
            {leaders.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>

          {/* Other Members in rows of 3, last row centered if <3 */}
          {otherChunks.map((chunk, idx) => (
            <div
              key={idx}
              className="flex gap-8 mt-8 flex-wrap justify-center"
            >
              {chunk.map((member) => (
                <TeamCard key={member.id} member={member} />
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TeamSection;
