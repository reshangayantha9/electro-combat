import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './faq.css'
import LineGradient from '../../components/LineGradient';
const panels = [
  {
    label: 'Can you increase the weight limit of the robot?',
    content: 'Can\'t increase the weight limit of the robot. Maximum weight limit is the 15KG. you can refer the robot design rules for additional information.',
  },
  {
    label: 'When we use child bots, if they are damaged, are we considered lost?',
    content: 'yes.',
  },
  {
    label: 'No EMP and size of 450mm x 450mm isn\'t comfortable...',
    content: 'EMP is not allowed under any circumstances.',
  },
  {
    label: 'Do we need an introduction speaker?',
    content: 'Please be prepared to introduce your team and your robot when the media team does the interview.',
  },
  {
    label: 'Can you please provide us with a table with an electric power supply?',
    content: 'Yes, tables with electric power supplies will be provided at the service area. But you have to bring additional power extensions. '
  },
  {
    label: 'Can we know more details about the arena, such as the type of arena? we would like to know about the marking criteria?',
    content: 'All the arena details and marking criteria describe in the Tournament rule document.'
  },
  {
    label: 'Just want to know if we will be provided with information about the bot of the opponent we are to compete with?',
    content: 'NO, you can know about the competitor before the 15 minutes for every battle round.'
  },
  {
    label: 'Accommodation details?',
    content: 'No accommodation facility provided.'
  },
];

export default function AccordionComponent() {
  return (
    <div id="faq">
      <p className="font-playfair font-semibold text-4xl mb-5">
          FAQ <span className="text-red"></span>
          </p>
          <LineGradient width="w-1/3" />
          <br/>
          <br/>
      {panels.map((panel, index) => (
        <Accordion className="accordion-item" key={index}>
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon color='white'/>}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
            className="panel"
          >
            <Typography>{panel.label}</Typography>
          </AccordionSummary>
          <AccordionDetails className="details">
            <Typography>
            &#x2022;{" "}{panel.content}
            </Typography>
          </AccordionDetails>
        </Accordion>
        
      ))}
    </div>
  );
}
