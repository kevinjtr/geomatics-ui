import React from "react";

export const TrainingMaterial = (props) => {
  return (
    <>
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Training Materials</h2>
        </div>
      </div>
    </div>
    <body style={{display:"flex", justifyContent:"center"}}>
      <div>
        <h4>SOP</h4>
        <ul>
          <li>
            <p>Videos and PDFs</p>
          </li>
          <li>
            <p>PowerPoint Presentations</p>
          </li>
          <li>
            <h5>SAJ Data Management and CAD Groups</h5>
            <ul>
              <li>
                <p>Group 1</p>
              </li>
              <li>
                <p>Group 2</p>
              </li>
              <li>
                <p>Group 3</p>
              </li>
            </ul>
          </li>
          <li>
            <h5>GIS USER GROUPS</h5>
          </li>
        </ul>
        <p>Really, I'm ultimately unsure of how I should design this page as I can't envision it too well. But we'll talk it over soon and hopefully I'll have some template designed here</p>
      </div>
    </body>
    </>
  );
};
