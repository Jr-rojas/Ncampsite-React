import { Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectCampsiteById } from '../features/campsites/campsitesSlice';
import CampsiteDetail from '../features/campsites/CampsiteDetail';
import CommentsList from '../features/comments/CommentList.js';


const CampsiteDetailPage = () => {
    const {campsiteId} = useParams();
    const campsite = selectCampsiteById(campsiteId);

    return (
        <Container>
            <Row>
                <CampsiteDetail campsite={campsite}/>
                <CommentsList campsiteId={campsite}/>
            </Row>
        </Container>
    );
};

export default CampsiteDetailPage;