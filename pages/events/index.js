import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import EventItem from "@/components/EventItem";

export default function EventsPage({ events }) {
  console.log(events);
  return (
    <Layout>
      <h1>Events</h1>
      {events.length === 0 && <h3> No events to show </h3>}

      {events.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}
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
  const res = await fetch(`${API_URL}/events?_sort=date:ASC`);
  const events = await res.json();

  return {
    props: { events },
    revalidate: 1,
  };
}
