import { Link } from 'react-router-dom'
import { Restaurant } from '../../data/mock'
import { Card, CardHeader, CardBody, CardFooter, Tags, Rating } from './RestaurantCardStyles'
import { Tag } from '../../components/Tag'

type Props = {
  restaurant: Restaurant
}

export default function RestaurantCard({ restaurant }: Props) {
  return (
    <Card>
      <CardHeader style={{ backgroundImage: `url(${restaurant.image})` }}>
        <Tags>
          {restaurant.featured && <Tag>Destaque da semana</Tag>}
          <Tag>{restaurant.type}</Tag>
        </Tags>
      </CardHeader>

      <CardBody>
        <div>
          <h3>{restaurant.title}</h3>
          <Rating>
            <span>{restaurant.rating.toFixed(1)}</span>
            <span>★</span>
          </Rating>
        </div>
        <p>{restaurant.description}</p>
      </CardBody>

      <CardFooter>
        <Link to={`/perfil/${restaurant.id}`}>
          <button type="button">Saiba mais</button>
        </Link>
      </CardFooter>
    </Card>
  )
}
