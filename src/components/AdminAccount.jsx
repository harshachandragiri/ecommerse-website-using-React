import Dropdown from 'react-bootstrap/Dropdown';

const AdminAccount = () => {
    return (
        <div className="AdminAccount">
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="/viewAdmin">AccountInfo</Dropdown.Item>
                    <Dropdown.Item href="/updateAdmin">update Account</Dropdown.Item>
                    <Dropdown.Item href="/">Logout</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}

export default AdminAccount;