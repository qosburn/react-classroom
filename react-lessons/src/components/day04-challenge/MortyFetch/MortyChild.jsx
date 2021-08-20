import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardColumns, // this could be removed -- note it is added at the parent level
  CardSubtitle,
  CardBody,
} from 'reactstrap';
const MortyChild = (props) => {
  const { gender, name, image, species } = props.character;
  return (
    <Card>
      <CardImg top width="100%" src={image} alt="Card image cap" />
      <CardBody>
        <CardTitle tag="h5">{name}</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">
          {gender}
        </CardSubtitle>
        <CardText>The species of this character is {species}</CardText>
        <Button>Button</Button>
      </CardBody>
    </Card>
  );
};

export default MortyChild;
