import React from 'react';
import classes from './Collab.module.css';

const Collab = ({ text }) => {
  const formatText = (inputText) => {
    const regex = /\\b(.*?)\\b/g;
    const parts = [];
    let lastIndex = 0;

    inputText.replace(regex, (match, p1, offset) => {
      if (lastIndex < offset) {
        parts.push(inputText.slice(lastIndex, offset));
      }

      parts.push(
        <span key={offset} style={{ fontWeight: 'bold', color: 'var(--secondarycolor)', fontSize: '1.5rem' }}>
          {p1}
        </span>
      );

      lastIndex = offset + match.length;
    });

    if (lastIndex < inputText.length) {
      parts.push(inputText.slice(lastIndex));
    }

    return parts;
  };

  return (
    <div className={classes.collabframe}>
      <div className={classes.collab}>
        <p>{formatText(text.text)}</p>
        <div className={classes.scrollingContainer}>
          <div className={classes.scrollingContent}>
            <img src="https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2FDubaiPrivateAdventure.png?alt=media&token=604473db-c4a6-4268-9b23-331ccee129a0" alt="Dubai Private Adventure" />
            <img src="https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2FHashmiLawGroup.png?alt=media&token=04d975d8-c55d-480a-8bdc-3413be21fd3d" alt="Hashmi Law Group" />
            <img src="https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2FLEVEL%208.png?alt=media&token=83b6fc59-589c-43c5-9f1a-fa9ee046203f" alt="Level 8" />
            <img src="https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2FSpainExchange.png?alt=media&token=ea057990-b548-4282-b90e-17a209f1680d" alt="Spain Exchange" />
            <img src="https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2FThommenAircraft.png?alt=media&token=e27463c8-0da8-411b-b44a-a8696959e5c2" alt="Thommen Aircraft" />
            <img src="https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2FTourDubai.jpeg?alt=media&token=c48c3550-6cba-4bd1-98c3-3dfe47a0ad33" alt="Tour Dubai" />
            <img src="https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2Faltdubai.png?alt=media&token=1082ed20-5142-4ea2-99dd-1f9c3217b882" alt="Alt Dubai" />
            <img src="https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2FDubaiPrivateAdventure.png?alt=media&token=604473db-c4a6-4268-9b23-331ccee129a0" alt="Dubai Private Adventure" />
            <img src="https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2FHashmiLawGroup.png?alt=media&token=04d975d8-c55d-480a-8bdc-3413be21fd3d" alt="Hashmi Law Group" />
            <img src="https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2FLEVEL%208.png?alt=media&token=83b6fc59-589c-43c5-9f1a-fa9ee046203f" alt="Level 8" />
            <img src="https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2FSpainExchange.png?alt=media&token=ea057990-b548-4282-b90e-17a209f1680d" alt="Spain Exchange" />
            <img src="https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2FThommenAircraft.png?alt=media&token=e27463c8-0da8-411b-b44a-a8696959e5c2" alt="Thommen Aircraft" />
            <img src="https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2FTourDubai.jpeg?alt=media&token=c48c3550-6cba-4bd1-98c3-3dfe47a0ad33" alt="Tour Dubai" />
            <img src="https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2Faltdubai.png?alt=media&token=1082ed20-5142-4ea2-99dd-1f9c3217b882" alt="Alt Dubai" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collab;