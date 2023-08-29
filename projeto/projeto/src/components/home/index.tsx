import * as styles from './styles';

import { PersonCheckFill, FileEarmarkLockFill } from 'react-bootstrap-icons';

export function Home() {
    
    
    return (
        <div style={styles.loginContainer}>
            <div style={styles.loginForm}>
                <div style={styles.inputGroup}>
                    <PersonCheckFill style={styles.icon} />
                    <input type="text" className="form-control" placeholder="Username" />
                </div>
                <div style={styles.inputGroup}>
                    <FileEarmarkLockFill style={styles.icon} />
                    <input type="password" className="form-control" placeholder="Password" />
                </div>
              <br/>
                <div style={styles.formContainer}>
                <div style={styles.inputGroup}>
                <button type="button" className="btn btn-primary btn-block">Login</button>
                </div>
                </div>
            </div>
        </div>
    );
}