import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import EventItem from "@/components/EventItem";
import Link from "next/link";

export default function HomePage({ events }) {
  console.log(events);
  return (
    <Layout>
      <h1>Upcoming Events</h1>
      {events.length === 0 && <h3> No events to show </h3>}

      {events.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}
      {events.length > 0 && (
        <Link href="/events">
          <a className="btn-secondary">View All</a>
        </Link>
      )}
    </Layout>
  );
}

// getServerSideProps()
// va rula de cate ori se incarca pagina
// getStaticProps()
//va rula la momentul buildului
// pentru a adauga inregistrari noi folosim
// revalidate

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/events?_sort=date:ASC&_limit=2`);
  const events = await res.json();

  return {
    props: { events },
    revalidate: 1,
  };
}
