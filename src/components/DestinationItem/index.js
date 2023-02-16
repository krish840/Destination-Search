import {Component} from 'react'

const DestinationItem = ({countryDetails}) => {
  const {id, name, imgUrl} = countryDetails

  return (
    <li key={id}>
      <img src={imgUrl} alt={name} />
      <p>{name}</p>
    </li>
  )
}

export default DestinationItem
