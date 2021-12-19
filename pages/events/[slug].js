// import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { FaPencilAlt, FaTimes } from "react-icons/fa";
import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import styles from "@/styles/Event.module.css";

export default function EventPage({ evt }) {
  //const router = useRouter();
  const deleteEvents = (e) => {
    console.log("delete");
  };

  return (
    <Layout>
      <div className={styles.event}>
        <div className={styles.controls}>
          <Link href={`/events/edit/${evt.id}`}>
            <a>
              <FaPencilAlt />
              <span> Edit Event</span>
            </a>
          </Link>
          <a href="#" className={styles.delete} onClick={deleteEvents}>
            <FaTimes />
            <span> Delete Events</span>
          </a>
        </div>
      </div>

      <span>
        {new Date(evt.date).toLocaleDateString("ro-RO")} at {evt.time}
      </span>

      <h1>{evt.name}</h1>

      {evt.image && (
        <div className={styles.image}>
          <Image
            src={evt.image.formats.medium.url}
            width={960}
            height={600}
            alt={evt.name}
          />
        </div>
      )}

      <h3>Performers</h3>
      <p>{evt.performers}</p>
      <h3>Description</h3>
      <p>{evt.description}</p>

      <h3>Venue: {evt.venue}</h3>
      <p>{evt.address}</p>

      <Link href="/events">
        <a className={styles.back}>{"<"} Go Back</a>
      </Link>

      {/* <h3>{router.query.slug}</h3> */}
      {/* <button onClick={() => router.push("/")}>Home</button> */}
    </Layout>
  );
}

// atentie!!! query este default !!!!

//ok, avem doua variante
// export async function getServerSideProps({ query: { slug } }) {
//   console.log("slug::", slug);
//   const res = await fetch(`${API_URL}/api/events/${slug}`);

//   const events = await res.json();

//   return {
//     props: { evt: events[0] },
//   };
// }

// sau asa pentru static

export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/events`);
  const events = await res.json();

  const paths = events.map((evt) => ({
    params: { slug: evt.slug },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params: { slug } }) {
  console.log("slug::", slug);
  const res = await fetch(`${API_URL}/events/?slug=${slug}`);

  const events = await res.json();

  return {
    props: { evt: events[0] },
    revalidate: 1,
  };
}
