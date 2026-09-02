export default function Avatar({ user, size = "w-8 h-8", textSize = "text-sm" }) {
  const letter = (user?.displayName || user?.email || "?").charAt(0).toUpperCase();

  if (user?.photoURL) {
    return (
      <img
        src={user.photoURL}
        alt={user.displayName || "avatar"}
        className={`${size} rounded-full object-cover border`}
      />
    );
  }

  return (
    <div
      className={`${size} ${textSize} rounded-full bg-green-700 text-white flex items-center justify-center font-bold border`}
    >
      {letter}
    </div>
  );
}