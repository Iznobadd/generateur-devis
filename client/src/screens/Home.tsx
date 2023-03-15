export default function Home() {
  return (
    <div className="flex justify-center items-center gap-9 h-screen">
      <div className="transform transition duration-500 hover:scale-110">
        <a
          className="font-bold text-3xl text-center p-28 bg-orange rounded-md w-2/7"
          href="devis"
        >
          Créer un devis
        </a>
      </div>
      <div className="transform transition duration-500 hover:scale-110">
        <a
          className="font-bold text-3xl text-center p-28 bg-orange rounded-md w-2/7"
          href="facture"
        >
          Créer une facture
        </a>
      </div>
    </div>
  );
}
