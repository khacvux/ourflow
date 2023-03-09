import { CloseIcon } from "@chakra-ui/icons";
import { Modal } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { useAuthStore } from "stores";
import OAuth from "./OAuth";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

function SignInModal() {
  const [open, setOpen] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<boolean>(false);
  const authStore = useAuthStore();

  const handleClose = useCallback(() => {
    authStore.handleOpenModal();
  }, []);

  useEffect(() => {
    setOpen(authStore.modalOpened);
  }, [authStore.modalOpened]);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      className=" flex items-center justify-center bg-transparent"
    >
      <div className="flex h-[374px] w-[572px] flex-col overflow-hidden rounded-lg bg-[#191919]">
        <div
          className="relative flex h-[60px] w-full flex-row items-center border-b
         border-[#323232] bg-inherit px-5"
        >
          <button
            className={`h-full px-4 text-center text-sm ${
              activeTab ? "text-[#767676]" : active
            } `}
            onClick={() => setActiveTab(false)}
          >
            Sign in
          </button>
          <button
            className={`h-full px-4 text-center text-sm  ${
              !activeTab ? "text-[#767676]" : active
            } `}
            onClick={() => setActiveTab(true)}
          >
            Sign up
          </button>
          <button
            className="absolute top-1 right-3 bg-inherit p-2"
            onClick={handleClose}
          >
            <CloseIcon className="bg-inherit" fontSize={10} color="#FFF" />
          </button>
        </div>
        <div className="flex h-full w-full flex-row  py-2">
          <div className="flex-1 px-[42px] py-[14px]">
            {!activeTab ? <SignInForm /> : <SignUpForm />}
          </div>
          <OAuth />
        </div>
      </div>
    </Modal>
  );
}

export default SignInModal;

function active() {
  return " text-white border-b-2 border-white";
}
