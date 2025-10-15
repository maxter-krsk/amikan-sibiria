import { DialogClose } from "@/components/ui/dialog";
import { motion } from "framer-motion";
export default function PopupClose() {
  return (
    <DialogClose asChild>
      <motion.button
        className="ml-auto pointer-events-auto flex-shrink-0 cursor-pointer bg-sand rounded-full w-[2.5rem] h-[2.5rem] flex items-center justify-center shadow-lg"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 50 }}
        whileHover={{
          scale: 1.1,
          rotate: 90,
        }}
      >
        <img src="/icons/ui/close-icon.svg" alt="Закрыть" />
      </motion.button>
    </DialogClose>
  );
}
