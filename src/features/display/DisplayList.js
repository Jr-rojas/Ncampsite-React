import { Col, Row} from 'reactstrap';
//import DisplayCard from './DisplayCard';
import AnimatedDisplayCard from './AnimatedDisplayCard';
import { selectFeaturedCampsite } from '../campsites/campsitesSlice';
import { selectFeaturedPromotion } from '../promotions/promotionsSlice';
import { selectFeaturedPartners } from '../partners/partnersSlice';

const DisplayList = () => {
    const items = [selectFeaturedCampsite(), selectFeaturedPromotion(), selectFeaturedPartners()];

        return (
            <Row>
                {items.map((item, idx)=> {
                    return (
                        <Col md className='m-1' key={idx}>
                            <AnimatedDisplayCard item={item}/>
                        </Col>
                    );
                })}
            </Row>
        );
};

export default DisplayList;