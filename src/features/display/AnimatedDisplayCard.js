import { Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';
import {useState, useEffect} from 'react';
import {useSpring, animated} from 'react-spring';


const AnimatedDisplayCard = ({item}) => {
    const {image, name, description } = item;
    const [toggle, setToggle] = useState(false);

    const animatedStyle = useSpring({
        opacity: toggle? 1:0,                 //if toggle is true opacity will be 1(100%)
        transform: toggle? 'scale(1,1)' : 'scale(1,0)', //if toggle is true scale (1,1) 100% width&Hieght
        config: { duration: 500 }              // duration 500(1/2 second)
    });

    useEffect(() => {
        setToggle(true);
    }, []); //empty array will let the useEffect run only once & not re-render
    

    return(
        <animated.div style={animatedStyle}>
            <Card>
                <CardImg src={image} alt={name}/>
                <CardBody>
                    <CardTitle>{name}</CardTitle>
                    <CardText>{description}</CardText>
                </CardBody>
            </Card>
        </animated.div>
    );
};

export default AnimatedDisplayCard;