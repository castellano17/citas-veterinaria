import Swal from "sweetalert2";

const Paciente = ({ patient, setPatient, deletePatient }) => {
  const deleteAlert = () => {
    Swal.fire({
      title: "Eliminar",
      text: `¿Desea eliminar el paciente: ${patient.name}, Propietario: ${patient.owner}? `,
      icon: "warning",

      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si",
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          "Eliminado",
          "El paciente ha sido eliminado con éxito",
          "success"
        );
        deletePatient(patient.id);
      }
    });
  };

  const handleDeletePatient = () => {
    deleteAlert();

    // deletePatient(patient.id);
  };
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: {""}
        <span className="font-normal normal-case">{patient.name}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: {""}
        <span className="font-normal normal-case">{patient.owner}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: {""}
        <span className="font-normal normal-case">{patient.email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha Alta: {""}
        <span className="font-normal normal-case">{patient.date}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas: {""}
        <span className="font-normal normal-case">{patient.symptom}</span>
      </p>

      <div className="flex justify-between mt-10">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
          onClick={() => setPatient(patient)}
        >
          Editar
        </button>
        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
          onClick={handleDeletePatient}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Paciente;
