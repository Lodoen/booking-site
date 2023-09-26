import Feedback from "../../components/Feedback";

export default function RouteNotFound() {
  return (
    <section>
      <h1>Page not found</h1>
      <Feedback
        message={
          "Looks like there is an issue with the page you are trying to reach."
        }
        status="error"
      />
    </section>
  );
}
