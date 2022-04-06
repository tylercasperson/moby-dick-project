import React, { useRef, useState } from 'react';
import DragAndDrop from '../layout/DragAndDrop';

const ImportFile = () => {
  const fileToUpload = useRef();

  const [marginIcon, setMarginIcon] = useState('50%');
  const [warningColor, setWarningColor] = useState('#424242');
  const [warningMessage, setWarningMessage] = useState();
  const [file, setFile] = useState();

  const activeFile = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setWarningColor('green');
  };

  const inactiveFile = () => {
    if (file === undefined) {
      setWarningColor('red');
    }
  };

  const onDrop = (e) => {
    e.preventDefault();
    console.log(e);
    const dataTransfer = e.dataTransfer;
    const files = dataTransfer.files;
    const fileArr = [...files];
    setFile(fileArr[0].name);
    setMarginIcon('0%');
    fileToUpload.current.files = files;

    checkForValidFile(fileArr[0].name);
  };

  const onClick = (e) => {
    e.target.nextSibling.click();
  };

  const onInput = (e) => {
    activeFile(e);
    let fileParts = e.target.value.split('\\');
    setFile(fileParts[fileParts.length - 1]);
    setMarginIcon('0%');
    checkForValidFile(fileParts[fileParts.length - 1]);
  };

  const checkForValidFile = (incomingFile) => {
    let fileParts = incomingFile.split('.');
    let fileType = fileParts[fileParts.length - 1];

    if (fileType === 'pdf') {
      checkInsideFile();
      setWarningColor('green');
    } else {
      setWarningColor('red');
      setWarningMessage('File type is not supported. Please use .pdf');
    }
  };

  const checkInsideFile = () => {
    console.log('checkInside');
  };

  return (
    <DragAndDrop
      onDrop={(e) => onDrop(e)}
      onDragOver={(e) => activeFile(e)}
      onDragEnter={(e) => activeFile(e)}
      onDragLeave={() => inactiveFile()}
      warningColor={warningColor}
      warningMessage={warningMessage}
      marginIcon={marginIcon}
      file={file}
      onClick={(e) => onClick(e)}
      onInput={(e) => onInput(e)}
      fileToUpload={fileToUpload}
    />
  );
};

export default ImportFile;
