import classes from "./StartingPageContent.module.css";

const StartingPageContent = () => {
  return (
    <section className={classes.starting}>
      <h1>Welcome on Board!</h1>
      <p>Pour vous connecter :</p>
      <p>
        Créer un compte où utiliser l'adresse : test@test.com et le mode de
        passe 123456.
      </p>
    </section>
  );
};

export default StartingPageContent;
