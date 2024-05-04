import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import {WorkCompany, WorkDescription, WorkDiv, WorkLeftContent, WorkPosition, WorkRightContent, WorkTimeline } from './style';

const experiences = [
    {
        company: "Ecomindo Saranacipta",
        position : "Associate Software Developer",
        description : "I develop a back-end systems for banking applications, adept at delivering secure and robust software solutions that streamline financial operations and enhance user experiences.",
        timeline : "Feb 2024 - Present · Bandung, Indonesia"
    },
    {
        company: "Barrans Global Mandiri",
        position : "Backend Developer",
        description : "Starting as an intern, I contributed to various projects utilizing Spring Boot. Collaborating with senior developers, I embraced agile methodologies and honed my technical skills. Within a year, I was promoted to a full-time position, taking the lead in developing efficient and secure back-end systems and APIs that enhance business innovation and customer engagement in the insurance, ISP, and F&B sectors.",
        timeline : "Oct 2019 - Jan 2024 · Bandung, Indonesia"
    }

]
export function WorkExperienceTimeline(){
    
    return(
        <Timeline sx={{
            [`& .${timelineItemClasses.root}:before`]: {
              flex: 0,
              padding: 0,
            },
          }}>
            {experiences.map(experience => {
                return(
                    <TimelineItem>
                        <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <WorkDiv>
                                <WorkLeftContent>
                                    <WorkCompany>
                                        {experience.company}
                                    </WorkCompany>
                                    <WorkPosition>
                                        {experience.position}
                                    </WorkPosition>
                                </WorkLeftContent>
                                <WorkRightContent>
                                    <WorkDescription>
                                        {experience.description}
                                    </WorkDescription>
                                    <WorkTimeline>
                                        {experience.timeline}
                                    </WorkTimeline>
                                </WorkRightContent>
                            </WorkDiv>
                        </TimelineContent>
                    </TimelineItem>
                )
            })}
        </Timeline>
    );
}