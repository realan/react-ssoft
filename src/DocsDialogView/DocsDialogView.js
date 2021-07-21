import * as React from "react";
import Button from "@material-ui/core/Button";
// import Box from "@material-ui/core/Box";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DocumentViewer from "../reports/DocumentViewer";
// import invoiceData1 from "../../reports/invoiceTORG12Data.json";

const DocsDialogView = ({ open, onClose, data, template }) => {
  // const dataSample = invoiceData1;
  // console.log("RENDER DocsDialogView");
  const docTemplate = {
    filename: template,
  };

  // console.log("DocsDialogView docs data", data);
  // console.log("template", docTemplate.filename);

  return (
    <>
      <Dialog
        open={open}
        onClose={onClose}
        fullScreen={true}
        aria-labelledby="dialog-invoice"
      >
        <DialogContent>
          <DocumentViewer docTemplate={docTemplate} data={data} />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Закрыть
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DocsDialogView;
