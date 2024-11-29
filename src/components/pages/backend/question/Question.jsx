import React from "react";
import { Plus } from "lucide-react";
import QuestionTableTable from "./QuestionTable";
import { StoreContext } from "@/components/store/storeContext";
import { setIsAdd } from "@/components/store/storeAction";
import SideNavigation from "../partials/SideNavigation";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import Searchbar from "../partials/Searchbar";
import ModalValidation from "../partials/modals/ModalValidation";
import ModalError from "../partials/modals/ModalError";
import ToastSuccess from "../partials/ToastSuccess";
import ModalAddQuestion from "./ModalAddQuestion";

const Question = () => {
  const { dispatch, store } = React.useContext(StoreContext);

  const handleAdd = () => {
    dispatch(setIsAdd(true));
  };
  return (
    <>
      <section className="layout-main ">
        <div className="layout-division ">
          <SideNavigation menu="question" />
          <main>
            <Header title="Question" subtitle="Manage Question" />
            <div className="p-8">
              <div className="flex justify-between items-center">
                <Searchbar />

                <button className="btn btn-add" onClick={handleAdd}>
                  <Plus size={16} /> Add New
                </button>
              </div>

              <QuestionTableTable />
            </div>

            <Footer />
          </main>
        </div>
      </section>
      {store.validate && <ModalValidation />}
      {store.error && <ModalError />}
      {store.success && <ToastSuccess />}
      {store.isAdd && <ModalAddQuestion />}
    </>
  );
};

export default Question;
