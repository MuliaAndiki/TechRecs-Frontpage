'use client';

import { AnimatePresence,motion } from 'framer-motion';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/src/components/ui/dialog';
import { ModalProps } from '@/src/types/ui';

const iconMap = {
  success: {
    emoji: '✅',
    color: 'text-green-500',
    bgColor: 'bg-green-50 dark:bg-green-900/20',
    borderColor: 'border-green-200 dark:border-green-700',
  },
  error: {
    emoji: '❌',
    color: 'text-red-500',
    bgColor: 'bg-red-50 dark:bg-red-900/20',
    borderColor: 'border-red-200 dark:border-red-700',
  },
  warning: {
    emoji: '⚠️',
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
    borderColor: 'border-yellow-200 dark:border-yellow-700',
  },
  info: {
    emoji: 'ℹ️',
    color: 'text-blue-500',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    borderColor: 'border-blue-200 dark:border-blue-700',
  },
  question: {
    emoji: '❓',
    color: 'text-purple-500',
    bgColor: 'bg-purple-50 dark:bg-purple-900/20',
    borderColor: 'border-purple-200 dark:border-purple-700',
  },
};

interface AlertModalInternalProps extends ModalProps {
  open: boolean;
  setOpen: (v: boolean) => void;
  cancelText?: string;
  onCancel?: () => void;
  showCloseButton?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export function AlertModal({
  open,
  setOpen,
  title,
  deskripsi,
  icon = 'info',
  confirmButtonText = 'OK',
  confirmButtonColor = 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800',
  cancelText,
  onConfirm,
  onCancel,
  showCloseButton = true,
  size = 'sm',
}: AlertModalInternalProps) {
  const iconConfig = iconMap[icon];
  const sizeClasses = {
    sm: 'sm:max-w-sm',
    md: 'sm:max-w-md',
    lg: 'sm:max-w-lg',
  };

  return (
    <AnimatePresence>
      {open && (
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent
            className={`
              ${sizeClasses[size]} text-center backdrop-blur-sm
              bg-white/95 dark:bg-gray-900/95 
              border-0 shadow-2xl rounded-2xl
              ${showCloseButton ? '' : '[&>button]:hidden'}
            `}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 20,
                duration: 0.3,
              }}
            >
              <DialogHeader className="space-y-4">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{
                    delay: 0.1,
                    type: 'spring',
                    stiffness: 200,
                    damping: 15,
                  }}
                  className={`
                    mx-auto w-16 h-16 rounded-full flex items-center justify-center
                    ${iconConfig.bgColor} ${iconConfig.borderColor} border-2
                    shadow-lg
                  `}
                >
                  <span className="text-3xl">{iconConfig.emoji}</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <DialogTitle className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                    {title}
                  </DialogTitle>
                </motion.div>

                {deskripsi && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <DialogDescription className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {deskripsi}
                    </DialogDescription>
                  </motion.div>
                )}
              </DialogHeader>

              <motion.div
                className="flex justify-center gap-3 pt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {cancelText && (
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      onCancel?.();
                      setOpen(false);
                    }}
                    className="
                      px-6 py-2.5 text-sm font-medium rounded-xl
                      border border-gray-200 dark:border-gray-700
                      bg-white dark:bg-gray-800
                      text-gray-700 dark:text-gray-300
                      hover:bg-gray-50 dark:hover:bg-gray-750
                      transition-all duration-200
                      focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600
                      shadow-sm hover:shadow-md
                    "
                  >
                    {cancelText}
                  </motion.button>
                )}

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    onConfirm?.();
                    setOpen(false);
                  }}
                  className={`
                    ${confirmButtonColor} text-white px-6 py-2.5 rounded-xl text-sm font-medium
                    transition-all duration-200 transform
                    focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600
                    shadow-lg hover:shadow-xl
                    active:scale-95
                  `}
                >
                  {confirmButtonText}
                </motion.button>
              </motion.div>
            </motion.div>
          </DialogContent>
        </Dialog>
      )}
    </AnimatePresence>
  );
}
