import Button from "./Button/Button";

export default function TabsSection({ active, onChange }) {
  return (
    <section style={{ marginBottom: "1rem " }}>
      <Button isActive={active === "main"} buttonCliked={() => onChange("main")}>
        Главная страница
      </Button>
      <Button
        isActive={active === "feedback"}
        buttonCliked={() => onChange("feedback")}
      >
        Обратная связь
      </Button>
    </section>
  );
}
