import React, {useState, createContext, ReactNode} from 'react';

// context
export const SidebarContext = createContext<{
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  handleClose: () => void;
}>({
  isOpen: false,
  setIsOpen: () => {},
  handleClose: () => {},
});

interface Props {
  children: ReactNode;
}

const SidebarProvider = ({ children }: Props) => {
  //sidebar state
  const [isOpen, setIsOpen] = useState (false);

  const handleClose = () => {
    setIsOpen(false);
  }

  return (
    <SidebarContext.Provider value={{isOpen, setIsOpen, handleClose}} >
      {children}
    </SidebarContext.Provider>
  )
}

export default SidebarProvider;