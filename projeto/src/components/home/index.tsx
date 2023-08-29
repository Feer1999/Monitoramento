import * as styles from './styles';
import { PersonCheckFill, FileEarmarkLockFill } from 'react-bootstrap-icons';
import { Container, Login, InputGroup, FormContainer} from "./styles"


export function Home() {
    const redirectToRecordPage = () => {
        window.location.href = '/src/components/record/index.html'; 
    };
    return (
        <Container>
            <Login>
                <InputGroup>
                    <PersonCheckFill style={styles.icon} />
                    <input type="text" className="form-control" placeholder="Username" />
                </InputGroup>
                <InputGroup>
                    <FileEarmarkLockFill style={styles.icon} />
                    <input type="password" className="form-control" placeholder="Password" />
                </InputGroup>
                <br />
                <FormContainer>
                    <button type="button" className="btn btn-primary btn-block">
                        Login
                    </button>
                </FormContainer>
                <FormContainer>
                <button type="button" onClick={redirectToRecordPage}>
                        Registrar
                    </button>
                </FormContainer>
            </Login>
        </Container>
    );
}
