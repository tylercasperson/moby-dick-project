import React from 'react';

const DragAndDrop = (props) => {
  return (
    <main
      style={{
        alignItems: 'flex-start',
        fontSize: '2vh',
      }}
      onDrop={props.onDrop}
      onDragOver={props.onDragOver}
      onDragEnter={props.onDragEnter}
      onDragLeave={props.onDragLeave}
    >
      <h3 style={{ width: '40vw', textAlign: 'center', color: props.warningColor }}>
        {props.warningMessage}
      </h3>
      <section
        style={{
          margin: '1rem',
          padding: '1vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          flexWrap: 'wrap',
          alignItems: 'center',
          width: '40vw',
          maxWidth: '100%',
          height: '20vh',
          border: '4px dashed ' + props.warningColor,
          borderRadius: '15px',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <div
          style={{
            height: '80%',
            width: '90%',
            textAlign: 'center',
          }}
        >
          <div style={{ display: 'flex', height: '3vh' }}>
            <i
              style={{
                fontSize: '3vh',
                marginLeft: props.marginIcon,
                marginRight: props.marginIcon,
                color: props.warningColor,
              }}
              className='fas fa-file-upload'
            ></i>
            <p
              style={{
                width: '90%',
                alignSelf: 'center',
                fontSize: '1.9vh',
                color: props.warningColor,
              }}
            >
              {props.file}
            </p>
          </div>

          <div
            style={{
              lineHeight: '1.9vh',
            }}
          >
            <p style={{ marginBottom: '0.5vh' }}>Drop your .pdf files here!</p>
            <span style={{ color: '#0645AD' }} onClick={props.onClick}>
              Or click to browse.
            </span>
            <input
              type='file'
              name='fileToUpload'
              ref={props.fileToUpload}
              onInputCapture={props.onInput}
              hidden
            />
          </div>
          <p
            style={{
              position: 'absolute',
              lineHeight: '1.4vh',
              bottom: 0,
              left: 0,
              right: 0,
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          ></p>
        </div>
      </section>
    </main>
  );
};

export default DragAndDrop;
