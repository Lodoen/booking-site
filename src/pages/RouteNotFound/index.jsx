import Alert from "../../components/Alert";

export default function RouteNotFound() {
  return (
    <section>
      <h1>Page not found</h1>
      <Alert status="error">
        <span>
          Looks like there is an issue with the page you are trying to reach.
        </span>
      </Alert>
    </section>
  );
}
