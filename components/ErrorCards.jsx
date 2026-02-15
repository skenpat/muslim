export default function ErrorCard({ message, color = 'bg-cartoon-orange-500' }) {
  return (
    <div className={`p-4 ${color} rounded-2xl text-white my-3 font-bold shadow-cartoon border-4 border-cartoon-orange-600 animate-bounce-pop`}>{message}</div>
  )
}
