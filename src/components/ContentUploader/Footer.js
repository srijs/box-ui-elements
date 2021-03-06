/**
 * @flow
 * @file Footer component
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from '../messages';
import { Button, PrimaryButton } from '../Button';
import { ERROR_CODE_UPLOAD_FILE_LIMIT } from '../../constants';
import './Footer.scss';

type Props = {
    isLoading: boolean,
    hasFiles: boolean,
    fileLimit: number,
    errorCode?: string,
    onCancel: Function,
    onClose?: Function,
    onUpload: Function
};

const Footer = ({ isLoading, hasFiles, errorCode, onCancel, onClose, onUpload, fileLimit }: Props) => {
    let message;
    switch (errorCode) {
        case ERROR_CODE_UPLOAD_FILE_LIMIT:
            message = <FormattedMessage {...messages.uploadErrorTooManyFiles} values={{ fileLimit }} />;
            break;
        default:
        // ignore
    }

    return (
        <div className='bcu-footer'>
            <div className='bcu-footer-left'>
                {onClose
                    ? <Button isDisabled={hasFiles} onClick={onClose}>
                        <FormattedMessage {...messages.close} />
                    </Button>
                    : null}
            </div>
            {message &&
                <div className='bcu-footer-message'>
                    {message}
                </div>}
            <div className='bcu-footer-right'>
                <Button isDisabled={!hasFiles} onClick={onCancel}>
                    <FormattedMessage {...messages.cancelUploads} />
                </Button>
                <PrimaryButton isDisabled={!hasFiles} isLoading={isLoading} onClick={onUpload}>
                    <FormattedMessage {...messages.upload} />
                </PrimaryButton>
            </div>
        </div>
    );
};

export default Footer;
