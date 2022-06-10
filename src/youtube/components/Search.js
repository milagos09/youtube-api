import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

export default function Search(props) {
    return (
        <section className="p-3 shadow-lg bg-dark text-center mb-4">
            <form onSubmit={(e) => e.preventDefault()}>
                <InputGroup className="w-75 mx-auto" size="lg">
                    <InputGroup.Text className="bg-danger text-light fw-bold fs-5 p-2">
                        Youtube API <i className="bi bi-youtube px-3"></i>
                    </InputGroup.Text>
                    <FormControl
                        placeholder="Search video on Youtube"
                        className="text-center border-dark"
                        value={props.search}
                        onChange={(e) => props.setSearch(e.target.value)}
                        onClick={(e) => e.target.select()}
                    />
                    <Button type="submit" variant="danger" onClick={props.fetchVideos}>
                        {props.loading ? <Spinner animation="grow" /> : <i className="bi bi-search px-3"></i>}
                    </Button>
                </InputGroup>
            </form>
        </section>
    );
}
