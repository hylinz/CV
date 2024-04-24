import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import { Button } from "@/components/ui/button";
interface ApplicantProps {
  name: string;
  age: string;
  salary: string;
  availability: string;
  about: string;
  skills: {
    skillName: string;
    value: number;
  }[];
  quickFacts: string[];
  requirements: string[];
}

export const Applicant = ({
  name,
  age,
  salary,
  availability,
  about,
  skills,
  quickFacts,
  requirements,
}: ApplicantProps) => {
  return (
    <section className="flex justify-start items-center relative lg-px-10 py-14 h-full font-mono">
      <div className="flex flex-col w-full h-full bg-emerald-200/60 rounded shadow-lg p-5 border-2 border-black/20">
        <div className="flex w-full h-full">
          <div className="w-full flex flex-col mr-2.5">
            {/* header */}
            <div className="mb-5 flex w-full border-b-2 border-black/40 text-center">
              <div className="flex-1 w-full flex items-center border-r-2 border-black/40 mr-2.5">
                <h2 className="text-xl font-bold mr-2.5">Name: </h2>
                <span className="">{name}</span>
              </div>
              <div className="flex-1 w-full flex items-center border-r-2 border-black/40 mr-2.5">
                <h2 className="text-xl font-bold mr-2.5">Age: </h2>
                <span className="">{age}</span>
              </div>
              <div className="flex-1 w-full flex items-center border-r-2 border-black/40 mr-2.5">
                <h2 className="text-xl font-bold mr-2.5">Salary: </h2>
                <span className="">{salary}</span>
              </div>
              <div className="flex-1 w-full flex items-center border-black/40 mr-2.5">
                <h2 className="text-xl font-bold mr-2.5">Availability: </h2>
                <span className="">{availability}</span>
              </div>
            </div>
            {/* About */}
            <div className="w-full pb-5 border-b-2 border-black/40">
              <h3 className="font-bold text-xl text-nowrap text-center w-full">
                About me
              </h3>
              <span className="text-center">{about}</span>
            </div>
            <div className="w-full flex-1 space-y-2.5 py-2.5 border-b-2 border-black/40">
              {/* Skills yo */}
              <h3 className="font-bold text-xl">Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {skills &&
                  skills.length > 0 &&
                  skills.map((skill) => (
                    <div className="p-4 space-y-2" key={skill.skillName}>
                      <h4 className="font-mono font-bold">{skill.skillName}</h4>
                      <Progress value={skill.value} />
                    </div>
                  ))}
              </div>
            </div>
            {/* quick facts */}
            <div className="flex flex-col py-2.5 flex-1 border-b-2 border-black/40">
              <h3 className="font-bold text-xl">Quick facts</h3>
              <ul className="flex space-x-2.5 text-center h-full">
                {quickFacts &&
                  quickFacts.length > 0 &&
                  quickFacts.map((fact) => (
                    <li key={fact} className="flex items-center text-center space-x-2.5">
                      {fact}
                    </li>
                  ))}
              </ul>
            </div>
            {/* quick facts */}
            <div className="flex flex-col py-2.5 flex-1">
              <h3 className="font-bold text-xl">Requirements</h3>
              <ul className="flex space-x-2.5 text-center h-full">
                {requirements &&
                  requirements.length > 0 &&
                  requirements.map((requirement) => (
                    <li
                      key={requirement}
                      className="flex items-center space-x-2.5"
                    >
                      {requirement}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          {/* Skills and shit */}
          <aside className="px-5 flex flex-col text-center text-nowrap items-center border-l-2 border-black/40">
            <Image
              src="/steve.jpg"
              className="rounded-full overflow-hidden"
              width={100}
              height={100}
              alt="Picture of the author"
            />
            <h2 className="text-2xl">Other Stuff</h2>
            <div className="flex-col h-full flex">
                <div className="flex-1">
                  
                </div>
              <Button>Contact</Button>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Applicant;
