import React from "react";
import ExperienceCard from "./ExperienceCard";
import styles from "../app/page.module.css";

const experienceData = [
  {
    id: "1e",
    companyName: "Wovv Tech",
    desination: "React Native Developer",
    duration: "Mar 2023 - May 2025",
    role: [
      "Responsibile for designing, developing User interface, integrating REST apis, fixing bugs and writing testcases",
      "Responsible for mentoring Interns",
    ],
  },
  {
    id: "2e",
    companyName: "Freelancer",
    desination: "Frontend Developer",
    duration: "Mar 2023 - Feb 2023",
    role: [
      "Was accountable for creating intuitive user interfaces, connecting backend services, resolving issues, and ensuring code reliability through testing.",
    ],
  },
  {
    id: "3e",
    companyName: "Taxmann Technology",
    desination: "React Native Intern",
    duration: "Oct 2021 - Jan 2022",
    role: [
      "Was responsible for designing UI",
      "Was Responsible for intergrating REST Apis",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <div className={styles.expreienceSectionComponent}>
      {experienceData.map((item) => {
        return <ExperienceCard item={item} key={item.id} />;
      })}
    </div>
  );
}
