import { PDFViewer } from "@react-pdf/renderer";
import { FormEvent, useState } from "react";
import PDFView from "./PDFView";

export default function FormDevis() {
  const [subtotal, setSubtotal] = useState(0);
  const [showPDF, setShowPDF] = useState(false);
  const [formInfo, setFormInfo] = useState({
    name: "",
    phone: "",
    email: "",
    numero: "",
    rendu: "",
    reglement: "",
  });

  const [feature, setFeature] = useState([
    {
      description: "",
      qty: 0,
      price: 0,
    },
  ]);

  const addFeature = () => {
    let newFeature = { description: "", qty: 0, price: 0 };
    setFeature([...feature, newFeature]);
  };
  const handleChangeFeature = (i: any, e: any) => {
    let newValues = [...feature] as any;
    newValues[i][e.target.name] = e.target.value;
    for (let i = 0; i < feature.length; i++) {
      setSubtotal(subtotal + feature[i]["price"] * feature[i]["qty"]);
    }
    setFeature(newValues);
  };

  const handleEdit = () => {
    setShowPDF(false);
  };

  const handleChange = (e: any) => {
    setFormInfo({ ...formInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    setShowPDF(true);
  };
  return (
    <div className="h-full">
      {showPDF ? (
        <div className="h-full">
          <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none py-9 focus:ring-blue-300 font-medium text-sm w-full px-5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={handleEdit}
          >
            Editer le PDF
          </button>
          <PDFView
            name={formInfo.name}
            phone={formInfo.phone}
            email={formInfo.email}
            numero={formInfo.numero}
            rendu={formInfo.rendu}
            reglement={formInfo.reglement}
            feature={feature}
            subtotal={subtotal}
            taxe={(subtotal * 20) / 100}
          />
        </div>
      ) : (
        <form
          className="w-full mt-9 mx-auto flex flex-wrap gap-1 justify-center"
          onSubmit={handleSubmit}
        >
          <div className="w-2/5 p-7 border-2 flex flex-wrap">
            <h1 className="text-center font-bold text-xl w-full mb-7">
              INFOS CLIENT
            </h1>
            <div className="flex flex-wrap mb-6 w-full">
              <div className="px-3 mb-6 md:mb-0 w-full">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="name"
                >
                  Nom
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  name="name"
                  type="text"
                  value={formInfo.name}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex flex-wrap mb-6 w-full">
              <div className="w-full px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="phone"
                >
                  Téléphone
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  name="phone"
                  type="text"
                  value={formInfo.phone}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex flex-wrap mb-6 w-full">
              <div className="w-full px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  name="email"
                  type="text"
                  value={formInfo.email}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="w-2/5 p-7 border-2 flex flex-wrap">
            <h1 className="text-center font-bold text-xl w-full mb-7">
              INFOS GÉNERALES
            </h1>
            <div className="flex flex-wrap mb-6 w-full">
              <div className="px-3 mb-6 md:mb-0 w-full">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="numero"
                >
                  numero devis
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  name="numero"
                  type="text"
                  value={formInfo.numero}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex flex-wrap mb-6 w-full">
              <div className="w-full px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="rendu"
                >
                  date de rendu
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  name="rendu"
                  type="text"
                  value={formInfo.rendu}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex flex-wrap mb-6 w-full">
              <div className="w-full px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="reglement"
                >
                  methode de reglement
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  name="reglement"
                  type="text"
                  value={formInfo.reglement}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          {feature.map((input, index) => {
            return (
              <div className="w-3/5 p-7 border-2 flex flex-wrap" key={index}>
                <h1 className="text-center font-bold text-xl w-full mb-7">
                  FEATURE {index + 1}
                </h1>
                <div className="flex flex-wrap mb-6 w-full">
                  <div className="px-3 mb-6 md:mb-0 w-full">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="description"
                    >
                      Description
                    </label>
                    <textarea
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      name="description"
                      value={input.description}
                      onChange={(e) => handleChangeFeature(index, e)}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap mb-6 w-full">
                  <div className="w-full px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="qty"
                    >
                      QUANTITÉ
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      name="qty"
                      type="number"
                      value={input.qty}
                      onChange={(e) => handleChangeFeature(index, e)}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap mb-6 w-full">
                  <div className="w-full px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="prix"
                    >
                      PRIX
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      name="price"
                      type="number"
                      value={input.price}
                      onChange={(e) => handleChangeFeature(index, e)}
                    />
                  </div>
                </div>
              </div>
            );
          })}

          <a
            className="cursor-pointer text-white bg-green-700 hover:bg-green-800 focus:ring-4 w-2/5 focus:outline-none my-10 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            onClick={addFeature}
          >
            Ajouter une feature
          </a>
          <button
            type="submit"
            onClick={handleSubmit}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 w-2/5 focus:outline-none my-10 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Génerer le PDF
          </button>
        </form>
      )}
    </div>
  );
}
