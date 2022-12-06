import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import "../UI/AccordianComp.css";

function AccordianComp(props) {
  return (
    <>
      <Accordion className="accordian">
        <AccordionSummary
          className="accordianSummary"
          expandIcon={
            <AddCircleIcon
              sx={{ fontSize: "3rem",color: "black"}}
            />
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h2 className="faqHeading">{props.heading}</h2>
        </AccordionSummary>
        <AccordionDetails className="accordianDetails">
          <span className="faqContent">{props.content}</span>
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export default AccordianComp;
