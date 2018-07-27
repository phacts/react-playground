import React from 'react';

import './index.css';

const SeriesListItem = ({series}) => (
  <li>
    {series.show.name}
  </li>
)

const SeriesList = props =>  {


  return (
    <div>
      <ul className="series-list">
        {props.list.map(item => (
          <SeriesListItem key={item.show.id} series={item} />
        ))}
      </ul>
    </div>
  )
}

export default SeriesList;