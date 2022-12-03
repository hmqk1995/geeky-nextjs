/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, SyntheticEvent } from 'react';
import classNames from 'classnames';
import Dialog from '@mui/material/Dialog';

export default function EnrollModalBtn({ email = '', small = false }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = (e: SyntheticEvent) => {
    e.preventDefault();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    window.onmessage = function (e) {
      if (e.data == 'load') {
        // wait till iframe is loaded
        const $iframe: HTMLIFrameElement = document.querySelector(
          '.enroll-modal-iframe'
        )!;
        $iframe.contentWindow!.postMessage(`addEmail:${email}`, origin);
        console.log('iframe', document.querySelector('.enroll-modal-iframe'));
      }
    };
  }, [open]);

  return (
    <div>
      <a
        className={classNames([
          'button',
          small ? 'button-sm' : '',
          'button-primary',
          'button-block',
          'button-shadow',
        ])}
        onClick={handleClickOpen}
      >
        Get early access
      </a>
      <Dialog
        fullWidth
        open={open}
        onClose={handleClose}
        className='enroll-modal'
      >
        <div className='enroll-modal-inner'>
          <iframe
            src='/talent-form/index.html'
            className='enroll-modal-iframe'
          ></iframe>
        </div>
      </Dialog>
    </div>
  );
}
