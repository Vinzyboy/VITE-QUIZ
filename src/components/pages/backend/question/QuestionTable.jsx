import React from "react";
import TableLoader from "../../../../../../vite-jollibee/src/components/pages/backend/partials/TableLoader";
import Pills from "../../../../../../vite-jollibee/src/components/pages/backend/partials/Pills";
import {
  Archive,
  ArchiveRestore,
  FilePenLine,
  FileVideo,
  Trash2,
} from "lucide-react";
import LoadMore from "../../../../../../vite-jollibee/src/components/pages/backend/partials/LoadMore";
import SpinnerTable from "../../../../../../vite-jollibee/src/components/pages/backend/partials/spinners/SpinnerTable";
import IconNoData from "../../../../../../vite-jollibee/src/components/pages/backend/partials/IconNoData";
import IconServerError from "../../../../../../vite-jollibee/src/components/pages/backend/partials/IconServerError";
import { StoreContext } from "@/components/store/storeContext";
import {
  setIsAdd,
  setIsConfirm,
  setIsDelete,
  setIsEdit,
} from "@/components/store/storeAction";
import ModalDelete from "../../../../../../vite-jollibee/src/components/pages/backend/partials/modals/ModalDelete";
import ModalConfirm from "../../../../../../vite-jollibee/src/components/pages/backend/partials/modals/ModalConfirm";

const QuestionTable = () => {
  const { store, dispatch } = React.useContext(StoreContext);

  let counter = 1;

  const handleAdd = () => {
    dispatch(setIsAdd(true));
  };
  const handleDelete = () => {
    dispatch(setIsDelete(true));
  };
  const handleRestore = () => {
    dispatch(setIsConfirm(true));
  };
  const handleArchive = () => {
    dispatch(setIsConfirm(true));
  };
  return (
    <>
      <div className="p-4 bg-secondary rounded-md mt-10 border border-line relative">
        {/* <SpinnerTable /> */}
        <div className="table-wrapper custom-scroll">
          {/* <TableLoader count={40} cols={10} /> */}
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Status</th>
                <th>Question</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {/* <tr>
                        <td colSpan={100}>
                          <IconNoData />
                        </td>
                      </tr> 
               <tr>
                        <td colSpan={100}>
                          <IconServerError />
                        </td>
                      </tr>  */}
              {Array.from(Array(6).keys()).map((i) => (
                <tr key={i}>
                  <td>{counter++}.</td>
                  <td>
                    <Pills />
                  </td>
                  <td>asdf 1</td>

                  <td>
                    <ul className="table-action">
                      {true ? (
                        <>
                          <li>
                            <button className="tooltip" data-tooltip="View">
                              <FileVideo onClick={() => handleView(item)} />
                            </button>
                          </li>
                          <li>
                            <button className="tooltip" data-tooltip="Edit">
                              <FilePenLine onClick={() => handleAdd()} />
                            </button>
                          </li>
                          <li>
                            <button className="tooltip" data-tooltip="Archive">
                              <Archive onClick={() => handleArchive()} />
                            </button>
                          </li>
                        </>
                      ) : (
                        <>
                          <li>
                            <button className="tooltip" data-tooltip="Restore">
                              <ArchiveRestore onClick={() => handleRestore()} />
                            </button>
                          </li>
                          <li>
                            <button
                              className="tooltip"
                              data-tooltip="Delete"
                              onClick={handleDelete}
                            >
                              <Trash2 />
                            </button>
                          </li>
                        </>
                      )}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {store.isDelete && <ModalDelete />}
      {store.isConfirm && <ModalConfirm />}
    </>
  );
};

export default QuestionTable;
