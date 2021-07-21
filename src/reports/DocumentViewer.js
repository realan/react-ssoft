// @flow

import * as React from "react";
import { useEffect } from "react";
import SSReport from "./ReportService";
// import SendMail from "components/SendMail/SendMail";

const DocumentViewer = ({ docTemplate, data }) => {
  const reporter = new SSReport();

  useEffect(() => {
    reporter.setTemplate(docTemplate.filename);
    reporter.setTemplateData(data);
    reporter.renderViewer();
    let file = reporter.makeFormFile();
    // document = getBase64(file);
    console.log("document", document);
    console.log("DOCUMENT VIEWER data", data);
  }, [docTemplate, data]);

  // function getBase64(file) {
  //   let reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onload = function () {
  //     document = reader.result;
  //     console.log("document", document);
  //     // setAttach(document);
  //   };
  //   reader.onerror = function (error) {
  //     console.log("Error: ", error);
  //   };

  //   return document;
  // }

  return (
    <div>
      <section id="viewer" />
    </div>
  );
};

export default DocumentViewer;
