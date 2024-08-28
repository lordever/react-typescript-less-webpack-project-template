import React, {FC, memo} from 'react';
import styles from './text.module.less';
import {testUtil} from "../../../utils/test.util";

interface TextProps {
    text: string;
}

const Text: FC<TextProps> = ({text}) => {
    const string = testUtil(true)

    return (
        <p className={styles.text}>
            {text}
            <br />
            {string}
        </p>
    );
};

export default memo(Text);