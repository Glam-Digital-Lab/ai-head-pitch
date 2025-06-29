export function Button({ children, onClick, disabled, variant = 'default' }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded-xl text-white ${variant === 'secondary' ? 'bg-gray-600 hover:bg-gray-700' : 'bg-blue-600 hover:bg-blue-700'} disabled:opacity-50`}
    >
      {children}
    </button>
  );
}
