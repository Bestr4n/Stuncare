import React, { useState } from "react";
import IL from "../assets/IL.png";

const Pengaturan = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="container mx-auto px-4">
        <br />
        <div className="bg-white shadow-md rounded-md">
          <div className="bg-gray-100 p-4">
            <h3 className="text-center text-2xl font-bold">MY PROFILE</h3>
          </div>
          <div className="p-4 flex flex-wrap justify-center">
            <div className="w-full md:w-1/4 text-center md:text-left">
              <img
                alt="IL"
                src={IL}
                className="img-thumbnail img-fluid rounded-full mx-auto md:mx-0"
              />
            </div>
            <div className="w-full md:w-3/4 mt-4 md:mt-0 ">
              <table className="table-auto w-full text-center">
                <tbody>
                  <tr>
                    <th className="w-1/4 px-4 py-2">Username</th>
                    <th className="w-1/12">:</th>
                    <td className="px-4 py-2">username</td>
                  </tr>
                  <tr>
                    <th className="w-1/4 px-4 py-2">Nama Lengkap</th>
                    <th className="w-1/12">:</th>
                    <td className="px-4 py-2">nama lengkap</td>
                  </tr>
                  <tr>
                    <th className="w-1/4 px-4 py-2">Password</th>
                    <th className="w-1/12">:</th>
                    <td className="px-4 py-2">********</td>
                  </tr>
                  <tr>
                    <th className="w-1/4 px-4 py-2">Email</th>
                    <th className="w-1/12">:</th>
                    <td className="px-4 py-2">email</td>
                  </tr>
                  <tr>
                    <td colSpan="3" className="text-center">
                      <button
                        type="button"
                        className="btn btn-sm bg-purple-600 text-white rounded px-4 py-2"
                        onClick={openModal}
                        title="Edit Data"
                      >
                        <i className="fa fa-edit"></i> Edit
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="text-center">
                  <h4 className="modal-title text-2xl font-bold mb-7">
                    Edit Data Admin
                  </h4>
                </div>
                <form
                  action="edit/edituser.php"
                  method="post"
                  encType="multipart/form-data"
                >
                  <input type="text" name="id" value="userData.id" hidden />
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Username
                    </label>
                    <input
                      type="text"
                      required
                      name="usera"
                      value="userData.Username"
                      className="form-control w-full"
                      style={{ border: "1px solid black" }}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      name="email"
                      value="userData.Email"
                      className="form-control w-full"
                      style={{ border: "1px solid black" }}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Password
                    </label>
                    <input
                      type="password"
                      name="pass"
                      required
                      placeholder="*********"
                      className="form-control w-full"
                      style={{ border: "1px solid black" }}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      required
                      name="name"
                      value="userData.Nama"
                      className="form-control w-full"
                      style={{ border: "1px solid black" }}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Foto Profil
                    </label>
                    <input
                      type="file"
                      name="foto"
                      id="foto"
                      className="form-control w-full"
                      style={{ border: "1px solid black" }}
                    />
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      name="update"
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>

              <div className="bg-gray-100 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="bg-gray-300 hover:bg-red-500 hover:text-white text-gray-800 font-bold py-2 px-4 rounded"
                  >
                    Close
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Pengaturan;
