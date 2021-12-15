import React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/EventItem.module.css'

const EventItem = ({evt}) => {
  return (
    <div className={styles.event}>
      <div className={styles.img}>
        <Image 
          src={evt.image ? evt.image : '/images/event-default.png'} 
          width={170}
          height={100}
          alt={evt.name}
        />
      </div>

      <div className={styles.info}>
          <span>{evt.time}</span>
          <h3>{evt.name}</h3>
      </div>

      <div>
        <Link href={`/events/${evt.slug}`}>
          <a className='btn'>Details</a>
        </Link>
      </div>

    </div>
  )
}

export default EventItem
