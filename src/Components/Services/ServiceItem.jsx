export default function ServiceItem({ service }) {
    if (!service) {
      return <p>No service details available.</p>; // Handle the case where no service is passed
    }
  

    return (
      <article>
        <h1>{service.title}</h1>
        <p>{service.desc}</p>
        <ul>
          {service.titlecontent.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </article>
    );
  }
  